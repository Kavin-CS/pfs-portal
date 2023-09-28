import React from 'react';
import {
    Box,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';

const useStyles = makeStyles(theme => ({
    question: {
        color: theme.palette.KenColors.neutral400,
        fontSize: 14,
        fontWeight: 600
    },
    questionTag: {
        marginRight: 16
    },
    queMarks: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        alignSelf: 'end',
    },
    queMarksText: {
        color: theme.palette.KenColors.gradeSectionHeaderLabel,
        fontSize: 12,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    queMarksIcon: {
        color: theme.palette.KenColors.flagIconColor,
        border: `1px solid ${theme.palette.KenColors.flagIconBorderColor}`,
        borderRadius: 3,
        marginLeft: 16,
    },
    optionsText: {
        fontSize: 13,
        color: theme.palette.KenColors.neutral400,
    },
}))

export default function QuizContent({ quizItem }) {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item container xs={10}>
                <Grid item>
                    <Box >
                        <Typography className={[classes.question, classes.questionTag].join(" ")}>1.</Typography>
                    </Box>
                </Grid>

                <Grid item container xs={12} sm>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                            <Typography className={classes.question}>
                                {quizItem.question}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.optionsText}>
                                {quizItem.options[0]}
                            </Typography>
                            <Typography className={classes.optionsText}>
                                {quizItem.options[1]}
                            </Typography>
                            <Typography className={classes.optionsText}>
                                {quizItem.options[2]}
                            </Typography>
                            <Typography className={classes.optionsText}>
                                {quizItem.options[3]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} className={classes.queMarks}>
                <Typography className={classes.queMarksText}>
                    +1 mark
                </Typography>
                <Typography className={classes.queMarksIcon}>
                    <FlagOutlinedIcon fontSize='small'></FlagOutlinedIcon>
                </Typography>
            </Grid>
        </Grid>

    )
}