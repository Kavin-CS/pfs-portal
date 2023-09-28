import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    selectEmpty: {
        minWidth: 100,
        marginTop: '16px',
        padding: 10,
        height: '36px',
        marginBottom: 16,
        backgroundColor: theme.palette.KenColors.kenWhite
    },
}));

const DropDown = (props) => {
    const { data, onchange, value } = props;
    console.log(props);
    const options = []
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    id="simple-select-label"
                    value={value}
                    displayEmpty='true'
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                </Select>
            </FormControl>
        </div>
    )

}

export default DropDown;