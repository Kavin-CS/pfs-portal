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
      <p>
        <u>
          <strong>Tenses are basically categorized as follows :</strong>
        </u>
      </p>

      <h2 className={classes.secondaryTag}>
        <strong>Present Tense:-</strong>
      </h2>

      <h3 className={classes.secondaryTag}>1. Simple Present tense :</h3>

      <p>
        &nbsp; &nbsp; A general ongoing, regular or scheduled activity.&nbsp;
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;In Simple Present, the action is simply mentioned and
        there is nothing being said about its completeness.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;It is used to talk about an action which happens on a
        regular basis.
      </p>

      <p>&nbsp; &nbsp; For example: i.) I take English classes every Monday.</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You play football.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.) John drives the bike very fast.
      </p>

      <p>
        <strong>
          &nbsp;&nbsp; &nbsp;<u>Form :-</u>
        </strong>
      </p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[VERB] + s/es in third person</p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Verb "+s/es" form is used</p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;- If subject is 3rd person
        singular.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;- The verb is used in its original
        form.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; - If subject is 1st and/or 2nd
        person singular.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; - If subject is 1st and/or 2nd
        person plural.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; - If subject is 3rd person plural.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>2. Present Continuous Tense :</h3>

      <p>&nbsp; &nbsp; An action occurring now.&nbsp;</p>

      <p>
        &nbsp;&nbsp; &nbsp;In the Present Continuous tense, the action is
        on-going/ still going on and hence continuous.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;The present continuous tense is used to talk about
        actions that are happening at this current moment.
      </p>

      <p>&nbsp; &nbsp;&nbsp;For example: i.) I am studying.</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) She is eating the apple.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii,) They are playing cricket.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form :-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[am/is/are + present participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Use first form of the verb “+ing”.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Singular 3rd person subject — use
        ‘is’.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Plural 1st, 2nd and 3rd person and
        singular 2nd person subject — use ‘are’.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;1st person singular — use ‘am’.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + be (is, am, are) + Verb+
        -ing + Object.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>3. Present Perfect Tense :</h3>

      <p>
        &nbsp; &nbsp; A
        <span lineHeight=" 1.6;">
          n action started in the past that has been completed in, or has
          relevance to, the present.
        </span>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;In the Present Perfect tense, the action is complete
        or has ended and hence termed Perfect.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;The exact time when the action happened is not
        important and hence, it is not mentioned in this tense.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I have already studied the tenses today.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You have slept well today.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;&nbsp;He has played cricket.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[has/have + past participle]</p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + has/have + past tense of
        verb&nbsp;+ Object.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>
        4. Present Perfect Continuous Tense :
      </h3>

      <p>
        &nbsp; &nbsp; A
        <span lineHeight=" 1.6;">
          n action still continuing from the past to the present.
        </span>
      </p>

      <p>
        <span lineHeight=" 1.6;">
          &nbsp; &nbsp; In the Present Perfect Continuous tense, the action has
          been taking place for some time and is still ongoing.
        </span>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;The duration for which the action has been going on
        is usually mentioned in the present perfect continuous tense.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I have been learning English for three
        years.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You have been working skillfully.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;&nbsp;He has been playing cricket.
      </p>

      <p>
        &nbsp;&nbsp;{' '}
        <u>
          <strong>Form :-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[has/have + been + present
        participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Use the first form of the verb +
        “–ing”.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Singular subject (has been),
        Plural subject or I (have been).
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;‘Since’— if the point of time is
        mentioned.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;‘For’ — if the duration of time is
        specified.
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <strong>Past Tense:-</strong>
      </h2>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>1. Simple Past Tense :</h3>

      <p>&nbsp; &nbsp; An action that happened in the past.</p>

      <p>
        &nbsp;&nbsp; &nbsp;In the Simple Past tense, the action is simply
        mentioned and understood to have taken place in the past.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;The action started and ended sometime in the past but
        the time may or may not be mentioned.
      </p>

      <p>&nbsp; &nbsp;&nbsp;For example: i.) I went to the school.</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.)&nbsp;
        <span lineHeight=" 1.6;">John ate the banana.</span>
      </p>

      <p>
        <span lineHeight=" 1.6;">
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;iii.) You bought the chair.
        </span>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[VERB+ed] or past tense of
        irregular verbs
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + past tense of verb +
        Object.
      </p>

      <h3>&nbsp;</h3>

      <h3 className={classes.secondaryTag}>2. Past Continuous Tense :</h3>

      <p>
        &nbsp; &nbsp; An action that happened at a specific point in the past.
      </p>

      <p>
        &nbsp; &nbsp; In the Past Continuous tense, the action was ongoing till
        a certain time in the past.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;This tense is used to talk about an action at a
        particular time in the past.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I was washing the car when it rained.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You are&nbsp;
        <span lineHeight=" 1.6;">was drinking mango juice.</span>
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;Sheena was cleaning the shelf.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[was/were + present participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure :-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + was/were + Verb in its
        -ing form + Object.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>3. Past Perfect Tense :</h3>

      <p>
        &nbsp; &nbsp; A
        <span lineHeight=" 1.6;">
          n action that happened before another event in the past.
        </span>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;The Past Perfect tense is used to express something
        that happened before another action in the past.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I had washed the car before it rained.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You&nbsp;had drunk sweet coffee.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.) Drake&nbsp;had played hockey.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[had + past participle]</p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure :-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + had + past participle
        form of verb + Object.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>
        4. Past Perfect Continuous Tense :
      </h3>

      <p>
        &nbsp; &nbsp; An action that happened before a certain time in the past,
        to show duration.
      </p>

      <p>
        &nbsp; &nbsp; The Past Perfect Continuous tense is used to express
        something that started in the past and continued until another time in
        the past.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I had been going to school for a year
        when it was closed.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.)&nbsp;You had been baking the cookies.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;John had been driving the car.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form :-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[had been + present participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + had + been + Verb (ing)
        + object.
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>Future Tense:-</h2>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>1. Simple Future Tense :</h3>

      <p>&nbsp; &nbsp; An action to be completed in the future.</p>

      <p>
        &nbsp;&nbsp; &nbsp;The Simple Future tense is used when we plan or make
        a decision to do something. Nothing is said about the time in the
        future.
      </p>

      <p>&nbsp; &nbsp; For example: i.) I will go to the cinema.</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You will drive the scooter.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;Anna will buy the house.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[will + verb]</p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[am/is/are + going to + verb]</p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + will + Verb + object.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Subject + going to + Verb +
        object.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>2. Future Continuous Tense :</h3>

      <p>
        &nbsp; &nbsp; An action occurring at a specific point in the future.
      </p>

      <p>
        <span lineHeight=" 1.6;">
          &nbsp; &nbsp; The future continuous tense is used to express action at
          a particular moment in the future.
        </span>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;However, the action will not have finished at the
        moment.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I will be fishing this time next week.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.)&nbsp;You will be buying the cookies.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;Adam will be drinking the coffee.
      </p>

      <p>&nbsp;</p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[will be + present participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[am/is/are + going to be + present
        participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;'will' + 'be' + present participle
        of the verb (ing).
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>3. Future Perfect Tense :</h3>

      <p>
        &nbsp; &nbsp; An action that finishes in the future, before or at the
        time of another future action.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;The Future Perfect tense expresses an action that
        will occur in the future before another action or time in the future.
      </p>

      <p>
        &nbsp; &nbsp; For example: i.) I will have learned all the tenses by
        tomorrow.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; ii.) You&nbsp;will have slept before John arrives.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.) John&nbsp;will have played hockey.
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Form:-</strong>
        </u>
      </p>

      <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[will have + past participle]</p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[am/is/are + going to have + past
        participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <u>
          <strong>Structure:-</strong>
        </u>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;'will' + 'have' + 'past participle
        of the verb'.
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>
        4. Future Perfect Continuous Tense :
      </h3>

      <p>
        &nbsp; &nbsp; An action at a certain point in the future, expressing
        duration.&nbsp;
      </p>

      <p>
        <span lineHeight=" 1.6;">
          &nbsp; &nbsp; Future Perfect Continuous is used to talk about an
          on-going action before some point in the future.
        </span>
      </p>

      <p>
        <span lineHeight=" 1.6;">
          &nbsp; &nbsp; For example: i.) I will have been studying English for
          three years this summer.
        </span>
      </p>

      <p>
        <span lineHeight=" 1.6;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; ii.)&nbsp;You will have been sleeping for two
          hours when John arrives.
        </span>
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; iii.)&nbsp;
        <span lineHeight=" 1.6;">
          John will have been playing flute.
        </span>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;
        <strong>
          <u>Form:-</u>
        </strong>
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[will have been + present
        participle]
      </p>

      <p>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;[am/is/are + going to have been +
        present participle]
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Tense Conversion. Retrieved 9 April 2021,
          from cdac.olabs.edu.in/?sub=84&brch=24&sim=193&cnt=1
        </Typography>
      </div>
    </div>
  );
}


