import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {useSelector} from "react-redux"
import CartData from './CartData';
import Checkout from './Checkout';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart(props:{setAuth:(data:boolean)=>void,open:boolean}) {

const state= useSelector((state:any)=>state);
console.log(state)

  return (
    <div>
      <Button variant="contained" color="default" onClick={()=>props.setAuth(true)}>
        CheckIn
      </Button>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>props.setAuth(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
      <CartData/>
        <DialogActions>
          <Button onClick={()=>props.setAuth(false)} color="primary">
            Cancel
          </Button>
          <Checkout
            name={'Welcome'}
            description={'Item that you pick'}
            amount={state.total}
            onClick={(value)=>props.setAuth(value)}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
