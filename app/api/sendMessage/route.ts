import { NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";

type RequestBody = {
  date: string;
  time: string;
  phone: string;
};

const rateLimiter = new RateLimiterMemory({
  points: 2, // тут пишеться кількість запитів
  duration: 3600, // тут пишеться на який переід часу діє обмеження(зараз це година)
});

function getClientIP(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  // Якщо ми отримуємо X-Forwarded-For, це буде список IP, з яких здійснено запит
  if (forwardedFor) {
    return forwardedFor.split(",")[0]; // Вибираємо перший IP з списку
  }
  // Якщо X-Forwarded-For немає, можна взяти IP безпосередньо з request
  const ip = req.headers.get("host"); // Може бути ваш IP або використовується проксі
  return ip || "127.0.0.1"; // Якщо не вдалося знайти IP, повертаємо локальний адрес
}

export async function POST(req: Request) {
  const { date, time, phone }: RequestBody = await req.json();
  const ip = getClientIP(req);

  try {
    await rateLimiter.consume(ip);
    const message = `Нова заявка на дзвінок!\nДата: ${date}\nЧас: ${time}\nТелефон: ${phone}`;

    const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      if (response.ok) {
        return NextResponse.json({ message: "Повідомлення відправлено" });
      } else {
        return NextResponse.json(
          { error: "Помилка при відправці повідомлення" },
          { status: 500 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Помилка при відправці повідомлення" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Занадто багато запитів. Спробуйте пізніше." },
      { status: 429 }
    );
  }
}
