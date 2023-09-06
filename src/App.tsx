import { clsx } from 'clsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from './components/Board/Board'
import Detail from './components/Detail/Detail'
import NotFound from './components/NotFound'

function Component() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Board />}></Route>
        <Route path={'/detail/:id'} element={<Detail />}></Route>
        <Route path={'/404'} element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default Component
