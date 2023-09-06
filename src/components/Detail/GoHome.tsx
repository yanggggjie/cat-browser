import { clsx } from 'clsx'
import { BiHomeCircle } from 'react-icons/bi/index.js'
import { useNavigate } from 'react-router-dom'

function Component() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div
      className={clsx('fixed  top-1/2 -translate-y-1/2 left-1  text-5xl')}
      onClick={handleClick}
    >
      <BiHomeCircle></BiHomeCircle>
    </div>
  )
}

export default Component
