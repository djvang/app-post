import React from "react"

export default function SortFilter({ handleSortChange }) {
  const sorts = ["ASC", "DESC"];
  const sortPosts = (event) => handleSortChange(event.target.value);


  return (
    <select onChange={sortPosts} className="uk-select uk-width-small uk-margin-auto-left">
      {sorts.map((sort, index) => <option value={sort} key={index}>{sort}</option>)}
    </select>
  )
}