import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classNameBackdrop?: string;
  closeModal: () => void;
};

const ModalNotificationForm: React.FC<Props> = ({
  children,
  classNameBackdrop,
  closeModal,
}) => {
  return (
    <div className={classNameBackdrop}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[380px] p-6 flex justify-center items-center flex-col gap-8 bg-white text-customMarsala-accent shadow-lg rounded-md">
        {/* pointer-events-none */}
        <p className="subTitleCl text-center">{children}</p>
        <button className="linkToPageCl" type="button" onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ModalNotificationForm;
