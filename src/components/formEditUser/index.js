import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const FormEditUser = ({ dataToEdit, setDataToEdit, handleSumit }) => {

  const [form, setForm] = useState({
    id:`${dataToEdit.id}`,
    name:`${dataToEdit.name}`,
    constelacion:`${dataToEdit.constelacion}`
  })

  const handleChange = (e) =>{
    const { name, value } = e.target
    setForm({ ...form,[name]:value })
    setDataToEdit(form)
  }
  
  const _handleSumit = (e) =>{
    e.preventDefault()
    if(!form.name || !form.constelacion){
      alert('Datos incompletos')
    }else{
      handleSumit(dataToEdit)
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
  size='15' 
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
  size='15' 
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
