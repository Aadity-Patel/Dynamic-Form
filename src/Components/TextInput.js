import TextField from '@mui/material/TextField';
import React from 'react'

export const TextInput = ({name,required,type,label,max_length,min_length}) => {
  return (
    <div>
        <TextField 
            variant="outlined" 
            fullwidth="true" 
            name={name} 
            required={required} 
            label={label} 
            type={type.toLowerCase()} 
            maxLength={max_length} 
            minLength={min_length}
        />
    </div>
  )
}
