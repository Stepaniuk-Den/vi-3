import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsAccessories: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is accessories-and-additions-for-doors page</h1>
      </section>
      
    </>
  );
};

export default DoorsAccessories;