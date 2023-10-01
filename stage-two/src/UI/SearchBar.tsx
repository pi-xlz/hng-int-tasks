import { SearchIcon } from '../assets/icons';
// import { useState } from 'react';

const SearchBar = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  return (
    <form className="flex gap-[8rem] p-1 bg-transparent rounded-lg border-2 border-clr-white">
      <input
        className="bg-transparent text-clr-white placeholder:text-clr-white border-none focus:outline-none basis-[90%]"
        type="text"
        placeholder="What do you want to watch?"
      />
      <div>
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchBar;
