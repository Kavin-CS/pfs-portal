import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import OrganicThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Organic1/organic-the1.png';
import OrganicThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Organic1/organic-the2.jpg';
import OrganicThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Organic1/organic-the3.jpg';
import OrganicThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Organic1/organic-the4.jpg';
import OrganicThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Organic1/organic-the5.jpg';

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
      <h1 className={classes.headTag}>Objectives</h1>

      <p>Our objectives are to prepare:</p>

      <ul>
        <li>A sample of acetanilide from aniline.</li>
        <li>A sample of dibenzal acetone.</li>
        <li>A sample of p-nitro acetanilide from acetanilide.</li>
        <li>A sample of 2-naphthol aniline dye.</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is Organic Chemistry?</h2>

      <p>
        Organic chemistry is a branch of chemistry that deals with the study of
        the structure, properties, reactions and preparation of organic
        compounds. As carbon and hydrogen are the essential constituents of all
        organic compounds, they are known as hydrocarbons. Organic compounds not
        only contain carbon and hydrogen, but also certain other elements such
        as: oxygen, sulphur, nitrogen, and halogens. These are regarded as the
        derivatives of hydrocarbon.
      </p>

      <h2 className={classes.secondaryTag}>
        Which was the first organic compound to be synthesised in the lab and by
        whom?
      </h2>

      <p>
        Urea was the first organic compound to be prepared in the laboratory,
        which was by synthesised chance. It was prepared by Friedrich Wohler, a
        German chemist in the year 1828. Wohler synthesised urea from an
        inorganic compound, ammonium cyanate.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»4«/mn»«/msub»«mi mathvariant=¨normal¨»CNO«/mi»«mo»§nbsp;«/mo»«munderover»«mo»§#8594;«/mo»«mrow»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/munderover»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»CONH«/mi»«mn»2«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={OrganicThe1}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>What is organic synthesis?</h2>

      <p>
        Organic synthesis is a method of preparation of organic compounds. It is
        concerned with the preparation of organic compounds through organic
        reactions.
      </p>

      <h2 className={classes.secondaryTag}>Synthesis of some simple organic compounds.</h2>

      <h3 className={classes.secondaryTag}>1. Acetanilide</h3>

      <p>
        Acetanilide is prepared from aniline by acetylating it with acetic
        anhydride in the presence of glacial acetic acid. Aniline or phenylamine
        is a primary amine with molecular formula C<sub>6</sub>H<sub>5</sub>NH
        <sub>2</sub>. It is basic in nature. Acetic anhydride is an anhydride of
        acetic acid and acts as a source of acyl group. Aniline reacts with
        acetic anhydride by nucleophilic substitution reaction. The reaction
        between aniline and acetic anhydride is called acetylation. In this
        reaction, aniline acts as the nuclepohile and acyl (CH<sub>3</sub>CO-)
        group from acetic anhydride acts as the electrophile. Here, the hydrogen
        atom of –NH<sub>2</sub> group is replaced by the acyl group. The
        chemical reaction is shown below.
      </p>

      <p>
        <img alt="" src={OrganicThe2} />
      </p>

      <h3 className={classes.secondaryTag}>2. Dibenzal acetone</h3>

      <p>
        It is prepared from benzaldehyde and acetone by Claisen-Schmidt
        Reaction.
      </p>

      <p>
        Claisen Schmidt Reaction is a condensation reaction between an aromatic
        aldehyde and an aliphatic ketone in the presence of a strong base like
        NaOH leading to unsaturated ketone. In this reaction, two molecules of
        water are eliminated.
      </p>

      <p>
        In the preparation of Dibenzal acetone, two moles of benzaldehyde
        condenses with one mole of acetone. The chemical reaction is represented
        as follows;
      </p>

      <p>
        <img alt="" src={OrganicThe3} />
      </p>

      <h3 className={classes.secondaryTag}>3.&nbsp; p-Nitro acetanilide</h3>

      <p>
        The direct preparation of p-nitroacetanilide from aniline using a
        nitrating mixture is very difficult. This is because, in the presence of
        the nitrating mixture, the amino (-NH2) group of aniline is oxidised to
        the nitro (-NO<sub>2</sub>) group and forms nitro benzene.
      </p>

      <p>
        The amino group of aniline is first protected by acylation with acetic
        anhydride to produce acetanilide which is then nitrated to form
        p-nitroacetanilide as the major product and o-nitroacetanilide as the
        minor product. To separate p-nitroacetanilide from this mixture, the
        reaction mixture is recrystallised in ethanol, so that the more readily
        soluble o-nitroacetanilide dissolves in ethanol and pure
        p-nitroacetanilide separates out.
      </p>

      <p>
        <img alt="" src={OrganicThe4} />
      </p>

      <h3 className={classes.secondaryTag}>4.&nbsp; 2-Naphthol aniline dye</h3>

      <p>
        2-Naphyhol aniline dye is an azo compound and it is a scarlet red dye.
        It is mainly used for dyeing textiles. It contains the characteristic
        group. Azo compounds have an extended conjugated system and are often
        coloured and are used as dyes. These compounds are prepared by the
        reaction known as coupling reaction. 2-Naphthol aniline dye is prepared
        from aniline.
      </p>

      <p>
        Aniline is first converted to diazonium salt by treating it with nitrous
        acid at &gt;5<sup>o</sup>C. Nitrous acid is produced in the reaction
        mixture by the reaction of sodium nitrite with hydrochloric acid. The
        procession of conversion of aromatic primary amines into diazonium salt
        is known as diazotisation. This benzene diazonium compound undergoes a
        coupling reaction with 2-Naphthol to form 2-Naphyhol aniline dye.
      </p>

      <p>
        <img alt="" src={OrganicThe5} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the concepts of organic compounds, classification
          of organic compounds, functional groups, substitution, addition,
          elimination and rearrangement reactions.
        </li>
        <li>
          Students acquire the skills to prepare:
          <ul>
            <li>Acetanilide</li>
            <li>Dibenzal acetone</li>
            <li>p-Nitro acetanilide</li>
            <li>2-Naphthol aniline dye&nbsp;</li>
          </ul>
        </li>
        <li>
          Students understand the chemicals required for the preparation of the
          above compounds.
        </li>
        <li>
          Students understand the theory behind the formation of acetanilide,
          dibenzal acetone, p-Nitro acetanilide and 2-Naphthol aniline dye.
        </li>
        <li>
          Once they understand the different steps, students can perform the
          experiment in the real lab more accurately and quicker.
        </li>
        <li>
          Students understand important safety precautions before using
          hazardous chemicals.&nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Preparation of Organic Compounds.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=116&cnt=1
        </Typography>
      </div>
    </div>
  );
}
