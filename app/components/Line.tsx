interface ILineProps {
  className: "marsala-left" | "marsala-center";
}

const Line: React.FC<ILineProps> = ({ className }) => {
  return (
    <span
      className={`flex w-[100px] h-[4px] my-[20px] bg-customMarsala-accentLight rounded-md ${
        className === "marsala-left"
          ? "mr-auto md:ml-auto"
          : className === "marsala-center"
          ? "mx-auto"
          : ""
      }`}
    ></span>
  );
};

export default Line;
