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
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  header: {
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
      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Basic Rule.</span> A singular subject (she, Bill, car)
        takes a singular verb (is, goes, shines), whereas a plural subject
        (they,we) takes a plural verb(are, go, shine).
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.g. </span>
        </span>
        <span>
          &nbsp;- <span class="T10">singular subject</span> - My brother is a
          nutritionist.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- <span class="T10">plural subject</span> - My sisters are
          mathematicians.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
      </p>

      <p class="P1">
        <span class="T1">Rule 1. </span>A subject will come before a phrase
        beginning with <span class="T1">of</span>. This is a key rule for
        understanding subjects. The word{' '}
        <span>
          &nbsp;<span class="T1">of</span> is the culprit in many, perhaps most,
          subject-verb mistakes.{' '}
        </span>
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T11">Incorrect:</span> A bouquet of yellow roses
          lend color and fragrance to the room.{' '}
        </span>
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T10">Correct:</span> A bouquet of yellow roses
          lends . . . (bouquet lends, not roses lend){' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 2.</span> Two singular subjects connected by
        <span class="T1"> or, either/or, or neither/nor</span> require a
        singular verb.
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T2">E.g.</span>
          <span class="T12">&nbsp; &nbsp; &nbsp; &nbsp; - </span>My aunt{' '}
          <span class="T8">or</span> my uncle is arriving by train today.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- <span class="T8">Neither</span> Juan{' '}
          <span class="T8">nor</span> Carmen is available.
        </span>
        <span>&nbsp; </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- <span class="T8">Either</span> Kiana{' '}
          <span class="T8">or </span>Casey is helping today with stage
          decorations.{' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 3.</span> The verb in an{' '}
        <span class="T1">or, either/or, or neither/nor </span>sentence agrees
        with the noun or pronoun closest to it.
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.</span>
          <span class="T3">g.&nbsp; &nbsp; &nbsp; &nbsp; - </span>
          <span class="T8">Neither</span> the plates <span class="T8">nor</span>{' '}
          the serving bowl goes on that shelf.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- <span class="T8">Neither</span> the serving bowl{' '}
          <span class="T8">nor</span> the plates go on that shelf.{' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 4.</span> As a general rule, use a plural verb
        with two or more subjects when they are connected by{' '}
        <span class="T1">and</span>.
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T6">E.g.</span>
          <span class="T13">&nbsp; &nbsp; &nbsp; &nbsp; -</span> A car and a
          bike are my means of transportation.{' '}
        </span>
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">Exceptions: </span>
        </span>
        <span>&nbsp;- Breaking and entering is against the law. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;- The bed and breakfast was charming. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;In those sentences, breaking and entering and bed and breakfast
          are compound nouns.{' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 5.</span> Sometimes the subject is separated from
        the verb by such words as{' '}
        <span class="T1">
          along with, as well as, with, besides, not. &nbsp; &nbsp; &nbsp;
          &nbsp;{' '}
        </span>
        These words and phrases are not part of the subject. Ignore them and use
        a singular verb when the subject is <span>&nbsp;singular. </span>
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.</span>
          <span class="T5">g.</span>{' '}
        </span>
        <span>
          &nbsp;- The politician, <span class="T8">along with </span>the
          newsmen, is expected shortly.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- Excitement, <span class="T8">as well as </span>nervousness, is
          the cause of her shaking.{' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 6.</span> With words that indicate portions :{' '}
        <span class="T1">a lot, a majority, some, all, etc. </span>Rule 1 given
        earlier is reversed, and we are{' '}
        <span>
          &nbsp;guided by the noun after of. If the noun after of is singular,
          use a singular verb. If it is plural, use a plural verb.{' '}
        </span>
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.</span>
          <span class="T4">g.</span>{' '}
        </span>
        <span>&nbsp;- A lot of the pie has disappeared. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;- A lot of the pies have disappeared. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;- A third of the city is unemployed. </span>
      </p>

      <p class="P2">
        <span>&nbsp;</span>
        <span>&nbsp;- A third of the people are unemployed. </span>
      </p>

      <p class="P2">&nbsp;</p>

      <p class="P2">
        <span class="T1">Rule 7.</span> In sentences beginning with{' '}
        <span class="T1">here</span> or <span class="T1">there</span>, the true
        subject follows the verb.
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.</span>
          <span class="T4">g.</span>
          <span class="T1"> </span>
        </span>
        <span>
          &nbsp;- <span class="T9">There</span> are four hurdles to jump.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- <span class="T8">There</span> is a high hurdle to jump.{' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 8.</span> Use a singular verb with distances,
        periods of time, sums of money, etc., when considered as a unit.
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.</span>
          <span class="T4">g.</span>
          <span class="T1"> </span>
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;Three miles is too far to walk. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;Five years is the maximum sentence for that offense. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;Ten dollars is a high price to pay. </span>
      </p>

      <p class="P3">
        <span>
          &nbsp;
          <span class="T1">Exceptions: &nbsp; &nbsp; &nbsp; &nbsp; - </span>Ten
          dollars (i.e., dollar bills) were scattered on the floor.{' '}
        </span>
      </p>

      <p class="P1">&nbsp;</p>

      <p class="P1">&nbsp;</p>

      <p class="P1">
        <span class="T1">Rule 9.</span> Some collective nouns, such as{' '}
        <span class="T1">family, couple, staff, audience, etc.</span> may take
        either a singular or a plural verb,{' '}
        <span>&nbsp;depending on their use in the sentence. </span>
      </p>

      <p class="P1">
        <span>
          &nbsp;<span class="T1">E.</span>
          <span class="T7">g.&nbsp; &nbsp; &nbsp; &nbsp; - </span>The staff is
          in a meeting.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;Staff is acting as a unit. </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>
          &nbsp;- The couple disagree about disciplining their child.{' '}
        </span>
      </p>

      <p class="P1">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>
          &nbsp;The couple refers to two people who are acting as individuals.
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Subject-Verb Agreement. Retrieved 9 April
          2021, from cdac.olabs.edu.in/?sub=84&brch=28&sim=222&cnt=1
        </Typography>
      </div>
    </div>
  );
}
