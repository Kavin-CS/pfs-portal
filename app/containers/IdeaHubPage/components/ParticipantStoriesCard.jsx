import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BillImage from '../../../assets/billgates.png'
import StartingDoubleCotts from '../../../assets/icons/StartingDoubleCotts.svg';
import EndingDoubleCotts from '../../../assets/icons/EndingDoubleCotts.svg';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: -1,
    },
    heading: {
        margin: '16px 0px 16px 16px',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        textTransform: 'uppercase',
        color: theme.palette.KenColors.neutral100,
    },
    photoContainer: {
        padding: "4px 4px 8px 4px",
        background: theme.palette.KenColors.neutral20,
        borderRadius: '3px 0px 0px 3px',
    },
    card: {
        margin: 8,
        border: `1px solid ${theme.palette.KenColors.neutral20}`,
        borderRadius: '3px',
    },
    name: {
        fontSize: '14px',
        lineHeight: '22px',
        color: theme.palette.KenColors.neutral900,
    },
    nameDetails: {
        fontSize: '10px',
        lineHeight: "14px",
        color: theme.palette.KenColors.neutral400,
    },
    des: {
        fontSize: '14px',
        lineHeight: '22px',
        color: theme.palette.KenColors.neutral900,
        width: '90%',
    }
}));

export default function ParticipantStoriesCaed(props) {
    
    const classes = useStyles();
    const data = props.data;

    return (
        <Grid item className={classes.card}>
        <Paper elevation={0}>
            <Grid container spacing={2}>
                <Grid item className={classes.photoContainer} xs={5} sm={5} md={5} container justify="center" alignItems="center" direction="column">
                    <img src={BillImage}></img>
                    <Typography className={classes.name}>{data.Name}</Typography>
                    <Typography className={classes.nameDetails}>{data.Company}</Typography>

                </Grid>
                <Grid item xs={7} sm={7} md={7}>
                    <div>
                        <Grid container direction="column">
                            <Grid item>
                                <img src={StartingDoubleCotts}></img>
                            </Grid>
                            <Grid item container justify="center">
                                <Typography className={classes.des}>{data.Details}</Typography>
                            </Grid>
                            <Grid item>
                                <img src={EndingDoubleCotts} style={{float:"right"}}></img>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>
            </Grid>
        </Paper>
    </Grid>
    )
}
