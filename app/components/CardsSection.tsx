import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";
import Line from "./Line";

type Props = {
  t: {
    (key: string): string;
    // raw: (key: string) => Record<string, IItemCard>;
    raw: (key: string) => {
      title?: string;
      description?: string;
      [key: string]: IItemCard | string | undefined;
    };
  };
  tBtn: (key: string) => string;
  source: string;
  wrapper: boolean;
  path: string;
  background: "marsala" | "blue";
};

const CardsSection: React.FC<Props> = ({
  t,
  tBtn,
  source,
  wrapper,
  path,
  background,
}) => {
  // const profilesList = Object.values(
  //   t.raw(source)
  // ) as IItemCard[];
  const data = t.raw(source);
  const profilesList = Object.values(data).filter(
    (item) => typeof item === "object" && "id" in item
  ) as IItemCard[];
  const sectionTitle = data.title;
  const sectionDesc = data.description;

  return (
    <section className="sectionCl">
      <div className="container">
        {wrapper && (
          <>
            <h2 className="titleCl mb-4">{sectionTitle}</h2>
            <Line className="marsala-center" color="marsala" />
            <p className="mb-8">{sectionDesc}</p>
          </>
        )}
        <ul className="flex flex-col justify-between gap-6">
          {profilesList.map((profileItem, idx) => (
            <li key={profileItem.id}>
              <ItemCard
                title={profileItem.title}
                description={profileItem.description}
                src={profileItem.src}
                alt={profileItem.alt}
                tBtn={tBtn("see")}
                layout="horizontal"
                reverse={idx % 2 !== 0}
                background={idx % 2 === 0 ? `${background}` : ""}
                slug={profileItem.slug}
                path={path}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardsSection;
