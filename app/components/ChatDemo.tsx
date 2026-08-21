"use client";

import { useEffect, useRef, useState } from "react";
import { school } from "../../data/school";

type Step =
  | "welcome"
  | "audience"
  | "direction"
  | "englishGoal"
  | "languageGoal"
  | "level"
  | "childAge"
  | "time"
  | "childName"
  | "parentName"
  | "adultName"
  | "phone"
  | "success";

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function ChatDemo() {
  const [step, setStep] = useState<Step>("welcome");

  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: school.welcomeText,
    },
  ]);

  const [audience, setAudience] = useState("");
  const [direction, setDirection] = useState("");
  const [englishGoal, setEnglishGoal] = useState("");
  const [languageGoal, setLanguageGoal] = useState("");
  const [level, setLevel] = useState("");
  const [childAge, setChildAge] = useState("");
  const [time, setTime] = useState("");
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");
  const [adultName, setAdultName] = useState("");
  const [phone, setPhone] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  function addUserMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text,
      },
    ]);
  }

  function addBotMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        text,
      },
    ]);
  }

  function startChat() {
    addUserMessage("🚀 Записаться на пробное");

    setTimeout(() => {
      addBotMessage(school.audienceTitle);
      setStep("audience");
    }, 300);
  }

  function chooseAudience(value: string) {
    setAudience(value);
    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.directionTitle);
      setStep("direction");
    }, 300);
  }

  function chooseDirection(value: string) {
    setDirection(value);
    addUserMessage(value);

    const isEnglish =
      value.includes("Английский") ||
      value.includes("IELTS") ||
      value.includes("CEFR") ||
      value.includes("Бизнес-английский");

    const isLanguage =
      value.includes("Русский") ||
      value.includes("Узбекский") ||
      value.includes("Корейский");

    const isChildDevelopment =
      value.includes("Ментальная") ||
      value.includes("Шахматы") ||
      value.includes("Рисование") ||
      value.includes("Подготовка к школе");

    if (isEnglish) {
      setTimeout(() => {
        addBotMessage(school.englishGoalTitle);
        setStep("englishGoal");
      }, 300);

      return;
    }

    if (isLanguage) {
      setTimeout(() => {
        addBotMessage(school.languageGoalTitle);
        setStep("languageGoal");
      }, 300);

      return;
    }

    if (isChildDevelopment) {
      setTimeout(() => {
        addBotMessage(school.childAgeTitle);
        setStep("childAge");
      }, 300);

      return;
    }

    setTimeout(() => {
      addBotMessage(school.timeTitle);
      setStep("time");
    }, 300);
  }

  function chooseEnglishGoal(value: string) {
    setEnglishGoal(value);
    addUserMessage(value);

    if (
      value.includes("IELTS") ||
      value.includes("CEFR") ||
      value.includes("Общий английский")
    ) {
      setTimeout(() => {
        addBotMessage(school.levelTitle);
        setStep("level");
      }, 300);

      return;
    }

    setTimeout(() => {
      addBotMessage(school.timeTitle);
      setStep("time");
    }, 300);
  }

  function chooseLanguageGoal(value: string) {
    setLanguageGoal(value);
    addUserMessage(value);

    if (
      value.includes("изучаю") ||
      value.includes("разговорную")
    ) {
      setTimeout(() => {
        addBotMessage(school.levelTitle);
        setStep("level");
      }, 300);

      return;
    }

    setTimeout(() => {
      addBotMessage(school.timeTitle);
      setStep("time");
    }, 300);
  }

  function chooseLevel(value: string) {
    setLevel(value);
    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.timeTitle);
      setStep("time");
    }, 300);
  }

  function chooseChildAge(value: string) {
    setChildAge(value);
    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.timeTitle);
      setStep("time");
    }, 300);
  }

  function chooseTime(value: string) {
    setTime(value);
    addUserMessage(value);

    setTimeout(() => {
      if (audience === "👨‍👩‍👧 Для ребёнка") {
        addBotMessage(school.childNameTitle);
        setStep("childName");
        return;
      }

      addBotMessage(school.adultNameTitle);
      setStep("adultName");
    }, 300);
  }

  function submitChildName() {
    const value = childName.trim();

    if (!value) return;

    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.parentNameTitle);
      setStep("parentName");
    }, 300);
  }

  function submitParentName() {
    const value = parentName.trim();

    if (!value) return;

    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.phoneTitle);
      setStep("phone");
    }, 300);
  }

  function submitAdultName() {
    const value = adultName.trim();

    if (!value) return;

    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.phoneTitle);
      setStep("phone");
    }, 300);
  }

  function submitPhone() {
    const value = phone.trim();

    if (!value) return;

    addUserMessage(value);

    setTimeout(() => {
      addBotMessage(school.successText);
      setStep("success");
    }, 500);
  }

  function resetChat() {
    setMessages([
      {
        from: "bot",
        text: school.welcomeText,
      },
    ]);

    setStep("welcome");

    setAudience("");
    setDirection("");
    setEnglishGoal("");
    setLanguageGoal("");
    setLevel("");
    setChildAge("");
    setTime("");
    setChildName("");
    setParentName("");
    setAdultName("");
    setPhone("");
  }

  const currentDirections =
    school.directions[
      audience as keyof typeof school.directions
    ] ?? [];

  return (
    <div className="flex h-[760px] w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border border-[#253342] bg-[#0B1420] shadow-2xl">

      {/* HEADER */}
      <div className="flex items-center gap-3 border-b border-[#253342] bg-[#1F2C38] px-4 py-4">
     <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl">
  <img
    src="/mugenro-header.png"
    alt="MUGENRO"
    className="h-full w-full object-contain"
  />
</div>

        <div className="min-w-0">
          <div className="text-lg font-bold leading-tight text-white">
            {school.name}
          </div>

          <div className="mt-1 text-sm text-[#AFC0D0]">
            🤖 {school.subtitle}
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-4">

          {messages.map((message, index) => (
            <div
              key={`${message.from}-${index}`}
              className={`flex ${
                message.from === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.from === "user"
                    ? "rounded-br-md bg-[#2E5D89] text-white"
                    : "rounded-bl-md bg-[#172636] text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />

        </div>
      </div>

      {/* ACTION AREA */}
      <div className="border-t border-[#253342] bg-[#111D29] p-4">

        {/* WELCOME */}
        {step === "welcome" && (
          <button
            onClick={startChat}
            className="w-full rounded-xl bg-[#2E5D89] px-4 py-4 text-base font-medium text-white transition hover:bg-[#376D9F] active:scale-[0.99]"
          >
            🚀 Записаться на пробное
          </button>
        )}

        {/* AUDIENCE */}
        {step === "audience" && (
          <div className="grid grid-cols-1 gap-2">
            {school.audiences.map((item) => (
              <button
                key={item}
                onClick={() => chooseAudience(item)}
                className="w-full rounded-xl bg-[#2E5D89] px-4 py-3 text-left text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* DIRECTIONS */}
        {step === "direction" && (
          <div className="grid grid-cols-1 gap-2">
            {currentDirections.map((item) => (
              <button
                key={item}
                onClick={() => chooseDirection(item)}
                className="w-full rounded-xl bg-[#2E5D89] px-4 py-3 text-left text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* ENGLISH GOALS */}
        {step === "englishGoal" && (
          <div className="grid grid-cols-1 gap-2">
            {school.englishGoals.map((item) => (
              <button
                key={item}
                onClick={() => chooseEnglishGoal(item)}
                className="w-full rounded-xl bg-[#2E5D89] px-4 py-3 text-left text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* OTHER LANGUAGE GOALS */}
        {step === "languageGoal" && (
          <div className="grid grid-cols-1 gap-2">
            {school.languageGoals.map((item) => (
              <button
                key={item}
                onClick={() => chooseLanguageGoal(item)}
                className="w-full rounded-xl bg-[#2E5D89] px-4 py-3 text-left text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* LEVEL */}
        {step === "level" && (
          <div className="grid grid-cols-2 gap-2">
            {school.levels.map((item) => (
              <button
                key={item}
                onClick={() => chooseLevel(item)}
                className="rounded-xl bg-[#2E5D89] px-3 py-3 text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* CHILD AGE */}
        {step === "childAge" && (
          <div className="grid grid-cols-2 gap-2">
            {school.childAges.map((item) => (
              <button
                key={item}
                onClick={() => chooseChildAge(item)}
                className="rounded-xl bg-[#2E5D89] px-3 py-3 text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* TIME */}
        {step === "time" && (
          <div className="grid grid-cols-2 gap-2">
            {school.times.map((item) => (
              <button
                key={item}
                onClick={() => chooseTime(item)}
                className="rounded-xl bg-[#2E5D89] px-3 py-3 text-sm text-white transition hover:bg-[#376D9F]"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* CHILD NAME */}
        {step === "childName" && (
          <div className="flex gap-2">
            <input
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitChildName();
                }
              }}
              placeholder="Имя ребёнка"
              className="min-w-0 flex-1 rounded-xl border border-[#304357] bg-[#0B1420] px-4 py-3 text-sm text-white outline-none placeholder:text-[#718096] focus:border-[#3B78AA]"
            />

            <button
              onClick={submitChildName}
              className="rounded-xl bg-[#2E5D89] px-5 text-sm font-medium text-white"
            >
              Далее
            </button>
          </div>
        )}

        {/* PARENT NAME */}
        {step === "parentName" && (
          <div className="flex gap-2">
            <input
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitParentName();
                }
              }}
              placeholder="Имя родителя"
              className="min-w-0 flex-1 rounded-xl border border-[#304357] bg-[#0B1420] px-4 py-3 text-sm text-white outline-none placeholder:text-[#718096] focus:border-[#3B78AA]"
            />

            <button
              onClick={submitParentName}
              className="rounded-xl bg-[#2E5D89] px-5 text-sm font-medium text-white"
            >
              Далее
            </button>
          </div>
        )}

        {/* ADULT / TEEN NAME */}
        {step === "adultName" && (
          <div className="flex gap-2">
            <input
              value={adultName}
              onChange={(e) => setAdultName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitAdultName();
                }
              }}
              placeholder="Ваше имя"
              className="min-w-0 flex-1 rounded-xl border border-[#304357] bg-[#0B1420] px-4 py-3 text-sm text-white outline-none placeholder:text-[#718096] focus:border-[#3B78AA]"
            />

            <button
              onClick={submitAdultName}
              className="rounded-xl bg-[#2E5D89] px-5 text-sm font-medium text-white"
            >
              Далее
            </button>
          </div>
        )}

        {/* PHONE */}
        {step === "phone" && (
          <div className="flex gap-2">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitPhone();
                }
              }}
              placeholder="+998 90 123 45 67"
              type="tel"
              className="min-w-0 flex-1 rounded-xl border border-[#304357] bg-[#0B1420] px-4 py-3 text-sm text-white outline-none placeholder:text-[#718096] focus:border-[#3B78AA]"
            />

            <button
              onClick={submitPhone}
              className="rounded-xl bg-[#2E5D89] px-5 text-sm font-medium text-white"
            >
              Отправить
            </button>
          </div>
        )}

        {/* SUCCESS */}
        {step === "success" && (
          <button
            onClick={resetChat}
            className="w-full rounded-xl border border-[#304357] bg-[#172636] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#203346]"
          >
            🔄 Новая заявка
          </button>
        )}

      </div>
    </div>
  );
}