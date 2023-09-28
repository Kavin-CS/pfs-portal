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
  }
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.secondaryTag}>
        <span fontFamily="verdana,geneva,sans-serif;">
          What is Preposition?
        </span>
      </h2>

      <p>
        <span fontFamily="verdana,geneva,sans-serif;">
          A Preposition is a word placed before a noun or a pronoun to show in
          what relation the person or thing denoted by it stands in regard to
          something else.
        </span>
      </p>

      <p>
        <span fontFamily="verdana,geneva,sans-serif;">
          <strong>Example:</strong>
          <br />
          1. There is a cow in the field.
          <br />
          2. He is fond of tea.
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="verdana,geneva,sans-serif;">
          What are the types of Preposition?
        </span>
      </h2>

      <p textAlign=" justify;">
        <span fontFamily="verdana,geneva,sans-serif;">
          <strong>1. Preposition of Location</strong>
          <br />
          'Preposition of Location' specifies the current location of the
          subject. Prepositions of Location are used when we want to give exact
          location of an item to the user. Commonly used prepositions of
          location are <em fontWeight="normal">in, at, inside,</em> etc.
          <br />
          &nbsp;&nbsp; &nbsp;
          <br />
          <strong>2. Preposition of Time</strong>
          <br />
          'Preposition of time' indicates the time at which the action happened.
          It adds extra information to the verb. Commonly used prepositions of
          time are <em fontWeight="normal">in, before, after,</em> etc.
        </span>
      </p>

      <p>
        <span fontFamily="verdana,geneva,sans-serif;">
          <strong>3. Preposition of direction/movement</strong>
          <br />
          'Preposition of direction' specifies the direction in which the
          subject is moving. Commonly used prepositions of direction/movement
          are <em fontWeight="normal">into, through, across, </em>etc.
        </span>
      </p>

      <hr />
      <h2 className={classes.secondaryTag}>Preposition of Direction</h2>

      <p textAlign=" justify;">
        <span fontFamily="verdana,geneva,sans-serif;">
          Preposition of{' '}
        </span>
        direction specifies where the user needs to go or&nbsp; where to put
        something.
      </p>

      <p textAlign=" justify;">
        Some examples are to, on, onto, in, and into.
      </p>

      <p dir="ltr" lineHeight="1;" marginTop="0pt;" marginBottom="0pt;">
        &nbsp;
      </p>

      <table
        border="1"
        cellpadding="1"
        cellspacing="1"
        height="699"
        width="838"
      >
        <tbody>
          <tr>
            <td align="center" width="100px">
              <span fontFamily="arial,helvetica,sans-serif;">
                <strong>Preposition</strong>&nbsp;
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                <strong>Use </strong>
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                <strong>Example</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">To</span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                'To'&nbsp; is used when there is a specific destination in mind.
                The&nbsp; destination can be number of things.
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                I am going to the doctor's.
              </span>{' '}
              <span fontFamily="arial,helvetica,sans-serif;">
                The bathroom is to your lefr
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Towards
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                When one has movement in a particular direction in mind, rather
                than simply a destination.
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                He was walking menacingly towards me.
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Through
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Within a space, which can be thought of as surrounding,
                enclosing or around the object
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                The train went through the tunnel.
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">Into</span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Movement from the outside to the inside of something that can be
                imagined as surrounding, enclosing or around the object.
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                He got into the car
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Accross
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                To describe something’s position when it is at the opposite end
                from one’s position
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                We went to the restaurant across the road.
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">Over</span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                To describe something’s position when it is above something else
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                The bottle is in the cabinet over the sink in the kitchen.
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Behind
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                When something is behind a second thing, the first thing is in
                back of the second.
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Our house is behind the supermarket.
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">Below</span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                lower than any object
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                Death Valley is 86 meters below sea level.
              </span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">Along</span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                The collective position of a group of things that are in a line
              </span>
            </td>
            <td align="center">
              <span fontFamily="arial,helvetica,sans-serif;">
                He lived in one of the houses along the river
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Learning Preposition of direction.
          Retrieved 9 April 2021, from
          cdac.olabs.edu.in/?sub=84&brch=26&sim=218&cnt=1
        </Typography>
      </div>
    </div>
  );
}
