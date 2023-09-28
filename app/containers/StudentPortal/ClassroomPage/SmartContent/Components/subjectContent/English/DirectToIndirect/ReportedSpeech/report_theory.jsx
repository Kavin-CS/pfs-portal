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
      <div class="divContent">
        <h3
          id="mainHeading"
          // style="text-align: center; text-decoration: underline; display: none;"
        >
          Reported Speech: Theory (Rules for Conversion)
        </h3>

        <p>&nbsp;</p>

        <ol class="block">
          <li>
            <h3>Direct Speech</h3>

            <div class="listContent">
              <p>
                In direct speech, we convey the message of the speaker in his
                own actual words without any change to another person.
              </p>
            </div>

            <hr />
          </li>
          <li>
            <h3>Indirect Speech</h3>

            <div class="listContent">
              <p>
                In indirect speech, we convey the message of the speaker in our
                own words to another person.
              </p>
            </div>

            <hr />
          </li>
          <li>
            <h3>Procedure of changing direct speech into indirect speech</h3>

            <div class="listContent">
              <ol>
                <li>Remove comma and inverted commas.</li>
                <li>
                  Put "that" between the reporting and reported speeches.(it is
                  optional to put "that" between the reporting and reported
                  speech)
                </li>
                <li>
                  Change the 1st letter of reported speech into small letter
                  except for "I"
                </li>
                <li>
                  Change the pronoun of the direct speech according to the rules
                  described in table 2
                </li>
                <li>
                  Change the tense of the direct speech appropriately according
                  to rules described in table 3.
                </li>
                <li>
                  Change the words expressing nearness in time or places of the
                  direct speech into its appropriate words expressing distance
                  as per table 1
                </li>
              </ol>
            </div>

            <hr />
          </li>
          <li>
            <h3>Rules for changing Direct into Indirect Speech</h3>

            <div class="listContent">
              <ol>
                <li>
                  The past tense is often used when it is uncertain if the
                  statement is true or when we are reporting objectively.
                  <table
                    width="100%"
                    border="1"
                    cellpadding="1"
                    cellspacing="1"
                    class="responsive_table"
                  >
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'center'}} className={classes.ta}>
                          Indirect Speech Conversion
                        </th>
                        <th style={{ textAlign: 'center'}}>Direct Speech Condition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>
                          Present Tenses in the Direct Speech are changed into
                          Past Tense.
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          If the reporting or principal verb is in the Past
                          Tense.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }} rowspan="3">
                          Do Not Change Tense of reported Speech in Indirect
                          Speech sentence
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          If in direct speech you find say/says or will say.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>
                          Direct speech the words within the quotation marks
                          talk of a universal truth or habitual action.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>
                          The reporting verb is in a present tense.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  When there are two sentences combined with the help of a
                  conjunction and both sentences have got different tenses. then
                  change the tenses of both sentences according to the rule.
                </li>
                <li>
                  Words expressing nearness in time or places are generally
                  changed into words expressing distance.
                  <table
                    width="100%"
                    border="1"
                    cellpadding="1"
                    cellspacing="1"
                    class="table table-bordered custom-table"
                  >
                    <tbody>
                      <tr>
                        <th style={{ textAlign: 'center'}} rowspan="17">Change of place and time</th>
                        <th style={{ textAlign: 'center'}}>Direct Speech Word</th>
                        <th style={{ textAlign: 'center'}}>Indirect Speech Word</th>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Here</td>
                        <td style={{ paddingLeft: '10px' }}>There</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Today</td>
                        <td style={{ paddingLeft: '10px' }}>that day</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>this morning</td>
                        <td style={{ paddingLeft: '10px' }}>that morning</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Yesterday</td>
                        <td style={{ paddingLeft: '10px' }}>the day before</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Tomorrow</td>
                        <td style={{ paddingLeft: '10px' }}>the next day</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>next week</td>
                        <td style={{ paddingLeft: '10px' }}>
                          the following week
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>next month</td>
                        <td style={{ paddingLeft: '10px' }}>
                          the following month
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Now</td>
                        <td style={{ paddingLeft: '10px' }}>Then</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Ago</td>
                        <td style={{ paddingLeft: '10px' }}>Before</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Thus</td>
                        <td style={{ paddingLeft: '10px' }}>So</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Last Night</td>
                        <td style={{ paddingLeft: '10px' }}>
                          the night before
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>This</td>
                        <td style={{ paddingLeft: '10px' }}>That</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>These</td>
                        <td style={{ paddingLeft: '10px' }}>Those</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Hither</td>
                        <td style={{ paddingLeft: '10px' }}>Thither</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Hence</td>
                        <td style={{ paddingLeft: '10px' }}>Thence</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Come</td>
                        <td style={{ paddingLeft: '10px' }}>Go</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </div>
          </li>
          <li>
            <h3>Change in Pronouns</h3>

            <div class="listContent">
              <p>
                The pronouns of the Direct Speech are changed where necessary,
                according to their relations with the reporter and his hearer,
                rather than with the original speaker. If we change direct
                speech into indirect speech, the pronouns will change in the
                following ways.
              </p>

              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>Rules</th>
                    <th style={{ textAlign: 'center'}}>Direct Speech</th>
                    <th style={{ textAlign: 'center'}}>Indirect Speech</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      The first person of the reported speech changes according
                      to the subject of reporting speech.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She says, "I am in tenth class."
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She says, "I am in tenth class."
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      The second person of reported speech changes according to
                      the object of reporting speech.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He says to them, "You have completed your job."
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He tells them that they have completed their job.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      The third person of the reported speech doesn't change.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She says, "She is in tenth class."
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She says that she is in tenth class.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Change in Tenses</h3>

            <div class="listContent">
              <p>
                The past perfect and past perfect continuous tenses do not
                change.
              </p>

              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>Rules</th>
                    <th style={{ textAlign: 'center'}}>Direct Speech</th>
                    <th style={{ textAlign: 'center'}}>Indirect Speech</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Simple Present Changes
                      <br />
                      To
                      <br />
                      Simple Past
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "I always drink coffee", she said
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She said that she always drank coffee.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Present Continuous Changes
                      <br />
                      To
                      <br />
                      Past Continuous
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "I am reading a book", he explained.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He explained that he was reading a book
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Present Perfect Changes
                      <br />
                      To
                      <br />
                      Past Perfect
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She said, "He has finished his work"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She said that he had finished his work.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Present Perfect Continuous Changes
                      <br />
                      To
                      <br />
                      Past Perfect Continuous
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "I have been to Spain", he told me.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He told me that he had been to Spain.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Simple Past Changes
                      <br />
                      To
                      <br />
                      Past Perfect
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "Bill arrived on Saturday", he said.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that Bill had arrived on Saturday
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Past Perfect Changes
                      <br />
                      To
                      <br />
                      Past Perfect (No Change In Tense)
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "I had just turned out the light," he explained.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He explained that he had just turned out the light.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Past Continuous Changes
                      <br />
                      To
                      <br />
                      Past Perfect Continuous
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "We were living in Paris", they told me.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      They told me that they had been living in Paris.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Future Changes
                      <br />
                      To
                      <br />
                      Present Conditional
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      "I will be in Geneva on Monday", he said
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that he would be in Geneva on Monday.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Future Continuous Changes
                      <br />
                      To
                      <br />
                      Conditional Continuous
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She said, "I'll be using the car next Friday."
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      She said that she would be using the car next Friday.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Changes in Modals</h3>

            <div class="listContent">
              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>Rules</th>
                    <th style={{ textAlign: 'center'}}>Direct Speech</th>
                    <th style={{ textAlign: 'center'}}>Indirect Speech</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      CAN changes into COULD
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said, "I can drive a car".
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that he could drive a car.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      MAY changes into MIGHT
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said, "I may buy a computer"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that he might buy a computer.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      MUST changes into HAD TO
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said, "I must work hard"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that he had to work hard.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }} colspan="3">
                      These Modals Do Not Change: Would, could, might, should,
                      ought to.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Would</td>
                    <td style={{ paddingLeft: '10px' }}>
                      They said, "we would apply for a visa"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      They said that they would apply for visa.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Could</td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said, "I could run faster"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that he could run faster.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Might</td>
                    <td style={{ paddingLeft: '10px' }}>
                      John said, "I might meet him".
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      John said that he might meet him.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Should</td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said, "I should avail the opportunity"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said that he should avail the opportunity.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Ought to</td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said to me, "you ought to wait for him"
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      He said to me that I ought to wait for him.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Changes for Imperative Sentences</h3>

            <div class="listContent">
              <p>Imperative sentences consist any of these four things:</p>
              <ul>
                <li>Order</li>
                <li>Request</li>
                <li>Advice</li>
                <li>Suggestion</li>
              </ul>
              &nbsp;
              <p>
                Most commonly used words to join clauses together are ordered,
                requested, advised and suggested. Forbid(s)/ forbade is used for
                the negative sentences.
              </p>
              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>Mood of Sentence in Direct Speech</th>
                    <th style={{ textAlign: 'center'}}>Reporting verb in indirect verb</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Order</td>
                    <td style={{ paddingLeft: '10px' }}>ordered</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Request</td>
                    <td style={{ paddingLeft: '10px' }}>
                      requested / entreated
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Advice</td>
                    <td style={{ paddingLeft: '10px' }}>advised / urged</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Never</td>
                    <td style={{ paddingLeft: '10px' }}>
                      told, advised or forbade (No need of "not" after
                      "forbade")
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Direction</td>
                    <td style={{ paddingLeft: '10px' }}>directed</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Suggestion</td>
                    <td style={{ paddingLeft: '10px' }}>suggested to</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>Warning</td>
                    <td style={{ paddingLeft: '10px' }}>warn</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      (If a person is addressed directly)
                    </td>
                    <td style={{ paddingLeft: '10px' }}>called</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Exclamatory Sentences</h3>

            <div class="listContent">
              <p>
                Exclamatory sentences expresses emotions. Interjections such as
                Hurrah, wow, alas, oh, ah are used to express emotions. The word
                "<strong>that</strong>" is used as join clause.
              </p>
              <ol>
                <li>
                  <h4>
                    Rules for conversion of Exclamatory Direct Speech Sentences
                    into Indirect Speech Sentences
                  </h4>

                  <ol>
                    <li>
                      Exclamatory sentence changes into assertive sentence.
                    </li>
                    <li>Interjections are removed.</li>
                    <li>Exclamation mark changes into full stop.</li>
                    <li>
                      W.H words like , "what" and "how" are removed and before
                      the adjective of reported speech we put "very"
                    </li>
                    <li>
                      Changes of "tenses" , "pronouns" and "adjectives" will be
                      according to the previous rules.
                    </li>
                  </ol>
                </li>
              </ol>
              &nbsp;
              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>Mood of Sentence in Direct Speech</th>
                    <th style={{ textAlign: 'center'}}>Reporting verb in indirect verb</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      sorrow in reported speech
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      Exclaimed with sorrow/ grief/ exclaimed sorrowfully or
                      cried out
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      happiness in reported speech
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      exclaimed with joy/ delight/ exclaimed joyfully
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      surprise in reported speech
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      exclaimed with surprise/ wonder/ astonishment"
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      appreciation and it is being expressed strongly
                    </td>
                    <td style={{ paddingLeft: '10px' }}>applauded</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Interrogative Sentences</h3>

            <div class="listContent">
              <p>Interrogative sentences are of two types:</p>

              <ol>
                <li>Interrogative with auxiliaries at the beginning.</li>
                <li>
                  Interrogatives with who, where, what, when, how etc., i.e. wh
                  questions.
                </li>
              </ol>

              <ol>
                <li>
                  <h4>
                    Rules for conversion of Interrogative Direct Speech Sentence
                    into Indirect Speech Sentences
                  </h4>

                  <p>
                    There are some rules to change direct to Indirect speech of
                    Interrogative sentence:
                  </p>

                  <table
                    width="100%"
                    border="1"
                    cellpadding="1"
                    cellspacing="1"
                    class="table table-bordered custom-table"
                  >
                    <caption>
                      <strong style={{ textAlign: 'start', display: 'block'}}>RULES</strong>
                    </caption>
                    <tbody>
                      <tr>
                        <th style={{ textAlign: 'center'}}>Changes</th>
                        <th style={{ textAlign: 'center'}}>Direct Speech Condition</th>
                        <th style={{ textAlign: 'center'}}>Indirect Speech Condition</th>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Reporting Verb</td>
                        <td style={{ paddingLeft: '10px' }}>said/ said to</td>
                        <td style={{ paddingLeft: '10px' }}>
                          Asked, enquired or demanded.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }} rowspan="2">
                          Joining Clause
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          If sentence begins with auxiliary verb
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          joining clause should be if or whether.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>
                          If sentence begins with "wh" questions
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          then no conjunction is used as "question-word" itself
                          act as joining clause.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Punctuation</td>
                        <td style={{ paddingLeft: '10px' }}>Question Mark</td>
                        <td style={{ paddingLeft: '10px' }}>Full Stop</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }} rowspan="3">
                          Helping Verbs
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          sentences is expressing positive feeling
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          do/does is removed from sentence.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>
                          if 'No' is used in interrogative sentences
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          do/does is changed into did.
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: '10px' }}>Did or has/have</td>
                        <td style={{ paddingLeft: '10px' }}>Had</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>

              <ul>
                <li>
                  Helping verbs (is, am, are, was, were) are used after the
                  subject.
                </li>
                <li>
                  Adverbs and pronouns are converted according to the table 1
                  and table 2 respectively.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h3>Punctuation in Direct Speech</h3>

            <div class="listContent">
              <p>
                In direct speech, various punctuation conventions are used to
                separate the quoted words from the rest of the text: this allows
                a reader to follow what's going on.
                <br />
                Here are the basic rules:
              </p>

              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>RULES</th>
                    <th style={{ textAlign: 'center'}}>EXAMPLES</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      The words that are actually spoken should be enclosed in
                      inverted commas
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      'He's very clever, you know.'
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Start new paragraph every time when a new speaker says
                      something.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      'They think it's a more respectable job,' said Joe.
                      <br />
                      'I don't agree,' I replied
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      Comma, full stop, question mark, or exclamation mark must
                      be present at the end of reported sentences. This is
                      placed inside the closing inverted comma or commas.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      'Can I come in?' he asked.
                      <br />
                      'Just a moment!' she shouted.
                      <br />
                      'You're right,' he said.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      If direct speech comes after the information about who is
                      speaking, comma is used to introduce the piece of speech,
                      placed before the first inverted comma.
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      Steve replied, 'No problem.'
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      If the direct speech is broken up by information about who
                      is speaking, comma (or a question mark or exclamation
                      mark) is used to separate the two reported speech
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      'You're right,' he said. 'It feels strange.'
                      <br />
                      'Thinking back,' she said, 'he didn't expect to win.'
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <h3>Rules for conversion of Indirect Speech to Direct Speech</h3>

            <div class="listContent">
              <p>
                To change from Indirect to Direct Speech, keep the rules of the
                Direct Speech are applied in the reverse order.
              </p>
              <ol>
                <li>
                  Use the reporting verb, "say" or "said to" in its correct
                  tense.
                </li>
                <li>
                  Remove the conjuctions "that, to, if or whether etc". wherever
                  necessary.
                </li>
                <li>
                  Insert quotation marks, question mark, exclamation and
                  fullstop, wherever necessary.
                </li>
                <li>Put a comma before the statement.</li>
                <li>
                  Write the first word of the statement with capital letter.
                </li>
                <li>
                  Change the past tense into present tense wherever the repoting
                  verb is in the past tense.
                </li>
                <li>
                  Convert the past perfect either into past tense or present
                  perfect as found necessary.
                </li>
                <li>Be careful about the order of words in the question.</li>
              </ol>
              &nbsp;
              <p>
                The following table will enable to find the kind of sentence:
              </p>
              <table
                width="100%"
                border="1"
                cellpadding="1"
                cellspacing="1"
                class="table table-bordered custom-table"
              >
                <tbody>
                  <tr>
                    <th style={{ textAlign: 'center'}}>Indirect (Conjunction)</th>
                    <th style={{ textAlign: 'center'}}>Direct (Kind of Sentence)</th>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>That</td>
                    <td style={{ paddingLeft: '10px' }}>
                      Statement (or) Exclamatory sentence
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>to, not to</td>
                    <td style={{ paddingLeft: '10px' }}>Imperative</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>requested + to</td>
                    <td style={{ paddingLeft: '10px' }}>
                      Begin the imperative sentence with "please"
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>if or whether</td>
                    <td style={{ paddingLeft: '10px' }}>
                      Interrogative sentence (Helping Verb + Subject + Main Verb
                      + ...?)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      What, When, How etc.,
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      (Wh or How + Helping Verb + Subject + Main Verb + ...?)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ol>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Reported Speech. Retrieved 9 March 2021,
          from cdac.olabs.edu.in/?sub=84&brch=26&sim=219&cnt=1
        </Typography>
      </div>
    </div>
  );
}
