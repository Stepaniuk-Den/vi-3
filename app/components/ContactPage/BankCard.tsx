
interface IProps {
  t: Record<string, string>
}

const BankCard = ({ t }: IProps) => {
  const { title, iban, card } = t
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 gap-4">
      <h3 className="titleCl mb-6">{title}</h3>
      <div className="flex">
        <p className="w-16 sm:w-1/3 font-roboto">{iban}</p>
        <p>UA000000000000000000000000000</p>
      </div>
      <div className="flex">
        <p className="w-16 sm:w-1/3 font-roboto">{card}</p>
        <p>0000 0000 0000 0000</p>
      </div>
    </div>
  )
}

export default BankCard