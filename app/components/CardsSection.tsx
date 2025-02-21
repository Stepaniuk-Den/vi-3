import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";
import Line from "./Line";
import Observer from "@/helpers/observer";
// import { isMobileDevice } from "@/helpers/detect-browser";

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
  imgH?: string;
  // context?: { req: { headers: { "user-agent": string } } }; // for server-side rendering (SSR) in Next.js
};

// export async function getServerSideProps(context: {
//   req: { headers: { "user-agent": string } };
// }) {
//   const userAgent = context.req.headers["user-agent"];
//   const isMobile = isMobileDev(userAgent);
//   console.log("🚀 ~ isMobile:", isMobile);

//   return {
//     props: {
//       isMobile,
//     },
//   };
// }

const CardsSection: React.FC<Props> = ({
  t,
  tBtn,
  source,
  wrapper,
  path,
  background,
  imgH,
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
            <Observer animation="slide-up">
              <h2 className="titleCl mb-4">{sectionTitle}</h2>
            </Observer>
            <Observer animation="zoom-in-line" duration="0.8s">
              <Line className="marsala-center" color="marsala" />
            </Observer>
            <Observer animation="zoom-in">
              <p className="mb-8">{sectionDesc}</p>
            </Observer>
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
                // layout={isMobileDevice ? "vertical" : "horizontal"}
                reverse={idx % 2 !== 0}
                background={idx % 2 === 0 ? `${background}` : ""}
                slug={profileItem.slug}
                path={path}
                alignment="end"
                imgH={imgH}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardsSection;
