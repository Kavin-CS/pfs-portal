import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const cardStyles = makeStyles((theme) => ({
    icon: {
        padding: 8,
    },
    nameWrap: {
        padding: 8,
        borderLeft: `1px solid ${theme.palette.KenColors.neutral20}`
    },
    name: {
        marginBottom: 4,
        fontSize: 14
    },
    card:{
        border:`1px solid ${theme.palette.KenColors.neutral20}`,
        borderRadius:3,
    },

}))


export function AwardsCard(props) {
    const { data } = props;
    const classes = cardStyles();
    return (
        <Paper className={classes.card} elevation={0}> 
            <Grid container alignItems="center" >
                <Grid item>
                    <img src={data.icon} className={classes.icon} alt="icon" />
                </Grid>
                <Grid item xs>
                    <Grid container className={classes.nameWrap} direction="column">

                        <Typography color="primary" variant="body1" className={classes.name}>
                            {data.name}
                        </Typography>
                        <Typography variant="body2">
                            {data.date}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}


export default function Awards(props) {
    const { awards } = props;
    return (
        <Grid container spacing={2} direction="column">
            {awards.map(award => <Grid item xs={12} sm={6} md={4} lg={4}>
                <AwardsCard data={award} />
            </Grid>)
            }
        </Grid>
    )
}