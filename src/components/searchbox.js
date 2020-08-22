import React from 'react';

const SearchBox = ({searchString, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='robot name' 
                onChange = {searchChange}
            />
        </div>
        
    );
}

export default SearchBox