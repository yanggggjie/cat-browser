import { clsx } from 'clsx'
import { GrDocumentDownload } from 'react-icons/gr/index.js'
import { saveAs } from 'file-saver'
import { last } from 'lodash-es'
interface Props {
  url: string
  name: string
}

function Component({ url, name }: Props) {
  async function handleClick() {
    const imageName = last(url.split('/'))
    const res = await fetch(url)
    const blob = await res.blob()
    saveAs(blob, `${name}-${imageName}`)
  }

  return (
    <div className={clsx('relative')}>
      <img src={url} alt="" />
      <div
        className={clsx(
          'z-10 absolute top-1/2 -translate-y-1/2 right-2',
          'text-5xl bg-white rounded bg-opacity-50',
        )}
        onClick={handleClick}
      >
        <GrDocumentDownload></GrDocumentDownload>
      </div>
    </div>
  )
}

export default Component
