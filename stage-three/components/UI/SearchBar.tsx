import { useState, useEffect } from 'react';
import { SearchIcon } from '@/public/assets/icons';
import { ImgArray } from '@/utils/types';

interface Prop {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setGallaray: React.Dispatch<React.SetStateAction<ImgArray>>;
  gallaray: ImgArray;
  setSearchMatchIds: React.Dispatch<React.SetStateAction<string[]>>;
  isSearching: boolean;
  searchMatchIds: string[];
}

const SearchBar = ({ setIsSearching, gallaray, setSearchMatchIds }: Prop) => {
  const [searchTerm, setSearchTerm] = useState('');

  // const touchRef = useRef<HTMLButtonElement>(null);
  // const matches = useMediaQuery('(max-width: 768px)');

  // useEffect(() => {
  //   const element = inputRef.current;

  //   if (!element) return;

  //   const handleFocusOut = () => {
  //     // Called when input is focused out
  //     if (!matches && isSearching) {
  //       setSearchMatchIds([]);
  //       setIsSearching(false);
  //       console.log('fricking hell');
  //     }
  //   };

  //   element.addEventListener('focusout', handleFocusOut);

  //   return () => {
  //     element.removeEventListener('focusout', handleFocusOut);
  //   };
  // }, [matches]);

  // useEffect(() => {
  //   const element = touchRef.current;

  //   if (!element) return;

  //   const handleClick = () => {
  //     // Called when input is focused out
  //     if (matches) {
  //       setSearchMatchIds([]);
  //       setIsSearching(false);
  //       console.log('fricking hellll');
  //     }
  //   };

  //   element.addEventListener('click', handleClick);

  //   return () => {
  //     element.removeEventListener('focusout', handleClick);
  //   };
  // }, [matches]);

  useEffect(() => {
    const matches = gallaray.filter((item) => item.tags.includes(searchTerm));
    const matchIds = matches.map((item) => {
      return item.id;
    });

    setSearchMatchIds(matchIds);
  }, [searchTerm]);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim());
  };

  const onBlurHandler = () => {
    setSearchMatchIds([]);
    setIsSearching(false);
  };

  return (
    <form
      className="w-full bg-clr-background-200 flex place-items-center gap-1 px-4 py-2 rounded-[5px]"
      onSubmit={(e) => formSubmitHandler(e)}
    >
      <div>
        <SearchIcon />
      </div>
      <div className="flex justify-between w-full">
        <input
          className="bg-transparent w-full text-clr-text-100 outline-none placeholder:text-clr-text-100"
          type="text"
          placeholder="Search by tags(e.g big or wild)..."
          onFocus={() => setIsSearching(true)}
          onBlur={onBlurHandler}
          value={searchTerm}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
