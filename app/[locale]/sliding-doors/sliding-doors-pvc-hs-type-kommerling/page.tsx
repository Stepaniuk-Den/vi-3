import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsHsKom: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
        <h1>This is sliding-doors-hs-kommerling page</h1>
      </section>
    </>
  );
};

export default SlidingDoorsHsKom;
