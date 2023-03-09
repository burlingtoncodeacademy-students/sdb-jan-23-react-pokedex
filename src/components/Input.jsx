import React from 'react'

function Input({ setSearch }) {

    function updateSearch(e) {
        setSearch(e.target.previousSibling.value)
    }

  return (
    <div>
        <input type="text" placeholder="Enter Pokemon" />
        <button onClick={updateSearch}>Go</button>
    </div>
  )
}

export default Input