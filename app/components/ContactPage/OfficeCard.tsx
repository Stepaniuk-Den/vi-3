import { feedbackItems } from "@/data/feedbackItems";
import { Link } from "@/i18n/routing";

interface IProps {
  t: Record<string, string>
}

const OfficeCard = ({ t }: IProps) => {
  const { title, address, addressDescription, phone, email, hours, workingDays, holiday } = t
  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <h3 className="titleCl mb-6">{title}</h3>
      <div className="flex">
        <p className="w-40">{address}</p>
        <p>{addressDescription}</p>
      </div>
      <div className="flex">
        <p className="w-40">{phone}</p>
        <Link
          className="flex gap-4"
          href={feedbackItems[0].href}
          aria-label={feedbackItems[0].area_label}
        >{feedbackItems[0].title}
        </Link>
      </div>
      <div className="flex">
        <p className="w-40">{email}</p>
        <Link
          className="flex gap-4"
          href={feedbackItems[1].href}
          aria-label={feedbackItems[1].area_label}
        >{feedbackItems[1].title}
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <p className="w-40">{hours}</p>
        <div className="flex">
          <p className="w-40">{workingDays}</p>
          <span>9:00-18:00</span>
        </div>
        <div className="flex">
          <p className="w-40">{holiday}</p>
          <span>9:00-13:00</span>
        </div>
      </div>
    </div>
  )
}

export default OfficeCard