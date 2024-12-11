import { IParameterItem } from "@/helpers/interfaces";

type Props = {
  param: IParameterItem;
};

const NestedParameterDescList: React.FC<Props> = ({ param }) => {
  return (
    <div>
      <h4 className="titleCl mt-5 mb-2">{param.title}</h4>

      <ol className="list-disc list-inside pl-6">
        {Object.entries(param.list).map(([key, item]) => (
          <li key={key}>{item.desc}</li>
        ))}
      </ol>

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
