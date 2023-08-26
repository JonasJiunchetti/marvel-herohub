import React from 'react';
import useStore from '../../state/store.jsx';
import Styles from './SearchBar.module.scss';

const SearchBar = () => {
    const searchQuery = useStore((state) => state.searchQuery);
    const setSearchQuery = useStore((state) => state.setSearchQuery)

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className={Styles.searchBar}>
            <input
                type = "text"
                placeholder = "Search"
                value = {searchQuery}
                onChange = {handleSearchChange}
                className={Styles.input}
            />
        </div>
    );
};

export default SearchBar;