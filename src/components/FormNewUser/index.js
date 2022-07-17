import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export const FormNewUser = ({ handleSumit }) => {

const [form, setForm] = useState({ name:"",  constelacion:"", })

const handleChange = (e) =>{
  const { name, value } = e.target
  setForm({ ...form,[name]:value })
}

const _handleSumit = (e) =>{
  e.preventDefault()
  if(!form.name || !form.constelacion){
    alert('Datos incompletos')
  }else{
    handleSumit({ ...form })
  }
}


  return (
    <div>
      <Form onSubmit={_handleSumit}>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type='text' 
        name='name' 
        placeholder="Enter Name" 
        value={form.name}
        onChange={handleChange}
        required
        />
          
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        type='text' 
        name='constelacion' 
        placeholder="Description" 
        value={form.constelacion} 
        onChange={handleChange}
        required
        />
                  
      </Form.Group>

      <Button tvariant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
