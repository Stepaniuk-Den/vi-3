import GuideProjectsElement from "./GuideProjectsElement";

type Props = {
  t: (key: string) => string;
  tBtn: (key: string) => string;
};

const GuideSection: React.FC<Props> = ({ t, tBtn }) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <GuideProjectsElement
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          src={t("src")}
          alt={t("alt")}
          className={"bg-customMarsala-accentLight"}
          sectionId="guide"
          tBtn={tBtn("see")}
        />
      </div>
    </section>
  );
};

export default GuideSection;
