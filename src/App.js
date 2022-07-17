import './App.css';
import { ViewList } from './components/ViewList/index'
import { Header } from './components/Header/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NewUser} from './components/NewUSer/index'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { FormNewUser } from './components/FormNewUser/index'
import { saveObj, editObj, deleteObj, getObj } from './components/Functions/Fuctions'
import { FormEditUser } from './components/formEditUser/index';

function App() {
  
  const [openModal, setOpenModal] = useState(false)
  const [dataToEdit, setDataToEdit] = useState(null)

  const handleSumit =(data) =>{
    if(dataToEdit == null){
      saveObj(data)
      
    }else{
      editObj(dataToEdit)
      
    }

    getObj()
    setOpenModal(!openModal)  
  }
  
  const setEditTable = ({name, constelacion, id}) =>{
    setDataToEdit({name:`${name}`, constelacion:`${constelacion}`, id:`${id}`})
    setOpenModal(true)
   }


  const setDeleteTable = (id) =>{
    deleteObj({id:`${id}`})
  }


  return (
    <>
      <div className='container bg-ligth text-light text-center'>
        <div className='mb-4 mt-4 color-dark'>
          <Header title={'Crud API REST'}/>
        </div>
      </div>
      <div className='container bg-ligth text-light text-center'>
        <div className='mt-4 mb-4'>
          <NewUser onClick={()=>{
            setOpenModal(!openModal)
            setDataToEdit(null)}}/>
        </div>
      </div>
      <div className='container-list'>
        <ViewList 
          setDeleteTable={setDeleteTable} 
          setEditTable={setEditTable} 
          setOpenModal={setOpenModal}
          handleSumit={handleSumit}/>
      </div>
      <div>
      <Modal 
        show={openModal} 
        onHide={()=>{setOpenModal(!openModal)}}>
        <Modal.Header closeButton>
          <Modal.Title>
          {dataToEdit == null ?
          ('New Object') 
          :('Edit Object')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataToEdit == null ?
          (<FormNewUser handleSumit={handleSumit}/>) 
          :(<FormEditUser 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}
            handleSumit={handleSumit}/>)}
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default App;
