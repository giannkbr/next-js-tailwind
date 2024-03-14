'use client'

import React, { useState } from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  console.log(searchQuery);

  return (
    <div>
      <input
        type="search"
        placeholder="Search articles"
        className="w-full p-2 border border-gray-300 rounded-md mb-10"
        value={searchQuery}
        onChange={handleSearch}
      />
      {searchQuery && (
        <div>
          {
            <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, harum!</div>
          }
        </div>
      )}
    </div>
  );
}

export default Search;
