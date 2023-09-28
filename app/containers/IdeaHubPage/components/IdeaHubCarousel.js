import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'react-calendar/dist/Calendar.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {useTranslation} from 'react-i18next';
import {KEY_DIRECTION} from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cutomCalender: {
        width: '100% !important',
        border: 'none !important'
    },
    carousel: {
        height: 240,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 240px'
    },
    btn: {
        color: theme.palette.KenColors.primary,
        background: theme.palette.KenColors.kenWhite,
        border: `1px solid ${theme.palette.KenColors.neutral60}`,
        borderRadius: '3px',
        position: 'absolute',
        top: '150px',
        left: '56px',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
    },

}));

const renderArrow = direction => (onClickHandler, shouldBeEnabled, label) => {
    if (!shouldBeEnabled) {
        return;
    }

    const styles = {
        position: "absolute",
        top: "45%",
        zIndex: 2,
        background: '#FFFFFF',
        width: '32px',
        height: '32px',
        opacity: 0.8,
        border: 'none'
    };

    if (direction === KEY_DIRECTION.previous) {
        styles.left = 10;
    } else {
        styles.right = 10;
    }

    return (
        <button type="button" onClick={onClickHandler} style={styles}>
            {direction === KEY_DIRECTION.previous ? "<" : ">"}
        </button>
    );
};

export default function IdeaHubCarousel(props) {
    const {events} = props;
    const classes = useStyles();
    const {t} = useTranslation();


    return (
        <div  className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ padding: '5px' }}>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            renderArrowPrev={renderArrow(KEY_DIRECTION.previous)}
                            renderArrowNext={renderArrow(KEY_DIRECTION.next)}
                        >
                            {events.map((event, index) => {
                                return <div className={classes.carousel} style={{ backgroundImage: `url(${event.imageUrl})` }}>
                                    <Button className={classes.btn}>{t("headings:Register")}</Button>
                                </div>
                            })}
                        </Carousel>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
