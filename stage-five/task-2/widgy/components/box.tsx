import Image from "next/image";
import type { StaticImageData } from "next/image";

interface BoxProps {
  imgPath: StaticImageData;
  id: string;
}

export default function Box({ imgPath, id }: BoxProps) {
  return (
    <div
      className="cursor-pointer group w-44 h-[25rem] border border-clr-border rounded-md relative flex justify-center"
      data-id={id}
    >
      <div className="w-full h-full pointer-events-none">
        <Image
          src={imgPath}
          placeholder="blur"
          className="w-full h-full object-cover brightness-[0.2] pointer-events-none"
          sizes="100vw"
          alt="some-dudes"
        />
      </div>

      <div className="absolute opacity-0 bottom-0 text-center w-[90%] bg-clr-primary-100 rounded-md px-4 py-2 text-clr-primary-300 text-xs uppercase group-hover:bottom-1 group-hover:opacity-100 transition-all duration-200">
        click to get insights
      </div>
    </div>
  );
}
