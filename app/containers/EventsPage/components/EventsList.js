import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import kenColors from "../../../utils/themes/KenColors";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    topContainer: {
        display: 'inline-flex',
        fontFamily: `'Open Sans', 'sans-serif'`,
        width: '100%'
    },
    eventListContainer : {
        // maxHeight: '410px',
        // overflow: 'auto'
    },
    eventList: {
        paddingBottom:'10px',
        textAlign: 'left',
        margin: '20px 0px',
        borderBottom: '1px solid #'+kenColors.lightGray,
    },
    items: {
        margin: '10px 0px'
    },
    date: {
        margin: '5px 0px',
        color:theme.palette.KenColors.tertiaryGreen500,
    },
    title: {
        margin: '5px 0px',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        color: theme.palette.KenColors.primary,
    },
    description: {
        margin: '5px 0px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: theme.palette.KenColors.neutral100,
    },
    SearchBoxContainer: {
        float: 'right',
        position: 'absolute',
        top: '0px',
        right: '0px',
        width: '136px'
    }
    
}));

export default function EventsList(props) {
    const classes = useStyles();
    const [events, setEvents] = React.useState(props.eventsList);

    


    const renderSwitch = (month) => {
        switch(month) {
          case 'Jan':
            return kenColors.tertiaryGreen300;
          case 'Feb':
            return kenColors.tertiaryBlue300;
          case 'Mar':
            return kenColors.tertiaryTeal300;
          case 'Apr':
            return kenColors.tertiaryPurple300;
          case 'May':
            return kenColors.tertiaryBlue500;
          case 'Jun':
            return kenColors.tertiaryPurple500;
          case 'Jul':
            return kenColors.tertiaryRed500;
          case 'Aug':
            return kenColors.tertiaryTeal500;
          case 'Sep':
            return kenColors.tertiaryYellow500;
          case 'Oct':
            return  kenColors.tertiaryGreen500;
          case 'Nov':
            return kenColors.neutral400;
          case 'Dec':
            return kenColors.neutral900;
          default:
            return kenColors.neutral900;
        }
      }
      
    return (

        <div>
            <div className={classes.eventListContainer}>
                {events.map((event, index) => {
                    const color = renderSwitch(event.month);
                    return (
                        <div key={index} className={classes.eventList}>
                            <Typography variant="subtitle1" className={classes.title}> {event.title}</Typography>
                            <Typography variant="subtitle1" className={classes.description}> {event.description}</Typography>
                            <Typography variant="subtitle1" className={classes.description}>Location:- {event.location}</Typography>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}