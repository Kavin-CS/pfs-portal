import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ArchimedesThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Archimedes1/archimedes-the1.gif';
import ArchimedesThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Archimedes1/archimedes-the2.png';
import ArchimedesThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Archimedes1/archimedes-the3.png';


const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
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
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        To establish the relationship between the loss in weight of a solid and
        weight of water displaced when the solid is fully immersed in the
        following solutions:
      </p>

      <ul>
        <li>Tap water</li>
        <li>Strong salty water</li>
      </ul>

      <p>
        This can be done by using at least two different solids in the
        experiment.&nbsp;
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        <img
          alt=""
          src={ArchimedesThe1}
        />
      </p>

      <p>
        &nbsp;When a metallic block is immersed in water (or any other liquid),
        four vertical forces act upon the block below the surface of water.
        These forces can be grouped into two types of forces.
      </p>

      <ul type="1">
        <li>
          Downward forces
          <ul type="a">
            <li>The weight of the block.</li>
            <li>
              The downward thrust due to pressure of the liquid on the upper
              surface of the block.&nbsp;
            </li>
          </ul>
        </li>
        <li>
          Upward forces
          <ul type="a">
            <li>
              The tension of the spring, which measures the apparent weight.
            </li>
            <li>
              The upward thrust due to liquid present below the lower surface of
              the block.&nbsp; This upward thrust is known as <em fontWeight="normal">Buoyancy</em>
              .&nbsp;
            </li>
          </ul>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>What happens to the weight of a body when immersed in water?</h2>

      <p>
        The more a body is immersed in water, the more the weight of the body
        decreases. The weight of the body is least when it is completely
        immersed in water. This means that <em fontWeight="normal">loss</em> in weight of the body
        increases as it is completely immersed in water.
      </p>

      <p>
        When a body is partly or completely immersed in water (or any other
        liquid), then:
      </p>

      <p>
        Loss in weight of body = Weight of water (liquid) displaced by the body
        = Buoyant force or upthrust exerted by water (any liquid) on the body.
      </p>

      <p>
        It was Archimedes who first observed that bodies lose their weight when
        immersed in water. He proposed a principle based on his observation that
        is now known as the Archimedes' Principle.
      </p>

      <h2 className={classes.secondaryTag}>What does Archimedes' Principle state?</h2>

      <p>
        The Principle states that: “
        <em fontWeight="normal">
          A body immersed in a liquid loses weight by an amount equal to the
          weight of the liquid displaced
        </em>
        .”
      </p>

      <p>
        <br />
        Archimedes principle also states that:{' '}
        <em fontWeight="normal">
          “When a body is immersed in a liquid, an upward thrust, equal to the
          weight of the liquid displaced, acts on it.
        </em>
        ”
      </p>

      <p>
        <br />
        Thus, when a solid is fully immersed in a liquid, it loses weight which
        is equal to the weight of the liquid it displaces.
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Weight«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»solid«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»air«/mi»«mo»§nbsp;«/mo»«mo»-«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Weight«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»solid«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»when«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»immersed«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Liquid«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Loss«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»weight«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»solid«/mi»«/math»"
          class="Wirisformula"
          src={ArchimedesThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Loss«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»weight«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»solid«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Weight«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»the«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»liquid«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»displaced«/mi»«/math»"
          class="Wirisformula"
          src={ArchimedesThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        The more the density of liquid in which the solid is immersed, the less
        is the weight of the liquid displaced on immersing the solid.
      </p>

      <h2 className={classes.secondaryTag}>Does a body float?</h2>

      <p>
        Some bodies, if dropped in water, sink, such as a&nbsp; stone or a
        metallic needle. On the other hand, some bodies, even of the same weight
        as that of those that sink, float on water.&nbsp; This can be proved
        through the Laws of Flotation.
      </p>

      <h2 className={classes.secondaryTag}>What does the Law of Flotation state?</h2>

      <p>
        A body will float if the weight of the body is equal to the weight of
        the liquid displaced.
        <br />
        If the weight of the immersed body is more than the weight of the water
        displaced, the body will sink.
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <p>
        The results obtained confirm Archimedes' Principle. They prove that:
      </p>

      <ol start="1" type="1">
        <li>
          When a body is partly or completely immersed in water, it loses
          weight.
        </li>
        <li>
          A body loses its maximum weight when it is completely immersed in
          water.
        </li>
        <li>When a body is partly or completely in water then:</li>
      </ol>

      <ul>
        <li type="disc">
          Loss in weight of the body = Weight of water displaced by the body =
          Buoyant Force or up-thrust exerted by water on the body.
        </li>
        <li type="disc">
          Volume of the water displaced = Volume of the body immersed in water.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Verification of Archimedes' Principle.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=72&cnt=1
        </Typography>
      </div>
    </div>
  );
}
