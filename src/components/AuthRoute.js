import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthRoute ({ children }) {
  console.log('token =>', getToken())
  if (getToken()) {
    return <>{ children }</>
  } else {
    return <Navigate to="/login" replace />
  }
}

export default AuthRoute