import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const AddDeleteForm = () => {

      const deleteTotalform = () => {
        const totalform = document.querySelector('.form-container');
        if (totalform) {
          totalform.remove();
        }
      } 
  return (
    <>
      <span onClick={deleteTotalform}><DeleteIcon/></span>
      
    </>
  )
}

export default AddDeleteForm