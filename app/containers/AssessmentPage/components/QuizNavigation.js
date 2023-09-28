import React from 'react';
import {
    Paper,
    Grid,
    Box,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { call } from 'file-loader';

const BOX_STATUS = {
    answered: 'Answered',
    flagged: 'Flagged',
    skipped: 'Skipped',
    notVisited: 'Not Visited',
    ansAndFlagged: 'Answered & Flagged'
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: 10,
    },
    navTitleText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.KenColors.neutral900,
    },
    navContent: {
        marginTop: 5,
        marginBottom: 10,
        height: '55vh',
        overflow: 'auto'
    },
    navBoxContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    navBox: {
        borderRadius: 3,
        width: 32,
        height: 32,
        padding: 5,
        margin: '0 7px 7px 0',
        cursor: 'pointer'
    },
    navBoxText: {
        color: theme.palette.KenColors.neutral400,
        fontWeight: 600,
        fontSize: 14,
        textAlign: 'center'
    },
    colorBoxContainer: {
        display: 'flex',
        marginBottom: 10
    },
    colorBox: {
        borderRadius: 3,
        width: 24,
        height: 24,
        [theme.breakpoints.down('sm', 'md')]: {
            fontSize: 15
        },
    },
    colorBoxText: {
        fontSize: 13,
        color: theme.palette.KenColors.neutral400,
        marginLeft: 5,
        alignSelf: 'center',
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 10
        },
    },
    ansBoxColor: {
        background: theme.palette.KenColors.secondaryBlue,
        '& > *': {
            color: theme.palette.KenColors.gradeSectionHeaderLabel,
        }
    },
    flgBoxColor: {
        background: theme.palette.KenColors.orange11,
        '& > *': {
            color: theme.palette.KenColors.orange10,
        }
    },
    skipBoxColor: {
        background: theme.palette.KenColors.neutral40,
        '& > *': {
            color: theme.palette.KenColors.neutral400,
        }
    },
    notVisitedBoxColor: {
        background: theme.palette.KenColors.sideNavColor,
        border: `1px solid ${theme.palette.KenColors.neutral40}`,
        '& > *': {
            color: theme.palette.KenColors.neutral400,
        }
    },
    ansFlgBoxColor: {
        position: 'relative',
        background: theme.palette.KenColors.secondaryBlue,
        '& > *': {
            color: theme.palette.KenColors.gradeSectionHeaderLabel,
        },
        '& > span': {
            position: 'absolute',
            right: 2,
            top: 2,
            borderRadius: 3,
            width: 6,
            height: 6,
            background: theme.palette.KenColors.orange10
        },
    },
    navSectionText: {
        fontSize: 13,
        color: theme.palette.KenColors.neutral400,
        margin: '5px 0'
    }
}))

function getBoxStatusColor(status) {
    const classes = useStyles();

    switch (status) {
        case BOX_STATUS.answered:
            return classes.ansBoxColor;

        case BOX_STATUS.flagged:
            return classes.flgBoxColor;

        case BOX_STATUS.skipped:
            return classes.skipBoxColor;

        case BOX_STATUS.notVisited:
            return classes.notVisitedBoxColor;

        case BOX_STATUS.ansAndFlagged:
            return classes.ansFlgBoxColor;

        default:
            return classes.notVisitedBoxColor;
    }
}

export function NavBox({ queNumber, status }) {
    const classes = useStyles();
    return (
        <Box className={[classes.navBox, getBoxStatusColor(status)].join(" ")}>
            <span className={classes.navDot}></span>
            <Typography className={classes.navBoxText}>
                {queNumber}
            </Typography>
        </Box>

    )
}

export function ColorBox({ status }) {
    const classes = useStyles();
    return (
        <Box className={classes.colorBoxContainer}>
            <Box className={[classes.colorBox, getBoxStatusColor(status)].join(" ")}>
                <span className={classes.colorBoxDot}></span>
            </Box>
            <Typography className={classes.colorBoxText}>
                {status}: 0
            </Typography>
        </Box>
    )
}

export default function QuizNavigation({ quizData }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Paper square elevation={0} className={classes.root}>
            <Typography className={classes.navTitleText}>
                {t('headings:Quiz_Navigation')}
            </Typography>
            <Box className={classes.navContent}>
                {Object.keys(quizData)?.map((section, index) => (
                    <span key={index}>
                        <Typography className={classes.navSectionText}>
                            {quizData[section].name}
                        </Typography>
                        <Box className={classes.navBoxContainer}>
                            {quizData[section]?.quizItem?.map((question, index) => (
                                <NavBox key={index} queNumber={index + 1} status={question.status} />
                            ))}
                        </Box>
                    </span>
                ))}
            </Box>
            <Box>
                <Grid item xs container>
                    <Grid item xs={5}>
                        <ColorBox
                            status={BOX_STATUS.answered}
                        />
                        <ColorBox
                            status={BOX_STATUS.flagged}
                        />
                        <ColorBox
                            status={BOX_STATUS.skipped}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <ColorBox
                            status={BOX_STATUS.notVisited}
                        />
                        <ColorBox
                            status={BOX_STATUS.ansAndFlagged}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper >
    )
}