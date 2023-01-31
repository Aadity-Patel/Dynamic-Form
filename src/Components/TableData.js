import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { connect} from 'react-redux'
function TableData(list){
  return (
    <TableContainer component={Paper}>
        <Table aria-label="simple-table">
            <TableHead >
                <TableRow>
                    <TableCell >Equipment No</TableCell>
                    <TableCell >First Name</TableCell>
                    <TableCell >Last Name</TableCell>
                    <TableCell >Mobile Phone</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Category</TableCell>
                    <TableCell >Sales tax code</TableCell>
                    <TableCell >Invoice method</TableCell>
                    <TableCell >Invoice Type</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                {
                Object.keys(list['formdata']).map((value,index)=>{
                    return(
                    <TableCell key={index}>{list['formdata'][value]}</TableCell>
                    )
                })
                }
            </TableRow>
        </TableBody>
        </Table>
         
    </TableContainer>
  )
}
const mapStateProps=(state)=>{
    return {
        formdata:state.form.user.values
    }
}
export default connect(mapStateProps)(TableData)