import React from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArticleLogo from '../../../assets/imageArticle.svg'

const data = [
    {
        genre: "Technology",
        title: "AI can be the best thing ever for humanity",
        details: "The next Ideathon is to open all undergraduates and postgraduate students who are pursuing a Bachelor's or Master's Degree in any field."
    },
    {
        genre: "Archaelogy",
        title: "Underground mega-monument found near Stonehenge",
        details: "Archaeologists used high-tech tools to uncover ancient underground pits near Stonehenge. The find may offer insights into Britain’s Stone Age culture."
    },
    {
        genre: "Science",
        title: "For teens, big problems may lead to meaningful research",
        details: "Several teens who competed at the Regeneron Science Talent Search applied their STEM know-how to solve problems they or their communities faced."
    },
    {
        genre: "Physics",
        title: "A contrast between shadows and light can now generate electricity",
        details: "A new device exploits the contrast between bright spots and shade to produce a current that can power small electronics."
    },
    {
        genre: "TECH",
        title: "Scientists Say: GPS",
        details: "A GPS system relies on satellites orbiting the planet, constantly sending signals back to receivers on Earth."
    },
]


const useStyles = makeStyles(theme => ({
    root: {
       margin:"8px 0px 8px 0px",
    },
    dropDown: {
        display: 'flex',
    },
    button: {
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
    },
    genre: {
        fontSize: '10px',
        lineHeight: '14px',
        color: theme.palette.KenColors.neutral400,
    },
    title: {
        fontSize: '14px',
        lineHeight: '18px',
        color: theme.palette.KenColors.primary,
    },
    time: {
        fontSize: '10px',
        lineHeight: '14px',
        color: theme.palette.KenColors.neutral100,
    },
    details: {
        fontSize: '10px',
        lineHeight: '14px',
        color: theme.palette.KenColors.neutral400,
        margin:"8px 0px 8px 0px",
    },
    info: {
        marginLeft: '8px', 
        width: '72%',
        [theme.breakpoints.only("xs")]: {
            width: '60%',
        } 
    }


}));


export default function GetStartedArticles() {
    const classes = useStyles();


    return (
        <Paper elevation={0}>
            {
                data && data.map(item=>(
                    <Paper className={classes.root} elevation={0}>
                        <Grid container spacing={1}>
                            <Grid item xs={4} sm={4} md={4}>
                                <img src={ArticleLogo}></img>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8}>
                                <Typography className={classes.genre}>{item.genre}</Typography>
                                <Typography className={classes.title}>{item.title}</Typography>
                                <Typography className={classes.time}>Time ago</Typography>
                            </Grid>
                        </Grid>
                        <Typography className={classes.details}>
                          {item.details}
                        </Typography>
                        <Divider />
                        
                    </Paper>

                ))
            }
        </Paper>
    );
}
