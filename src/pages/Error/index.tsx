import React from 'react'

const ErrorPageContainerStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
}
export const ErrorPage= () => {
  return (
    <React.Fragment>
       <div className="err-page-container" style={ErrorPageContainerStyle}>
          <h1 style={{color: "black"}}>PAGE NOT FOUND</h1>
       </div>
    </React.Fragment>
  )
}
