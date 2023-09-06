import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import Image from './Image.js'
interface Props {
  catList: { id: string; name: string }[]
  page: number
}

function Component({ catList, page }: Props) {
  const navigate = useNavigate()

  function handleClick(id: string) {
    navigate('/detail/' + id)
  }
  return (
    <div>
      {catList.slice(0, page * 9).map((cat) => {
        return (
          <div
            onClick={() => {
              handleClick(cat.id)
            }}
            key={cat.id}
            className={clsx(
              'inline-block',
              'm-2 p-1  outline w-[300px]',
              'rounded-xl',
            )}
          >
            <Image id={cat.id}></Image>
            <div className={clsx('font-bold text-xl')}>{cat.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Component
