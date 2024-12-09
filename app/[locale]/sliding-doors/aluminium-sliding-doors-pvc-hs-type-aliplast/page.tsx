import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsAlumAli: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
        <h1>This is aluminium-sliding-doors-aliplast page</h1>
      </section>
    </>
  );
};

export default SlidingDoorsAlumAli;
