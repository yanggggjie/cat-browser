import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import globalAxios from '../globalAxios.ts'
interface Props {}

function Component({}: Props) {
  async function fetcher(url: string) {
    return await globalAxios.get(url, {
      params: {
        b: 2,
        a: 1,
        c: 3,
      },
    })
  }
  const { data, isLoading, error } = useSWR('/search', fetcher)
  if (isLoading) return <div>loading</div>
  if (error) return <div>error</div>
  return <div></div>
}

export default Component
