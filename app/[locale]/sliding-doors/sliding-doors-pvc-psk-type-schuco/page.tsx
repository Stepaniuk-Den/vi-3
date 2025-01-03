import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsPskSch: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="pageCl">
        <h1>This is sliding-doors-psk-schuco page</h1>
      </section>
    </>
  );
};

export default SlidingDoorsPskSch;
