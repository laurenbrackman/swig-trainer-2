import { arraysMatch } from "@/utils/arraysMatch";
import { Question } from "@/utils/quizQuestions";

type Props = { questions: Question[]; answers: Record<number, string[]> };
export default function ResultsList({ questions, answers }: Props) {
  const score = questions.reduce((acc, q, i) => (arraysMatch(answers[i] || [], q.correctAnswers) ? acc + 1 : acc), 0);
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Results</h3>
      <p className="text-lg mb-6">You got {score} out of {questions.length} correct!</p>
      {questions.map((q, i) => {
        const ua = answers[i] || [];
        const correct = arraysMatch(ua, q.correctAnswers);
return (
  !correct ? (
    <div key={q.id} className="mb-4">
      <p className="font-semibold">{q.questionText}</p>
      <p>
        Your answer:{" "}
        <span className="text-red-600">
          {ua.join(", ") || "No answer"}
        </span>
      </p>
      <p className="text-sm text-gray-600">
        Correct answer: {q.correctAnswers.join(", ")}
      </p>
    </div>
  ) : null
);
      })}
    </div>
  );
}
