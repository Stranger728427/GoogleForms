import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteForm = ({id,formContainers,setFormContainers}) => {
 // const deleteTotalform = () => {
      //   const totalform = document.querySelector('.form-container');
      //   if (totalform) {
      //     totalform.remove();
      //   }
      // } 
      const deleteTotalform =()=>{
         setFormContainers(
          formContainers.filter((formContainer)=>formContainer.id !== id)
          )
         }
  
  return (
    <>
      <span onClick={deleteTotalform}><DeleteIcon/></span>
      
    </>
  ) 
}

export default DeleteForm



