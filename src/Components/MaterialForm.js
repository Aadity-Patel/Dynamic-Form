import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { data } from './data';
import { Button } from '@mui/material';
import { Field,reduxForm } from 'redux-form';
import TableData from './TableData';
const MaterialForm = (props) => {
    const { handleSubmit } = props
    let fd={}
    const [showTable,setShowtable]=useState(false)
    const[v,setValue]=useState("")
    const[errorMessage,setErrorMessage]=useState("")
    const[count,setCount]=useState(0)
    const validate=(e)=>{
        const value=e.target.value
        setValue(value)
        // console.log(value);
        if(v==null || v==""){
            setErrorMessage("This field is required")
        }
        else if(v.length<e.target.min_length || v.length>e.target.max_length){
            setErrorMessage(`The length should be minimum ${e.target.min_length} and maximum ${e.target.max_length}`)
        }

        else{
            setErrorMessage("")
        }

        return errorMessage;
    }
  return (
    <div className='container'>
    <form className='form-outer-wrapper' onSubmit={handleSubmit((formValues)=>{
        console.log(formValues);
        setCount(count+1)
        fd[count]=formValues;
        setShowtable(true)
    })}>
        {
            data.schema.field_groups.map((item,index)=>{
                return(
                    <div key={index}>
                        <Grid container spacing={3} key={index}>
                            <Grid item xs={12} sm={12}>
                            <h2>{item.name}</h2>
                             <p className='error'>{errorMessage}</p>
                        </Grid>
                        {
                            item.fields.map((data,index)=>{
                                return(
                                   <div>
                                        <Grid item key={index}>
                                            {
                                                data.type=="DROPDOWN"?
                                                <div className='row'>
                                                    <label>{data.name}</label>
                                                    <Field className='field' name={data.name} style={{ width: 200 }} component="select" onBlur={(e)=>{validate(e)}}>
                                                    <option/>
                                                        {
                                                            data.data_source_local.options.map(itm=>{
                                                                return(
                                                                    <option style={{ width: 200 }}>{itm.label}</option>
                                                                )      
                                                            })
                                                        }
                                                </Field>
                                                </div>
                                                :
                                                <div className='row'>
                                                    <label>{data.name}</label>
                                                    <Field className='field' component="input" name={data.name} 
                                                     label={data.name} type={data.type.toLowerCase()} max_length={data.max_length} min_length={data.min_length}
                                                     onBlur={(e)=>{validate(e)}}
                                                     />

                                                </div>
                                            }
                                        </Grid>
                                       
                                    </div>
                                )
                            })
                        }
                        </Grid>
                    </div>
                )
            })
        }
        <Button type='submit' disabled={errorMessage.length!=0}>Submit</Button>
        <br></br>
    </form>
    <div>{showTable? 

        <TableData list={fd}/>:null
    
        }</div>
    </div>
  )
}

export default reduxForm({
    form:'user'
})(MaterialForm)