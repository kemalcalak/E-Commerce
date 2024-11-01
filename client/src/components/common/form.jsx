import React from 'react';
import { 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl, 
  TextareaAutosize 
} from '@mui/material';

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <TextField
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
            fullWidth
            variant="outlined"
          />
        );
        break;

      case "select":
        element = (
          <FormControl fullWidth>
            <InputLabel>{getControlItem.label}</InputLabel>
            <Select
              name={getControlItem.name}
              value={value}
              label={getControlItem.label}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            >
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <MenuItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        );
        break;

      case "textarea":
        element = (
          <TextareaAutosize
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
            minRows={3}
            style={{ 
              width: '100%', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid rgba(0, 0, 0, 0.23)' 
            }}
          />
        );
        break;

      default:
        element = (
          <TextField
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
            fullWidth
            variant="outlined"
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px' 
      }}>
        {formControls.map((controlItem) => (
          <div key={controlItem.name}>
            <InputLabel shrink>{controlItem.label}</InputLabel>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button 
        disabled={isBtnDisabled} 
        type="submit" 
        variant="contained" 
        fullWidth 
        style={{ marginTop: '16px' }}
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;