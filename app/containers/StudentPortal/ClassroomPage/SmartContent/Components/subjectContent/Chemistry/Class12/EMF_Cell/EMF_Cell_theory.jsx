import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import Galvani from '../../../../../../../../../assets/Images/Subjects/Chemistry/emf-img1.jpg';
import Daniell from '../../../../../../../../../assets/Images/Subjects/Chemistry/emf-img3.jpg';
import DaniellCell from '../../../../../../../../../assets/Images/Subjects/Chemistry/emf-img4.jpg';
import Nernst from '../../../../../../../../../assets/Images/Subjects/Chemistry/emf-img5.jpg';

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
        Our objective is to study the variation of cell potential of Zn│Zn
        <sup>2+</sup> ││Cu<sup>2+</sup>│Cu cell with change in the concentration
        of electrolytes (CuSO<sub>4</sub> and ZnSO<sub>4</sub>) at room
        temperature.
      </p>
      <h1 className={classes.headTag}>The Theory</h1>
      <img src={Galvani} />
      <h2 className={classes.secondaryTag}>What is Electrochemistry?</h2>
      <p>
        Electrochemistry is the study of the interchange of chemical energy and
        electrical energy. The process of conversion of chemical energy into
        electrical energy is called electrochemical reaction and the reverse
        process is called electrolytic reaction or electrolysis. A device that
        produces electrical energy from a chemical reaction is called an
        electrochemical cell and devices that undergo chemical reaction with the
        aid of electricity are called electrolytic cells.
      </p>
      <h2 className={classes.secondaryTag}>Galvanic Cell</h2>
      <p>
        A galvanic cell is an important electrochemical cell. It is named after
        Luigi Galvani an Italian physicist. It is also called Voltaic cell,
        after an Italian physicist, Alessandro Volta. A galvanic cell generally
        consists of two different metal rods called electrodes. Each electrode
        is immersed in a solution containing its own ions and&nbsp; these form a
        half cell. Each half cell is connected by a salt bridge, or separated by
        a porous membrane. The solutions in which the electrodes are immersed
        are called electrolytes.
      </p>
      <p>
        The chemical reaction that takes place in a galvanic cell is the redox
        reaction. One electrode acts as anode in which oxidation takes place and
        the other acts as the cathode in which reduction takes place.&nbsp; The
        best example of a galvanic cell is the Daniell cell.
      </p>
      <img src={Daniell} />
      <h2 className={classes.secondaryTag}>Daniell cell</h2>
      <p>
        The Daniell cell was invented by a British chemist, John Frederic
        Daniell. In the Daniell cell, copper and zinc electrodes are immersed in
        a solution of copper (II) sulfate (CuSO<sub>4</sub> (aq)) and zinc (II)
        sulfate (ZnSO<sub>4</sub> (aq)) respectively. The two half cells are
        connected through a salt bridge. Here zinc acts as anode and copper acts
        as cathode.
      </p>
      <p>
        At the anode, zinc undergoes oxidation to form zinc ions and
        electrons.&nbsp; The zinc ions pass into the solution. If the two
        electrodes are connected using an external wire, the electrons produced
        by the oxidation of zinc travel through the wire and enter into the
        copper cathode, where they reduce the copper ions present in the
        solution and form copper atoms that are deposited on the cathode.
      </p>
      <img src={DaniellCell} />
      <h2 className={classes.secondaryTag}>What is a Salt Bridge?</h2>
      <p>
        The salt bridge is usually an inverted U-tube filled with a concentrated
        solution of an inert electrolyte. The inert electrolyte is neither
        involved in any chemical change, nor does it react with the solutions in
        the two half cells.&nbsp; Generally salts like, KCl, KNO<sub>3</sub>, NH
        <sub>4</sub>NO<sub>3</sub> are used as the electrolyte.
      </p>
      <h2 className={classes.secondaryTag}>How is a Salt Bridge made?</h2>
      <p>
        To prepare salt bridge, agar-agar or gelatin is mixed with a hot
        concentrated solution of electrolyte and is filled in the U-tube. On
        cooling, the solution sets in the form of a gel inside the U-tube and
        thus prevents the inter mixing of the fluids. The two ends of the U-tube
        are then plugged with cotton wool to minimise diffusion.
      </p>
      <h2 className={classes.secondaryTag}>Significance of Salt Bridge</h2>
      <ul>
        <li>
          Its main function is to prevent the potential difference that arise
          between the two solutions when they are in contact with each other.
          This potential difference is called the liquid junction potential.
        </li>
        <li>
          It completes the electrical circuit by connecting the electrolytes in
          the two half cells.
        </li>
        <li>
          It prevents the diffusion of solutions from one half cell to the
          other.
        </li>
        <li>
          It maintains the electrical neutrality of the solutions in the two
          half cells.
        </li>
      </ul>
      <h3>
        How is the electrical neutrality of the solutions in the two half cells
        maintained using a salt bridge?
      </h3>
      <p>
        In the anodic half cell, there will be accumulation of positive charge
        when the positive ions that are formed pass into the solution. To
        maintain the electrical neutrality, salt bridge provides negative ions.
      </p>
      <p>
        For example, in Daniell cell, zinc oxidizes at the anode and passes into
        the solutions as Zn<sup>2+</sup> ions, so there will be accumulation of
        positive charge in the solution. To maintain the electrical neutrality
        of the solution, the salt bridge provides negative ions (may be NO
        <sub>3</sub>
        <sup>-</sup>
        <sup>&nbsp;</sup>or Cl<sup>-</sup>).
      </p>
      <p>
        In the cathodic half cell, there will be accumulation of negative ions
        formed due to the reduction of positive ions. To maintain the electrical
        neutrality, salt bridge provides postive ions.
      </p>
      <p>
        For example, in Daniell cell, Cu<sup>2+ </sup>ions from the CuSO
        <sub>4</sub> solution is reduced by the electron formed by the oxidation
        of zinc, and deposited on the copper cathode. As a result, the
        concentration Cu<sup>2+</sup> ions decreases in the solution and that of
        SO<sub>4</sub>
        <sup>2-</sup> ions (sulphate ions) increases. So there will be an
        accumulation of negatively charged sulphate ions around the cathode. To
        maintain the electrical neutrality, salt bridge provides positive ions
        (may be, K<sup>+</sup> or NH<sub>4</sub>+).
      </p>
      <h2 className={classes.secondaryTag}>
        Representation of an electrochemical cell: The cell notation
      </h2>
      <p>
        The following rules are followed for representing an electrochemical
        cell.
      </p>
      <ul>
        <li>
          Anode is written on the left hand side and cathode on the right hand
          side.
        </li>
        <li>
          The anodic cell is represented by writing the metal first and then the
          metal ions present in the electrolyte. These two are separated by a
          vertical line or a semicolon.
        </li>
      </ul>
      <ul>
        <li>
          The molar concentration or activity of the solution is written in
          brackets after the formula of the ion.
        </li>
      </ul>
      <ul>
        <li>
          The cathodic cell is represented by writing the metal ion first of the
          electrolyte solution and then the metal. Both are separated by
          vertical line or semicolon.
        </li>
      </ul>
      <ul>
        <li>
          The molar concentration or activity of the solution is written in
          brackets after the formula of the ion.
        </li>
      </ul>
      <ul>
        <li>Salt bridge is represented by two vertical lines.</li>
      </ul>
      <p>So Daniell cell is represented as:</p>
      <p>
        If the concentration of both the electrolytes is 1 M, then the cell
        notation is:
      </p>
      <h2 className={classes.secondaryTag}>Electrode potential</h2>
      <p>
        When a metal electrode is dipped in a solution containing its metal
        ions, a potential difference is developed at the metal solution
        interface. This potential difference is called the electrode potential.
      </p>
      <p>
        For example, when a zinc rod is dipped in a solution containing Zn
        <sup>2+</sup> ions, it oxidizes, and the Zn<sup>2+</sup> ions pass from
        the zinc rod to the solution leaving excess of electrons at the zinc
        rod. Thus the zinc rod becomes negatively charged with respect to the
        solution and a potential difference is set up between the zinc rod and
        the solution. This potential difference is called the electrode
        potential of zinc. Similarly, when a copper rod is dipped in a solution
        containing Cu<sup>2+</sup> ions, the Cu<sup>2+</sup> ions gain electrons
        from the copper rod leaving positive charge on the copper rod. As a
        result a potential difference is set up between the copper rod and the
        solution and is called the electrode potential of copper.
      </p>
      <p>
        In an electrochemical cell, the anode has a negative potential and
        cathode has a positive potential.The potential of each individual half
        cell cannot be measured. We can measure only the difference between the
        potential of the two half cells.
      </p>
      <p>
        The potential of a half cell can be measured by connecting it with
        Standard Hydrogen Electrode (SHE). The standard electrode potential of a
        SHE is assumed to be zero.
      </p>
      <p>
        The electrode potential at standard conditions such as 25°C temperature,
        1 atm pressure, 1 M concentration of electrolyte, is called the standard
        electrode potential. It is denoted by the symbol E
        <sup>
          <sub>0</sub>
        </sup>
        . The electrodes are arranged in the increasing order of their standard
        reduction potential and are called electrochemical series.
      </p>
      <h2 className={classes.secondaryTag}>
        Electromotive Force (emf) OR Cell Potential
      </h2>
      <p>
        The potential difference between the two electrodes in a galvanic cell
        is called a cell potential or emf of the cell. It is measured in volts.
      </p>
      <p>
        emf of the cell = Potential of the half cell on the right hand side
        (Cathode) - Potential of the half cell on the left hand side (Anode)
      </p>
      <p>For example, emf of Daniell cell,</p>
      <img src={Nernst} />
      <p>
        Nernst equation relates the equilibrium potential of an half cell with
        the standard electrode potential, temperature, activity and reaction
        quotients of the reacting species. It is named after the German physical
        chemist Walther Nernst.
      </p>
      <p>
        Nernst showed that for the electrode reaction;&nbsp; , the electrode
        potential at any concentration measured with respect to SHE can be
        represented as:
      </p>
      <p>
        But the concentration of the solid M is taken as unity and substituting
        the values of R, F and T=298 K (Room Temperature), the above equation
        reduces to:
      </p>
      
      <h2 className={classes.secondaryTag}>
        Calculation of emf of Daniell Cell
      </h2>
      <p>
        So the electrode potential of an electrochemical depends on the standard
        electrode potential, temperature, no. of electrons involved in the
        chemical reaction and the concentration of the reacting species.
      </p>
      <h1 className={classes.headTag}>Learning Outcomes</h1>
      <ul>
        <li>
          Students understand the terms, electrochemical cell, electrolytic
          cell, Daniell cell, salt bridge, EMF.
        </li>
        <li>Students acquire the skill to construct a Daniell cell.</li>
        <li>Students understand the significance of salt bridge.</li>
        <li>
          Students acquire the skill to calculate the electrode potential of a
          half cell and full cell using the Nernst equation.
        </li>
        <li>
          Students acquire the skill to measure the EMF of a cell by viewing
          animation &amp; simulator.
        </li>
        <li>
          Students understand how the electrode potential of a given cell varies
          with the concentration of electrolytes in the anodic and cathodic half
          cell.&nbsp; &nbsp;
        </li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Determination of EMF of a Cell.
          Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=153&cnt=1
        </Typography>
      </div>
    </div>
  );
}
