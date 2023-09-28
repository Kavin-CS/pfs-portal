import React from 'react';
import { Grid, Box, Typography,makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Av1 from '../../../assets/Avatar/Avatar3.png';
import Av2 from '../../../assets/Avatar/Avatar2.png';
import LikeIcons from '../../../assets/icons/Like.svg';
import ViewIcons from '../../../assets/icons/Enable.svg';

const useStyles = makeStyles(theme=>({
    root:{
        padding:8,
    },
    img:{
        maxWidth:75,
        maxHeight:50,
    },
    title:{
        fontSize:10,
        color:theme.palette.KenColors.neutral100,
    },
    subTitle:{
        fontSize:12,
        color:theme.palette.KenColors.neutral900,
    },
    description:{
        fontSize:10,
        color:theme.palette.KenColors.neutral400,
    },
    gridItem:{
        paddingTop:8,
        paddingBottom:8,
    },
}))

export default function TrendingStories(props) {
    const classes = useStyles();
    const {object} = props;
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={4} sm={4} md={4}>
                    <img src={object.Img} className={classes.img}></img>
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Typography className={classes.title}>{object.Title}</Typography>
                    <Typography className={classes.subTitle}>{object.SubTitle}</Typography>
                </Grid>
            </Grid>
            <Typography className={classes.description}>
                {object.Description}
            </Typography>
            <Grid container spacing={1} className={classes.gridItem}>
                <Grid item xs={6} sm={6} md={6}>
                    <img src={Av1}></img>
                    <img src={Av2}></img>
                    <img src={Av1}></img>
                    &nbsp;
                    <span className={classes.description}>{object.Creators}Creators</span>
                </Grid>
                <Grid item xs={6} sm={6} md={6} spacing={1} >
                    <Box display="flex" justifyContent="space-around">
                        <span><img src={ViewIcons} style={{width:25,height:20}}></img><span className={classes.title}>&nbsp;{object.Views}</span></span>
                        <span><img src={LikeIcons} style={{width:25,height:20}}></img><span className={classes.title}>&nbsp;{object.Likes}</span></span>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
        </Box>
    )
}
