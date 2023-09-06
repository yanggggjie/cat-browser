import { clsx } from 'clsx'
import useSWR from 'swr'
import * as QueryString from 'qs'
import sortQueryOrder from '../../utils/sortQueryOrder.js'
interface Props {
  id: string
}

function Component({ id }: Props) {
  const url =
    import.meta.env.VITE_BASE_URL +
    '/images/search' +
    QueryString.stringify(
      {
        breeds_id: id,
        limit: 1,
      },
      {
        addQueryPrefix: true,
      },
    )
  const { isLoading, error, data } = useSWR(sortQueryOrder(url))
  if (isLoading)
    return <div className={clsx('w-[300px] h-[200px]')}>Loading...</div>
  if (error) return <div>Error</div>
  const cat = data[0]
  return (
    <>
      <img
        className={clsx('w-[300px] h-[200px]', 'rounded-xl', 'object-cover')}
        src={cat.url}
        alt=""
      />
    </>
  )
}

export default Component
