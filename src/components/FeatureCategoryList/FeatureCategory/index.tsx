import type { FeatureCategoryType } from "../../../types";
import FeatureItem from "./FeatureItem";

interface FeatureCategoryProps {
  category: FeatureCategoryType;
  checkedItemsIds: string[];
  setCheckedItemsIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const FeatureCategory = ({
  category,
  checkedItemsIds,
  setCheckedItemsIds,
}: FeatureCategoryProps) => {
  const { title, items } = category || {};

  const checkedCount = items.filter((i) =>
    checkedItemsIds.includes(i.id)
  ).length;

  return (
    <div className="px-4 py-5 rounded-2xl shadow-xl bg-white">
      <div className="mb-4 pe-1 flex items-center justify-between gap-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-xs text-dark-secondary text-nowrap">
          {checkedCount} of {items.length} checked
        </p>
      </div>

      <ul className="space-y-3 text-dark-secondary">
        {items.map((item) => {
          const isChecked = checkedItemsIds.includes(item.id);
          return (
            <FeatureItem
              key={item.id}
              item={item}
              isChecked={isChecked}
              onClick={() => {
                setCheckedItemsIds((prev) =>
                  isChecked
                    ? prev.filter((id) => id !== item.id)
                    : [...prev, item.id]
                );
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FeatureCategory;
