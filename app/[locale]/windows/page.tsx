import ItemCard from "@/app/components/ItemCard";
import Line from "@/app/components/Line";
import { IDesc, IItemCard } from "@/helpers/interfaces";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const WindowsPage: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = await getTranslations("WindowsPage");
  const pageDescList = Object.values(t.raw("pageDesc3")) as [IDesc];
  const profilesList = Object.values(
    t.raw("windowsProfilesList")
  ) as IItemCard[];
  const tButtons = await getTranslations("Buttons");

  return (
    <section className="sectionCl pt-60">
      <div className="container">
        <h1 className="titleCl">{t("pageTitle")}</h1>
        <Line className="marsala-center" color="marsala" />
        <h2 className="subTitleCl text-center">{t("pageSubtitle")}</h2>
        <Line className="marsala-center" color="marsala" />
        <p className="mb-4">{t("pageDesc1")}</p>
        <p className="mb-4">{t("pageDesc2")}</p>
        <ul className="mb-8 list-disc">
          {pageDescList.map((desc, idx) => (
            <li key={idx}>{desc.desc}</li>
          ))}
        </ul>
        <ul className="flex flex-col justify-between gap-6">
          {profilesList.map((profileItem, idx) => (
            <ItemCard
              key={profileItem.id}
              title={profileItem.title}
              description={profileItem.description}
              src={profileItem.src}
              alt={profileItem.alt}
              //   className={profileItem.id === "1" ? "max-w-3xl" : "max-w-[400px]"}
              tBtn={tButtons("see")}
              layout="horizontal"
              reverse={idx % 2 !== 0}
              background={idx % 2 === 0 ? "blue" : ""}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WindowsPage;
