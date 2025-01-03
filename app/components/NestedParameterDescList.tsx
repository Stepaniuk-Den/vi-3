import { IParameterItem } from "@/helpers/interfaces";
import TitleBanner from "./TitleBanner";
import clsx from "clsx";

type Props = {
  param: IParameterItem;
  titleBanner?: boolean;
  description?: boolean;
  isWhite?: boolean;
};

const NestedParameterDescList: React.FC<Props> = ({
  param,
  titleBanner,
  description,
  isWhite = false,
}) => {
  
  return (
    <div>
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
      <ul className="flex flex-col gap-1 rounded-md pl-6">
        {Object.entries(param.list).map(([key, item]) => (
          <li key={key} className="flex">
            <div className={clsx(
                "flex-shrink-0 w-2 h-2 rounded-[3px] mr-4 mt-[8px]",
                {
                  "bg-white": isWhite,
                  "bg-customMarsala": !isWhite,
                }
              )}></div>
            <p>{item.desc}</p>
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
