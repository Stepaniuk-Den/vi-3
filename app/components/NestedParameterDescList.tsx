import { IParameterItem } from "@/helpers/interfaces";
import TitleBanner from "./TitleBanner";
import clsx from "clsx";
import Observer from "@/helpers/observer";

type Props = {
  param: IParameterItem;
  titleBanner?: boolean;
  description?: boolean;
  className?: string;
  isWhite?: boolean;
  pL?: string;
};

const NestedParameterDescList: React.FC<Props> = ({
  param,
  titleBanner,
  description,
  className,
  isWhite = false,
  pL = "pl-6",
}) => {
  return (
    <Observer threshold={0.5} animation='zoom-in'>
      <div className={className}>
        {titleBanner ? (
          <TitleBanner>
            <h3 className="titleCl">{param.title}</h3>
          </TitleBanner>
        ) : (
          param.title && <h4 className="titleCl mt-5 mb-2">{param.title}</h4>
        )}
        {description && (
          <p className={clsx("w-full font-bold mb-2", pL)}>{param.description}</p>
        )}
        <ul className="flex flex-col gap-1 rounded-md pl-6">
          {Object.entries(param.list).map(([key, item]) => (
            <li key={key} className="flex">
              <div
                className={clsx(
                  "flex-shrink-0 w-2 h-2 rounded-[3px] mr-4 mt-[8px]",
                  {
                    "bg-white": isWhite,
                    "bg-customMarsala": !isWhite,
                  }
                )}
              ></div>
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
    </Observer>
  );
};

export default NestedParameterDescList;
