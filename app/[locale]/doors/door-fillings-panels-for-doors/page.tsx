import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsFillingsPanels: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is door-fillings-panels-for-doors page</h1>
      </section>
      
    </>
  );
};

export default DoorsFillingsPanels;