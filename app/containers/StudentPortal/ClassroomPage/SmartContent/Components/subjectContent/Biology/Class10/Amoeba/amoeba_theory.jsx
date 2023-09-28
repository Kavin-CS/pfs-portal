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
import AmoebaImg1 from '../../../../../../../../../assets/Images/Subjects/Biology/Amoeba1.gif';
import AmoebaImg2 from '../../../../../../../../../assets/Images/Subjects/Biology/Amoeba2.gif';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Objective</h1>

        <p>Our objective is to study using the prepared slides;</p>

        <ol>
          <li>Binary fission in Amoeba.</li>
          <li>Budding in Yeast.</li>
        </ol>

        <h1 className={classes.headTag}>The Theory</h1>

        <h2 className={classes.secondaryTag}>Reproduction</h2>

        <p>
          All living things produce their own kind through the process called
          reproduction. Reproduction takes place sexually and asexually.
        </p>

        <h3>Sexual reproduction</h3>

        <p>
          Sexual reproduction is the primary method of reproduction for the vast
          majority of macroscopic organisms, including almost all animals and
          plants. Here are two main processes during sexual reproduction in
          eukaryotes: meiosis, involving the halving of the number of
          chromosomes; and fertilisation, involving the fusion of two gametes
          and the restoration of the original number of chromosomes. During
          meiosis, the chromosomes of each pair usually cross over to achieve
          homologous recombination that helps produce genetic diversity when
          cells divide in meiosis.
        </p>

        <h3>Asexual reproduction</h3>

        <p>
          Asexual reproduction is the primary form of reproduction for
          single-celled organisms such as the archaea, bacteria, and protists.
          Many plants and fungi reproduce asexually as well. Asexual
          reproduction is a mode of reproduction by which offspring arise from a
          single parent, and inherit the genes of that parent only. The
          offspring will be the exact genetic copies of the parent.
        </p>

        <p>
          New organisms are produced in rapid multiplication by the process of
          amitotic or mitotic divisions. Amitosis is the process by which a cell
          directly separates, as the nucleus and cytoplasm are directly cut in
          two. Mitosis is the process by which a cell, which has previously
          replicated each of its chromosomes, separates the chromosomes in its
          cell nucleus into two identical sets of chromosomes, each set will
          have its own new nucleus. It is a form of nuclear division.
        </p>

        <p>
          Binary fission and budding are two common method of asexual
          reproduction. Binary fission is found in unicellular organisms like
          Amoeba, Paramaecium and Euglena, to name and few. Budding is found in
          Yeast and Hydra.
        </p>

        <h2 className={classes.secondaryTag}>Binary fission in Amoeba</h2>

        <p>
          Amoeba is a shapeless tiny unicellular organism that has a porous cell
          membrane which encloses the cell organelles and cytoplasm. Amoeba
          reproduces by the common asexual reproduction method called binary
          fission. After replicating its genetic material through mitotic
          division, the cell divides into two equal sized daughter cells. The
          genetic material is also equally partitioned; therefore the daughter
          cells are genetically identical to each other and the parent cell. In
          this process, the nucleus of the Amoeba first divides to form two
          daughter nuclei by the process of Karyokinesis. After the nucleus has
          divided into two, the process of Cytokinesis takes place in which the
          cytoplasm in the mother cell divides into two daughter cells. This
          leads to the formation of the two daughter Amoebae cell having a
          nucleus and its own cell organelles.
        </p>

        <p>
          Karyokinesis is the process of the division of the nucleus. It
          corresponds to the separation of the daughter chromosomes into two
          daughter nuclei. Karyokinesis is usually followed by Cytokinesis.
        </p>

        <p>
          Cytokinesis is the process of the division of the cytoplasm. It
          corresponds to the separation of the daughter nuclei into two daughter
          cells. Cytokinesis occurs immediately after mitosis.
        </p>

        <p>
          <img alt="" src={AmoebaImg1} />
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>Budding in Yeast</h2>

        <p>
          Yeast are unicellular (some are multicellular) eukaryotic
          micro-organisms belonging to the kingdom fungi. Yeast size can vary
          greatly depending on the species, typically measuring 3-4 µm in
          diameter. Most yeasts reproduce asexually by an asymmetric division
          process called budding. First it produces a small protuberance on the
          parent cell that grows to a full size and forms a bud. The nucleus of
          the parent cell splits into a daughter nucleus and migrates into the
          daughter cell. The bud detaches from the mother’s body by forming a
          constriction at the base. Budding will repeat to form a chain of bud
          cells. The daughter cell produced during the budding process is
          generally smaller than the mother cell.
        </p>

        <p>
          <img alt="" src={AmoebaImg2} />
        </p>

        <p>&nbsp;</p>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ol>
          <li>
            Students understand the terms budding, binary fission and a few
            other terms.
          </li>
          <li>
            Students understand the different stages of binary fission in
            Amoeba.
          </li>
          <li>Students understand the different stages of budding in Yeast.</li>
          <li>
            Students understand the experiment better through the{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=134&amp;cnt=287">
              animated demonstration
            </a>
            .
          </li>
        </ol>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Asexual Reproduction in Amoeba and
          Yeast. Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=134&cnt=1
        </Typography>
      </div>
    </div>
  );
}
