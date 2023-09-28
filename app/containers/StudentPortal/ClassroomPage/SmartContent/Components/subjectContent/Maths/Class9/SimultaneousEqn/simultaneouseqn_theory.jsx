import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';



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

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <strong>Linear Equations:</strong>
      </p>

      <p>
        Consider the following equation:
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        2x + 5 = 0<br />
        Its solution, i.e., the root of the equation, is -5/2.
      </p>

      <p>
        While solving an equation, you must always keep the following points in
        mind:
        <br />
        The solution of a linear equation is not affected when:
        <br />
        (i) the same number is added to (or subtracted from) both the sides of
        the equation.
        <br />
        (ii) you multiply or divide both the sides of the equation by the same
        non-zero
        <br />
        number.
      </p>

      <p>
        Let us now consider the following situation:
        <br />
        In a One-day International Cricket match between India and Sri Lanka
        played in
        <br />
        Nagpur, two Indian batsmen together scored 176 runs. Express this
        information in the
        <br />
        form of an equation.
        <br />
        Here, you can see that the score of neither of them is known, i.e.,
        there are two
        <br />
        unknown quantities. Let us use x and y to denote them. So, the number of
        runs scored
        <br />
        by one of the batsmen is x, and the number of runs scored by the other
        is y. We know
        <br />
        that,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        x + y = 176,
        <br />
        which is the required equation.
        <br />
        This is an example of a linear equation in two variables. It is
        customary to denote
        <br />
        the variables in such equations by x and y, but other letters may also
        be used. Some
        <br />
        examples of linear equations in two variables are:
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        1.2s + 3t = 5,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        p + 4q = 7,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        5s + 2t = 7 and
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        2x - 7y = 3.
        <br />
        Note that you can put these equations in the form 1.2s + 3t – 5 = 0,
        <br />
        p + 4q – 7 = 0, 5s + 2t – 7 = 0 and 2x – 7y – 3 = 0, respectively.
        <br />
        So, any equation which can be put in the form ax + by + c = 0, where a,
        b and c<br />
        are real numbers, and a and b are not both zero, is called a linear
        equation in two
        <br />
        variables. This means that you can think of many such equations.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Solving simultaneous equations. Retrieved
          8 April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=213&cnt=1
        </Typography>
      </div>
    </div>
  );
}
