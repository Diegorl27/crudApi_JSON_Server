import React from 'react'
import Button from 'react-bootstrap/esm/Button'


export const NewUser = ({ onClick }) => {
  return (
    <div>
      <Button variant="primary" onClick={onClick}>Create new Object</Button>
    </div>
  )
}
