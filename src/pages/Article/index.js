import { useSearchParams } from 'react-router-dom'

function Article () {
  const searchParams = useSearchParams()
  console.log(searchParams)
  return (
    <div>
      Article
    </div>
  )
}

export default Article
