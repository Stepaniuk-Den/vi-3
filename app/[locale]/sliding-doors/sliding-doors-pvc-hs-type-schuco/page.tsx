import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsHsSch: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
        <h1>This is sliding-doors-hs-schuco page</h1>
      </section>
    </>
  );
};

export default SlidingDoorsHsSch;
