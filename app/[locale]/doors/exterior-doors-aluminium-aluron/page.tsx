import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsAlumAluron: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is exterior-doors-aluminium-aluron page</h1>
      </section>
      
    </>
  );
};

export default DoorsAlumAluron;