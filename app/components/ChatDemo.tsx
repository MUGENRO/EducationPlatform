"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import QuickReplies from "./QuickReplies";
import { school } from "../../data/school";

type Step =
  | "welcome"
  | "course"
  | "level"
  | "time"
  | "name"
  | "phone"
  | "success";

export default function ChatDemo() {
  const [step, setStep] = useState<Step>("welcome");

  type Message = {
  from: "bot" | "user";
  text: string;
};

const [messages, setMessages] = useState<Message[]>([
  {
    from: "bot",
    text: `👋 Привет!\n\nДобро пожаловать в ${school.name}.\n\nЯ помогу подобрать курс и записаться на бесплатный пробный урок.`,
  },
]);

  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [lessonTime, setLessonTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function next(text: string) {
    setMessages((prev) => [...prev, { from: "user", text }]);
  }

  function bot(text: string) {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  }

  function chooseCourse(value: string) {
    setCourse(value);
    next(value);

    setTimeout(() => {
      bot("Какой у тебя сейчас уровень английского?");
      setStep("level");
    }, 300);
  }

  function chooseLevel(value: string) {
    setLevel(value);
    next(value);

    setTimeout(() => {
      bot("Когда тебе удобно прийти на бесплатный пробный урок?");
      setStep("time");
    }, 300);
  }

  function chooseTime(value: string) {
    setLessonTime(value);
    next(value);

    setTimeout(() => {
      bot("Как тебя зовут?");
      setStep("name");
    }, 300);
  }

  function sendName() {
    if (!name.trim()) return;

    next(name);

    setTimeout(() => {
      bot("Оставь, пожалуйста, свой номер телефона.");
      setStep("phone");
    }, 300);
  }

  function sendPhone() {
    if (!phone.trim()) return;

    next(phone);
    

    setTimeout(() => {
      bot(
        "🎉 Спасибо!\n\nТы успешно записался на бесплатный пробный урок.\n\nНаш менеджер скоро свяжется с тобой."
      );

      setStep("success");
    }, 300);
  }
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);
  return (
    <div className="flex h-[760px] flex-col overflow-hidden rounded-[28px] border border-[#253342] bg-[#17212B]">

      <div className="flex items-center gap-3 border-b border-[#253342] bg-[#1F2C38] p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2B5278] text-xl">
    🎓
      </div>
      
        <h2 className="text-lg font-bold text-white">
          {school.name}
        </h2>

        <p className="text-sm text-gray-400">
          🤖 Автоматический помощник
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto bg-[#0E1621] p-4">

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            from={message.from}
            text={message.text}
          />
        ))}
        <div ref={messagesEndRef} />

      </div>

      <div className="border-t border-[#253342] bg-[#17212B] p-4">

        {step === "welcome" && (
          <QuickReplies
            options={["🚀 Начать"]}
            onSelect={() => {
              next("🚀 Начать");

              setTimeout(() => {
                bot("Какой курс тебя интересует?");
                setStep("course");
              }, 300);
            }}
          />
        )}

        {step === "course" && (
          <QuickReplies
          options={school.courses}
            onSelect={chooseCourse}
          />
        )}

        {step === "level" && (
          <QuickReplies
            options={[
              "Beginner",
              "Elementary",
              "Intermediate",
              "Advanced",
            ]}
            onSelect={chooseLevel}
          />
        )}

        {step === "time" && (
          <QuickReplies
            options={[
              "Сегодня",
              "Завтра",
              "На этой неделе",
            ]}
            onSelect={chooseTime}
          />
        )}

        {step === "name" && (
          <div className="space-y-3">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя..."
              className="w-full rounded-xl bg-[#243447] p-3 text-white outline-none"
            />

            <button
              onClick={sendName}
              className="w-full rounded-xl bg-[#2B5278] py-3 font-semibold text-white"
            >
              Продолжить
            </button>

          </div>
        )}

        {step === "phone" && (
          <div className="space-y-3">

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998..."
              className="w-full rounded-xl bg-[#243447] p-3 text-white outline-none"
            />

            <button
              onClick={sendPhone}
              className="w-full rounded-xl bg-[#2B5278] py-3 font-semibold text-white"
            >
              Записаться
            </button>

          </div>
        )}

        

      </div>

    </div>
  );
}