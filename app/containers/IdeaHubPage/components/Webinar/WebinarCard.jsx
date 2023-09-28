import React from 'react';
import {Box,Grid,Typography, makeStyles,Divider} from '@material-ui/core';
import PlayImg from '../../../../assets/icons/play-circle.svg';
import VideoImg from '../../../../assets/Images/Rectangle 221.svg';

const useStyles = makeStyles(theme=>({
    root:{},
    video:{
        width:'100%',
        height:140,
        backgroundImage: `url(${VideoImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat", /* Do not repeat the image */
        backgroundSize: "cover", /* Resize the background image to cover the entire container */
        display:"flex",
        justifyContent:'flex-end',
        alignItems:"flex-end",
        padding:8,
    },
    detals:{
        fontSize:12,
        color:theme.palette.KenColors.neutral400,
        margin:"10px 0px 10px 0px",
    },
    avatarName:{
        fontSize:12,
        color:theme.palette.KenColors.neutral700,
    },
    avatarPost:{
        fontSize:10,
        color:theme.palette.KenColors.neutral100,
    },
    grid:{
        margin:'0px 0px 8px 0px',
    },
}))

export default function WebinarCard(props) {
    const classes = useStyles();
    const {object} = props;

    return (
        <Box mt={2}>
            {/* <img src={object.Video} className={classes.video}></img> */}
            <Box className={classes.video}>
                <img src={PlayImg} className={classes.playImg}></img>
            </Box>
            <Typography className={classes.detals}>
                {object.Details}
            </Typography>
            <Grid container spacing={1} className={classes.grid}>
                <Grid item xs={2} sm={2} md={2}>
                    <img src={object.Avatar}></img>
                </Grid>
                <Grid item xs={10} sm={10} md={10}>
                    <Typography className={classes.avatarName}>{object.AvatarName}</Typography>
                    <Typography className={classes.avatarPost}>{object.AvatarPost}</Typography>
                </Grid>
            </Grid>
            <Divider/>
        </Box>
    )
}
