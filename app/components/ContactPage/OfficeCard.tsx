import { feedbackItems } from "@/data/feedbackItems";
import { Link } from "@/i18n/routing";

interface IProps {
  t: Record<string, string>
}

const OfficeCard = ({ t }: IProps) => {
  const { title, address, addressDescription, phone, email, hours, workingDays, workingDaysDescription, holidayDescription, holiday } = t
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 gap-4">
      <h3 className="titleCl mb-6">{title}</h3>
      <div className="flex">
        <p className="w-1/3 font-roboto">{address}</p>
        <p className="w-2/3">{addressDescription}</p>
      </div>
      <div className="flex">
        <p className="w-1/3 font-roboto">{phone}</p>
        <Link
          className="flex gap-4 hover:text-customMarsala-accent transition-all duration-500"
          href={feedbackItems[0].href}
          aria-label={feedbackItems[0].area_label}
        >{feedbackItems[0].title}
        </Link>
      </div>
      <div className="flex">
        <p className="w-1/3 font-roboto">{email}</p>
        <Link
          className="flex gap-4 hover:text-customMarsala-accent transition-all duration-500"
          href={feedbackItems[1].href}
          aria-label={feedbackItems[1].area_label}
        >{feedbackItems[1].title}
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <p className="w-40 font-roboto">{hours}</p>
        <div className="flex">
          <p className="w-1/3 font-roboto">{workingDays}</p>
          <span>{workingDaysDescription}</span>
        </div>
        <div className="flex">
          <p className="w-1/3 font-roboto">{holiday}</p>
          <span>{holidayDescription}</span>
        </div>
      </div>
    </div>
  )
}

export default OfficeCard