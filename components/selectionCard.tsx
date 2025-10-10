import { Question } from "@/utils/quizQuestions";

type SelectionCardProps = {
  selections: Record<number, string[]>;
  questions: Question[];
};

export default function SelectionCard({ selections, questions }: SelectionCardProps) {
  const chips = questions.flatMap((q, idx) => {
    const chosen = (selections[idx] || []).filter((v) => v && v !== "None");
    return chosen.map((opt) => ({ opt, display: q.display ?? "text" }));
  });

  if (chips.length === 0) return null;

  return (
    <div className="text-sm text-center my-2">
      <div className="inline-flex flex-wrap gap-2 justify-center">
        {chips.map(({ opt, display }) => (
          <div key={opt} className="inline-flex items-center gap-1 px-3 text-sm">
            {(display === "image" || display === "both") && (
              <img
                src={`/images/${opt.toLowerCase()}.png`}
                alt={opt}
                className="w-20 object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
            {(display === "text") && <span>{opt}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}