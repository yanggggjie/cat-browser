import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {}
import { useWindowScroll } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
function Component() {
  const [{ x, y }, scrollTo] = useWindowScroll()

  const defaultData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const [data, setData] = useState(defaultData)
  useEffect(() => {
    const pageBottom = document.documentElement.scrollHeight
    const scrollBottom = y + window.innerHeight
    if (pageBottom - scrollBottom < 100) {
      setData([...data, ...defaultData])
    }
  }, [y])

  return (
    <div className={clsx('space-y-40')}>
      {data.map((value, index) => {
        return <div key={index}>{value}</div>
      })}
    </div>
  )
}

export default Component
