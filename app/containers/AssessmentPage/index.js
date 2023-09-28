import React, { useEffect } from 'react';
import {
    Box,
    Grid,
    makeStyles,
} from '@material-ui/core';
import QuizNavBar from './components/QuizNavBar';
import QuizContent from './components/QuizContent';
import QuizNavigation from './components/QuizNavigation';
import QuizTimer from './components/QuizTimer';
import { getUserDetails } from '../../utils/helpers/storageHelper';

const DUMMY_RESPONSE = {
    name: 'Periodic Assessment',
    totalMarks: 25,
    totalTime: 10,
    totalQuestions: 20,
    quizSection: {
        'Physics': {
            name: 'A. Physics',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Flagged'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Skipped'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Not Visited'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered & Flagged'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Maths': {
            name: 'B. Maths',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'English': {
            name: 'D. English',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }, {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            },
            {
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry1': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry2': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry3': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry4': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry5': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry6': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
        'Chemistry7': {
            name: 'C. Chemistry',
            type: 'Multiple Choice',
            quizItem: [{
                question: "A leguminous plant can restore the soil's concentraion of mineral nutrients. Can you give example of some such platns a leguminous plant can restore?",
                options: ['Options', 'Options', 'Options', 'Options'],
                status: 'Answered'
            }]
        },
    }

}
const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.KenColors.neutral20,
        maxHeight: '91vh',
        overflow: 'hidden',
        margin: '-70px -24px -80px -24px',
        [theme.breakpoints.only('xs')]: {
            overflow: 'auto'
        },
    },
    quizContainer: {
        marginTop: '8px'
    }
}))
export default function AssessmentPage({ drawerChanges }) {
    const classes = useStyles();

    useEffect(() => {
        drawerChanges();
    }, [])

    return (
        <Box data-testid={'assessment-view'}>
            <Grid className={classes.root}>
                <QuizNavBar quizData={DUMMY_RESPONSE}></QuizNavBar>
                <Grid container className={classes.quizContainer}>
                    <Grid item container xs={12} spacing={1}>
                        <Grid item xs={12} sm={8} md={9}>
                            <QuizContent quizData={DUMMY_RESPONSE.quizSection} />
                        </Grid>
                        <Grid container item xs={12} sm={4} md={3} direction='column'>
                            <Grid item>
                                <QuizTimer totalTime={DUMMY_RESPONSE.totalTime} />
                            </Grid>
                            <Grid item >
                                <QuizNavigation
                                    quizData={DUMMY_RESPONSE.quizSection} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}