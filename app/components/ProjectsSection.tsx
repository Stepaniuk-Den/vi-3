import GuideProjectsElement from "./GuideProjectsElement";

type Props = {
  t: (key: string) => string;
  tBtn: (key: string) => string;
};

const ProjectsSection: React.FC<Props> = ({ t, tBtn }) => {
  return (
    <section className="sectionCl">
      <div className="xl:container lg:container sm:container">
        <GuideProjectsElement
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          src={t("src")}
          alt={t("alt")}
          className={"flex-row-reverse bg-customElement text-white"}
          tBtn={tBtn("see")}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
