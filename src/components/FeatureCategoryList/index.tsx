import { useEffect, useState } from "react";
import { phoneFeatures } from "../../data/phoneFeatures";
import FeatureCategory from "./FeatureCategory";
import type { Id } from "../../types";

const FeatureCategoryList = () => {
  const [checkedItemsIds, setCheckedItemsIds] = useState<Id[]>(() => {
    return JSON.parse(localStorage.getItem("phone-features") || "[]");
  });

  const total = phoneFeatures.reduce((s, { items }) => s + items.length, 0);

  useEffect(() => {
    localStorage.setItem("phone-features", JSON.stringify(checkedItemsIds));
  }, [checkedItemsIds]);

  return (
    <div className="my-6 ui-container space-y-4">
      <div className="px-4 py-5 rounded-2xl shadow-xl bg-white">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Your Progress</h3>
            <p className="ps-1 text-sm text-dark-secondary text-nowrap">
              {checkedItemsIds.length} of {total} checked
            </p>
          </div>

          <button
            className="font-medium text-red-600"
            onClick={() => {
              if (!confirm("Are you sure you want to reset all checkboxes?"))
                return;
              setCheckedItemsIds([]);
            }}
          >
            Reset All
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{
              width: `${(checkedItemsIds.length / total) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Feature List */}
      {phoneFeatures.map((category) => (
        <FeatureCategory
          key={category.id}
          checkedItemsIds={checkedItemsIds}
          setCheckedItemsIds={setCheckedItemsIds}
          category={category}
        />
      ))}
    </div>
  );
};

export default FeatureCategoryList;
