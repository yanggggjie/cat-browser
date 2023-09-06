import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

function Component() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div className={clsx('grid place-items-center w-screen h-screen')}>
      <h1 className={clsx('text-7xl font-bold')}> Not Found</h1>
      <button className={clsx('text-7xl font-bold')} onClick={handleClick}>
        Go Home
      </button>
    </div>
  )
}

export default Component
