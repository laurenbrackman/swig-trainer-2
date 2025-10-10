type SelectionCardProps = {
  selections: Record<number, string[]>;
  questions: { id: number; questionText: string; options: string[] }[];
};

export default function SelectionCard({ selections }: SelectionCardProps) {
  const chosen: string[] = Object.values(selections)
    .flat()
    .filter((v) => v && v !== "None");

  if (chosen.length === 0) return null;

  return (
    <div className="text-sm text-center my-2">
      <span className="font-semibold mr-2">Your Selections:</span>
      <div className="inline-flex flex-wrap gap-2 justify-center">
        {chosen.map((opt) => (
          <div
            key={opt}
            className="inline-flex items-center gap-1 px-3 text-sm"
          >
            <img
              src={`/images/${opt.toLowerCase()}.png`}
              alt={opt}
              className="w-6 h-6 object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span>{opt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}