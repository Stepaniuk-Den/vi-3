import { IParameterItem } from "@/helpers/interfaces";
import TitleBanner from "./TitleBanner";

type Props = {
  param: IParameterItem;
  titleBanner?: boolean;
  description?: boolean;
};

const NestedParameterDescList: React.FC<Props> = ({
  param,
  titleBanner,
  description,
}) => {
  return (
    <div>
      {/* <h4 className="titleCl mt-5 mb-2">{param.title}</h4> */}
      {titleBanner ? (
        <TitleBanner>
          <h3 className="titleCl">{param.title}</h3>
        </TitleBanner>
      ) : (
        param.title && <h4 className="titleCl mt-5 mb-2">{param.title}</h4>
      )}
      {description && (
        <p className="w-full font-bold pl-6 mb-2">{param.description}</p>
      )}
      {/* <ol className="list-disc list-inside pl-6">
        {Object.entries(param.list).map(([key, item]) => (
          <li key={key}>{item.desc}</li>
        ))}
      </ol> */}
      <ul className="flex flex-col gap-1 rounded-md pl-6">
        {Object.entries(param.list).map(([key, item]) => (
          <li key={key} className="flex">
            <div className="flex-shrink-0 w-2 h-2 bg-customMarsala rounded-[3px] mr-4 mt-[6px]"></div>
            <span>{item.desc}</span>
          </li>
        ))}
      </ul>

      {param.notes && (
        <div className="mt-4">
          <ul className="pl-6">
            {Object.entries(param.notes).map(([key, note]) => (
              <li key={key}>{note.desc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NestedParameterDescList;
