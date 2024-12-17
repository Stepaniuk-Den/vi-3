import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "../ItemCard";
import Line from "../Line";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
};

const WindowsillsSection: React.FC<Props> = ({ t, tBtn }) => {
  const profilesList = Object.values(t.raw("windowsillsList")) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="container">
        <h2 className="titleCl mb-4">{t("windowsillsTitle")}</h2>
        <Line className="marsala-center" color="marsala" />
        <p className="mb-8">{t("windowsillsDesc")}</p>
        <ul className="flex flex-col justify-between gap-6">
          {profilesList.map((profileItem, idx) => (
            <ItemCard
              key={profileItem.id}
              title={profileItem.title}
              description={profileItem.description}
              src={profileItem.src}
              alt={profileItem.alt}
              tBtn={tBtn("see")}
              layout="horizontal"
              reverse={idx % 2 !== 0}
              background={idx % 2 === 0 ? "blue" : "marsala"}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WindowsillsSection;
