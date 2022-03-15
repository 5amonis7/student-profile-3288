import React from 'react'

const SearchTag = ({ update }) => {
  return (
    <div className="filter">
        <input type="text" className="search" placeholder="Search by tag"
        onChange={e => update(e.target.value)}/>
    </div>
  )
}

export default SearchTag