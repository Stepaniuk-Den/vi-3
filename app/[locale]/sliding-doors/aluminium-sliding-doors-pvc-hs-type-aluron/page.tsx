import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsAlumAluron: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="pageCl">
        <h1>This is aluminium-sliding-doors-aluron page</h1>
      </section>
    </>
  );
};

export default SlidingDoorsAlumAluron;
