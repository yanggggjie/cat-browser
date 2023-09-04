import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {}

function Component({}: Props) {
  const obj = {
    name: 'yang',
    age: 10,
    test: '234',
  }

  const obj1 = {
    name: 'yang',
    test: '234',
    age: 10,
  }

  const orderObject = (obj) => {
    return _.fromPairs(_.sortBy(_.toPairs(obj), 0))
  }

  const orderedObj = orderObject(obj)
  const orderedObj1 = orderObject(obj1)

  console.log(orderedObj)
  console.log(orderedObj1)

  return <div></div>
}

export default Component
