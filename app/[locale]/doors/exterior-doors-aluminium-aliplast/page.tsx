import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsAlumAliplast: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is exterior-doors-aluminium-aliplast page</h1>
      </section>
      
    </>
  );
};

export default DoorsAlumAliplast;