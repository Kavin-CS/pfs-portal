import React from 'react';
import { Paper, Grid, Typography, makeStyles, Button } from '@material-ui/core';
import LessonsIcon from '../../../../assets/LessonsIcon.png'


const useStyles = makeStyles((theme) => ({
    divImage: {
        display: 'flex',
        backgroundColor: '#F4F5F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        marginRight: 8,
    },
    divDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    titleTypo: {
        maxWidth: 141,
        fontSize: '12px',
        lineHeight: '16px',
        color: theme.palette.KenColors.primary,
    },
    itemCard: {
        margin: 8,
        border: '1px solid #F4F5F7',
        borderRadius: 3,
        padding: 4,
    },
    button: {
        textTransform: 'none',
        padding: 0,
        color: theme.palette.KenColors.primary,

    }
}))

export default function ClassroomLessons(props) {
    console.log(props)
    const { data } = props;
    const classes = useStyles();
    return (
        <Grid container style={{ marginTop: 16, flex: '0 auto' }}>

            {data.map((el) => {
                return <Grid item md={4} xs={12} sm={6} >
                    <Paper elevation={0} className={classes.itemCard}>
                        <Grid container alignItems='center'>
                            <Grid item>
                                <div className={classes.divImage}>
                                    <img src={LessonsIcon}></img>
                                </div>
                            </Grid>
                            <Grid item style={{ marginLeft: 8 }}>
                                <div className={classes.divDetails}>
                                    <Typography className={classes.titleTypo} variant='body2'>{el.title}</Typography>
                                    <Grid container justify='space-between' alignItems='center' spacing={4}>
                                        <Grid item>
                                            <Typography variant="body2">{el.price}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.button} variant="outlined">
                                                buy
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            })}
        </Grid>
    )
}