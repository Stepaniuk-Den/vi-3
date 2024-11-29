import GuideProjectsElement from "./GuideProjectsElement";

type Props = {
  t: (key: string) => string;
};

const GuideSection: React.FC<Props> = ({ t }) => {
  return (
    <section className="sectionCl">
      <div className="xl:container ">
        <GuideProjectsElement
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          src={t("src")}
          alt={t("alt")}
          className={"bg-customMarsala-accentLight"}
          sectionId="guide"
        />
      </div>
    </section>
  );
};

export default GuideSection;
