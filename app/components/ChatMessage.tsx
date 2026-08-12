type ChatMessageProps = {
  from: "bot" | "user";
  text: string;
};

export default function ChatMessage({
  from,
  text,
}: ChatMessageProps) {
  const isBot = from === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`
          max-w-[80%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-6
          shadow
          ${
            isBot
              ? "rounded-tl-sm bg-[#182533] text-white"
              : "rounded-tr-sm bg-[#2B5278] text-white"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}