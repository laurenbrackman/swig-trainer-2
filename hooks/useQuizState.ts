import { useEffect, useMemo, useState } from "react";
import { generateQuestions, Question } from "@/utils/quizQuestions";

export function useQuizState(drink: any) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions: Question[] = useMemo(() => generateQuestions(drink), [drink]);
  const current = questions[idx];
  const display = current.display ?? "text";

  useEffect(() => { setIdx(0); setAnswers({}); setSubmitted(false); }, [drink]);

  function toggle(option: string) {
    setAnswers(prev => {
      const cur = prev[idx] || [];
      const next = cur.includes(option) ? cur.filter(o => o !== option) : [...cur.filter(o => o !== "None"), option];
      return { ...prev, [idx]: next };
    });
  }

  function ensureAnswer() {
    setAnswers(prev => ({ ...prev, [idx]: (prev[idx] || []).length ? prev[idx] : ["None"] }));
  }

  function next() { ensureAnswer(); setIdx(p => p + 1); }
  function back() { setIdx(p => Math.max(p - 1, 0)); }
  function submit() { ensureAnswer(); setSubmitted(true); }

  return { idx, setIdx, answers, setAnswers, submitted, setSubmitted, questions, current, display, toggle, next, back, submit };
}
