import { IoIosSquareOutline } from "react-icons/io";
import type { FeatureItemType } from "../../../types";
import { FaSquareCheck } from "react-icons/fa6";
import clsx from "clsx";

interface FeatureItemProps {
  item: FeatureItemType;
  isChecked: boolean;
  onClick: () => void;
}

const FeatureItem = ({ item, isChecked, onClick }: FeatureItemProps) => {
  const { label } = item || {};

  return (
    <li>
      <button
        onClick={onClick}
        className={clsx(
          "w-full p-3 rounded-lg border border-gray-300",
          "hover:border-primary hover:bg-primary/10",
          "duration-300",
          "flex justify-between items-center gap-1 group cursor-pointer"
        )}
      >
        <span className="flex">
          <span className="flex-none size-6 -mt-0.5 grid place-items-center">
            {isChecked ? (
              <FaSquareCheck size={18} className="text-primary" />
            ) : (
              <IoIosSquareOutline size={24} className="opacity-90" />
            )}
          </span>
          <span className="ms-1 text-left text-sm">{label}</span>
        </span>

        <span className="hidden lg:block flex-none w-13 text-xs text-right font-medium opacity-0 group-hover:opacity-50 duration-300">
          {isChecked ? "Uncheck" : "Check"}
        </span>
      </button>
    </li>
  );
};

export default FeatureItem;
