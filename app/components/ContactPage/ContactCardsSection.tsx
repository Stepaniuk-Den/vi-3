import React from "react";
import BankCard from "./BankCard"
import OfficeCard from "./OfficeCard"
import Observer from "@/helpers/observer";


interface ISectionContactCardProps {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, string>;
  };
}

const ContactCardsSection: React.FC<ISectionContactCardProps> = ({ t }) => {
  const tOfficeInfo = t.raw("officeInformation");
  const tBankInfo = t.raw("bankInformation");
  return (
    <section className="sectionCl">
      <div className="container flex max-md:flex-col gap-6">
        <Observer threshold={0.5} animation="flip-in-vertical-card" classNameObserver="w-full lg:w-1/2 min-h-60 shadow-lg rounded-md" duration="2s">
          <OfficeCard t={tOfficeInfo} />
        </Observer>
        <Observer threshold={0.5} animation="flip-in-vertical-card" classNameObserver="w-full lg:w-1/2 min-h-60 shadow-lg rounded-md" duration="2s">
          <BankCard t={tBankInfo} />
        </Observer>
      </div>
    </section>
  )
}

export default ContactCardsSection