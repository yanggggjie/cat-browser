import { useEffect, useState } from 'react'

function getCurrentScrollBottom2PageBottomDistance() {
  const pageHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const viewPortHeight = window.innerHeight
  return pageHeight - (scrollTop + viewPortHeight)
}

export default function useScrollBottom2PageBottomDistance() {
  const [distance, setDistance] = useState(
    getCurrentScrollBottom2PageBottomDistance(),
  )

  function handleScroll() {
    setDistance(getCurrentScrollBottom2PageBottomDistance())
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      return window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return { distance }
}
