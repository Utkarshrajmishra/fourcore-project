type SaleCardProps = {
  bgColor: string;
  circleColor: string;
  icon: React.ReactNode;
  amount: string;
  title: string;
  desc: string;
};

const SaleCard = ({
  bgColor,
  circleColor,
  icon,
  amount,
  title,
  desc,
}: SaleCardProps) => {
  return (
    <div className={`h-fit p-3 w-full rounded-xl ${bgColor}`}>
      <div
        className={`${circleColor} h-6 w-6 flex items-center justify-center rounded-full`}
      >
        {icon}
      </div>
      <p className="mt-1 font-medium">{amount}</p>
      <p className="text-xs mt-1">{title}</p>
      <p className="text-[0.65rem] whitespace-nowrap text-blue-600 pr-2">{desc}</p>
    </div>
  );
};

export default SaleCard;
