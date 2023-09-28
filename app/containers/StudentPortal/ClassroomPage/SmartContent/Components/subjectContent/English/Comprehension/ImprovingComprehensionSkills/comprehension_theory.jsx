import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ohm-content.jpg';
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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h3>
        <br />
        <strong>Reading Comprehension [Definition]:</strong>
      </h3>

      <p>
        <span>
          Reading comprehension is the ability to read text, process it and
          understand its meaning. An individual's ability to comprehend text is
          influenced by their traits and skills, one of which is the ability to
          make inferences. If word recognition is difficult, students use too
          much of their processing capacity to read individual words, which
          interferes with their ability to comprehend what is read.
        </span>
      </p>

      <h3>
        <strong>Comprehension strategies :</strong>
      </h3>

      <p>
        <span>
          1. Monitor comprehension -<br />
          &nbsp;&nbsp; This tells the student what he has understood and what he
          has not.
        </span>
      </p>

      <p>
        <span>
          &nbsp;&nbsp; Monitoring comprehension helps students in following ways
          :
        </span>
      </p>

      <ul>
        <li>
          <span>&nbsp;Being aware of what student understands.</span>
        </li>
        <li>
          <span>&nbsp;Indicate what he has not understood.</span>
        </li>
      </ul>

      <p>
        <span>2. ”Thinking about thinking” -</span>
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          &nbsp; This in other words is also called as meta cognition.
        </span>
      </p>

      <p>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This strategy helps in following
          ways :
        </span>
      </p>

      <ul>
        <li>
          <span>Indicate where difficulty occurs.</span>
        </li>
        <li>
          <span>Indicate what difficulty is.</span>
        </li>
        <li>
          <span>
            Rephrase the difficult sentence or passage in their own words.
          </span>
        </li>
        <li>
          <span>Reread the passage to understand more.</span>
        </li>
        <li>
          <span>
            Peek into passage for data that might resolve your difficulty.
          </span>
        </li>
      </ul>

      <p>
        <span>3. Semantic and graphical organizers -</span>
      </p>

      <p>
        <span>
          A graphic organizer, also known as knowledge map, concept map, story
          map, cognitive organizer, advance organizer, or concept diagram, is a
          communication tool that uses visual symbols to express knowledge,
          concepts, thoughts, or ideas, and the relationships between them.
        </span>
      </p>

      <p>
        <span>Some good examples for graphic organizers are :</span>
      </p>

      <p>
        <span>
          1. Venn diagrams
          <br />
          2. Storyboard/Chain of Events
          <br />
          3. Story Map
          <br />
          4. Cause/Effect
        </span>
      </p>

      <p>
        <span>4. Question answering -</span>
      </p>

      <p>
        <span>&nbsp;&nbsp;&nbsp; This can help because it can&nbsp; :</span>
      </p>

      <ul>
        <li>
          <span>
            &nbsp;Help student understand the motive of reading the passage.
          </span>
        </li>
        <li>
          <span>&nbsp;Give emphasis on what they are going to learn.</span>
        </li>
        <li>
          <span>
            &nbsp;Assist students to think in active fashion as they read.
          </span>
        </li>
        <li>
          <span>&nbsp;Endorse students to monitor their comprehension.</span>
        </li>
        <li>
          <span>
            &nbsp;Assist students for reviewing the content and for their
            inferences .
          </span>
        </li>
      </ul>

      <p>
        <span>5. Question generation -</span>
        <br />
        &nbsp;
      </p>

      <p>
        <span>
          Students learn if they are able to grasp the concept and what they are
          reading.
          <br />
          They learn to ask themselves questions that require thinking about
          more than one part of information&nbsp; and combine this information.
        </span>
      </p>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Improving Comprehension Skills. Retrieved
          9 March 2021, from cdac.olabs.edu.in/?sub=84&brch=25&sim=187&cnt=1
        </Typography>
      </div>
    </div>
  );
}
