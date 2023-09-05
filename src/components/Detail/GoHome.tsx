import { clsx } from 'clsx'
import _ from 'lodash-es'
import { BiHomeCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Component() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div
      className={clsx('fixed  top-1 left-1  text-5xl')}
      onClick={handleClick}
    >
      <BiHomeCircle></BiHomeCircle>
    </div>
  )
}

export default Component
