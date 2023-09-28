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
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
  },

  headTag: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <div class="divContent">
        <h1 className={classes.headTag}>Books</h1>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Manual of Secondary Science Kit for
          Classes IX and X - Published by NCERT
        </p>

        <h1 className={classes.headTag}>Websites</h1>

        <ul>
          <li>
            <a href="http://books.google.co.in/books?id=hlaR_mn31skC&amp;pg=PA80&amp;lpg=PA80&amp;dq=spring+balance+action+and+reaction&amp;source=bl&amp;ots=CsWKgM-1AY&amp;sig=x1K0esiutoXwsOno26fk9it8z0E&amp;hl=en&amp;sa=X&amp;ei=aUsrUI29Jse4rAep8oCYDg&amp;ved=0CD4Q6AEwAQ#v=onepage&amp;q=spring%20balance%20action%20and%20reaction&amp;f=false ">
              New Living Science PHYSICS for CLASS 9 With More Numerical
              Problems
            </a>
            <a
              href="https://books.google.co.in/books?id=hlaR_mn31skC&amp;pg=PA80&amp;lpg=PA80&amp;dq=spring+balance+action+and+reaction&amp;source=bl&amp;ots=CsWKgM-1AY&amp;sig=x1K0esiutoXwsOno26fk9it8z0E&amp;hl=en&amp;sa=X&amp;ei=aUsrUI29Jse4rAep8oCYDg&amp;ved=0CD4Q6AEwAQ#v=onepage&amp;q=spring%20balance%20action%20and%20reaction&amp;f=false"
              target="_blank"
            >
              {' '}
              - Dhiren M Doshi
            </a>
          </li>
          <li>
            <a href="http://books.google.co.in/books?id=lMwnqynKhtkC&amp;pg=PA46&amp;lpg=PA46&amp;dq=spring+balance+action+and+reaction&amp;source=bl&amp;ots=3jMDWVSFdx&amp;sig=CFpN71DorA670IcD9Do_OWq8cwM&amp;hl=en&amp;sa=X&amp;ei=aUsrUI29Jse4rAep8oCYDg&amp;ved=0CEcQ6AEwAw#v=onepage&amp;q=spring%20balance%20action%20and%20reaction&amp;f=false">
              Longman science Physics 9
            </a>
            <a
              href="https://books.google.co.in/books?id=lMwnqynKhtkC&amp;pg=PA46&amp;lpg=PA46&amp;dq=spring+balance+action+and+reaction&amp;source=bl&amp;ots=3jMDWVSFdx&amp;sig=CFpN71DorA670IcD9Do_OWq8cwM&amp;hl=en&amp;sa=X&amp;ei=aUsrUI29Jse4rAep8oCYDg&amp;ved=0CEcQ6AEwAw#v=onepage&amp;q=spring%20balance%20action%20and%20reaction&amp;f=false"
              target="_blank"
            >
              {' '}
              -&nbsp; Singh Sardar
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Force required to move a wooden block.
          Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=108&cnt=1
        </Typography>
      </div>
    </div>
  );
}
