import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR, { preload } from 'swr'
interface Props {}
import { useSWRConfig } from 'swr'
import { useEffect, useState } from 'react'
import * as QueryString from 'qs'
function Component() {
  const [page, setPage] = useState(0)
  const url = `https://pokeapi.co/api/v2/ability/?offset=${page * 20}&limit=20`

  function sortQuery(url: string) {
    const _url = new URL(url)
    _url.searchParams.sort()
    return _url.toString()
  }

  const config = useSWRConfig()
  const { isLoading, data, error } = useSWR(url)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
  preload(data.next, config.fetcher)

  function handleNextPage() {
    setPage((page) => {
      return page + 1
    })
  }
  return (
    <div>
      <button onClick={handleNextPage}>next page</button>
      <hr />
      {JSON.stringify(data)}
    </div>
  )
}

export default Component
