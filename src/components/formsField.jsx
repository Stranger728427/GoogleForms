import React, { useEffect, useState } from "react";
import "../App.css";
import ImageIcon from "@mui/icons-material/Image";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteForm from "./DeleteForm";
import Description from "./Description";
import CopyForms from "./CopyForms";

const FormsField = () => {
  const [formContainers, setFormContainers] = useState([
    {
      id: 0,
      selectedOption: "checkbox",
      addOption: [{ name: "option 1" }],
      required: false,
      handleRadio: false,
      // isFormActive:true,
    },
  ]);

  const handleRequiredIcon = (index) => {
    setFormContainers(
      formContainers.map((container, i) =>
        i === index
          ? {
            ...container,
            required: !container.required,
          }
          : container
      )
    );
  };

  //console.log(formContainers)

  const handleAddOption = (index) => {
    setFormContainers(
      formContainers.map((container, i) => {
        if (i === index) {
          const newOption = {
            name: `option ${container.addOption.length + 1}`,
          };
          return {
            ...container,
            addOption: [...container.addOption, newOption],
          };
        }
        return container;
      })
    );
  };

  const deleteOption = (index, optionIndex) => {
    setFormContainers(
      formContainers.map((container, i) => {
        if (i === index) {
          return {
            ...container,
            addOption: container.addOption.filter(
              (_, idx) => idx !== optionIndex
            ),
          };
        }
        return container;
      })
    );
  };

  useEffect(() => {
    handleAddOption(1);
  }, []);

  const handleSelectedOptionChange = (index, value) => {
    setFormContainers(
      formContainers.map((container, i) =>
        i === index
          ? { ...container, selectedOption: value, handleMultipleChoice: false }
          : container
      )
    );
  };

  const handleOptionNameChange = (formIndex, optionIndex, value) => {
    setFormContainers(
      formContainers.map((container, i) => {
        if (i === formIndex) {
          const updatedOptions = container.addOption.map((option, idx) =>
            idx === optionIndex ? { ...option, name: value } : option
          );
          return { ...container, addOption: updatedOptions };
        }
        return container;
      })
    );
  };

  const handleRadioChange = (formIndex, optionIndex) => {
    setFormContainers(
      formContainers.map((container, i) => {
        if (i === formIndex) {
          return { ...container, handleRadio: optionIndex };
        }
        return container;
      })
    );
  };

  // const hanldeFormActive = (formIndex) =>{
  //   setFormContainers(
  //     formContainers.map((container, i) => {
  //       if (i === formIndex) {
  //         return { ...container, handleActive: true };
  //         }
  //         return container;
  //     }
  //   ))
  // }

  useEffect(() => {
    handleOptionNameChange();  
  }, []);

  return (
    <div className="outer-container">
      <Description />
    
      {formContainers.map((container, index) => (

       
      
        <div className="form-container" key={container.id}>
          <form>
            <div className="header">
              <input type="text" placeholder="Untitled Form" />
              <span>
                <ImageIcon />
              </span>
              <select
                className="choices"
                value={container.selectedOption}
                onChange={(e) =>
                  handleSelectedOptionChange(index, e.target.value)
                }
              >
                <option value="checkbox">Checkbox</option>
                <option value="radio">Multiple choice</option>
                <option value="dropdown">DropDown</option>
                <option value="file">File upload</option>
              </select>
            </div>

            {container.addOption.map((field, idx) => (
              <ul className="body" key={idx}>
                <input
                  type={container.selectedOption}
                  id={`option-${container.id}-${idx}`}
                  checked={
                    container.selectedOption === "radio" &&
                    container.handleRadio === idx
                  }
                  onChange={() => handleRadioChange(index, idx)}
                />
                <input
                  type="text"
                  value={field.name}
                  onChange={(e) =>
                    handleOptionNameChange(index, idx, e.target.value)
                  }
                />

                <span onClick={() => deleteOption(index, idx)}>
                  {container.addOption.length > 1 ? <ClearIcon /> : ""}
                </span>
              </ul>
            ))}
            <span onClick={() => handleAddOption(index)}>Add option</span>

            <div className="footer">
              <CopyForms
                formContainers={formContainers}
                setFormContainers={setFormContainers}
              />
              <DeleteForm 
                 id={container.id}
                 formContainers={formContainers}
                 setFormContainers={setFormContainers}
              />
              <p>|</p>
              <p>Required</p>
              <span
                onClick={() => handleRequiredIcon(index)}
                className="required-icon"
              >
                {container.required ? (
                  <span style={{ color: "blue" }}>
                    <ToggleOnIcon />
                  </span>
                ) : (
                  <ToggleOffIcon />
                )}
              </span>
              <MoreVertIcon />
            </div>
          </form>
        </div>
      
    
      ))}
    </div>
  );
};

export default FormsField;
