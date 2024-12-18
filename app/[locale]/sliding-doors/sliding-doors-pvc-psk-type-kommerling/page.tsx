import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsPskKom: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="pageCl">
        <h1>This is sliding-doors-psk-kommerling page</h1>
      </section>
    </>
  );
};

export default SlidingDoorsPskKom;
