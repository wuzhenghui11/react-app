import { useSearchParams } from 'react-router-dom'

function About () {
  const searchParams = useSearchParams()
  console.log(searchParams)
  return (
    <div>
      About
    </div>
  )
}

export default About
