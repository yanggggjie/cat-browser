// useSWR fetcher
import globalAxios from './globalAxios.ts'

async function fetcher(url: string) {
  try {
    const res = await globalAxios.get(url)
    return res.data
  } catch (e) {
    console.log('error in fetcher')
    console.log(`url : ${globalAxios.defaults.baseURL + url}`)
    console.log(e)
  }
}

export default fetcher
