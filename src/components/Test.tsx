import { clsx } from 'clsx'
import axios from 'axios'
interface Props {}

function Component({}: Props) {
  async function handleClick() {
    const res = await axios.get('/proxy/login')
    console.log(res.data)
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Component
