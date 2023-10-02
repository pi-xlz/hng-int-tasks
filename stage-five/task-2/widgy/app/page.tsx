'use client';

import Box from '@/components/box';
import ChatBot from '@/components/chatbot';
import { images } from '@/lib/data';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  const [data, setData] = useState<string | undefined>('intro');
  const containerRef = useRef<HTMLDivElement>(null);
  const chatBotRef = useRef<HTMLDivElement>(null);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isFirstTIme, setIsFirstTime] = useState(true);
  const [initialPos, setInitialPos] = useState<null | { x: any; y: any }>(null);

  // let isAnimationActive = false;
  const chatbot = chatBotRef.current;

  const returnToOriginalPos = () => {
    gsap.to(chatbot, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      onComplete: function () {
        setInitialPos(null);
        setIsAnimationActive(false);
      },
    });

    gsap.to(chatbot?.lastElementChild!, {
      opacity: 0,
      scale: 0.5,
      ease: 'circ.out',
      duration: 0.5,
    });
  };

  useEffect(() => {
    const chatbot = chatBotRef.current;
    if (isFirstTIme) {
      gsap.to(chatbot?.lastElementChild!, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        delay: 2,
      });
    }

    function onClick(e: any) {
      setIsFirstTime(false);
      if (isAnimationActive) return;
      setData(e.target?.dataset.id);
      const chatbot = chatBotRef.current;
      const rect = chatbot!.getBoundingClientRect();
      if (!initialPos) {
        setInitialPos({ x: rect.left, y: rect.top });
      }

      const clickX = e.clientX;
      const clickY = e.clientY;

      const newX = clickX - rect.left;
      const newY = clickY - rect.top;

      setIsAnimationActive(true);

      let timeline = gsap.timeline();
      timeline.to(chatbot, { x: newX + 10, y: newY + 10, duration: 0.5 });
      timeline.to(chatbot, {
        scale: 1.05,
        ease: 'power1.inOut',
        duration: 0.5,
        onStart: function () {
          gsap.to(chatbot?.lastElementChild!, {
            opacity: 1,
            scale: 1,
            ease: 'circ.out',
            duration: 0.5,
          });
        },
      });
    }

    const container = containerRef.current;

    container?.addEventListener('click', onClick);

    return () => {
      container?.removeEventListener('click', onClick);
    };
  }, [isAnimationActive]);

  console.log(data);

  return (
    <main className="bg-black w-full h-screen overflow-hidden flex justify-center items-center bg-[url('/images/widgy.png')] bg-center bg-no-repeat bg-origin-border relative">
      <div className="bg-black border-clr-border rounded-md top-4 text-sm absolute text-clr-primary-300">
        Hey there👋. These widgets are clickable and interactive. Do indulge and
        allow widgy-kun show you around.
      </div>
      <div
        className="flex gap-4"
        ref={containerRef}
      >
        {images.map((item) => (
          <Box
            imgPath={item.img}
            id={item.id}
          />
        ))}
      </div>

      <ChatBot
        chatRef={chatBotRef}
        contentKey={data}
        returnToPos={returnToOriginalPos}
      />
    </main>
  );
}
