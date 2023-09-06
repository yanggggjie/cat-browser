import { clsx } from 'clsx'
import Board from './components/Board/Board.js'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail.js'
import NotFound from './components/NotFound.js'

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
