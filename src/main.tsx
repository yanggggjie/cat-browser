import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SWRConfig
      value={{
        // fetcher: (url) => {
        //   return axios.get(url,{
        //     headers: {
        //       'x-api-key': import.meta.env.VITE_API_KEY,
        //   }}).then((res) => {
        //     return res.data
        //   })
        // },
        fetcher: async (url: string) => {
          const res = await axios.get(url)
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
