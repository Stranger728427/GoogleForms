import React from 'react'
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const CopyForms = ({formContainers,setFormContainers}) => {
 

    const addFormContainer = () => {
        setFormContainers([
          ...formContainers,
          {
            id: formContainers.length,
            selectedOption: "checkbox",
            addOption: [],
            required: false,
          },
        ]);
      };
    
      
  return (
    <>
      <span onClick={addFormContainer}><ContentCopyIcon/></span>
    </>
  )
}

export default CopyForms