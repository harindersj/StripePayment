import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Cart from './Cart';
import Checkout from './Checkout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function TopAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Testing
          </Typography>
          <Cart setAuth={(data)=>setAuth(data)} open={auth} />
          {/* <Checkout
           name={'Welcome'}
           description={'Item that you pick'}
           amount={4}
           /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
