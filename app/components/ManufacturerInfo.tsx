import { useTranslations } from "next-intl";
import Line from "./Line";

interface IInfoList {
  description: string;
}

const ManufacturerInfo = () => {
  const t = useTranslations("ManufacturerInfo");
  const tList = t.raw("list");
  const list: IInfoList[] = Object.values(tList);

  return (
    <section className="xl:container pt-[100px]">
      <h2 className="titleCl">{t("title")}</h2>
      <Line className="marsala-center" color="marsala" />
      <div className="flex flex-col gap-[14px] justify-center items-center font-open_sans">
        <p className="mb-[16px]">{t("description")}</p>
        <p className="font-bold">{t("subdescr")}</p>
        <ul className="flex flex-col gap-[14px] justify-center items-center">
          {list.map((el, idx) => (
            <li key={idx}>{el.description}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ManufacturerInfo;
