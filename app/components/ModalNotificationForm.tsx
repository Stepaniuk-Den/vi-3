import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ModalNotificationForm: React.FC<Props> = ({ children }) => {
  return (
    <div className="self-center max-w-[640px] h-[380px] pointer-events-none rounded-md bg-teal-950">
      <p className="subTitleCl text-white">{children}</p>
    </div>
  );
};

export default ModalNotificationForm;
