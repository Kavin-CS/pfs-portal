import React from 'react';
import { Paper, Grid, Typography, makeStyles, Box } from '@material-ui/core';
import PdfIcon from '../../../../assets/pdf.svg'
import DownloadIcon from '../../../../assets/download.svg'


const useStyles = makeStyles((theme) => ({
    divImage: {
        display: 'flex',
        width: 38,
        height: 38,
        backgroundColor: '#F4F5F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        marginRight: 8,
    },
    titleTypo: {
        maxWidth: '162px',
        lineHeight: '18px',
        color: theme.palette.KenColors.primary,
    },
    itemCard: {
        margin: 8,
        border: '1px solid #F4F5F7',
        borderRadius: 3,
        padding: 8,


    }
}))

export default function ClassroomDocument(props) {
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
                                    <img src={PdfIcon}></img>
                                </div>
                            </Grid>
                            <Grid item style={{ marginLeft: 8 }}>
                                <Typography className={classes.titleTypo} variant='body2'>{el.title}</Typography>
                            </Grid>
                            <Grid item>
                                <img src={DownloadIcon}></img>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            })}
        </Grid>

    )
}