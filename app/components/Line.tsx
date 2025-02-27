interface ILineProps {
  className: "marsala-left" | "marsala-center";
  color: "marsala" | "blue";
}

const Line: React.FC<ILineProps> = ({ className, color }) => {
  const colorVariants = {
    marsala: "bg-customMarsala-accentLight",
    blue: "bg-customElement",
  };

  return (
    <span
      className={`flex w-[100px] h-[4px] my-[20px] rounded-md ${
        className === "marsala-left"
          ? "max-md:mx-auto"
          :
          className === "marsala-center"
          ? "mx-auto"
          : ""
      } ${colorVariants[color]} `}
    ></span>
  );
};

export default Line;
