import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
}

function Component({ searchText, setSearchText }: Props) {
  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }
  return (
    <div className={clsx('p-3', 'grid place-items-center')}>
      <input
        type="text"
        placeholder={'type to filter'}
        className={clsx('w-80 block', 'text-xl', 'border-2 rounded-md')}
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </div>
  )
}

export default Component
