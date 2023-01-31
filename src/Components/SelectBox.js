import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
export const SelectBox = ({label}) => {
  return (
        <option
            // disablePortal
            // fullwidth="true"
            // id="combo-box-demo"
            // className='options'
            // options={options}
            // style={{ width: 200 }}
            // renderInput={(params) => <TextField {...params}  label={label}/>}
            > {label}</option>
  )
}
