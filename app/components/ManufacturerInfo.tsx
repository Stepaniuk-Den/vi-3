import { IDesc } from "@/helpers/interfaces";
import Line from "./Line";

// interface IInfoList {
//   description: string;
// }

// interface IManufacturerInfo {
//   t: {
//     (key: string): string;
//     raw: (key: string) => Record<string, IInfoList>;
//   };
// }

interface IManufacturerInfo {
  t: {
    title: string;
    description: string;
    subdescr: string;
    // list: Record<string, IInfoList>;
    list: {
      [key: string]: IDesc;
    };
  };
}

const ManufacturerInfo: React.FC<IManufacturerInfo> = ({ t }) => {
  // const tList = t.raw("list");
  // const list: IInfoList[] = Object.values(tList);
  const list: IDesc[] = Object.values(t.list);
  // const list: IInfoList[] = t.list ? Object.values(t.list) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        <h2 className="titleCl">{t.title}</h2>
        <Line className="marsala-center" color="marsala" />
        <div className="flex flex-col gap-[14px] justify-center items-center font-open_sans">
          <p className="mb-[16px]">{t.description}</p>
          <p className="font-bold">{t.subdescr}</p>
          <ul className="flex flex-col gap-[14px] justify-center items-center">
            {list.map((el, idx) => (
              <li key={idx}>{el.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManufacturerInfo;
