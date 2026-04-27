import { features } from "@/constants";
import FeaturesSix from "./FeaturesSix";

export default function Six_features_md() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl mt-5 lg:mt-0">
      {features.map((item) => (
        <FeaturesSix key={item.title} item={item} />
      ))}
    </div>
  );
}
