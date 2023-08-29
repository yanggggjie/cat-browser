import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

export function sortQuery(url: string) {
  const _url = new URL(url)
  _url.searchParams.sort()
  return _url.toString()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SWRConfig
      value={{
        fetcher: async (url: string) => {
          /*
           ! useSWR use url as cache key
           ! make sure different query string order has the same cache key
           */
          const res = await axios.get(sortQuery(url))
          return res.data
        },
        revalidateOnFocus: false,
      }}
    >
      <App />
    </SWRConfig>
  </BrowserRouter>,
  // </React.StrictMode>,
)
