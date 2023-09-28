import React from 'react';
import {Box,Typography,makeStyles,Divider} from '@material-ui/core';

const useStyle = makeStyles(theme=>({
    root:{

    },
    heading:{
        fontSize:14,
        color:theme.palette.KenColors.primary,
    },
    Description:{
        fontSize:12,
        color:theme.palette.KenColors.neutral400,
        margin:"8px 0px 8px 0px",
    },
}))

export default function HowToCard(props) {
    const classes = useStyle();
    const {object} = props;
    return (
        <Box mt={2}>
            <Typography className={classes.heading}>{object.Heading}</Typography>
            <Typography className={classes.Description}>{object.Description}</Typography>
            <Divider />
        </Box>
    )
}
