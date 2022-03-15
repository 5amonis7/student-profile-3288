import React, { useEffect } from 'react'

const SearchName = ({ update }) => {


  return (
    <div className="filter">
        <input type="text" className="search" placeholder="Search by name" onChange={e => update(e.target.value)} />
    </div>
  )
}

export default SearchName