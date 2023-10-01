import { ImageType } from '@/utils/types';
import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { twMerge } from 'tailwind-merge';

interface Props {
  item: ImageType;
  isSearching: boolean;
  searchMatchIds: string[];
}

const ImageCard = ({ item, isSearching, searchMatchIds }: Props) => {
  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const name = item.name.split(' ');

  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={twMerge(
        `touch-manipulation md:touch-auto text-left items-stretch img-grid isolate group overflow-hidden active:opacity-50 sm:text-center md:hover:cursor-pointer lg:hover:cursor-drag transition-[grayscale] ${
          isSearching ? 'grayscale' : ''
        }`,
        searchMatchIds.includes(item.id) && isSearching ? 'grayscale-0' : ''
      )}
    >
      <div
        className={twMerge(
          `min-h-[7.5rem] relative group-hover:grayscale-[50%] group-hover:blur-[2px] group-hover:scale-110 transition-all duration-500 ${
            isSearching ? 'blur-xl' : ''
          }`,
          searchMatchIds.includes(item.id) && isSearching ? 'blur-none' : ''
        )}
      >
        <Image
          src={`/assets/${item.imageUrl}`}
          alt="Animal"
          fill
          className="w-full object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="w-full h-full gradient z-10">&nbsp;</div>

      <div className="z-20 p-3 md:pt-[350%]">
        <div className="hover-hover:translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <h2 className="font-semibold text-large leading-[0.9]">
            {name[0]}
            <br />
            {name[1]}
          </h2>
          <p className="font-Poppins text-clr-text-200 text-small leading-[1.6]">
            {item.location}
          </p>
        </div>

        <span className="hover-hover:invisible hover-hover:opacity-0 group-hover:opacity-100 group-hover:visible leading-[1.6] text-clr-text-200 transition-all duration-500">
          Tags:{' '}
          <span className="text-clr-text-300 capitalize">
            {item.tags.join(', ')}
          </span>
        </span>
      </div>
    </button>
  );
};

export default ImageCard;
