import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { Grid, Box, Typography, Chip, Paper, makeStyles, Divider } from '@material-ui/core';
import CircularProgressWithLabel from '../../../../components/ChartWidgets/CircularProgressWithLabel';
import Like from '../../../../assets/icons/Like.svg';
import DisLike from '../../../../assets/icons/Dislike.svg';
import { useTranslation } from 'react-i18next';




const feeds = [
    {
        comment: "The wording of these reviews is a bit misleading. He is a great teacher and makes the material interesting, but this class is NOT an easy A. He graded easier than my last professor, but I would work hard on my papers and get Cs. But he always explained the grade and helped me improve in meetings. Took a lot of time to help me. I ended with a B. ",
        tags: [
            "Strict", "Hardworking"
        ],
        date: "8, Jul, 2020",
        rating: 3.5,
        likes: 20,
        dislikes: 0
    },
    {
        comment: "Thanks for taking the load while I travel around - you're the best. Always in a good mood even when more tasks are heaped on you!",
        tags: [
            "Caring", "Hardworking"
        ],
        date: "10, Sep, 2020",
        rating: 3,
        likes: 10,
        dislikes: 20
    },

]

const feedOverall = {
    rating: 3.5,
    reviews: 26,
    percentage: 50,
    tags: [
        "Strict",
        "Caring",
        "Hard Working"
    ]
}

const useStyles = makeStyles(theme => ({
    cardHeader:{
        fontSize:'16px',
        color:theme.palette.KenColors.neutral100
    },
    rating:{
        fontSize:'48px',
        color:theme.palette.KenColors.primary
    },
    chip: {
        marginRight: theme.spacing(1),
        fontSize:'12px',
        color: theme.palette.KenColors.neutral100,
        background:theme.palette.KenColors.neutral20,
    },
    feedLike: {
        height: '1rem'
    },
    feedLikeText: {
        fontSize: '0.725rem',
        padding: 3
    },
    feedItemGrid: {
        marginTop: theme.spacing(2),
        fontSize:'14px',
        color: theme.palette.KenColors.neutral400,
    },
    textFont:{
        fontSize:'14px',
        color: theme.palette.KenColors.neutral400,
    },
}))

function Feedback(props) {
    const {t} = useTranslation();
    const classes = useStyles();
    return (

        <Paper>
            <Box p={2}>
                <Typography className={classes.cardHeader}>
                    {t("headings:Feedback")}
                </Typography>
                {/* over all section */}
                <Box py={2}>
                    <Grid container spacing={3}>

                        <Grid item >
                            <Typography variant="h4" className={classes.rating}>
                                {feedOverall.rating}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Rating name="overall-rating" defaultValue={feedOverall.rating}
                                 precision={0.5} />
                            
                            <Typography className={classes.textFont}>

                                {feedOverall.reviews} {t("Reviews")}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1}>
                                <Grid item>
                                <CircularProgressWithLabel value={feedOverall.percentage} label={feedOverall.percentage + "%"} />
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}> 
                                <Typography className={classes.textFont}>
                                {t("Would_Attend_Again")}
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Box mb={1}>
                            <Typography className={classes.textFont}>
                                {t("Top_Tags")}
                            </Typography>
                            </Box>
                            {feedOverall.tags && feedOverall.tags.map(tag => <Chip variant="outlined" label={tag} size="small" className={classes.chip} />)}

                        </Grid>
                    </Grid>
                </Box>
                <Divider />

                {/* Feedbacks */}
                {feeds && feeds.map(feed => <FeedbackItem data={feed} />)}
            </Box>
        </Paper>
    )
}

Feedback.propTypes = {

}

function FeedbackItem({ data }) {
    const classes = useStyles();
    return <Box py={2}>
        <Grid container justify="space-between" >
            <Grid item >
                <Rating name="rating" defaultValue={data.rating} precision={0.5} size="small" />
            </Grid>
            <Grid item>
                <Typography className={classes.textFont}>{data.date}</Typography>
            </Grid>
        </Grid>
        <Typography className={classes.feedItemGrid}>
            {data.comment}
        </Typography>

        <Grid container justify="space-between" className={classes.feedItemGrid}>
            <Grid item >
                {data.tags && data.tags.map(tag => <Chip variant="outlined" size="small" label={tag} className={classes.chip} />)}
            </Grid>
            <Grid item>
                <img src={Like} alt="like" className={classes.feedLike} />
                <Typography className={classes.feedLikeText} display="inline">
                    {data.likes}
                </Typography>
                &nbsp;&nbsp;
                <img src={DisLike} alt="dis-like" className={classes.feedLike} />
                <Typography className={classes.feedLikeText} display="inline">
                    {data.dislikes}
                </Typography>
            </Grid>
        </Grid>

    </Box>
}

export default Feedback

