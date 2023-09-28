import React from 'react';
import { Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ParticipantsStoriesCard from './ParticipantStoriesCard';
import {useTranslation} from 'react-i18next';

const data = [
    {
        Name: "Bill Gates",
        Company: "Founder, Microsoft",
        Details: "I don’t think there’s a better way to do this",
    },
    {
        Name: "P. Mathews",
        Company: "Winner, 2019",
        Details: "It seemed impossible. But the team did it!",
    },
    {
        Name: "Ratan Tata",
        Company: "Founder, Tata Consultancy",
        Details: "Nothing is impossible until you start",
    },
    {
        Name: "Mark Zuckerberg",
        Company: "Founder, Facebook",
        Details: "Move fast and break things",
    },
]


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
        background:  theme.palette.KenColors.neutral20,
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
        color:  theme.palette.KenColors.neutral900,
    },
    nameDetails: {
        fontSize: '10px',
        lineHeight: "14px",
        color:  theme.palette.KenColors.neutral400,
    },
    des: {
        fontSize: '14px',
        lineHeight: '22px',
        color:  theme.palette.KenColors.neutral900,
        width: '70%',
    }
}));


export default function ParticipantsStories() {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <Grid container direction="column" className={classes.root} spacing={1} >
            <Typography className={classes.heading}>{`${t("headings:Participants_Stories")} (${data.length})`}</Typography>
            {
                data && data.map(item => (
                    <ParticipantsStoriesCard data={item} />
                ))
            }

        </Grid>
    );
}
