import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SWRConfig } from 'swr'

import { BrowserRouter } from 'react-router-dom'
import globalFetcher from './globalFetcher.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SWRConfig
      value={{
        fetcher: globalFetcher,
        revalidateOnFocus: false,
      }}
    >
      <App />
    </SWRConfig>
  </BrowserRouter>,
  // </React.StrictMode>,
)
