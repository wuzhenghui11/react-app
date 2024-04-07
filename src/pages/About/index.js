import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { create } from 'zustand'
import { Button } from 'antd'

const countStore = (set) => {
  return {
    count: 1,
    inc: () => {
      // 需要拥戴原状态
      set((state) => ({
        count: state.count + 1
      }))
    },
    cre: () => {
      // 不需要原状态
      set({ 
        count: 100
      })
    },
  }
}

const listStore = (set) => {
  return {
    list: [],
    asyncList: async () => {
      // result 是一个原始值 返回一个 Promise 对象 会执行回调方法 resolve 并且将原始值传给回调方法
      // await 返回 Promise 对象的结果
      const result = await Promise.resolve([1, 2]) // [1, 2]
      console.log(result)
      set({
        list: result
      })
    },
  }
}

// const useStore = create((...a) => {
//   return {
//     ...countStore(...a),
//     ...listStore(...a),
//   }
// })

const useStore = create((set) => {
  return {
    list: [],
    count: 1,
    inc: () => {
      // 需要拥戴原状态
      set((state) => ({
        count: state.count + 1
      }))
    },
    cre: () => {
      // 不需要原状态
      set({ 
        count: 100
      })
    },
    asyncList: async () => {
      // result 是一个原始值 返回一个 Promise 对象 会执行回调方法 resolve 并且将原始值传给回调方法
      // await 返回 Promise 对象的结果
      const result = await Promise.resolve([1, 2]) // [1, 2]
      console.log(result)
      set({
        list: result
      })
    },
  }
})

function About () {
  const { count, list, inc, cre, asyncList } = useStore()
  const searchParams = useSearchParams()
  console.log(searchParams)
  useEffect(() => {
    asyncList()
  }, [asyncList])
  return (
    <div>
      About{count}-{list.toString()}
      <Button onClick={inc}>inc</Button>
      <Button onClick={cre}>cre</Button>
      <Button onClick={asyncList}>asyncList</Button>
    </div>
  )
}

export default About
