import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 sm:p-5 mt-20 bg-customMarsala text-white">
      <div className="container flex justify-center items-center">
        <Link href={"#"}> &#169; {currentYear} Created by IT Company</Link>
      </div>
    </footer>
  );
};

export default Footer;
