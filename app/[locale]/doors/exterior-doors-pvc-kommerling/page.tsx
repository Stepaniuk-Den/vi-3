import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsPvcKommerling: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is pvc-doors-kommerling page</h1>
      </section>
      
    </>
  );
};

export default DoorsPvcKommerling;