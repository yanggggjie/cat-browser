import { clsx } from 'clsx'
import useSWR from 'swr'
import * as QueryString from 'qs'
import Item from './Item.jsx'
interface Props {
  id: string
  name: string
}

function Component({ id, name }: Props) {
  const { isLoading, error, data } = useSWR(
    import.meta.env.VITE_BASE_URL +
      `/images/search` +
      QueryString.stringify(
        {
          breed_ids: id,
          limit: 9,
          page: 0,
        },
        {
          addQueryPrefix: true,
        },
      ),
  )
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      {data.map((item) => {
        return <Item key={item.id} name={name} url={item.url}></Item>
      })}
    </div>
  )
}

export default Component
