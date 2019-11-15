import React from 'react'

// Hooks
import useCounter from './../hooks/useCounter'

export default () => {
  return (
    <div className="component">
      {useCounter()}
    </div>
  )
}
