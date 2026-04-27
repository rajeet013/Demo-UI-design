import { Feature } from "@/constants";

interface FeaturesProps {
  item: Feature;
}

const FeaturesSix = ({ item }: FeaturesProps) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-border"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-border rounded-lg">
        <Icon className="text-indigo-500 w-6 h-6" />
      </div>
      <div className="ml-2">
        <p className="text-xl font-bold mb-2">{item.title}</p>
        <p className="text-xs">{item.txt}.</p>
      </div>
    </div>
  );
};

export default FeaturesSix;
