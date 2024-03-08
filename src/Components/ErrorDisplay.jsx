import React from 'react'

const ErrorDisplay = ({msg}) => {
  return (
    <div style = {{color:"red" ,fontSize: '40px'}}>{msg}</div>
  )
}

export default ErrorDisplay