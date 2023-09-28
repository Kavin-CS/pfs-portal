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
  secondaryTag: {
    fontSize: 20,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div class="divContent">
        <h1 className={classes.header}>What is Voice?</h1>

        <p>
          <span>
            “A Grammar of Contemporary English” defines Voice as “voice is a
            grammatical category which makes it possible to view the action of a
            sentence in two ways, without change in the facts reported”. One and
            the same idea can often be expressed in two different ways, by means
            of an active, and by means of a passive construction.
          </span>
        </p>

        <h2 className={classes.secondaryTag}>1. Active Voice</h2>

        <p>
          <span>
            Active voice is used to indicate the grammatical subject of the verb
            is performing the action or causing the happening denoted by the
            verb. With the active voice, you learn ‘who’ or ‘what’ is
            responsible for the action at the beginning of the sentence. In
            other words, the subject performs the action denoted by the verb.
            With help of active voice more powerful sentences can be build than
            passive voice.
          </span>
        </p>

        <h3>
          <strong>Use of active voice:</strong>
        </h3>

        <p>
          <span>
            1. Active voice is used in a clause whose subject expresses the
            agent of the main verb.
            <br />
            2. Subject can be easily identified by asking ‘who’ or ‘what’ to the
            verb.
            <br />
            3. Sentences are short and easily understandable.
          </span>
        </p>

        <p>
          <span>
            <strong>Example :</strong>
            <br />
            John wrote the letter.
            <br />
            &nbsp;&nbsp;&nbsp; -John (<strong>subject</strong>) performs the
            action denoted by the verb (<strong>write</strong>).
          </span>
        </p>

        <h2 className={classes.secondaryTag}>2. Passive Voice</h2>

        <p>
          <span>
            In Passive voice the sentence focus on object i.e. who/what is
            receiving the action and not on who/what is performing the action.
            In passive voice, the actor of the of the verb (action) is either
            understood at the end of the sentence or maybe not told. The passive
            voice is used in writing facts, truth, lab or technical reports in
            which the actor is not important or unknown, but the action
            happening on the object is very important.
          </span>
        </p>

        <h3>Use of passive voice:</h3>

        <p>
          <span>
            1. It is used if it doesn‘t need to know or we don‘t know the actor
            performing the job.
            <br />
            2. In the end of the clause or sentence “by” is prefixed to know the
            actor performing the job.
            <br />
            3. It is used if we are more interested in the job than the actors
            who work.
          </span>
        </p>

        <p>
          <span>
            <strong>Example :</strong>
          </span>
        </p>

        <p>
          <span>
            The letter was written by John.
            <br />
            &nbsp;&nbsp;&nbsp; - letter receives the <em>action</em> denoted by
            the <strong>write </strong>(verb).
          </span>
        </p>

        <h2 className={classes.secondaryTag}>
          <strong>How to identify the active / passive voice?</strong>
        </h2>

        <p>
          <span>
            Ask who/what performed the action(verb)? -- if the ‘
            <strong>who</strong> or <strong>what</strong> is at the beginning of
            the sentence, the sentence is active voice<strong>.</strong>
          </span>
        </p>

        <p>
          <span>
            <strong>Example :</strong>
          </span>
        </p>

        <p>
          <span>Jack is eating the apple.</span>
        </p>

        <p>
          <span>
            <strong>Question will be :</strong>{' '}
            <em>Who is eating the apple?&nbsp;&nbsp; </em>
            <br />
            Look for the word “
            <strong>
              <em>by</em>
            </strong>
            ”, if present it is passive voice.
          </span>
        </p>

        <h3>
          <strong>Active/Passive voice using Modals:</strong>
        </h3>

        <p>
          <span>
            The modal verbs consist of will, would, can, could, shall, should,
            may, might, must which are
            <br />
            used with main verbs to express ability, probability, obligation,
            advice etc.
            <br />
            To convert active voice having modal into passive voice, auxiliary
            verb “be” is added after modal in sentence.
          </span>
        </p>

        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          dir="ltr"
          height="856"
        >
          <colgroup>
            <col width="188" />
            <col width="319" />
            <col width="255" />
          </colgroup>
          <tbody>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                active=""
                colspan="3"
                data-sheets-value="[null,2,"
                for=""
                passive=""
                rowspan="1"
                rules=""
                to=""
              >
                <h2 className={classes.secondaryTag}>
                  Rules for Active to Passive conversion
                </h2>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }} data-sheets-value="[null,2,">
                <p>
                  <span>
                    <strong>
                      <span>Tense</span>
                    </strong>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                active=""
                data-sheets-value="[null,2,"
                voice=""
              >
                <p>
                  <span>
                    <strong>
                      <span>Active voice</span>
                    </strong>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                passive=""
                voice=""
              >
                <p>
                  <span>
                    <strong>
                      <span>Passive voice</span>
                    </strong>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                present=""
                simple=""
              >
                <p>
                  <span>
                    <span>Simple Present Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                infinitive=""
                subject=""
              >
                <p>
                  <span>
                    <span>Subject + infinitive + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; The grocer sells fresh
                      vegetables.
                    </span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                be=""
                by=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
                to=""
              >
                <p>
                  <span>
                    <span>S + to be + past participle + by object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.&nbsp;</strong> Fresh vegetables are sold by
                      the grocer.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                continuous=""
                data-sheets-value="[null,2,"
                present=""
              >
                <p>
                  <span>
                    <span>Present Continuous Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                be=""
                being=""
                data-sheets-value="[null,2,"
                participle=""
                present=""
              >
                <p>
                  <span>
                    <span>
                      Subject + to be (is, am, are) being + present participle +
                      object
                    </span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; My boss is giving many
                      assignments.
                    </span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                be=""
                being=""
                by=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
              >
                <p>
                  <span>
                    <span>
                      S + to be (is, am, are) + being + past participle + by
                      object
                    </span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; Many assignments are being
                      given by my boss.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                perfect=""
                present=""
              >
                <p>
                  <span>
                    <span>Present Perfect Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                has=""
                have=""
                participle=""
                past=""
                subject=""
              >
                <p>
                  <span>
                    <span>Subject + has/have + past participle + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <strong>
                      <span>E.g.</span> &nbsp;{' '}
                    </strong>
                    <span>I have taken him out.</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                been=""
                by=""
                data-sheets-value="[null,2,"
                has=""
                have=""
                participle=""
                past=""
                s=""
              >
                <p>
                  <span>
                    <span>S + have/has been + past participle + by object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g</strong>
                    </span>
                  </span>
                  <strong>.</strong>&nbsp;{' '}
                  <span>
                    <span>He has been taken out by me.</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                past=""
                simple=""
              >
                <p>
                  <span>
                    <span>Simple Past Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                participle=""
                past=""
                subject=""
              >
                <p>
                  <span>
                    <span>Subject + past participle + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.&nbsp; </strong>He built a large house.
                    </span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                by=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
                was=""
                were=""
              >
                <p>
                  <span>
                    <span>S + was/were + past participle + by object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; A large house was built by
                      him.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                continuous=""
                data-sheets-value="[null,2,"
                past=""
              >
                <p>
                  <span>
                    <span>Past Continuous Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                being=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
                was=""
                were=""
              >
                <p>
                  <span>
                    <span>S + was/were + being + past participle + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g</strong>
                    </span>
                  </span>
                  &nbsp;{' '}
                  <span>
                    <span>She was cooking dinner.</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                being=""
                by=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
                was=""
                were=""
              >
                <p>
                  <span>
                    <span>
                      S + was/were + being + past participle +by object
                    </span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; Dinner was being cooked by
                      her.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                past=""
                perfect=""
              >
                <p>
                  <span>
                    <span>Past Perfect Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                had=""
                participle=""
                past=""
                subject=""
              >
                <p>
                  <span>
                    <span>Subject + had + past participle + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; She had posted the letter.
                    </span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                been=""
                by=""
                data-sheets-value="[null,2,"
                had=""
                participle=""
                past=""
                s=""
              >
                <p>
                  <span>
                    <span>S + had been + past participle + by object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; The letter had been posted by
                      her.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                future=""
                simple=""
              >
                <p>
                  <span>
                    <span>Simple Future Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                infinitive=""
                subject=""
                will=""
              >
                <p>
                  <span>
                    <span>Subject + will + infinitive + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; I will give you a present.
                    </span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                be=""
                by=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
                will=""
              >
                <p>
                  <span>
                    <span>S + will + be + past participle + by object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; A present will be given to you
                      by me.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                future=""
                perfect=""
              >
                <p>
                  <span>
                    <span>Future Perfect Tense</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                infinitive=""
                subject=""
                would=""
              >
                <p>
                  <span>
                    <span>Subject + would + infinitive + object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; The doctor shall have examined
                      ten patients by 10 O’clock.
                    </span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                be=""
                by=""
                data-sheets-value="[null,2,"
                participle=""
                past=""
                s=""
                would=""
              >
                <p>
                  <span>
                    <span>S + would + be + past participle + by object</span>
                  </span>
                </p>

                <p>
                  <span>
                    <span>
                      <strong>E.g.</strong>&nbsp; Ten patients will have been
                      examined by 10 O’clock by the doctor.
                    </span>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>&nbsp;</p>

        <table border="1" cellpadding="0" cellspacing="0" dir="ltr">
          <colgroup>
            <col width="200" />
            <col width="200" />
          </colgroup>
          <tbody>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                colspan="2"
                for=""
                rowspan="1"
                rules=""
              >
                <h2 className={classes.secondaryTag}>
                  Rules for Pronouns in Active to Passive conversion
                </h2>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <strong>
                      <span>Active voice</span>
                    </strong>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <strong>
                      <span>Passive voice</span>
                    </strong>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>I</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>me</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>you</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>you</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>we</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>us</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>they</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>them</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>it</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>it</span>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>

        <table border="1" cellpadding="0" cellspacing="0" dir="ltr">
          <colgroup>
            <col width="100" />
            <col width="122" />
            <col width="100" />
            <col width="167" />
          </colgroup>
          <tbody>
            <tr>
              <td
                style={{ paddingLeft: '10px' }}
                and=""
                colspan="2"
                data-sheets-value="[null,2,"
                number=""
                person=""
                pronoun=""
                rowspan="1"
              >
                <p>
                  <span>
                    <span>Pronoun number and person table</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>Person</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>I</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>II</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>
                <p>
                  <span>
                    <span>III</span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }} data-sheets-value="[null,2,">
                <p>
                  <span>
                    <span>Number</span>
                  </span>
                </p>
              </td>
              <td style={{ paddingLeft: '10px' }}>&nbsp;</td>
              <td style={{ paddingLeft: '10px' }}>&nbsp;</td>
              <td style={{ paddingLeft: '10px' }}>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }} data-sheets-value="[null,2,">
                <p>
                  <span>
                    <span>Singular</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                i=""
              >
                <p>
                  <span>I -&gt; am</span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                you=""
              >
                <p>
                  <span>you -&gt; are&nbsp;</span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                it=""
              >
                <p>
                  <span>he,she,it -&gt; is</span>
                </p>

                <p>
                  <span>John,Sara -&gt; is</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: '10px' }} data-sheets-value="[null,2,">
                <p>
                  <span>
                    <span>Plural</span>
                  </span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                we=""
              >
                <p>
                  <span>&nbsp;we -&gt; are&nbsp;</span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                you=""
              >
                <p>
                  <span>you -&gt; are</span>
                </p>
              </td>
              <td
                style={{ paddingLeft: '10px' }}
                data-sheets-value="[null,2,"
                they=""
              >
                <p>
                  <span>they -&gt; are</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Active to Passive Voice Conversion.
          Retrieved 9 March 2021, from
          cdac.olabs.edu.in/?sub=84&brch=23&sim=186&cnt=1
        </Typography>
      </div>
    </div>
  );
}
