import { clsx } from 'clsx'
import _ from 'lodash-es'
import globalAxios from '../globalAxios.ts'
interface Props {}

function Component({}: Props) {
  async function handleClick() {
    const res = await globalAxios.get('/artists/4Z8W4fKeB5YxbusRsdQVPb')
    console.log(res.data)
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Component
