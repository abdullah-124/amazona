import React from 'react'

export default function MassageBox({variant, message}) {
  return (
    <div className={`alert alert-${variant || 'info'}`}>
      {message}
    </div>
  )
}
