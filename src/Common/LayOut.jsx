import React from 'react'

const LayOut = ({children}) => {
  return (
    <>

      <div className="form" style={{ height:'333px' }}>
        {children}
      </div>

    </>
  )
}

export default LayOut