import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import sortQueryOrder from '../../utils/sortQueryOrder.ts'
import { useEffect } from 'react'
import DetailDisplay from './DetailDisplay.tsx'
import GoHome from './GoHome.tsx'

function Component() {
  const navigate = useNavigate()
  const { id } = useParams()

  const url = import.meta.env.VITE_BASE_URL
  const { isLoading, data, error } = useSWR(sortQueryOrder(url + '/breeds'))
  useEffect(() => {
    if (data) {
      const catIdNameMap = {}
      data.forEach((item) => {
        catIdNameMap[item.id] = item.name
      })
      if (!catIdNameMap[id]) {
        navigate('/404')
      }
    }
  }, [data, id, navigate])
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  const catIdNameMap = {}
  data.forEach((item) => {
    catIdNameMap[item.id] = item.name
  })

  return (
    <div>
      <DetailDisplay id={id} name={catIdNameMap[id]}></DetailDisplay>
      <GoHome></GoHome>
    </div>
  )
}

export default Component