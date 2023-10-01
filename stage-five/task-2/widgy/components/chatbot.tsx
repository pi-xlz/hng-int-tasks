import { lookupTable } from "@/lib/data";
import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from "react";

interface ChatBotProps {
  chatRef: any;
  contentKey: string;
  returnToPos: () => void;
}

export default function ChatBot({
  chatRef,
  contentKey,
  returnToPos,
}: ChatBotProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      keyframes: {
        scale: [0.95, 1],
        ease: "power1.inOut",
      },
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    });
  }, []);

  return (
    <div className="w-fit absolute bottom-2 right-[30%]" ref={chatRef}>
      <div className="w-20 h-20 rounded-full custom-shadow  bg-clr-primary-100 flex justify-center items-center border border-clr-border">
        <div
          className="w-16 h-16 rounded-full bg-clr-primary-200"
          ref={boxRef}
        ></div>
      </div>

      <div className="opacity-0 scale-50 absolute w-[20rem] bottom-10 p-4 left-24 bg-clr-primary-100 border border-clr-border text-clr-primary-300 rounded-md">
        <p>
          {contentKey ? lookupTable[contentKey] : "please click the images"}
        </p>
        <button
          className="capitalize p-2 mt-4 bg-clr-primary-200 w-full text-center rounded-md"
          onClick={returnToPos}
        >
          got it
        </button>
      </div>
    </div>
  );
}
