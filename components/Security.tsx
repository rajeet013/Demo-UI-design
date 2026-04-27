import { LucideIcon } from "lucide-react";

interface SecurityProps {
  item: {
    title: string;
    icon: LucideIcon;
  };
}

const Security = ({ item }: SecurityProps) => {
  const Icon = item.icon;

  return (
    <button
      key={item.title}
      className="flex items-center w-75 h-10 sm:w-60 md:h-12 bg-background text-foreground hover:cursor-pointer rounded-2xl border"
    >
      <Icon className="w-15 h-7 m-2 sm:w-8 sm:h-8 text-indigo-500" />
      {item.title}
    </button>
  );
};

export default Security;
