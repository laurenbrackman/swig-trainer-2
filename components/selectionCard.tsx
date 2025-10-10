import { Question } from "@/utils/quizQuestions";

type SelectionCardProps = {
  selections: Record<number, string[]>;
  questions: Question[];
};

export default function SelectionCard({ selections, questions }: SelectionCardProps) {
  const chips = questions.flatMap((q, idx) => {
    const chosen = (selections[idx] || []).filter((v) => v && v !== "None");
    return chosen.map((opt) => ({
      opt,
      display: q.display ?? "text",
      field: q.field,
    }));
  });

  if (chips.length === 0) return null;

  return (
    <div className="text-sm text-center justify-center my-2">
      <div className="inline-flex flex-wrap gap-2 justify-center">
        {chips.map(({ opt, display, field }) => (
          <div key={opt} className="inline items-center my-auto gap-1 px-3 text-sm">
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
              </>
            )}
            {(display === "text") && <span>{opt}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}