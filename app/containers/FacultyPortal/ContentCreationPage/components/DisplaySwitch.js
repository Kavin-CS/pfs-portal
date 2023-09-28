import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useTranslation} from 'react-i18next';
import { Typography, Grid, Box } from '@material-ui/core';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 30,
        height: 14,
        padding: 0,
        margin: theme.spacing(1),
        color: theme.palette.KenColors.secondaryYellow1,
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.KenColors.primary,

            '& + $track': {
                backgroundColor: theme.palette.KenColors.kenWhite,
                opacity: 1,
            },
        },
        '&$focusVisible $thumb': {
            color: theme.palette.KenColors.secondaryYellow1,
            border: `6px solid ${theme.palette.KenColors.kenWhite}`,
        },
    },
    thumb: {
        width: 12,
        height: 12,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const useStyle = makeStyles((theme) => ({
    title: {
        paddingRight: 8,
        fontSize: '10px',
        lineHeight: '18px',
        color: theme.palette.KenColors.neutral400
    }
}))


export default function DisplaySwitch() {
    const classes = useStyle();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });
    const {t} = useTranslation()

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <Box mt={2}>
                <Grid container direction="row" alignItems='center' >
                    <Typography className={classes.title}>{t("Disable")}</Typography>
                    <FormControlLabel
                        control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                    />
                </Grid>
            </Box>


        </FormGroup>
    );
}
