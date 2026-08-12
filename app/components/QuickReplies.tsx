type QuickRepliesProps = {
  options: string[];
  onSelect: (value: string) => void;
};

export default function QuickReplies({
  options,
  onSelect,
}: QuickRepliesProps) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className="w-full rounded-xl bg-[#2B5278] py-3 text-white transition hover:bg-[#35638f]"
        >
          {option}
        </button>
      ))}
    </div>
  );
}