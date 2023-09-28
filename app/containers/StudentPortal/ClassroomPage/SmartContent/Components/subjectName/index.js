import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Tab,
  Tabs,
} from '@material-ui/core';
import KenCard from '../../../../../../global_components/KenCard/index';
import EnglishClass from './english';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

//physics
import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ohmsLaw.jpg';
import Potentiometer from '../../../../../../assets/Images/Subjects/Physics/12b.jpg';
import Galvanometer from '../../../../../../assets/Images/Subjects/Physics/figure-merit-galvanometer.jpg';
import Ammeter from '../../../../../../assets/Images/Subjects/Physics/Conversion-galvanometer-to-ammeter.jpg';
import Sonometer from '../../../../../../assets/Images/Subjects/Physics/AC-sonometer.jpg';
import Concave from '../../../../../../assets/Images/Subjects/Physics/uv-concave-mirror.jpg';
import Convex from '../../../../../../assets/Images/Subjects/Physics/Focallength-convex-mirror.jpg';
import ConcaveFocal from '../../../../../../assets/Images/Subjects/Physics/concave-focal.jpg';
import Spectrometer from '../../../../../../assets/Images/Subjects/Physics/spectro.jpg';
import RefractiveIndex from '../../../../../../assets/Images/Subjects/Physics/Refractive-index.jpg';
import Resistance from '../../../../../../assets/Images/Subjects/Physics/Resistance-of-a-wire.jpg';
import Resistors from '../../../../../../assets/Images/Subjects/Physics/resistor.jpg';
import Diode from '../../../../../../assets/Images/Subjects/Physics/diode.jpg';
import Zener from '../../../../../../assets/Images/Subjects/Physics/zener.jpg';
import Transistor from '../../../../../../assets/Images/Subjects/Physics/Transistor.jpg';
import ScrewGauge from '../../../../../../assets/Images/Subjects/Physics/Screwguage.jpg';
import Vernier from '../../../../../../assets/Images/Subjects/Physics/Vernier-Calliper1.jpg';
import Pendulum from '../../../../../../assets/Images/Subjects/Physics/pendulum.jpg';
import Beam from '../../../../../../assets/Images/Subjects/Physics/beam.jpg';
import Parallelogram from '../../../../../../assets/Images/Subjects/Physics/parallelogram.jpg';
import Spherometer from '../../../../../../assets/Images/Subjects/Physics/spherometer.jpg';
import Friction from '../../../../../../assets/Images/Subjects/Physics/friction.jpg';
import Spring from '../../../../../../assets/Images/Subjects/Physics/spring.jpg';
import Viscosity from '../../../../../../assets/Images/Subjects/Physics/viscosity.jpg';
import InclinedPlane from '../../../../../../assets/Images/Subjects/Physics/inclined-plane.jpg';
import Boyle from '../../../../../../assets/Images/Subjects/Physics/boyle.jpg';
import SurfaceTension from '../../../../../../assets/Images/Subjects/Physics/surface-tension.jpg';
import Young from '../../../../../../assets/Images/Subjects/Physics/young.jpg';
import Resonance from '../../../../../../assets/Images/Subjects/Physics/resonance.jpg';
import Sonometer11 from '../../../../../../assets/Images/Subjects/Physics/sonometer.jpg';
import NewtonCooling from '../../../../../../assets/Images/Subjects/Physics/newton-cooling.jpg';
import ResisterSeries from '../../../../../../assets/Images/Subjects/Physics/Resistors-Series.jpg';
import ResisterParallel from '../../../../../../assets/Images/Subjects/Physics/Resistors-Parallel.jpg';
import ConcaveMirror from '../../../../../../assets/Images/Subjects/Physics/uv-concave-mirror.jpg';
import VerifyOhm from '../../../../../../assets/Images/Subjects/Physics/verify-ohm.jpg';
import BarMagnet from '../../../../../../assets/Images/Subjects/Physics/bar-magnet.jpg';
import Hooke from '../../../../../../assets/Images/Subjects/Physics/hooke.jpg';
import ForceImg from '../../../../../../assets/Images/Subjects/Physics/force.png';
import ElectroMagnet from '../../../../../../assets/Images/Subjects/Physics/electro-magnet.png';
import RefractionGlass from '../../../../../../assets/Images/Subjects/Physics/refraction.jpg';
import ReflectionMirror from '../../../../../../assets/Images/Subjects/Physics/reflection-mirror.jpg';
import OhmResistance from '../../../../../../assets/Images/Subjects/Physics/ohm-resis.jpg';
import Solenoid from '../../../../../../assets/Images/Subjects/Physics/solenoid.jpg';
import Conductor from '../../../../../../assets/Images/Subjects/Physics/conductor.jpg';
import Belljar from '../../../../../../assets/Images/Subjects/Physics/Bell-Jar-Experiment.jpg';
import Force from '../../../../../../assets/Images/Subjects/Physics/force.jpg';
import NewtonThird from '../../../../../../assets/Images/Subjects/Physics/newton-third.jpg';
import Pressure from '../../../../../../assets/Images/Subjects/Physics/pressure.jpg';
import Archimedes from '../../../../../../assets/Images/Subjects/Physics/archimedes.jpg';
import Sound from '../../../../../../assets/Images/Subjects/Physics/sound.jpg';
import Density from '../../../../../../assets/Images/Subjects/Physics/density.jpg';
import NewtonSecond from '../../../../../../assets/Images/Subjects/Physics/newton-second.jpg';
import Velocity from '../../../../../../assets/Images/Subjects/Physics/velocity.jpg';

//chemistry
import EmfCell from '../../../../../../assets/Images/Subjects/Chemistry/Electrochemistry.jpg';
import Molarity from '../../../../../../assets/Images/Subjects/Chemistry/MolarityOfKMnO4Solution.jpg';
import HPeroxide from '../../../../../../assets/Images/Subjects/Chemistry/hperoxide.jpg';
import SSulphate from '../../../../../../assets/Images/Subjects/Chemistry/ssulphate.jpg';
import Inorganic from '../../../../../../assets/Images/Subjects/Chemistry/inorganic.jpg';
import Oil from '../../../../../../assets/Images/Subjects/Chemistry/oil.jpg';
import Protein from '../../../../../../assets/Images/Subjects/Chemistry/protein.jpg';
import PaperChromatography from '../../../../../../assets/Images/Subjects/Chemistry/paperchromatography.jpg';
import HCL from '../../../../../../assets/Images/Subjects/Chemistry/hcl.jpg';
import Organic from '../../../../../../assets/Images/Subjects/Chemistry/organic.jpg';
import Carbohydrates from '../../../../../../assets/Images/Subjects/Chemistry/carbohydrates.jpg';
import Emulsion from '../../../../../../assets/Images/Subjects/Chemistry/emulsion.jpg';
import Lyphobic from '../../../../../../assets/Images/Subjects/Chemistry/lyphobic.jpg';
import FunctionalGroups from '../../../../../../assets/Images/Subjects/Chemistry/functionalgroups.jpg';
import Thermochemistry from '../../../../../../assets/Images/Subjects/Chemistry/thermochemistry.jpg';
import MeltingPoint from '../../../../../../assets/Images/Subjects/Chemistry/Melting-point1.jpg';
import BoilingPoint from '../../../../../../assets/Images/Subjects/Chemistry/Boiling-point1.jpg';
import PH from '../../../../../../assets/Images/Subjects/Chemistry/ph.jpg';
import Equilibrium from '../../../../../../assets/Images/Subjects/Chemistry/equilibrium.jpg';
import Quantitative from '../../../../../../assets/Images/Subjects/Chemistry/quantitative.jpg';
import Crystallisation from '../../../../../../assets/Images/Subjects/Chemistry/crystallisation.jpg';
import Lassaigne from '../../../../../../assets/Images/Subjects/Chemistry/lassaigne.jpg';
import LabTechniques from '../../../../../../assets/Images/Subjects/Chemistry/labtechniques.jpg';
import Anion from '../../../../../../assets/Images/Subjects/Chemistry/anion.jpg';
import Cation from '../../../../../../assets/Images/Subjects/Chemistry/cation.jpg';
import SingleDisplacement from '../../../../../../assets/Images/Subjects/Chemistry/Single-Displacement-Reaction.jpg';
import CombinationReaction from '../../../../../../assets/Images/Subjects/Chemistry/Combination-Reaction.jpg';
import PHStrip from '../../../../../../assets/Images/Subjects/Chemistry/phstrip.jpg';
import Decomposition from '../../../../../../assets/Images/Subjects/Chemistry/decomposition.jpg';
import AcidBase from '../../../../../../assets/Images/Subjects/Chemistry/acidbase.jpg';
import DoubleDisplacement from '../../../../../../assets/Images/Subjects/Chemistry/doubledisplacement.jpg';
import Ethanoic from '../../../../../../assets/Images/Subjects/Chemistry/ethanoic.jpg';
import SaltSols from '../../../../../../assets/Images/Subjects/Chemistry/saltsols.jpg';
import SoftHard from '../../../../../../assets/Images/Subjects/Chemistry/softhard.jpg';
import Saponification from '../../../../../../assets/Images/Subjects/Chemistry/saponification.jpg';
import ChemicalReaction from '../../../../../../assets/Images/Subjects/Chemistry/Chemical-Reactions.jpg';
import MeltingIce from '../../../../../../assets/Images/Subjects/Chemistry/Melting-Point-of-Ice.jpg';
import Mixture from '../../../../../../assets/Images/Subjects/Chemistry/mixture.jpg';
import MixtureSeparation from '../../../../../../assets/Images/Subjects/Chemistry/mixtureseparation.jpg';
import Sols from '../../../../../../assets/Images/Subjects/Chemistry/sols.jpg';
import MixtureTechniques from '../../../../../../assets/Images/Subjects/Chemistry/mixturetechniques.jpg';
import Water from '../../../../../../assets/Images/Subjects/Chemistry/water.jpg';
import Scatter from '../../../../../../assets/Images/Subjects/Chemistry/scatter.jpg';
import Exothermic from '../../../../../../assets/Images/Subjects/Chemistry/exothermic.jpg';
import PeriodicTable from '../../../../../../assets/Images/Subjects/Chemistry/periodictable.jpg';
import Conservation from '../../../../../../assets/Images/Subjects/Chemistry/conservation.jpg';

//biology
import Pollean from '../../../../../../assets/Images/Subjects/Biology/pollen-germination-12a.jpg';
import Turbidity from '../../../../../../assets/Images/Subjects/Biology/study-ph-clarity-12b.jpg';
import SoilStudy from '../../../../../../assets/Images/Subjects/Biology/soilstudy.jpg';
import AirStudy from '../../../../../../assets/Images/Subjects/Biology/airstudy.jpg';
import QuadratDensity from '../../../../../../assets/Images/Subjects/Biology/quadrat.jpg';
import QuadratFrequency from '../../../../../../assets/Images/Subjects/Biology/quadrat2.jpg';
import Onion from '../../../../../../assets/Images/Subjects/Biology/onion.jpg';
import Saliva from '../../../../../../assets/Images/Subjects/Biology/saliva.jpg';
import Osmosis from '../../../../../../assets/Images/Subjects/Biology/Osmosis-11a.jpg';
import Transpiration from '../../../../../../assets/Images/Subjects/Biology/Transpiration_of_Leaves-11b.jpg';
import Plasmolysis from '../../../../../../assets/Images/Subjects/Biology/plasmolysis.jpg';
import Stomata from '../../../../../../assets/Images/Subjects/Biology/stomata.jpg';
import PaperChrom from '../../../../../../assets/Images/Subjects/Biology/paperchrom.jpg';
import Flowers from '../../../../../../assets/Images/Subjects/Biology/flowers.jpg';
import Monocot from '../../../../../../assets/Images/Subjects/Biology/monocot.jpg';
import Respiration from '../../../../../../assets/Images/Subjects/Biology/respiration.jpg';
import Urine from '../../../../../../assets/Images/Subjects/Biology/urine.jpg';
import Urea from '../../../../../../assets/Images/Subjects/Biology/urea.jpg';
import Albumin from '../../../../../../assets/Images/Subjects/Biology/albumin.jpg';
import Bile from '../../../../../../assets/Images/Subjects/Biology/bile.jpg';
import CPF from '../../../../../../assets/Images/Subjects/Biology/cpf.jpg';
import PhotoSynthesis from '../../../../../../assets/Images/Subjects/Biology/Photosynthesis-10a.jpg';
import Asexual from '../../../../../../assets/Images/Subjects/Biology/Asexual-Reproduction-in-Amoeba-10b.jpg';
import Dicot from '../../../../../../assets/Images/Subjects/Biology/dicot.jpg';
import CO2 from '../../../../../../assets/Images/Subjects/Biology/co2.jpg';
import Leaf from '../../../../../../assets/Images/Subjects/Biology/leaf.jpg';
import Homology from '../../../../../../assets/Images/Subjects/Biology/homology.jpg';
import OnionCheek from '../../../../../../assets/Images/Subjects/Biology/Onion-and-Cheek-Cells-9a.jpg';
import Adulterant from '../../../../../../assets/Images/Subjects/Biology/Detection-of-adulterant-in-Dal-9b.jpg';
import Adaptation from '../../../../../../assets/Images/Subjects/Biology/adaptation.jpg';
import Imbibition from '../../../../../../assets/Images/Subjects/Biology/imbibition.jpg';
import PATissues from '../../../../../../assets/Images/Subjects/Biology/patissues.jpg';
import Starch from '../../../../../../assets/Images/Subjects/Biology/starch.jpg';
import Mosquito from '../../../../../../assets/Images/Subjects/Biology/mosquito.jpg';
import MDPlants from '../../../../../../assets/Images/Subjects/Biology/mdplants.jpg';
import CPlants from '../../../../../../assets/Images/Subjects/Biology/cplants.jpg';

//maths

import Sphere from '../../../../../../assets/Images/Subjects/Maths/Volume-of-a-sphere-10a.jpg';
import Surface from '../../../../../../assets/Images/Subjects/Maths/Surface-area-of-a-sphere-10b.jpg';
import ArcCircle from '../../../../../../assets/Images/Subjects/Maths/arccircle.jpg';
import CircularCone from '../../../../../../assets/Images/Subjects/Maths/CircularCone.jpg';
import Pythagoras from '../../../../../../assets/Images/Subjects/Maths/pythagoras.jpg';
import Cylinder from '../../../../../../assets/Images/Subjects/Maths/cylinder.jpg';
import CircleCylinder from '../../../../../../assets/Images/Subjects/Maths/circlecylinder.jpg';
import Tangents from '../../../../../../assets/Images/Subjects/Maths/tangents.jpg';
import AP from '../../../../../../assets/Images/Subjects/Maths/ap.jpg';
import Segment from '../../../../../../assets/Images/Subjects/Maths/segment.jpg';
import RightCylinder from '../../../../../../assets/Images/Subjects/Maths/rightcylinder.jpg';
import RightCone from '../../../../../../assets/Images/Subjects/Maths/rightcone.jpg';
import MidPoint from '../../../../../../assets/Images/Subjects/Maths/Mid-Point-Theorem-9a.jpg';
import Triangle from '../../../../../../assets/Images/Subjects/Maths/Area-of-Triangle-9b.jpg';
import Trapezium from '../../../../../../assets/Images/Subjects/Maths/trapezium.jpg';
import Rhombus from '../../../../../../assets/Images/Subjects/Maths/rhombus.jpg';
import AParallelogram from '../../../../../../assets/Images/Subjects/Maths/parallelogram.jpg';
import Centroid from '../../../../../../assets/Images/Subjects/Maths/centroid.jpg';
import Circumcentre from '../../../../../../assets/Images/Subjects/Maths/circumcentre.jpg';
import Incentre from '../../../../../../assets/Images/Subjects/Maths/incentre.jpg';
import Quadrilateral from '../../../../../../assets/Images/Subjects/Maths/quadrilateral.jpg';
import ACircle from '../../../../../../assets/Images/Subjects/Maths/acircle.jpg';
import PParallelogram from '../../../../../../assets/Images/Subjects/Maths/pparallelogram.jpg';
import SimultaneousEqn from '../../../../../../assets/Images/Subjects/Maths/simultaneouseqn.jpg';
import LCM from '../../../../../../assets/Images/Subjects/Maths/lcm.jpg';

import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ minHeight: '76vh' }}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography style={{ display: 'flex', flexWrap: 'wrap' }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  mainGrid: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 9px #d6e0ff',
    background: '#fff',
    marginTop: 10,
    borderRadius: 3,
    // padding: '20px !important',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  subCard: {
    width: '100% !important',
  },
  classHead: {
    marginBottom: 10,
    borderBottom: '1px solid #F4F5F7',
  },
  cardDetails: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 10,
  },

  labelWrap: {
    fontSize: 14,
    color: '#00218D',
    fontWeight: '500',
    margin: 8,
    width: '80%',
  },
  subName: {
    color: '#FF8B00',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  classImg: {
    width: '120px',
    border: '3px solid #DDD',
    margin: 8,
    maxWidth: '100%',
  },
}));

export default function SubjectClass(props) {
  // const { history } = props;
  const { sub } = props.match.params;
  const classes = useStyles();
  const [value, setValue, age] = React.useState(0);
  const { drawerChanges } = props;

  const { t } = useTranslation();

  const array = [
    // {
    //   ClassName: 'class 12',
    //   classDetails: [
    {
      subId: 'exp_12_phy_01',
      subject: 'Physics',
      class: 'class 12',
      classImage: OhmsLaw,
      Label: "Ohm's law and resistance",
    },
    {
      subId: 'exp_12_phy_02',
      subject: 'Physics',
      class: 'class 12',
      classImage: Potentiometer,
      Label: 'Potentiometer-Internal Resistance of a Cell',
    },
    {
      subId: 'exp_12_phy_03',
      subject: 'Physics',
      class: 'class 12',
      classImage: Potentiometer,
      Label: 'Potentiometer-Comparison of emf',
    },
    {
      subId: 'exp_12_phy_04',
      subject: 'Physics',
      class: 'class 12',
      classImage: Galvanometer,
      Label: 'Figure of Merit of a galvanometer',
    },
    {
      subId: 'exp_12_phy_05',
      subject: 'Physics',
      class: 'class 12',
      classImage: Ammeter,
      Label: 'Conversion of Galvanometer to Ammeter',
    },
    {
      subId: 'exp_12_phy_06',
      subject: 'Physics',
      class: 'class 12',
      classImage: Sonometer,
      Label: 'AC Sonometer',
    },
    {
      subId: 'exp_12_phy_07',
      subject: 'Physics',
      class: 'class 12',
      classImage: Concave,
      Label: 'Concave Mirror-Focal Length by u-v Method',
    },
    {
      subId: 'exp_12_phy_08',
      subject: 'Physics',
      class: 'class 12',
      classImage: Convex,
      Label: 'Convex Mirror-Focal Length',
    },
    {
      subId: 'exp_12_phy_09',
      subject: 'Physics',
      class: 'class 12',
      classImage: ConcaveFocal,
      Label: 'Concave Lens-Focal Length',
    },
    {
      subId: 'exp_12_phy_10',
      subject: 'Physics',
      class: 'class 12',
      classImage: Spectrometer,
      Label: 'Spectrometer-Prism',
    },
    {
      subId: 'exp_12_phy_11',
      subject: 'Physics',
      class: 'class 12',
      classImage: RefractiveIndex,
      Label: 'Refractive Index of Liquid',
    },
    {
      subId: 'exp_12_phy_12',
      subject: 'Physics',
      class: 'class 12',
      classImage: Resistance,
      Label: 'Metre bridge-Resistance of a wire',
    },
    {
      subId: 'exp_12_phy_13',
      subject: 'Physics',
      class: 'class 12',
      classImage: Resistors,
      Label: 'MetreBridge-Law of Combination of resistors',
    },
    {
      subId: 'exp_12_phy_14',
      subject: 'Physics',
      class: 'class 12',
      classImage: Diode,
      Label: 'Diode Characteristics',
    },
    {
      subId: 'exp_12_phy_15',
      subject: 'Physics',
      class: 'class 12',
      classImage: Zener,
      Label: 'Zener Diode',
    },
    {
      subId: 'exp_12_phy_16',
      subject: 'Physics',
      class: 'class 12',
      classImage: Transistor,
      Label: 'Transistor Characteristics',
    },
    {
      subId: 'exp_12_che_01',
      subject: 'Chemistry',
      class: 'class 12',

      classImage: EmfCell,
      Label: 'Determination of EMF of a Cell',
    },
    {
      subId: 'exp_12_che_02',
      subject: 'Chemistry',
      class: 'class 12',

      classImage: Molarity,
      Label: 'Determination of concentration of KMnO₄ solution',
    },
    {
      subId: 'exp_12_che_03',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: HPeroxide,
      Label:
        'Kinetic Study on the Reaction between Iodide Ions and Hydrogen Peroxide',
    },
    {
      subId: 'exp_12_che_04',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: SSulphate,
      Label:
        'Kinetic Study on the Reaction between Potassium Iodate and Sodium Sulphite',
    },
    {
      subId: 'exp_12_che_05',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Inorganic,
      Label: 'Preparation of Inorganic Compounds',
    },
    {
      subId: 'exp_12_che_06',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Oil,
      Label: 'Qualitative Analysis of Oils & Fats',
    },
    {
      subId: 'exp_12_che_07',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Protein,
      Label: 'Qualitative Analysis of Proteins',
    },
    {
      subId: 'exp_12_che_08',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: PaperChromatography,
      Label: 'Paper Chromatography',
    },
    {
      subId: 'exp_12_che_09',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: HCL,
      Label:
        'Kinetics Study on the Reaction between Sodium Thiosulphate and Hydrochloric Acid',
    },
    {
      subId: 'exp_12_che_10',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Organic,
      Label: 'Preparation of Organic Compounds',
    },
    {
      subId: 'exp_12_che_11',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Carbohydrates,
      Label: 'Qualitative Analysis of Carbohydrates',
    },
    {
      subId: 'exp_12_che_12',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Emulsion,
      Label: 'Effectiveness of Different Common Oils in Forming Emulsions',
    },
    {
      subId: 'exp_12_che_13',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Lyphobic,
      Label: 'Preparation of Lyophilic and Lyophobic Sols',
    },
    {
      subId: 'exp_12_che_14',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: FunctionalGroups,
      Label: 'Tests for the functional groups',
    },
    {
      subId: 'exp_12_che_15',
      subject: 'Chemistry',
      class: 'class 12',
      classImage: Thermochemistry,
      Label: 'Thermochemistry',
    },
    {
      subId: 'exp_12_bio_01',
      subject: 'Biology',
      classImage: Pollean,
      class: 'class 12',
      Label: 'Study of Pollen Germination',
    },
    {
      subId: 'exp_12_bio_02',
      subject: 'Biology',
      class: 'class 12',
      classImage: Turbidity,
      Label: 'Studies on Turbidity, pH and Microbial Presence in Water',
    },
    {
      subId: 'exp_12_bio_03',
      subject: 'Biology',
      classImage: SoilStudy,
      class: 'class 12',
      Label: 'Study of Physical Properties of Soil',
    },
    {
      subId: 'exp_12_bio_04',
      subject: 'Biology',
      class: 'class 12',
      classImage: AirStudy,
      Label: 'Study of pollutants in Air',
    },
    {
      subId: 'exp_12_bio_05',
      subject: 'Biology',
      classImage: QuadratDensity,
      class: 'class 12',
      Label: 'Study of plant population density by quadrat method',
    },
    {
      subId: 'exp_12_bio_06',
      subject: 'Biology',
      class: 'class 12',
      classImage: QuadratFrequency,
      Label: 'Study of plant population frequency by quadrat method',
    },
    {
      subId: 'exp_12_bio_07',
      subject: 'Biology',
      classImage: Onion,
      class: 'class 12',
      Label: 'Study Mitosis in Onion Root Tip',
    },
    {
      subId: 'exp_12_bio_08',
      subject: 'Biology',
      class: 'class 12',
      classImage: Saliva,
      Label: 'Action of Salivary Amylase on Starch',
    },
    //   ],
    // },
    // {
    // ClassName: 'class 11',
    // classDetails: [
    {
      subId: 'exp_11_phy_01',
      class: 'class 11',
      subject: 'Physics',
      classImage: ScrewGauge,
      Label: 'Screw Gauge',
    },
    {
      subId: 'exp_11_phy_02',
      class: 'class 11',
      subject: 'Physics',
      classImage: Vernier,
      Label: 'Vernier Calipers',
    },
    {
      subId: 'exp_11_phy_03',
      subject: 'Physics',
      class: 'class 11',
      classImage: Pendulum,
      Label: 'Simple Pendulum',
    },
    {
      subId: 'exp_11_phy_04',
      subject: 'Physics',
      class: 'class 11',
      classImage: Beam,
      Label: 'Beam Balance',
    },
    {
      subId: 'exp_11_phy_05',
      subject: 'Physics',
      class: 'class 11',
      classImage: Parallelogram,
      Label: 'Parallelogram Law of Vectors',
    },
    {
      subId: 'exp_11_phy_06',
      subject: 'Physics',
      class: 'class 11',
      classImage: Spherometer,
      Label: 'Spherometer',
    },
    {
      subId: 'exp_11_phy_07',
      subject: 'Physics',
      class: 'class 11',
      classImage: Friction,
      Label: 'Friction',
    },
    {
      subId: 'exp_11_phy_08',
      subject: 'Physics',
      class: 'class 11',
      classImage: Spring,
      Label: 'Helical Spring',
    },
    {
      subId: 'exp_11_phy_09',
      subject: 'Physics',
      class: 'class 11',
      classImage: Viscosity,
      Label: "Viscosity of a liquid - Stoke's method",
    },
    {
      subId: 'exp_11_phy_10',
      subject: 'Physics',
      class: 'class 11',
      classImage: InclinedPlane,
      Label: 'Inclined Plane',
    },
    {
      subId: 'exp_11_phy_11',
      subject: 'Physics',
      class: 'class 11',
      classImage: Boyle,
      Label: "Boyle's Law",
    },
    {
      subId: 'exp_11_phy_12',
      subject: 'Physics',
      class: 'class 11',
      classImage: SurfaceTension,
      Label: 'Surface Tension',
    },
    {
      subId: 'exp_11_phy_13',
      subject: 'Physics',
      class: 'class 11',
      classImage: Young,
      Label: "Young's Modulus",
    },
    {
      subId: 'exp_11_phy_14',
      subject: 'Physics',
      class: 'class 11',
      classImage: Resonance,
      Label: 'Resonance Column',
    },
    {
      subId: 'exp_11_phy_15',
      subject: 'Physics',
      class: 'class 11',
      classImage: Sonometer11,
      Label: 'Sonometer',
    },
    {
      subId: 'exp_11_phy_16',
      subject: 'Physics',
      class: 'class 11',
      classImage: NewtonCooling,
      Label: "Newton's Law of Cooling",
    },
    {
      subId: 'exp_11_che_01',
      class: 'class 11',

      subject: 'Chemistry',
      classImage: MeltingPoint,
      Label: 'Melting point of an Organic compound',
    },
    {
      subId: 'exp_11_che_02',
      class: 'class 11',
      subject: 'Chemistry',
      classImage: BoilingPoint,
      Label: 'Boiling point of Organic compound',
    },
    {
      subId: 'exp_11_che_03',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: PH,
      Label: 'pH Determination',
    },
    {
      subId: 'exp_11_che_04',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: Equilibrium,
      Label: 'Chemical equilibrium',
    },
    {
      subId: 'exp_11_che_05',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: Quantitative,
      Label: 'Quantitative Estimation',
    },
    {
      subId: 'exp_11_che_06',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: Crystallisation,
      Label: 'Purification of Impure samples by Crystallisation',
    },
    {
      subId: 'exp_11_che_07',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: Lassaigne,
      Label: "Detection of Elements: Lassaigne's Test",
    },
    {
      subId: 'exp_11_che_08',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: LabTechniques,
      Label: 'Basic Laboratory Techniques',
    },
    {
      subId: 'exp_11_che_09',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: Anion,
      Label: 'Qualitative Analysis of Anions',
    },
    {
      subId: 'exp_11_che_10',
      subject: 'Chemistry',
      class: 'class 11',
      classImage: Cation,
      Label: 'Qualitative Analysis of Cations',
    },
    {
      subId: 'exp_11_bio_01',
      class: 'class 11',
      subject: 'Biology',
      classImage: Osmosis,
      Label: 'Study of Osmosis',
    },
    {
      subId: 'exp_11_bio_02',
      class: 'class 11',
      subject: 'Biology',
      classImage: Transpiration,
      Label: 'Rate of Transpiration',
    },
    {
      subId: 'exp_11_bio_03',
      class: 'class 11',
      subject: 'Biology',
      classImage: Plasmolysis,
      Label: 'Study of Plasmolysis',
    },
    {
      subId: 'exp_11_bio_04',
      class: 'class 11',
      subject: 'Biology',
      classImage: Stomata,
      Label: 'Study of distribution of stomata',
    },
    {
      subId: 'exp_11_bio_05',
      class: 'class 11',
      subject: 'Biology',
      classImage: PaperChrom,
      Label: 'Paper Chromatography',
    },
    {
      subId: 'exp_11_bio_06',
      class: 'class 11',
      subject: 'Biology',
      classImage: Flowers,
      Label: 'Characteristics of Flowers',
    },
    {
      subId: 'exp_11_bio_07',
      class: 'class 11',
      subject: 'Biology',
      classImage: Monocot,
      Label: 'Characteristics of Dicot and Monocot Stem and Root',
    },
    {
      subId: 'exp_11_bio_08',
      class: 'class 11',
      subject: 'Biology',
      classImage: Respiration,
      Label: 'Rate of Respiration',
    },
    {
      subId: 'exp_11_bio_09',
      class: 'class 11',
      subject: 'Biology',
      classImage: Urine,
      Label: 'Detection of Sugar in Urine',
    },
    {
      subId: 'exp_11_bio_10',
      class: 'class 11',
      subject: 'Biology',
      classImage: Urea,
      Label: 'Detection of Urea in Urine',
    },
    {
      subId: 'exp_11_bio_11',
      class: 'class 11',
      subject: 'Biology',
      classImage: Albumin,
      Label: 'Detection of Albumin in Urine',
    },
    {
      subId: 'exp_11_bio_12',
      class: 'class 11',
      subject: 'Biology',
      classImage: Bile,
      Label: 'Detection of Bile salts in Urine',
    },
    {
      subId: 'exp_11_bio_13',
      class: 'class 11',
      subject: 'Biology',
      classImage: CPF,
      Label: 'Detection of Carbohydrates, Proteins and Fats',
    },

    //   ],
    // },
    // {
    // ClassName: 'class 10',
    // classDetails: [
    {
      subId: 'exp_10_phy_01',
      class: 'class 10',
      subject: 'Physics',
      classImage: ResisterSeries,
      Label: 'Equivalent Resistance of Resistors (Series)',
    },
    {
      subId: 'exp_10_phy_02',
      class: 'class 10',
      subject: 'Physics',
      classImage: ResisterParallel,
      Label: 'Equivalent Resistance of Resistors (Parallel)',
    },
    {
      subId: 'exp_10_phy_03',
      subject: 'Physics',
      class: 'class 10',
      classImage: ConcaveMirror,
      Label: 'To find focal length of a Concave Mirror',
    },
    {
      subId: 'exp_10_phy_04',
      subject: 'Physics',
      class: 'class 10',
      classImage: VerifyOhm,
      Label: "Verification of Ohm's Law",
    },
    {
      subId: 'exp_10_phy_05',
      subject: 'Physics',
      class: 'class 10',
      classImage: BarMagnet,
      Label: 'To study the field lines formed around a bar magnet',
    },
    {
      subId: 'exp_10_phy_06',
      subject: 'Physics',
      class: 'class 10',
      classImage: Hooke,
      Label: "Verification of Hooke's Law",
    },
    {
      subId: 'exp_10_phy_07',
      subject: 'Physics',
      class: 'class 10',
      classImage: ForceImg,
      Label: 'Force on a Current Carrying Conductor in a Magnetic Field',
    },
    {
      subId: 'exp_10_phy_08',
      subject: 'Physics',
      class: 'class 10',
      classImage: ElectroMagnet,
      Label: 'Electromagnetic Induction',
    },
    {
      subId: 'exp_10_phy_09',
      subject: 'Physics',
      class: 'class 10',
      classImage: RefractionGlass,
      Label: 'To study refraction of light in rectangular glass slab',
    },
    {
      subId: 'exp_10_phy_10',
      subject: 'Physics',
      class: 'class 10',
      classImage: ReflectionMirror,
      Label: 'To study reflection in concave mirror',
    },
    {
      subId: 'exp_10_phy_11',
      subject: 'Physics',
      class: 'class 10',
      classImage: OhmResistance,
      Label: "Ohm's law and resistance",
    },
    {
      subId: 'exp_10_phy_12',
      subject: 'Physics',
      class: 'class 10',
      classImage: Solenoid,
      Label: 'The magnetic field lines around current carrying solenoid',
    },
    {
      subId: 'exp_10_phy_13',
      subject: 'Physics',
      class: 'class 10',
      classImage: Conductor,
      Label: 'Magnetic field lines around current carrying conductor',
    },
    {
      subId: 'exp_10_che_01',
      class: 'class 10',
      subject: 'Chemistry',
      classImage: SingleDisplacement,
      Label: 'Single Displacement Reaction',
    },
    {
      subId: 'exp_10_che_02',
      class: 'class 10',
      subject: 'Chemistry',
      classImage: CombinationReaction,
      Label: 'Combination Reaction',
    },
    {
      subId: 'exp_10_che_03',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: PHStrip,
      Label:
        'Determine pH with pH indicator strips / universal indicator solution',
    },
    {
      subId: 'exp_10_che_04',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: Decomposition,
      Label: 'Decomposition Reaction',
    },
    {
      subId: 'exp_10_che_05',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: AcidBase,
      Label: 'Properties of Acids and Bases',
    },
    {
      subId: 'exp_10_che_06',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: DoubleDisplacement,
      Label: 'Double Displacement Reaction',
    },
    {
      subId: 'exp_10_che_07',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: Ethanoic,
      Label: 'Properties of Acetic Acid (Ethanoic Acid)',
    },
    {
      subId: 'exp_10_che_08',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: SaltSols,
      Label: 'To Study The Relative Reactivity of Metals Using Salt Solutions',
    },
    {
      subId: 'exp_10_che_09',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: SoftHard,
      Label: 'Cleaning Capacity of Soap with Hard and Soft Water',
    },
    {
      subId: 'exp_10_che_10',
      subject: 'Chemistry',
      class: 'class 10',
      classImage: Saponification,
      Label: 'Saponification-The process of Making Soap',
    },
    {
      subId: 'exp_10_bio_01',
      class: 'class 10',
      subject: 'Biology',
      classImage: PhotoSynthesis,
      Label: 'Importance of Light in Photosynthesis',
    },
    {
      subId: 'exp_10_bio_02',
      class: 'class 10',
      subject: 'Biology',
      classImage: Asexual,
      Label: 'Asexual Reproduction in Amoeba and Yeast',
    },
    {
      subId: 'exp_10_bio_03',
      class: 'class 10',
      subject: 'Biology',
      classImage: Dicot,
      Label: 'Embryo of Dicot Seeds',
    },
    {
      subId: 'exp_10_bio_04',
      class: 'class 10',
      subject: 'Biology',
      classImage: CO2,
      Label: 'Role of Carbon Dioxide During Respiration',
    },
    {
      subId: 'exp_10_bio_05',
      class: 'class 10',
      subject: 'Biology',
      classImage: Leaf,
      Label: 'Demonstration of Stomata on a Leaf Peel',
    },
    {
      subId: 'exp_10_bio_06',
      class: 'class 10',
      subject: 'Biology',
      classImage: Homology,
      Label: 'Homology and Analogy',
    },
    {
      subId: 'exp_10_mat_01',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: Sphere,
      Label: 'Volume of a sphere',
    },
    {
      subId: 'exp_10_mat_02',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: Surface,
      Label: 'Surface area of a sphere',
    },
    {
      subId: 'exp_10_mat_03',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: ArcCircle,
      Label: 'Angle at the centre of a circle by an arc',
    },
    {
      subId: 'exp_10_mat_04',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: CircularCone,
      Label: 'Volume of right circular cone',
    },
    {
      subId: 'exp_10_mat_05',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: Pythagoras,
      Label: 'Pythagoras theorem',
    },
    {
      subId: 'exp_10_mat_06',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: Cylinder,
      Label: 'Surface area of a cylinder',
    },
    {
      subId: 'exp_10_mat_07',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: CircleCylinder,
      Label: 'Volume of right circular cylinder',
    },
    {
      subId: 'exp_10_mat_08',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: Tangents,
      Label: 'Tangents drawn from an external point',
    },
    {
      subId: 'exp_10_mat_09',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: AP,
      Label: 'Arithmetic Progression',
    },
    {
      subId: 'exp_10_mat_10',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: Segment,
      Label: 'Angles in the Same Segment',
    },
    {
      subId: 'exp_10_mat_11',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: RightCylinder,
      Label: 'Right Circular Cylinder',
    },
    {
      subId: 'exp_10_mat_12',
      class: 'class 10',
      subject: 'Mathematics',
      classImage: RightCone,
      Label: 'Right Circular Cone',
    },
    //   ],
    // },
    // {
    // ClassName: 'class 9',
    // classDetails: [
    {
      subId: 'exp_9_phy_01',
      class: 'class 9',
      subject: 'Physics',
      classImage: Belljar,
      Label: 'Bell Jar Experiment',
    },
    {
      subId: 'exp_9_phy_02',
      class: 'class 9',
      subject: 'Physics',
      classImage: Force,
      Label: 'Force Required to Move a Wooden Block on a Horizontal Table',
    },
    {
      subId: 'exp_9_phy_03',
      subject: 'Physics',
      class: 'class 9',
      classImage: NewtonThird,
      Label: "Newton's Third law of Motion",
    },
    {
      subId: 'exp_9_phy_04',
      subject: 'Physics',
      class: 'class 9',
      classImage: Pressure,
      Label: 'Pressure Exerted by a Solid Iron Cuboid on Sand',
    },
    {
      subId: 'exp_9_phy_05',
      subject: 'Physics',
      class: 'class 9',
      classImage: Archimedes,
      Label: 'Verification of Archimedes Principle',
    },
    {
      subId: 'exp_9_phy_06',
      subject: 'Physics',
      class: 'class 9',
      classImage: Sound,
      Label: 'Laws of Reflection of Sound',
    },
    {
      subId: 'exp_9_phy_07',
      subject: 'Physics',
      class: 'class 9',
      classImage: Density,
      Label: 'Determination of Density of Solid',
    },
    {
      subId: 'exp_9_phy_08',
      subject: 'Physics',
      class: 'class 9',
      classImage: NewtonSecond,
      Label: "Newton's Second Law",
    },
    {
      subId: 'exp_9_phy_09',
      subject: 'Physics',
      class: 'class 9',
      classImage: Velocity,
      Label: 'Velocity of a Pulse Propagated Through a Slinky',
    },
    {
      subId: 'exp_9_che_01',
      class: 'class 9',
      subject: 'Chemistry',
      classImage: ChemicalReaction,
      Label: 'Chemical-Reactions',
    },
    {
      subId: 'exp_9_che_02',
      class: 'class 9',
      subject: 'Chemistry',
      classImage: MeltingIce,
      Label: 'Melting Point of Ice',
    },
    {
      subId: 'exp_9_che_03',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: Mixture,
      Label: 'Distinguish Between Mixture and Compound',
    },
    {
      subId: 'exp_9_che_04',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: MixtureSeparation,
      Label: 'Separation of Components of a Mixture',
    },
    {
      subId: 'exp_9_che_05',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: Sols,
      Label: 'Distinguishing Between Solutions',
    },
    {
      subId: 'exp_9_che_06',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: MixtureTechniques,
      Label: 'Separation of Mixtures Using Different Techniques',
    },
    {
      subId: 'exp_9_che_07',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: Water,
      Label: 'Boiling Point of Water',
    },
    {
      subId: 'exp_9_che_08',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: Scatter,
      Label: "Rutherford's Scattering Experiment",
    },
    {
      subId: 'exp_9_che_09',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: Exothermic,
      Label: 'Exothermic and Endothermic Reactions',
    },
    {
      subId: 'exp_9_che_10',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: PeriodicTable,
      Label: 'Modern Periodic Table',
    },
    {
      subId: 'exp_9_che_11',
      subject: 'Chemistry',
      class: 'class 9',
      classImage: Conservation,
      Label: 'The Law of Conservation of Mass in a Chemical Reaction',
    },
    {
      subId: 'exp_9_bio_01',
      subject: 'Biology',
      class: 'class 9',
      classImage: OnionCheek,
      Label: 'Onion and Cheek Cells',
    },
    {
      subId: 'exp_9_bio_02',
      class: 'class 9',
      subject: 'Biology',
      classImage: Adulterant,
      Label: 'Detection of adulterant in Dal',
    },
    {
      subId: 'exp_9_bio_03',
      subject: 'Biology',
      class: 'class 9',
      classImage: Adaptation,
      Label: 'Adaptation in Animals',
    },
    {
      subId: 'exp_9_bio_04',
      class: 'class 9',
      subject: 'Biology',
      classImage: Imbibition,
      Label: 'Imbibition by Raisins',
    },
    {
      subId: 'exp_9_bio_05',
      subject: 'Biology',
      class: 'class 9',
      classImage: PATissues,
      Label: 'Plant and Animal Tissues',
    },
    {
      subId: 'exp_9_bio_06',
      class: 'class 9',
      subject: 'Biology',
      classImage: Starch,
      Label: 'Detection of Starch in Food Samples',
    },
    {
      subId: 'exp_9_bio_07',
      subject: 'Biology',
      class: 'class 9',
      classImage: Mosquito,
      Label: 'Life Cycle of a Mosquito',
    },
    {
      subId: 'exp_9_bio_08',
      class: 'class 9',
      subject: 'Biology',
      classImage: MDPlants,
      Label: 'Monocot and Dicot Plants',
    },
    {
      subId: 'exp_9_bio_09',
      subject: 'Biology',
      class: 'class 9',
      classImage: CPlants,
      Label: 'Characteristics of Plants',
    },

    {
      subId: 'exp_9_mat_01',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: MidPoint,
      Label: 'Mid Point Theorem',
    },
    {
      subId: 'exp_9_mat_02',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Triangle,
      Label: 'Area of Triangle',
    },
    {
      subId: 'exp_9_mat_03',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Trapezium,
      Label: 'Area of Trapezium',
    },
    {
      subId: 'exp_9_mat_04',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Rhombus,
      Label: 'Area of Rhombus',
    },
    {
      subId: 'exp_9_mat_05',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: AParallelogram,
      Label: 'Area of Parallelogram',
    },
    {
      subId: 'exp_9_mat_06',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Centroid,
      Label: 'Centroid of a Triangle',
    },
    {
      subId: 'exp_9_mat_07',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Circumcentre,
      Label: 'Circumcentre of a Triangle',
    },
    {
      subId: 'exp_9_mat_08',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Incentre,
      Label: 'Incentre of a Triangle',
    },
    {
      subId: 'exp_9_mat_09',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: Quadrilateral,
      Label: 'The quadrilateral formed by the mid-points of a quadrilateral',
    },
    {
      subId: 'exp_9_mat_10',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: ACircle,
      Label: 'Area of Circle',
    },
    {
      subId: 'exp_9_mat_11',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: PParallelogram,
      Label: 'Properties of Parallelogram',
    },
    {
      subId: 'exp_9_mat_12',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: SimultaneousEqn,
      Label: 'Solving Simultaneous Equations',
    },
    {
      subId: 'exp_9_mat_13',
      class: 'class 9',
      subject: 'Mathematics',
      classImage: LCM,
      Label: 'Least common multiple',
    },

    // ],
    // },
  ];

  // const data = [
  //   {
  //     title: 'Class 12',
  //   },
  //   {
  //     title: 'Class 11',
  //   },
  //   {
  //     title: 'Class 10',
  //   },
  //   {
  //     title: 'Class 9',
  //   },
  // ];

  let data = [];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
    console.log(index, 'index');
  };
  const [classData, setClassData] = React.useState([]);

  React.useEffect(() => {
    array &&
      array.map((item, index) => {
        if (item.subject == sub) {
          // let a = { title: item.class };
          data.push(item.class);
        }
      });
    let uniqueClass = data.filter(function(item, pos) {
      return data.indexOf(item) == pos;
    });

    setClassData(uniqueClass);
    console.log(classData, 'classdata');
  }, []);
  console.log(classData, 'irttttt', value);
  const handleClick = () => {
    props.history.goBack();
  };
  React.useEffect(() => {
    drawerChanges('show');
  }, []);
  return (
    <Box p={2}>
      <div onClick={handleClick} style={{ display: 'flex', marginBottom: 10 , cursor: 'pointer' }}>
        <ArrowBackIcon color="primary" style={{ width: 14 }} />
        <Typography color="primary" style={{ fontSize: 14 }}>
          {t('Back')}
        </Typography>
      </div>
      <Grid className={classes.mainGrid} container spacing={3}>
        <KenCard className={classes.subCard}>
          <Typography className={classes.subName}>{sub}</Typography>
          {sub == 'English' ? (
            <EnglishClass {...props} />
          ) : (
            <>
              <Tabs
                orientation="horizontal"
                variant="scrollable"
                scrollButtons="off"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
              >
                {classData &&
                  classData.map((item, index) => {
                    return (
                      <Tab
                        classes={{ wrapper: classes.wrapper }}
                        label={item}
                        {...a11yProps(index)}
                      />
                    );
                  })}
              </Tabs>
              {classData.length == 4 ? (
                <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                  <TabPanel value={value} index={0}>
                    {array &&
                      array.map(item =>
                        item.class == 'class 12' && item.subject == sub ? (
                          <Grid
                            className={classes.cardDetails}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <>
                              <Link
                                className={classes.link}
                                to={`/subjectContent/${item.subId}`}
                              >
                                <Grid className={classes.cardWrap}>
                                  <img
                                    src={item.classImage}
                                    className={classes.classImg}
                                  />
                                  <h2 className={classes.labelWrap}>
                                    {item.Label}
                                  </h2>
                                </Grid>
                              </Link>
                            </>
                          </Grid>
                        ) : (
                          ''
                        )
                      )}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {array &&
                      array.map(item =>
                        item.class == 'class 11' && item.subject == sub ? (
                          <Grid
                            className={classes.cardDetails}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            {/* {item.class.map((el, index) =>
                              el.subject == sub ? ( */}
                            <Link
                              className={classes.link}
                              to={`/subjectContent/${item.subId}`}
                            >
                              <Grid className={classes.cardWrap}>
                                <img
                                  src={item.classImage}
                                  className={classes.classImg}
                                />
                                <h2 className={classes.labelWrap}>
                                  {item.Label}
                                </h2>
                              </Grid>
                            </Link>
                          </Grid>
                        ) : (
                          ''
                        )
                      )}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    {array &&
                      array.map(item =>
                        item.class == 'class 10' && item.subject == sub ? (
                          <Grid
                            className={classes.cardDetails}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <>
                              <Link
                                className={classes.link}
                                to={`/subjectContent/${item.subId}`}
                              >
                                <Grid className={classes.cardWrap}>
                                  <img
                                    src={item.classImage}
                                    yyh
                                    className={classes.classImg}
                                  />
                                  <h2 className={classes.labelWrap}>
                                    {item.Label}
                                  </h2>
                                </Grid>
                              </Link>
                            </>
                          </Grid>
                        ) : (
                          ''
                        )
                      )}
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    {array &&
                      array.map(item =>
                        item.class == 'class 9' && item.subject == sub ? (
                          <Grid
                            className={classes.cardDetails}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <Link
                              className={classes.link}
                              to={`/subjectContent/${item.subId}`}
                            >
                              <Grid className={classes.cardWrap}>
                                <img
                                  src={item.classImage}
                                  className={classes.classImg}
                                />
                                <h2 className={classes.labelWrap}>
                                  {item.Label}
                                </h2>
                              </Grid>
                            </Link>
                          </Grid>
                        ) : (
                          ''
                        )
                      )}
                  </TabPanel>
                </SwipeableViews>
              ) : (
                <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                  <TabPanel value={value} index={0}>
                    {array &&
                      array.map(item =>
                        item.class == 'class 10' && item.subject == sub ? (
                          <Grid
                            className={classes.cardDetails}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <>
                              <Link
                                className={classes.link}
                                to={`/subjectContent/${item.subId}`}
                              >
                                <Grid className={classes.cardWrap}>
                                  <img
                                    src={item.classImage}
                                    className={classes.classImg}
                                  />
                                  <h2 className={classes.labelWrap}>
                                    {item.Label}
                                  </h2>
                                </Grid>
                              </Link>
                            </>
                          </Grid>
                        ) : (
                          ''
                        )
                      )}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {array &&
                      array.map(item =>
                        item.class == 'class 9' && item.subject == sub ? (
                          <Grid
                            className={classes.cardDetails}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <Link
                              className={classes.link}
                              to={`/subjectContent/${item.subId}`}
                            >
                              <Grid className={classes.cardWrap}>
                                <img
                                  src={item.classImage}
                                  className={classes.classImg}
                                />
                                <h2 className={classes.labelWrap}>
                                  {item.Label}
                                </h2>
                              </Grid>
                            </Link>
                          </Grid>
                        ) : (
                          ''
                        )
                      )}
                  </TabPanel>
                </SwipeableViews>
              )}
            </>
          )}
        </KenCard>
      </Grid>
      {/* </Link> */}
    </Box>
  );
}
