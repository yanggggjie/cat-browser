import { clsx } from 'clsx'
import useSWR from 'swr'
import sortQueryOrder from '../../utils/sortQueryOrder.js'
import { useEffect, useRef, useState } from 'react'
import BoardDisplay from './BoardDisplay.jsx'
import Search from './Search.jsx'
import useScrollBottom2PageBottomDistance from '../../hooks/useScrollBottom2PageBottomDistance.js'
import { useDebounce } from 'usehooks-ts'
interface Props {}

function Component() {
  const maxPageRef = useRef<number>(1)
  const [page, setPage] = useState<number>(1)
  const { distance } = useScrollBottom2PageBottomDistance()
  useEffect(() => {
    if (distance < 100 && page + 1 <= maxPageRef.current) setPage(page + 1)
  }, [distance, page])

  const [searchText, setSearchText] = useState<string>('')
  const url = import.meta.env.VITE_BASE_URL
  const { isLoading, data, error } = useSWR(sortQueryOrder(url + '/breeds'))
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const catList = data.map((item) => {
    return { id: item.id, name: item.name }
  })
  maxPageRef.current = Math.ceil(catList.length / 9)
  const catListFiltered = catList.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div className={clsx('')}>
      <Search searchText={searchText} setSearchText={setSearchText}></Search>
      <BoardDisplay catList={catListFiltered} page={page}></BoardDisplay>
    </div>
  )
}

export default Component
