import React, { useState, useEffect} from 'react'
import { getObj } from '../Functions/Fuctions'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';


const ViewList = ({setEditTable, setDeleteTable, handleSumit }) => {
  const [listdata, setList] = useState([])


	useEffect(()=>{
		async function loadObj(){
			const res = await getObj()
		if(res.status === 200){
			setList(res.data)	
		}		
		}
		loadObj()
	},[handleSumit])

	
	
  return (
    <>
		{listdata.length <= 0 ? 
    (
    <div className='text-center mt-5'>
      <div className='mb-5'>
        <h2 className='title'>You dont have Objects</h2>
      </div>
      <Spinner animation="grow" variant="primary" />
      </div>)
    :(<Table striped bordered hover variant="ligth" size='sm'>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {listdata.map(({ id, name, constelacion })=>(
        <tr>
        <td  id={id}>{id}</td>
        <td  id={name}>{name}</td>
        <td  id={constelacion}>{constelacion}</td>
        <td>
          <div  className='container	mr-1 ml-1'>
            <Button  variant="primary" onClick={()=>setEditTable({id, name, constelacion})}>Edit</Button>
            <span > </span>
            <Button variant="danger" onClick={()=>setDeleteTable(id)}>Delete</Button>
          </div>
        </td>
      </tr>
      ))}
    </tbody>
  </Table>)}
		</>
  )
}

export {
    ViewList
} 