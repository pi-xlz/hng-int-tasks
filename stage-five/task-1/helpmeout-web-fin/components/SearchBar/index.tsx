import { SearchIcon } from '@/public/icons';
import styles from './index.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles['search-icon']}>
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for a particular video"
        className={styles['search-input']}
      />
    </div>
  );
};

export default SearchBar;
