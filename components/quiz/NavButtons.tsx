type Props = {
  hasBack: boolean;
  hasNext: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};
export default function NavButtons({ hasBack, hasNext, onBack, onNext, onSubmit }: Props) {
  return (
    <div className="flex justify-between items-center mt-6">
      {hasBack ? (
        <button className="px-6 py-3 bg-background text-foreground rounded-full shadow-md hover:brightness-95 transition" onClick={onBack}>Back</button>
      ) : (
        <div className="w-[96px]" />
      )}
      {hasNext ? (
        <button className="px-6 py-3 bg-primaryRed text-white rounded-full shadow-md hover:brightness-110 transition" onClick={onNext}>Next</button>
      ) : (
        <button className="px-6 py-3 bg-primaryRed text-white rounded-full shadow-md hover:brightness-110 transition" onClick={onSubmit}>Submit</button>
      )}
    </div>
  );
}
