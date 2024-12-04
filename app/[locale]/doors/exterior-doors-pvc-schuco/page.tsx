import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsPvcSchuco: React.FC<Props> = async ({ params: { locale } }) => {
  setRequestLocale(locale);

  return (
    <>
      <section className="sectionCl pt-60">
       <h1>This is pvc-doors-kommerling-schuco page</h1>
      </section>
      
    </>
  );
};

export default DoorsPvcSchuco;

