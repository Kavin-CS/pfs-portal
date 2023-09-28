import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
    textAlign: 'left',
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <strong>&nbsp;LCM Method:</strong>
        <br />
        1. Select a variable to eliminate by using LCM method.
        <br />
        2. Calculate the LCM of coefficients of the variable to eliminate, from
        both the equations.
        <br />
        3. Multiply both the equations by 'LCM divided by coefficient of the
        variable to eliminate'.
        <br />
        4. Simplify the equations.
        <br />
        5. Subtract one equation from the another to get one equation in one
        variable.
        <br />
        6. Divide RHS by coefficient of the variable to get value of one
        variable.
        <br />
        7. Substitute this value in any of the two equations to get one equation
        in one variable.
        <br />
        8. Simplify the equation and divide the RHS by the coefficient of the
        variable to get value of the other variable.
      </p>

      <p>
        &nbsp;<strong>Substitution Method:</strong>
        <br />
        1. Select a variable to eliminate by using substitution method.
        <br />
        2. Select the way of substitution i. e. you want to substitute value of
        variable from equation (1) into equation (2) or from equation (2) into
        equation (1).
        <br />
        3. Find an expression for the selected variable.
        <br />
        4. Substitute this expression in place of the variable in other
        equation. (For example, if you have derived expression from equation
        (1), then substitute this expression in equation (2) and vice versa)
        <br />
        5. Simplify this equation and collect the like terms together such that
        you will get one equation in one variable.
        <br />
        6. Divide RHS by the coefficient of the variable in order to get value
        of one variable.
        <br />
        7. Substitute this value in any of the two equations to get one equation
        in one variable.
        <br />
        8. Simplify the equation and divide the RHS by the coefficient of the
        variable to get value of the other variable.
      </p>

      <p>
        <br />
        <strong>Observations:</strong>
        <br />
        Number of variables in a linear equation is equal to the number of
        equations required to find the values of the variables.
      </p>

      <p>
        <br />
        <strong>Result:</strong>
        <br />
        Linear Simultaneous Equations are successfully solved by using any of
        the two methods which are LCM method and Substitution method.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Solving simultaneous equations. Retrieved
          8 April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=213&cnt=2
        </Typography>
      </div>
    </div>
  );
}
