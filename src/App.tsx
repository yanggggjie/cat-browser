import { clsx } from 'clsx'
import _ from 'lodash-es'
import Board from './components/Board/Board.tsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail.tsx'
import NotFound from './components/NotFound.tsx'

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
