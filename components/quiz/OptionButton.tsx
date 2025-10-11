type Props = {
  option: string;
  active: boolean;
  display: "image" | "text" | "both";
  wide?: boolean;
  onClick: () => void;
};
export default function OptionButton({ option, active, display, wide, onClick }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-full ${active ? "bg-primaryRed text-white" : "bg-background text-foreground dark:bg-gray-700 dark:text-white"} shadow-sm transition ${wide ? "basis-1/6" : ""}`}
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
  );
}
