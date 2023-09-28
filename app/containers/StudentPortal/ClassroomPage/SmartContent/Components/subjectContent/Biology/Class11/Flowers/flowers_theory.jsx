import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import FlowersThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the1.jpg';
import FlowersThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the2.jpg';
import FlowersThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the3.jpg';
import FlowersThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the4.jpg';
import FlowersThe5 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the5.jpg';
import FlowersThe6 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the6.jpg';
import FlowersThe7 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-the7.jpg';


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
      <div>
        <h1 className={classes.headTag}>Objective</h1>
      </div>

      <p>
        Our objective is to study the characteristics of the following plants-
        Petunia, Lathyrus, Asparagus and Onion.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        <strong>Let's begin with the basic anatomy of flowers.</strong>
      </p>

      <p>
        Flower is a reproductive organ of the angiosperm plant that contains
        thalamus and floral leaves. A typical flower consists of four types of
        floral leaves called sepals, petals, stamens and carpels in distinct
        whorls normally known as calyx, corolla, androecium and gynoecium
        respectively. A flower in which all the four whorls are present (Sepal,
        Petal, Carpels, Stamens) are called as <strong>complete.</strong>The
        stalk of a flower&nbsp;&nbsp;is called as pedicel that holds the actual
        flower up in the air.
      </p>

      <p>
        If a flower having both male and female sex organs are called bisexual
        and a flower having either only male or female organs is called
        unisexual. A flower having bract at its tip is called{' '}
        <strong>bracteate </strong>and without bracts is called{' '}
        <strong>ebracteate.</strong> A flower without a stalk or pedicel is
        called <strong>sessile</strong> and a flower having a stalk is called{' '}
        <strong>pedicellate</strong>. A flower may be trimerous, tetramerous or
        pentamerous when the floral leaves of each whorl are in multiple of 3, 4
        or 5, respectively.&nbsp;
      </p>

      <p>
        <strong>
          Based on the symmetry of the flowers can be described in to following
          types:
        </strong>{' '}
        &nbsp;
      </p>

      <p>
        1. Actinomorphic: Flowers can be divided into two halves through any
        vertical plane.
      </p>

      <p>
        2. Zygomorphic: Flowers can be divided into two equal halves only along
        one vertical plane.
      </p>

      <p>
        3. Asymmetrical: Flowers which cannot be divided into equal halves by
        any plane.
      </p>

      <p>
        <img alt="" src={FlowersThe1} />
      </p>

      <p>
        <strong>
          Based on the position of calyx, corolla, and androecium with respect
          of ovary, the flowers are described as following:
        </strong>
      </p>

      <p>
        1.Hypogynous (Superior ovary): Gynoecium occupies the highest position
        while the other parts are situated below it.
      </p>

      <p>
        2.Perigynous (Half inferior): If gynoecium is situated in the centre and
        other parts of the flower are located on the rim of the &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;thalamus almost at the same level.
      </p>

      <p>
        3.Epigynous (Inferior ovary): The ovary situated in a flask shaped
        thalamus and other parts of flower arise above the ovary.
      </p>

      <h2 className={classes.secondaryTag}>Parts of a flower</h2>

      <p>
        Each flower normally has four floral whorls, calyx, corolla, androecium
        and gynoecium.
      </p>

      <h3 className={classes.secondaryTag}>1.Calyx</h3>

      <p>
        The calyx is the outermost whorl of the flower and is called sepals.
        Sepals looks like green leaves that are seen underneath the flower.
        Calyx may be gamosepalous (sepals united) or polysepalous (sepals free).
      </p>

      <h3 className={classes.secondaryTag}>2.Corolla</h3>

      <p>
        The corolla is the second whorl of the flower and is composed of petals.
        Petals are the most colorful parts of a flower. Corolla may be
        gamopetalous (petals united) or polypetalous (petals free).
      </p>

      <p>
        The arrangements of sepals or petals in the floral bud, with respect to
        the members of the same whorls are called aestivation.
      </p>

      <p>
        1.Valvate: When sepals or petals do not overlap one another at the
        margin, without overlapping.
      </p>

      <p>2.Twisted: Sepals or petals overlap with the next sepal or petal.</p>

      <p>
        3. Imbricate: If the margins of sepals or petals overlap one another but
        not in any particular direction are called imbricate &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;aestivation.
      </p>

      <p>
        4.Vexillary: Among five petals, the largest petal (standard) overlaps
        the two lateral petals (wings) which in turn overlap two &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;smallest anterior petals (Keel).
      </p>

      <p>
        <img alt="" src={FlowersThe2} />
      </p>

      <h3 className={classes.secondaryTag}>3. Androecium</h3>

      <p>
        Androecium is the third whorl of the flower which contains the male
        reproductive organ, stamens.&nbsp; A stamen consists of an anther and a
        filament.
      </p>

      <p>
        The stamens are variously fused among themselves. They can be of the
        following type:
      </p>

      <ol>
        <li>
          Monoadelphous: stamens may be united into one bunch or one bundle.
          e.g., China rose
        </li>
        <li>Diadelphous: stamens may be united into two bundles. e.g., pea</li>
        <li>
          Polyadelphous: stamens may be united into more than two bundles. e.g.,
          &nbsp;Citrus
        </li>
      </ol>

      <p>
        Based on the attachment of filament to anther, it can be of the
        following type:
      </p>

      <ol>
        <li>
          Basifixed: Filament of stamen is attached to base of the anther.
        </li>
        <li>Adnate: Filament attached along the whole length of anther.</li>
        <li>Dorsifixed: Filaments attached to the back of anther.</li>
        <li>
          Versatile: Anther lobes attached with filament in the middle portion
          with both ends free
          <img alt="" src={FlowersThe3} />
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>4.Gynoecium</h3>

      <p>
        &nbsp;Gynoecium is the innermost whorl of a flower, consisting of one or
        more units called carpels. Each carpel includes an ovary, a &nbsp;style
        and a stigma.
      </p>

      <p>Carpels are of two types depending upon fusion:</p>

      <ol>
        <li>Apocarpous: Carpels free from each other e.g.,&nbsp; lotus</li>
        <li>Syncarpous: Carpels fused with each other e.g., mustard.</li>
      </ol>

      <p>
        The arrangement of placentae bearing ovules inside the ovary is called
        placentation. It is of following types.
      </p>

      <ol>
        <li>
          Marginal: The placenta forms a ridge along the ventral suture of the
          ovary and the ovules are borne on this ridge e.g., pea.
        </li>
        <li>
          Axile: Margins of carpels fuse to form central axis. e.g., tomato
        </li>
        <li>
          Parietal: The ovules develop on the inner wall of the ovary. e.g.,
          mustard.
        </li>
        <li>
          Free central: Ovules borne from central axis and lacking septa. e.g.,
          chilly.
        </li>
        <li>
          Basal: Placenta develops at the base of the ovary. e.g., sunflower.
        </li>
      </ol>

      <p>
        <img alt="" src={FlowersThe4} />
      </p>

      <h2 className={classes.secondaryTag}>
        We will now look at the characteristics of some plants based on their
        family.
      </h2>

      <h3 className={classes.secondaryTag}>1 .&nbsp;Petunia Alba (Family: Solanaceae)</h3>

      <h4 className={classes.secondaryTag}>Floral Characteristics:</h4>

      <ul>
        <li>
          Flower:Ebracteate, pedicellate, complete, actinomorphic, bisexual,
          pentamerous, hypogynous.
        </li>
        <li>Calyx:Sepals 5, Gamosepalous, green, valvate aestivation.</li>
        <li>
          Corolla:Petals 5, Gamopetalous, white/purple, valvate aestivation.
        </li>
        <li>Androecium:Stamens 5, Epipetalous, Anther basifixed, Dithecous.</li>
        <li>
          Gynoecium:Bicarpellary, syncarpous, ovary superior, axile
          placentation, swollen placenta.
        </li>
      </ul>

      <p>Reason for identification:</p>

      <p>
        Persistent sepals, infundibuliform corolla, stamen epipetalous, ovary
        obliquely placed, axile placentation with swollen placenta.
      </p>

      <p>
        <img alt="" src={FlowersThe5} />
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>2. Sweet Pea [Family: Fabaceae]</h3>

      <h4 className={classes.secondaryTag}>Floral Characteristics:</h4>

      <ul>
        <li>
          Flower:Bracteate, pedicellate, complete, zygomorphic, bisexual,
          pentamerous.
        </li>
        <li>
          Calyx: Sepals 5, Gamosepalous, green, valvate aestivation, odd sepal
          anterior.
        </li>
        <li>
          Corolla: Petals5, polypetalous, papilionaceous, vexillary aestivation.
        </li>
        <li>
          Androecium:Stamens 10, diadelphous 9 +1, 9 stamens united at base and
          10<sup>th</sup> stamen is free, anther basifixed, dithecous.
        </li>
        <li>
          Gynoecium: Monocarpellary, ovary superior, unilocular, marginal
          placentation.
        </li>
      </ul>

      <p>Reason for identification:</p>

      <p>
        Flowers zygomorphic with papilionaceous corolla, stamens diadelphous,
        monocarpellary gynoecium, ovary unilocular with marginal placentation.
      </p>

      <p>
        <img alt="" src={FlowersThe6} />
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>3. Asparagus [Family: Liliaceae]</h3>

      <p>Floral Characteristics:</p>

      <ul>
        <li>
          Flower: Bracteate, pedicellate, incomplete, actinomorphic, bisexual,
          hypogynous, trimerous
        </li>
        <li>Tepals: Tepals 6, two whorls of three each, white.</li>
        <li>
          Androecium: Stamens 6, antiphyllous, anther basifixed, Dithecous.
        </li>
        <li>
          Gynoecium: Tricarpellary, syncarpous, ovary superior, trilocular,
          axile placentation.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Reason for identification:</h3>

      <p>
        Flowers are trimerous, petaloid perianth in two whorls of 3 each,
        stamens 6 in two whorls of 3 each, epiphyllous, ovary tricarpellary,
        trilocular with axile placentation.
      </p>

      <p>
        <img alt="" src={FlowersThe7} />
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>4. Onion [Family: Liliaceae]</h3>

      <h4 className={classes.secondaryTag}>Floral Characteristics:</h4>

      <ul>
        <li>
          Flower: Bracteate, pedicellate, incomplete, actinomorphic, bisexual,
          hypogynous, trimerous
        </li>
        <li>Tepals: Tepals 6, two whorls of three each, petaloid, white.</li>
        <li>
          Androecium: Stamens 6, polyandrous, antiphyllous, anther basifixed,
          dithecous.
        </li>
        <li>
          Gynoecium: Tricarpellary, syncarpous, ovary superior, trilocular,
          axile placentation.
        </li>
      </ul>

      <h4 className={classes.secondaryTag}>Reason for identification:</h4>

      <p>
        Flowers are trimerous, petaloid perianth in two whorls of 3 each,
        stamens 6 in two whorls of 3 each, epiphyllous, ovary tricarpellary,
        trilocular with axile placentation.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Characteristics of Flowers. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=198&cnt=1
        </Typography>
      </div>
    </div>
  );
}
