import React from 'react'

function Search({ setSearch }: { setSearch: (search: string | null) => void }) {
  return (
    <>
    <div className="flex justify-center mb-4">
      <div className="relative w-full p-4 mt-16 mx-auto rounded-lg shadow-xl">
        <input
          type="search"
          name="search"
          className="rounded-md border-gray-300 text-sm w-full sm:text-2xl"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Berlin Hbf" />
      </div>
    </div>
    </>
  )
}

export default Search;