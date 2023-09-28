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

import LabTechniquesPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/LabTechniques1/labtechniques-pro1.jpg';
import LabTechniquesPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/LabTechniques1/labtechniques-pro2.jpg';
import LabTechniquesPro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/LabTechniques1/labtechniques-pro3.jpg';
import LabTechniquesPro4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/LabTechniques1/labtechniques-pro4.jpg';
import LabTechniquesPro5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/LabTechniques1/labtechniques-pro5.jpg';
import LabTechniquesPro6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/LabTechniques1/labtechniques-pro6.jpg';

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
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
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
      <h1 className={classes.headTag}>Working of Bunsen Burner</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={LabTechniquesPro1}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Connect the gas-inlet of the bunsen burner to the gas tap through a
          rubber tube.
        </li>
        <li>Turn on the Bunsen burner and light it using a spark lighter.</li>
        <li>
          Ensure the air holes at the bottom of the burner are completely
          opened.
        </li>
        <li>
          The gas will mix with more air and the flame will burn much hotter
          producing a blue flame called the non-luminous flame.
        </li>
        <li>Close the air hole by rotating the air adjusting disc.</li>
        <li>
          Now the gas will only mix with ambient air and this reduced mixing
          produces an incomplete reaction producing a cooler, but brighter,
          luminous yellow flame.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>
          Remove all the flammable and combustible material from the lab bench
          or work area when the Bunsen burner is to be used.
        </li>
        <li>Tie-back long hair, dangling jewelry, or loose clothing.</li>
        <li>Replace all hoses found to have defect before using.</li>
        <li>Use a spark lighter with extended nozzle to ignite the burner.</li>
        <li>
          Adjust the flame by turning the air adjusting disc to regulate air
          flow and to produce an appropriate flame for the experiment.
        </li>
        <li>
          Do not leave open flames unattended and never leave the laboratory
          while the burner is on.
        </li>
        <li>
          Shut off gas when its use is complete and ensure that the main gas
          valve is off before leaving the lab.
        </li>
      </ul>

      <h1 className={classes.headTag}>Cutting a Glass Tube or Rod</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={LabTechniquesPro2}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Place the glass tube on a bench or flat surface and without applying
          too much pressure, hold it firmly.
        </li>
        <li>
          Using the triangular file make a single deep scratch on the glass tube
          by placing the file perpendicular to the tube and pushing it down and
          across the tube.&nbsp; Do not saw!&nbsp; By placing the triangular
          file perpendicular to the tube, you ensure that the scratch made is a
          straight one.
        </li>
        <li>
          You've got a scratch on the glass tube and that is all it needs to
          break it.&nbsp;&nbsp; Now, place both your thumbs directly behind the
          scratch and applying gentle pressure and using a quick motion bend the
          tube towards you.&nbsp; It just breaks.&nbsp;&nbsp;
        </li>
        <li>
          You may find that the broken edges of the tube is not smooth and can
          cause bruises.&nbsp; This can be made smooth by rotating the broken
          edges over a flame for 2 - 3 minutes and then allowing it to cool.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>
          Make a single deep scratch at the desired length with one stroke of
          file.
        </li>
        <li>
          To avoid injury, hold the glass tube with the help of a thick piece of
          cloth.
        </li>
        <li>
          Do not heat the end for long time. It may seal the end or make it
          narrow.
        </li>
      </ul>

      <h1 className={classes.headTag}>Bending a Glass Tube</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={LabTechniquesPro3} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Hold both ends of the glass tube by hand and introduce it lengthwise
          into the luminous flame of the burner.&nbsp;
        </li>
        <li>
          Don't keep it in a fixed position over the flame; instead roll the
          glass tubing with the fingers to evenly heat it.
        </li>
        <li>
          You'll feel the area of the glass being heated becoming soft and
          delicate.&nbsp; When this happens apply gentle pressure so that it
          bends by itself. When the desired angle is formed, remove the tubing
          from the flame.
        </li>
        <li>
          Place the bent limb on the glazed tile and press it gently to make it
          coplanar. Then allow the tubing to cool.&nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>
          Select the tube of sufficient length to keep your hands safe from
          heat. Do not try to bend very small glass tubes of length less than 20
          cm.
        </li>
        <li>
          While heating, the glass tube should be rotated in order to ensure
          uniform heating.
        </li>
        <li>
          Never bend the glass tubing by force. Doing so can break the tubing.
        </li>
      </ul>

      <h1 className={classes.headTag}>Drawing Out a Glass Jet from a Delivery Tube</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={LabTechniquesPro4}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Holding the delivery tube with both hands, place it lengthwise in the
          flame.
        </li>
        <li>
          Keep rotating the tube in the flame as this ensures uniform
          heating.&nbsp; Continue to heat it until it softens.
        </li>
        <li>
          Now remove the tubing from the flame and gently pull both ends of the
          tube. What happens is that&nbsp; the middle portion becomes narrow as
          a capillary.&nbsp; Do this till the thickness is about 2 mm.
        </li>
        <li>
          Now cool and cut the narrow portion that has been obtained using&nbsp;
          them the triangular file.&nbsp; We have now two jets.
        </li>
        <li>
          The broken edges of the jets that are not smooth can be rounded by
          rotating over the flame for 2 - 3 minutes and then allowing them to
          cool.&nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>
          While drawing a jet, pull apart the two ends of the red-hot tube
          slowly so that it becomes thin uniformly.
        </li>
        <li>
          Do not heat the ends too long, as it may seal the ends or make them
          too narrow.
        </li>
      </ul>

      <h1 className={classes.headTag}>The Wash Bottle</h1>

      <h2 className={classes.secondaryTag}>Material Required</h2>

      <p>
        <img alt="" src={LabTechniquesPro5} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>Take the&nbsp; 500 ml flat-bottom flask and fill it with water.</li>
        <li>
          Fit&nbsp; the flask with an appropriate cork that has two bores.
        </li>
        <li>
          Pass the two bent tubes, one bent at an angle of 120<sup>o</sup> and
          the second at 60<sup>o</sup> through the bores. The angles are slanted
          in such a way that the bent portions of the tubes lie in a straight
          line.
        </li>
        <li>
          The upper portion of the 120<sup>o</sup> angled tube in held in the
          mouth whereas a jet is fitted to the tube angled at 60<sup>o</sup>.
        </li>
        <li>
          On blowing air through the mouth, water comes out from the other tube
          through the jet.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>The edges of the tubes must be rounded off.</li>
        <li>
          The longer arm of the tube bent at 60<sup>o</sup> should be only very
          slightly above the bottom of the flask so that it can be used even
          when it contains only a small amount of water.
        </li>
        <li>All connections must be air tight.</li>
      </ul>

      <h1 className={classes.headTag}>Boring a cork</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img alt="" src={LabTechniquesPro6} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h3 className={classes.secondaryTag}>Softening the cork</h3>

      <p>
        A cork gets harder over time and trying to bore a cork that has hardened
        results in formation of cracks.&nbsp; We need to wet the cork in water
        to soften it.&nbsp; Once the cork becomes flexible, press it in a cork
        presser that is a mechanical device.&nbsp; Alternatively, we can wrap
        the wet cork in a piece of paper and place it under our shoes and press
        it.&nbsp; We now have a softened cork.&nbsp;&nbsp;
      </p>

      <h3 className={classes.secondaryTag}>Boring the cork</h3>

      <ul>
        <li>
          Place the cork on a table or a flat surface with its narrow end facing
          up.&nbsp;&nbsp;
        </li>
        <li>
          To ensure we get a straight hole, mark the position of the borer on
          both the sides of the cork.&nbsp;
        </li>
        <li>
          If the cork taken is a rubber one, we can apply some glycerine on the
          borer.&nbsp; The reason we do this is glycerine acts as lubricant on
          the hard rubber cork.&nbsp;&nbsp;
        </li>
        <li>
          Now hold the cork tightly with the left hand and applying force, start
          the boring process using a twisting motion.&nbsp; Make sure the borer
          remains vertical throughout.&nbsp;&nbsp;
        </li>
        <li>
          When half of the cork has been bored, take the borer out and reverse
          the cork. Start boring from the reversed side till a hole is
          obtained.&nbsp;
        </li>
        <li>We can now remove the borer.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Fitting a glass tube in the bore</h3>

      <ul>
        <li>We'll now fit the glass tube into the hole bored in the cork.</li>
        <li>
          Dip the end of the cork through which the tube is going to be inserted
          in water.&nbsp; Do the same with the end of the tube to be used.&nbsp;
          This ensures easy insertion of the tube into the cork.
        </li>
        <li>Hold the cork in one hand and the tube in the other hand.&nbsp;</li>
        <li>
          Hold the tube close to the wet end and insert the tube into the bored
          hole of the cork using a rotatory motion.&nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>
          Select bores of diameter slightly smaller in size than that of the
          tube to be inserted in the hole.
        </li>
        <li>Make a mark on both sides of the cork.</li>
        <li>
          To obtain a smooth hole, drill half the hole from one side and other
          half from other side of the cork.
        </li>
        <li>
          Since the rubber is hard, the end of the tube to be inserted is
          usually dipped in caustic soda solution or glycerine before fitting it
          in the hole.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Basic Laboratory Techniques. Retrieved
          30 March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=32&cnt=2
        </Typography>
      </div>
    </div>
  );
}
