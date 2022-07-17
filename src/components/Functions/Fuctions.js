import axios from "axios"

const baseUrl = 'http://localhost:5000/Santos'

async function getObj() {
  try {
    const response = await axios.get(baseUrl)
    if(response.status === 200){
      return response
    }
  } catch (e) {
    console.log(e)
  }
}

async function saveObj(dataObj){
  try {
    const response = await axios.post(baseUrl,dataObj)
  return response   
  } catch (e) {
    console.log(e)
  }
  
}

async function editObj({id,name,constelacion}){
  try {
   await axios.put(`${baseUrl}/${id}`,{
    name,
    constelacion
   })
   getObj()
  
  } catch (e) {
    console.log(e)
  }
}

async function deleteObj({id}){
  try {
    await axios.delete(`${baseUrl}/${id}`)
   } catch (e) {
     console.log(e)
   }
}


export{
  deleteObj,
  editObj,
  getObj,
  saveObj
}
