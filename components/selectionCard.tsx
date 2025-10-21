import { Question } from "@/utils/quizQuestions";

type SelectionCardProps = {
  selections: Record<number, Record<string, number>>; // updated to include quantities
  questions: Question[];
};

export default function SelectionCard({ selections, questions }: SelectionCardProps) {
  const chips = questions.flatMap((q, idx) => {
    const chosen = selections[idx] || {};
    return Object.entries(chosen)
      .filter(([opt, qty]) => opt && opt !== "None" && qty > 0)
      .map(([opt, quantity]) => ({
        opt,
        quantity,
        display: q.display ?? "text",
        field: q.field,
        hasQuantity: q.hasQuantity,
        units: q.units
      }));
  });

  if (chips.length === 0) return null;

  return (
    <div className="text-sm text-center justify-center my-2">
      <div className="inline-flex flex-wrap gap-2 justify-center">
        {chips.map(({ opt, display, field, quantity, hasQuantity, units }) => (
          <div key={opt} className="inline-flex items-center gap-1 px-3 text-sm">
            {(display === "image" || display === "both") && (
              <>
                <img
                  src={`/images/${opt.toLowerCase()}.png`}
                  alt={opt}
                  className="w-20 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                {(field === "base") && <span>Base</span>}
                {(field === "topOff") && <span>Top-Off</span>}
                {hasQuantity && <span> {quantity} {units}</span>}
              </>
            )}
            {(display === "text") && (
              <span>
                {opt} {quantity > 0 && `(${quantity})`}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
