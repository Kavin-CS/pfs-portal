import React from 'react';
import { Grid, Box, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IdeaHubGetStarted from './components/IdeaHubGetStarted';
import ParticipantsStories from './components/ParticipantsStories';
import IdeaHubCarousel from './components/IdeaHubCarousel';
import TrendingIcon from '../../assets/Images/image 37.png';
import TrendingStoriesCard from './components/TrendingStoriesCard';
import {useTranslation} from 'react-i18next';


const useStyles = makeStyles(theme => ({
  root: {
    zIndex: -1,
  },
  dropDown: {
    display: 'flex',
  },
  button: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
  },
  trending:{
    fontSize:14,
    color:theme.palette.KenColors.neutral100,
    fontWeight:600,
    marginBottom:16,
  },


}));

const trending = [
  {
    Img:TrendingIcon,
    Title:"Fintech",
    SubTitle:"CODE logic hacks for the new and emerging agribusiness",
    Description:"This hackathon is to multi-categorize items with high precision. NLP is a domain which is so old but still too much to explore.",
    Views:253,
    Likes:182,
    Creators:8,
  },
  {
    Img:TrendingIcon,
    Title:"Survey",
    SubTitle:"Engaging Customer Surveys",
    Description:"Easily gather crucial data for your business operations with SurveyMonkey. Unlimited Online Surveys. Easy & Powerful. 24/7 Customer Support. Real-time surveys. Survey on the go. Mobile survey.",
    Views:300,
    Likes:182,
    Creators:4,
  },
  {
    Img:TrendingIcon,
    Title:"Customer program",
    SubTitle:"Customer Loyalty Programs",
    Description:"Customer loyalty program is a marketing approach that recognizes and rewards customers who purchase or engage with a brand on a recurring basis. A company may dole out points or perks, and graduate customers to higher levels of loyalty the more they buy.",
    Views:286,
    Likes:183,
    Creators:3,
  },
  {
    Img:TrendingIcon,
    Title:"Focus",
    SubTitle:"Focus on Building Culture",
    Description:"Culture is the ground in which human beings grow.Through things like social norms, customs, prohibitions, culture transmits a complex web of rules that tells people what to pay attention to, what to take responsibility for, and what to do in any given situation.",
    Views:253,
    Likes:190,
    Creators:5,
  },
  ];


export default function IdeaHubPage() {
  const classes = useStyles();
  const {t} = useTranslation();
  var events = [
    {
      title: 'AI in the ‘New Normal’',
      date: '27-09-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
      imageUrl: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80'
    },
    {
      title: 'Next Vision ‘2030’ ',
      date: '16-08-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
      imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Machine Learning And Robotics',
      date: '6-09-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
      imageUrl: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'
    },

  ];


  return (
    <Grid container direction="column" className={classes.root} spacing={2}>
      <Grid item>
        <IdeaHubCarousel events={events} />
      </Grid>
      <Grid item container direction='row' spacing={2} >
        <Grid item xs={12} sm={6} md={4} >
          <Paper id="container">
            <IdeaHubGetStarted />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <ParticipantsStories />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <Box p={2}>
              <Typography className={classes.trending}>
                {`${t("headings:Trending_Ideas")} (${trending.length})`}
              </Typography>
           
              <Grid container direction="column">
                {
                  trending && trending.map(item=>(
                    <Grid item>
                      <TrendingStoriesCard object={item} />
                    </Grid>  
                  ))
                }
              </Grid>
            </Box>
          </Paper>
        </Grid>

      </Grid>

    </Grid>
  );
}
