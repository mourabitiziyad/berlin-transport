import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import API from '../api/api';
import { useDebounce } from '../hooks/useDebounce';
import Search from '../components/Search';

export default function Home() {

  const [search, setSearch] = useState<string | null>();
  const debouncedSearch = useDebounce(search, 400);

  const { data: stops, isError, isLoading, error, refetch } = useQuery(
    // Specifying the query key for each debounced query to cache them separately
    ['list', debouncedSearch],
    () => {
      return API.get(`/locations?query=${debouncedSearch}&fuzzy=false&results=20&stops=true&addresses=false&poi=false&linesOfStops=false&language=en`)
    }, {
    enabled: false
  })

  useEffect(() => {
    if (!(debouncedSearch === undefined
      || debouncedSearch === null
      || debouncedSearch?.length === 0)) {
      refetch()
    }
  }, [debouncedSearch])

  if (isError) {
    return <div>Error: {error?.message}</div>
  }



  return (
    <div className='w-1/2 mx-auto py-10 border-gray-700 h-screen'>
      <h1 className='text-4xl text-center'>Berlin Transportation</h1>
        {/* create an input text form with onChange that refetches data */}
        <Search setSearch={setSearch} />
        {stops?.data?.map((stop: { id: number, name: string }, idx: number) => (
          <div key={stop.id}>
            <p>{idx + 1} - {stop.name}</p>
          </div>
        ))}
    </div>
  )
}
