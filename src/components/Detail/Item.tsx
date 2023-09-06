import { clsx } from 'clsx'
import { GrDocumentDownload } from 'react-icons/gr/index.js'
import { saveAs } from 'file-saver'
import { last } from 'lodash-es'
interface Props {
  url: string
  name: string
}
import { Toaster, toast } from 'sonner'

function Component({ url, name }: Props) {
  async function handleClick() {
    const imageName = last(url.split('/'))
    const pathname = new URL(url).pathname

    async function download() {
      const res = await fetch('/imageProxy' + pathname)
      const blob = await res.blob()
      saveAs(blob, `${name} ${imageName}`)
    }
    toast.promise(download, {
      loading: 'downloading',
      success: 'download success',
      error: 'download failed',
    })
  }

  return (
    <div className={clsx('relative')}>
      <img src={url} alt="" />
      <div
        className={clsx(
          'z-10 absolute top-1/2 -translate-y-1/2 right-2',
          'text-5xl bg-white rounded bg-opacity-50',
          'hover:bg-blue-400 transition-colors',
        )}
        onClick={handleClick}
      >
        <GrDocumentDownload></GrDocumentDownload>
      </div>
      <Toaster />
    </div>
  )
}

export default Component
