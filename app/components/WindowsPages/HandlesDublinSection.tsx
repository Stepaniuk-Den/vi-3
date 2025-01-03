import { INestedCard } from "@/helpers/interfaces";
import NestedCard from "../NestedCard";
import TitleBanner from "../TitleBanner";

type Props = {
  t: {
    title: string;
    description: string;
    [key: string]: string | INestedCard;
  };
};

const HandlesDublinSection: React.FC<Props> = ({ t }) => {
  const imgList = Object.values(t.imgList);

  return (
    <section className="pt-4">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>
        <p className="mb-5">{t.description}</p>

        <ul className="justify-center grid grid-cols-2 gap-6">
          {imgList.map((imgItem) => (
            <NestedCard
              key={imgItem.id}
              src={imgItem.src || ""}
              alt={imgItem.alt || ""}
              imgH="h-[460px]"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HandlesDublinSection;
