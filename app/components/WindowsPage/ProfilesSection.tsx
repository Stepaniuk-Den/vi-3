import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "../ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
};

const ProfilesSection: React.FC<Props> = ({ t, tBtn }) => {
  const profilesList = Object.values(
    t.raw("windowsProfilesList")
  ) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="container">
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
              background={idx % 2 === 0 ? "blue" : ""}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProfilesSection;
