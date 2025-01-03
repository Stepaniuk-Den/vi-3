import {
  IDesc,
  INestedCard,
  IProfilesCrossSections,
} from "@/helpers/interfaces";
import NestedCard from "../NestedCard";
import clsx from "clsx";

type Props = {
  t: IProfilesCrossSections;
};

const ProfilesCrossSections: React.FC<Props> = ({ t }) => {
  //   console.log("🚀 ~ t:", t);
  const nestedCardsList = Object.values(t.imgList) as INestedCard[];
  //   console.log("🚀 ~ nestedCardsList:", nestedCardsList);
  const descriptionProfiles = Object.values(
    t.descriptionProfilesCrosSections
  ) as IDesc[];

  return (
    <section className="sectionCl">
      <div className="container">
        <h3 className="sr-only">{t.title}</h3>
        <ul className="flex justify-center gap-1">
          {nestedCardsList.map((nestedCard, idx) => (
            <NestedCard
              key={nestedCard.id}
              title={nestedCard.title}
              description={nestedCard.description}
              src={nestedCard.src || ""}
              alt={nestedCard.alt || ""}
              size={"w-1/4"}
              className={clsx(idx === 0 && "mr-auto")}
              // titleBannerCard={titleBannerCard}
              // layout="horizontal"
              // background={idx % 2 === 0 ? `${background}` : ""}
            />
          ))}
        </ul>

        <ul className="flex justify-between gap-6">
          {descriptionProfiles.map((item) => (
            <div key={item.title} className="w-1/2">
              <h3 className="subTitleCl my-6">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProfilesCrossSections;
