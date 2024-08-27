
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div style={{margin: '0 auto', background:'antiquewhite',textAlign:'center'}}>
      <h1>Sorry 😞  we encounter error! it will be rectify soon</h1>
      
      {/* <h1>{error.statusText + ' ' + error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre> */}
    </div>
  )
}

export default ErrorElement