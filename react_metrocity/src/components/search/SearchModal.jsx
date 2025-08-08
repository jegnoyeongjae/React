import SearchForm from "./SearchForm";
import SearchKeyword from "./SearchKeyword";
import SearchBest from "./SearchBest";

import './SearchModal.css';

const SearchModal = ({ handleClickSearchBtn }) => {
    return(
        <div className="SearchModal">
            <div className="inner">
                <SearchForm handleClickSearchBtn={handleClickSearchBtn} />
                <div className="keyword-best">
                    <SearchKeyword handleClickSearchBtn={handleClickSearchBtn} />
                    <SearchBest />
                </div>
            </div>
        </div>
    )
}

export default SearchModal;