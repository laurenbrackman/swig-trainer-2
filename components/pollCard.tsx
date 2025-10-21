"use client";

import SelectionCard from "@/components/selectionCard";
import OptionButton from "@/components/quiz/OptionButton";
import NavButtons from "@/components/quiz/NavButtons";
import QuestionPrompt from "@/components/quiz/QuestionPrompt";
import ResultsList from "@/components/quiz/ResultsList";
import { useQuizState } from "@/hooks/useQuizState";
import { Drink } from "@/utils/drinks";

export default function PollCard({ drink }: { drink: Drink }) {
  const {
    idx,
    answers,
    submitted,
    questions,
    current,
    display,
    toggle,
    setQuantity,
    getQuantity,
    next,
    back,
    submit,
  } = useQuizState(drink);

  const wide = [1, 2, 5].includes(idx);

  return (
    <div className="bg-mint rounded-lg p-6 shadow-md mt-4 text-center">
      {/* Show live selections */}
      {!submitted && <SelectionCard selections={answers} questions={questions} />}

      {!submitted ? (
        <>
          <QuestionPrompt text={current.questionText} />

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {current.options.map((option) => (
              <OptionButton
                key={option}
                option={option}
                active={getQuantity(option) > 0}
                quantity={current.hasQuantity ? getQuantity(option) : 0}
                display={display}
                wide={wide}
                hasQuantity={current.hasQuantity}
                onClick={() => toggle(option)}
                onQuantityChange={(newQty) =>
                  current.hasQuantity && setQuantity(option, newQty)
                }
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
        <ResultsList drink={drink} questions={questions} answers={answers} />
      )}
    </div>
  );
}
