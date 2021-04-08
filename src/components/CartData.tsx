import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import {DeleteFromCart} from "../Redux/action"
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutline } from '@material-ui/icons';

const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
});



export default function CartData() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const ReduxState = useSelector((state: any) => state)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>             
                    <TableRow>
                        <TableCell>Item Name</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Delete Item</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {ReduxState.value.map((row: any,index:number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">{row.value.name}</TableCell>
                                <TableCell >{row.value.amount}</TableCell>
                                <TableCell ><IconButton onClick={()=>dispatch(DeleteFromCart(row.value.name,row.value.amount))} ><DeleteOutline /></IconButton></TableCell>
                            </TableRow>
                         
                        )
                    })}
                    <TableRow>
                                <TableCell >Total:{ReduxState.total}</TableCell>
                                </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}
