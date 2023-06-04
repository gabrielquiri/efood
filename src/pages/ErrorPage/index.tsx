import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  if(isRouteErrorResponse(error)){
    return (
      <div>
        <h1>Error Page</h1>
        <div>
          <p>{error.status} - {error.statusText}</p>
          <p>{error.data}</p>
          <h4>Stack:</h4>
          <ul>
            {error.error?.stack?.split('\n').map(line => <li>{line}</li>)}
          </ul>
        </div>
      </div>
    )    
  }

  return(
    <div>
      <h1>Error Page</h1>
        <div>
          <p>Unknown Error</p>
        </div>
    </div>
  )
}

export default ErrorPage