import SearchBest from './SearchBest';
import SearchFrom from './SearchFrom';
import SearchKeyword from './SearchKeyword';
import './SearchModal.css';

const SearchModal = () => {
  return (
    <div className="SearchModal">
      <div className="inner">
        <SearchFrom />
        <div className="keyword-best">
          <SearchKeyword />
          <SearchBest />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
