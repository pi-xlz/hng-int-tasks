import { motion } from 'framer-motion';

interface Props {
  setIsGuiding: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Guide = ({ setIsGuiding }: Props) => {
  return (
    <div className="absolute bg-clr-background-300 top-0 right-0  w-full h-[100svh] flex place-items-center z-50 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          scale: {
            type: 'spring',
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="mx-auto max-w-[300px] flex flex-col gap-3 justify-center p-8 font-Poppins rounded-2xl bg-clr-background-guide text-clr-text-guide"
      >
        <h1 className="font-bold text-xl">Hello there 👋</h1>
        <h2 className="font-semibold">Welcome to Kairou 回廊🙇‍♂️.</h2>
        <p className="font-medium">
          Drag and Drop the images to reorder them and if you're on a mobile
          device📱, touch and hold the desired image for at least 250ms(a really
          short while) before dragging. Yoroshiku onegaishimasu(Enjoy Fiddling
          👋).{' '}
        </p>

        <span
          onClick={() => setIsGuiding(false)}
          className="italic hover:cursor-pointer"
        >
          close
        </span>
      </motion.div>
    </div>
  );
};

export default Guide;
