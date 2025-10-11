"use client";
import SelectionCard from "@/components/selectionCard";
import OptionButton from "@/components/quiz/OptionButton";
import NavButtons from "@/components/quiz/NavButtons";
import QuestionPrompt from "@/components/quiz/QuestionPrompt";
import ResultsList from "@/components/quiz/ResultsList";
import { useQuizState } from "@/hooks/useQuizState";
import { Drink } from "@/utils/drinks";

export default function PollCard({ drink }: { drink: Drink }) {
  const { idx, answers, submitted, questions, current, display, toggle, next, back, submit } = useQuizState(drink);

  const wide = [1, 2, 5].includes(idx);

  return (
    <div className="bg-mint rounded-lg p-6 shadow-md mt-4 text-center">
      {!submitted && <SelectionCard selections={answers} questions={questions} />}

      {!submitted ? (
        <>
          <QuestionPrompt text={current.questionText} />

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {current.options.map((option) => (
              <OptionButton
                key={option}
                option={option}
                active={(answers[idx] || []).includes(option)}
                display={display}
                wide={wide}
                onClick={() => toggle(option)}
              />
            ))}
          </div>

          <NavButtons
            hasBack={idx > 0}
            hasNext={idx < questions.length - 1}
            onBack={back}
            onNext={next}
            onSubmit={submit}
          />
        </>
      ) : (
        <ResultsList questions={questions} answers={answers} />
      )}
    </div>
  );
}
