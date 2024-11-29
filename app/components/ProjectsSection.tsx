import { IGuideProjectElement } from "@/helpers/interfaces";
import GuideProjectsElement from "./GuideProjectsElement";

type Props = {
  t: (key: string) => string;
};

const ProjectsSection: React.FC<Props> = ({ t }) => {
  return (
    <section className="sectionCl">
      <div className="xl:container ">
        <GuideProjectsElement
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          src={t("src")}
          alt={t("alt")}
          className={"flex-row-reverse bg-customElement text-white"}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
