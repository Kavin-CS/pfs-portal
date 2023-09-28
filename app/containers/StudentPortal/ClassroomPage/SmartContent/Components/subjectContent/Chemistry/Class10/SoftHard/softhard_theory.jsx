import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SoftHardThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the1.png';
import SoftHardThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the2.png';
import SoftHardThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the3.png';
import SoftHardThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the4.png';
import SoftHardThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the5.png';
import SoftHardThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the6.png';
import SoftHardThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-the7.png';


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
  theoryImg: {
    width: 840,
    height: 410,
  },
  theoryImg1: {
    width: 510,
    height: 220,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        To study the comparative cleaning capacity of a sample of soap in soft
        and hard water.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Ordinary water does not remove dirt from clothes or skin because the
        dirt present is oily or greasy in nature. Soaps are one of the most
        commonly used cleansing agents and are capable of reacting with water to
        remove&nbsp; dirt. They are either animal origin or plant in origin.
        <br />
        Chemically, they are water soluble sodium or potassium salts of higher
        fatty acids such as stearic acid, palmitic acid or oleic acid. Fatty
        acids are found in fats and oils. When fat or oil is treated with alkali
        such as caustic soda or caustic potash soap and glycerin are produced.
      </p>

      <p>
        <img alt="" src={SoftHardThe1} />
      </p>

      <p>
        <img alt="" src={SoftHardThe2} />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        The soap molecule is generally represented as RCOONa. In solution, it
        ionizes to form RCOO- and Na+. Each soap molecule has a polar head group
        (carboxylate ion, COO- group) and a long non-polar hydrocarbon tail (R
        group from long chain fatty acid). The polar head attracts the polar
        water molecule and is called hydrophilic end and the non-polar tail
        attracts the water insoluble oily or greasy dirt particles.
      </p>

      <p>
        When a dirty cloth is placed in soap solution, the long non-polar
        hydrocarbon tail of soap molecules points towards the oily dirt
        particles and the polar heads point towards the water. This forms a
        spherical structure with polar parts of the molecule on the surface and
        non-polar parts in the center. This spherical structure is called
        micelle. This micelle is attracted towards water and carries the oily
        dirt particles along with it. This causes the dirt particles to detach
        from the fibres of the cloth. In this manner, clothes become free from
        dirt or dust.
      </p>

      <p>
        <img alt="" src={SoftHardThe3} />
      </p>

      <p>
        Other important cleansing agents are synthetic detergents. These are
        sodium salts of long chain sulphonic acids and are generally represented
        as RSO3Na. The cleansing action of soaps and detergents are same.
      </p>

      <p>
        Rubbing of clothes with brush or agitation in a washing machine loosens
        the bond between the dirt particles and the fibres of clothes. This
        supports the cleansing action of soaps and detergents.
      </p>

      <h2 className={classes.headTag}>Classification of Water</h2>

      <p>
        Water, along with soap, is used for washing purposes. On the basis of
        effective washing with soap, water has been classified as soft water and
        hard water.
      </p>

      <p>
        <strong>Soft water:</strong> Water which produces good lather with soap
        is called soft water. When water falls as rain, it is naturally soft.
        Washing with soap is easy in soft water.
      </p>

      <p>
        <strong>Hard water:</strong> Water which does not produce good lather
        with soap is called hard water. It is difficult to wash with soap in
        hard water. Water seeping through the ground becomes hard water. It is
        not useful for laundry and laboratory purposes.
      </p>

      <h2 className={classes.headTag}>Cleaning Capacity of Soap with Hard and Soft Water</h2>

      <p>
        Although soap is a good cleaning agent, its cleaning capacity is reduced
        when used in hard water. Hardness of water is due to the presence of
        sulphates, chlorides or bicarbonate salts of Ca2+ or Mg2+ ions. Soaps
        are sodium or potassium salts of long chain fatty acids. When soap is
        added to hard water, the Ca2+ and Mg2+ ions present in hard water react
        with soap. The sodium salts present in soaps are converted to their
        corresponding calcium and magnesium salts which are precipitated as
        scum. The insoluble scum sticks on the clothes and so the cleaning
        capacity of soap is reduced.
      </p>

      <p>
        <img alt="" src={SoftHardThe4} />
      </p>

      <p>
        <img alt="" src={SoftHardThe5} />
      </p>

      <p>
        The cleaning action of soap is very effective in soft water because it
        contains negligible calcium and magnesium ions.
      </p>

      <p>
        Synthetic detergents are used in the case of hard water also because the
        calcium and magnesium salts of detergents are soluble in water.
        Detergents are more soluble than soaps and hence form more lather than
        soaps.
      </p>

      <p>
        <strong>Types of Water Hardness:</strong> There are two types of water
        hardness.
      </p>

      <ul>
        <li>
          Temporary hardness:It is a type of water hardness caused by the
          presence of dissolved bicarbonate salts of calcium or magnesium.
          Temporary hardness can be removed by boiling. When temporary hard
          water is boiled, the bicarbonates of calcium and magnesium undergo
          decomposition to form insoluble carbonates.
        </li>
      </ul>

      <p>
        <img alt="" src={SoftHardThe6} />
      </p>

      <p>
        <img alt="" src={SoftHardThe7} />
      </p>

      <p>
        The insoluble carbonates of calcium and magnesium can be removed by
        filtration and the water thus obtained is free from calcium and
        magnesium ions and is soft.
      </p>

      <ul>
        <li>
          Permanent hardness:This type of water hardness is due to the presence
          of calcium or magnesium sulphates or chlorides. Permanent hardness
          cannot be removed by boiling. It can be removed by using water
          softeners.
        </li>
      </ul>

      <p>
        Cleaning with soap is effective in soft water. Soap lathers better in
        soft water and is scum free.&nbsp;&nbsp; Things become cleaner and time,
        money and energy are saved.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms: micelle, hard water, soft water,
          temporary hardness, and permanent hardness.
        </li>
        <li>
          Students acquire knowledge of the cleaning capacity of soap in hard
          and soft water.
        </li>
        <li>
          Based on the acquired skill, students will be able to classify the
          given water as hard water or soft water.
        </li>
        <li>
          Students acquire skills to perform the experiment in the real lab.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Cleaning Capacity of Soap with Hard and
          Soft Water. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=120&cnt=1
        </Typography>
      </div>
    </div>
  );
}
