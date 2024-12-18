import TitleBanner from "../TitleBanner";

const OfferSection = () => {
  return (
    <section className="sectionCl pt-60">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{tSectionItem.title}</h3>
        </TitleBanner>

        <ItemCard
          title={profileItem.title}
          description={profileItem.description}
          src={profileItem.src}
          alt={profileItem.alt}
          tBtn={tBtn("see")}
          layout="horizontal"
          background={"marsala"}
          slug={profileItem.slug}
          path={path}
        />
      </div>
    </section>
  );
};

export default OfferSection;
