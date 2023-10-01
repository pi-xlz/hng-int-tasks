import { SearchBar } from '../UI';
import { Logo, MenuIcon } from '../assets/icons';

const Navbar = () => {
  return (
    <div className="absolute top-3 flex w-full justify-around items-center">
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Search bar */}
      <SearchBar />

      {/* Menu */}
      <div className="flex items-center gap-6">
        <h4 className="text-clr-white hover:cursor-pointer">Sign in</h4>
        <div className="rounded-[50%] bg-clr-primary-100 p-[.25rem] hover:cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
