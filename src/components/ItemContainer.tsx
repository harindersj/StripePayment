import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from "clsx"
import { Button, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';


const itemsData = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "image": "",
        "price": 1
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "image": "",
        "price": 3
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "image": "",
        "price": 12
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "image": "",
        "price": 5
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "image": "",
        "price": 7
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "image": "",
        "price": 180
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "image": "",
        "price": 140
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "image": "",
        "price": 120
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "image": "",
        "price": 230
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "image": "",
        "price": 330
    }
]
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
        size: {
            width: "80%",
            height: "auto",
            minHeight: "80%",
            marginTop: 10,
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            
        },
        cardContent: {
            width: 200,
            height: 200,
            margin: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        },
        imageSize: {
            width: 100,
            height: 100,
            borderRadius: 100

        }
    }),
);

export default function ItemContainer() {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <div >
            <Paper elevation={3} className={clsx(classes.root, classes.size)} >
                {itemsData.map((value, index) => {
                    return <Paper key={index} className={classes.cardContent}>
                        <img src={`https://source.unsplash.com/random/200x200?sig=${index + 44}`} className={classes.imageSize} alt="render here" />
                        <Typography>{value.name}</Typography>
                        <Button variant="contained" onClick={() => dispatch(addToCart(value.name, value.price))} >${value.price}</Button>

                    </Paper>
                })}


            </Paper>
        </div>
    );
}
