import { useEffect, useMemo, useState } from "react";
import { generateQuestions, Question } from "@/utils/quizQuestions";

export function useQuizState(drink: any) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});
  const [submitted, setSubmitted] = useState(false);
  const questions: Question[] = useMemo(() => generateQuestions(drink), [drink]);
  const current = questions[idx];
  const display = current.display ?? "text";

  useEffect(() => {
    setIdx(0);
    setAnswers({});
    setSubmitted(false);
  }, [drink]);

  function toggle(option: string) {
    setAnswers((prev) => {
      const cur = prev[idx] || {};
      const currentQty = cur[option] || 0;
      const nextQty = currentQty > 0 ? 0 : 1;
      return {
        ...prev,
        [idx]: { ...cur, [option]: nextQty },
      };
    });
  }

  function setQuantity(option: string, quantity: number) {
    setAnswers((prev) => {
      const cur = prev[idx] || {};
      return {
        ...prev,
        [idx]: { ...cur, [option]: Math.max(0, quantity) },
      };
    });
  }

  function getQuantity(option: string): number {
    return answers[idx]?.[option] || 0;
  }

  function ensureAnswer() {
    setAnswers((prev) => {
      const cur = prev[idx] || {};
      if (Object.keys(cur).length === 0) {
        return { ...prev, [idx]: { None: 0 } };
      }
      return prev;
    });
  }

  function next() {
    ensureAnswer();
    setIdx((p) => Math.min(p + 1, questions.length - 1));
  }

  function back() {
    setIdx((p) => Math.max(p - 1, 0));
  }

  function submit() {
    ensureAnswer();
    setSubmitted(true);
  }

  return {
    idx,
    setIdx,
    answers,
    setAnswers,
    submitted,
    setSubmitted,
    questions,
    current,
    display,
    toggle,
    setQuantity,
    getQuantity,
    next,
    back,
    submit,
  };
}
