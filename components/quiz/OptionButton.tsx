import { useState } from "react";

type Props = {
  option: string;
  active: boolean;
  display: "image" | "text" | "both";
  wide?: boolean;
  onClick: () => void;
};

export default function OptionButton({
  option,
  active,
  display,
  wide,
  onClick,
}: Props) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => Math.max(0, q - 1));

  return (
    <div className={`flex flex-col items-center ${wide ? "basis-1/6" : ""}`}>
      <button
        className={`px-4 py-2 rounded-full ${
          active
            ? "bg-primaryRed text-white"
            : "bg-background text-foreground dark:bg-gray-700 dark:text-white"
        } shadow-sm transition w-full`}
        onClick={onClick}
      >
        {(display === "image" || display === "both") && (
          <img
            src={`/images/${option.toLowerCase()}.png`}
            alt={option}
            className="w-20 mx-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
        {(display === "text" || display === "both") && <span>{option}</span>}
      </button>

      {/* Quantity controls */}
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={decrease}
          className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
        >
          −
        </button>
        <span className="w-6 text-center">{quantity}</span>
        <button
          onClick={increase}
          className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
