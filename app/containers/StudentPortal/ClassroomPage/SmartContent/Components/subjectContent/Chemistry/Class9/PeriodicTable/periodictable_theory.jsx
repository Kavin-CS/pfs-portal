import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PeriodicTableThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PeriodicTable1/ptable-the1.png';
import PeriodicTableThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PeriodicTable1/ptable-the2.jpg';


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
      <h2 className={classes.secondaryTag} textAlign="justify;">Objective:</h2>

      <p textAlign="justify;">
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            To study the modern periodic table.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Theory:</h2>

      <p>
        <strong>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Periodic Table:&nbsp;
            </span>
          </span>
        </strong>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            It is the table of chemical elements arranged in order of atomic
            number such that elements with similar atomic structure appear in
            the vertical columns.
          </span>
        </span>
      </p>

      <p textAlign="justify;">
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <strong>Modern periodic law:</strong>&nbsp;
          </span>
        </span>
        <span
          fontfamily="arial, helvetica, sans-serif;"
          fontSize="14px;"
          lineHeight="1.6;"
        >
          The Modern periodic law states{' '}
          <strong>
            “The chemical and physical properties of elements&nbsp;are a
            periodic function of their atomic numbers”.
          </strong>
          &nbsp;Modern periodic table&nbsp;(Figure 1) is based on the modern
          periodic law.&nbsp;
        </span>
      </p>

      <p textAlign="center;">
        <span
          fontfamily="arial, helvetica, sans-serif;"
          fontSize="14px;"
          lineHeight="1.6;"
        >
          <img
            alt=""
            src={PeriodicTableThe1}
            width="710px;"
            height="442px;"
          />
        </span>
      </p>

      <p textAlign="center;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">Figure 1</span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Main features:</h2>

      <ul marginLeft="40px;">
        <li>
          <strong>
            <span fontSize="14px;">
              <span fontFamily="arial,helvetica,sans-serif;">
                Groups
              </span>
            </span>
          </strong>{' '}
          -&nbsp;
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            There are 18 vertical columns in the periodic table. Each column is
            called a group.&nbsp;All elements in a group have similar chemical
            and physical properties because they have the same number of outer
            electrons.
          </span>
        </li>
        <li textAlign="justify;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Periods</strong>
            </span>
          </span>{' '}
          -{' '}
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              In periodic table elements are arranged in a series of rows
              <span lineHeight="1.6;">
                .&nbsp;Elements of the same period have the same number of
                electron shells.
              </span>
            </span>
          </span>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Related Terms:</h2>

      <ol>
        <li textAlign="justify; margin-left: 40px;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Atomic number:&nbsp;</strong>Atomic number of an element
              is the number of protons found in the nucleus of the atom of that
              element.
            </span>
          </span>
        </li>
        <li textAlign="justify; margin-left: 40px;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Mass number:</strong>&nbsp;Mass number of an element is
              the total number of protons and neutrons in the nucleus of the
              atom of that element.
            </span>
          </span>
        </li>
        <li textAlign="justify; margin-left: 40px;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Atomic mass:&nbsp;</strong>The&nbsp;atomic mass is
              the&nbsp;mass&nbsp;of an atomic particle, sub-atomic particle, or
              molecule.
            </span>
          </span>
        </li>
        <li textAlign="justify; margin-left: 40px;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Electronic configuration: </strong>The electronic
              configuration is the distribution of electrons of an atom or
              molecule in atomic or molecular orbitals.
            </span>
          </span>
        </li>
        <li textAlign="justify; margin-left: 40px;">
          <strong>
            <span fontSize="14px;">
              <span fontFamily="arial,helvetica,sans-serif;">
                Melting point:&nbsp;
              </span>
            </span>
          </strong>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              The temperature at which an element changes its state from solid
              to liquid is called as the melting point of the element.
            </span>
          </span>
        </li>
        <li textAlign="justify; margin-left: 40px;">
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              <strong>Boiling point:</strong> The temperature at which
              the&nbsp;vapor pressure&nbsp;of the&nbsp;liquid&nbsp;equals
              the&nbsp;pressure surrounding the liquid and the liquid changes
              into a vapor is known as the boiling point of that element.
            </span>
          </span>
          <br />
          &nbsp;
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Classification of elements:</h2>

      <ol marginLeft="40px;">
        <li textAlign="justify;">
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            Group 1 on extreme left position contains{' '}
            <strong>alkali metals </strong>(Li, Na, K, Rb, Cs and Fr).
          </span>
        </li>
        <li textAlign="justify;">
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            The&nbsp;<strong>alkaline earth&nbsp;metals</strong> are metallic
            elements found in the group 2 of the periodic table.&nbsp;
          </span>
        </li>
        <li textAlign="justify;">
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            Elements present in groups 3 to 12 in the middle of the periodic
            table are called
          </span>
          <strong
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            {' '}
            transition elements
          </strong>
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            . In the transition elements, valence electrons are present in more
            than one shell. With a few minor exceptions, the electronic
            structure of transition metal atoms can be written as [ ]ns
          </span>
          <sup fontfamily="arial, helvetica, sans-serif;">2</sup>
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            (n-1)d
          </span>
          <sup fontfamily="arial, helvetica, sans-serif;">m</sup>
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            , where the inner d orbital has more energy than the valence-shell s
            orbital.
          </span>
        </li>
        <li textAlign="justify;">
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            Group 18 on extreme right side position contain&nbsp;
            <strong>noble gases</strong>&nbsp;( He, Ne, Ar, Kr, Xe and Rn ).
            Their&nbsp;outermost shells contain 8 electrons except{' '}
            <strong>He</strong> as its outermost shell is <strong>K</strong>{' '}
            shell and it can hold only a maximum of 2&nbsp;electrons.&nbsp;
          </span>
        </li>
        <li textAlign="justify;">
          <strong
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            Inner transition elements
          </strong>
          <span
            fontfamily="arial, helvetica, sans-serif;"
            fontSize="14px;"
            lineHeight="1.6;"
          >
            :{' '}
          </span>
          <ol start="1">
            <li textAlign="justify;">
              <span
                fontfamily="arial, helvetica, sans-serif;"
                fontSize="14px;"
                lineHeight="1.6;"
              >
                14 elements with atomic numbers 58 to 71 (Ce to Lu)
                are&nbsp;called
              </span>
              <strong
                fontfamily="arial, helvetica, sans-serif;"
                fontSize="14px;"
                lineHeight="1.6;"
              >
                {' '}
                lanthanides{' '}
              </strong>
              <span
                fontfamily="arial, helvetica, sans-serif;"
                fontSize="14px;"
                lineHeight="1.6;"
              >
                &nbsp;and they are placed along with the element lanthanum (La),
                atomic&nbsp;number 57 in the same position (group 3 in period 6)
                because of very close resemblance between them. However, for
                convenience sake, they are shown separately below the&nbsp;main
                periodic table.
              </span>
            </li>
            <li textAlign="justify;">
              <span
                fontfamily="arial, helvetica, sans-serif;"
                fontSize="14px;"
                lineHeight="1.6;"
              >
                <span
                  fontfamily="arial, helvetica, sans-serif;"
                  fontSize="14px;"
                  lineHeight="1.6;"
                >
                  14 elements with atomic numbers 90 to 103 (Th to Lr) are
                  called
                </span>
                <strong
                  fontfamily="arial, helvetica, sans-serif;"
                  fontSize="14px;"
                  lineHeight="1.6;"
                >
                  {' '}
                  actinides&nbsp;
                </strong>
                <span
                  fontfamily="arial, helvetica, sans-serif;"
                  fontSize="14px;"
                  lineHeight="1.6;"
                >
                  and they&nbsp;are placed along with the element actinium (Ac),
                  atomic number 89 in the same position&nbsp;(group 3 in period
                  7) because of very close resemblance between them. They are{' '}
                </span>
                <span
                  fontfamily="arial, helvetica, sans-serif;"
                  fontSize="14px;"
                  lineHeight="1.6;"
                >
                  also shown separately below the main periodic table along with
                  lanthanides.
                </span>
              </span>
            </li>
          </ol>
        </li>
      </ol>

      <h3 className={classes.secondaryTag} textAlign="justify;">&nbsp;</h3>

      <h2 className={classes.secondaryTag}>Periodic Trends in periodic table:</h2>

      <p textAlign="justify;">
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Figure 2 illustrates the variation of physical and chemical
            properties of elements along group and periods in the modern
            periodic table.
          </span>
        </span>
      </p>

      <p textAlign="center;">
        <span
          fontfamily="arial, helvetica, sans-serif;"
          fontSize="14px;"
          lineHeight="1.6;"
        >
          &nbsp; &nbsp;&nbsp;
        </span>
        <img
          align="middle"
          alt="Periodic trends"
          src={PeriodicTableThe2}
          fontfamily="arial, helvetica, sans-serif;"
          fontSize="4px;"
          lineHeight="1.6;"
          borderWidth="1px;"
          borderStyle="solid;"
          width="400px;"
          height="280px;"
        />
      </p>

      <p textAlign="center;">Figure 2</p>

      <h2 className={classes.secondaryTag}>
        <span fontSize="10px;">
          <span fontSize="9px;">Source :&nbsp;https://en.wikipedia.org</span>
        </span>
      </h2>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Modern periodic table. Retrieved 3 April
          2021, from cdac.olabs.edu.in/?sub=75&brch=12&sim=94&cnt=1
        </Typography>
      </div>
    </div>
  );
}
