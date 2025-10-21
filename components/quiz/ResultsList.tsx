import { Question } from "@/utils/quizQuestions";
import { Drink } from "@/utils/drinks";

type ResultsListProps = {
  questions: Question[];
  answers: Record<number, Record<string, number>>;
  drink: Drink;
};

export default function ResultsList({ questions, answers, drink }: ResultsListProps) {

  return (
    <div className="text-center mt-4">
      <h2 className="text-lg font-semibold mb-4">Recipe Summary</h2>

      {questions.map((q, idx) => {
        const selected = answers[idx] || {};
        const items = Object.entries(selected).filter(([opt, qty]) => qty > 0 && opt !== "None");
        if (items.length === 0) return null;

        const totalQty = items.reduce((sum, [, qty]) => sum + qty, 0);
        let expectedQty = 0;
        if (q.field === "syrups") {
          expectedQty = drink.ratios?.syrupRatio || 0;
        }
        else if (q.field === "cream") {
          expectedQty = drink.ratios?.creamRatio || 0;
        }
        else if (q.field === "purees") {
          expectedQty = drink.ratios?.pureeRatio || 0;
        }
        const ratioCorrect = totalQty === expectedQty;

        return (
          <div key={idx} className="mb-4">
            <p className="font-medium">{q.questionText}</p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {items.map(([opt]) => (
                <div
                  key={opt}
                  className={`inline-flex items-center gap-1 px-3 text-sm rounded ${
                    q.correctAnswers.includes(opt) ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {(q.display === "image" || q.display === "both") && (
                    <img
                      src={`/images/${opt.toLowerCase()}.png`}
                      alt={opt}
                      className="w-20 object-contain"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <span>
                    {opt}
                  </span>
                </div>
              ))}
            </div>

            {["syrups", "cream", "purees"].includes(q.field) && (
              <p className={`mt-1 text-sm ${ratioCorrect ? "text-green-600" : "text-red-600"}`}>
                {ratioCorrect
                  ? `✅ Correct ratio. ${expectedQty} ${q.units}`
                  : `⚠️ Total should be ${expectedQty} ${q.units}`}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
