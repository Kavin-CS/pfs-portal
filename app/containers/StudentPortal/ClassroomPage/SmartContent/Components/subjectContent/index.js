import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import PropTypes, { element } from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import KenCard from '../../../../../../global_components/KenCard/index';

import history from '../../../../../../utils/history';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import SwipeableViews from 'react-swipeable-views';
//ohmslaw 12
import OhmsLawTheory from './Physics/Class12/OhmsLaw/ohmsLaw_theory';
import OhmsLawProcedure from './Physics/Class12/OhmsLaw/ohmsLaw_procedure';
import OhmsLawSimulator from './Physics/Class12/OhmsLaw/ohmsLaw_simulator';
import OhmsLawAnimation from './Physics/Class12/OhmsLaw/ohmsLaw_animation';
import OhmsLawVideo from './Physics/Class12/OhmsLaw/ohmsLaw_video';
import OhmsLawResource from './Physics/Class12/OhmsLaw/ohmsLaw_resources';

//simulator -12
import PotentiometerTheory from './Physics/Class12/Potentiometer/potentiometer_theory';
import PotentiometerProcedure from './Physics/Class12/Potentiometer/potentiometer_procedure';
import PotentiometerSimulator from './Physics/Class12/Potentiometer/potentiometer_simulator';
import PotentiometerAnimation from './Physics/Class12/Potentiometer/potentiometer_animation';
import PotentiometerResource from './Physics/Class12/Potentiometer/potentiometer_resources';

//Potentiometer cell
import PotentiometerCellTheory from './Physics/Class12/Potentiometer2/potentiometer2_theory';
import PotentiometerCellProcedure from './Physics/Class12/Potentiometer2/potentiometer2_procedure';
import PotentiometerCellSimulator from './Physics/Class12/Potentiometer2/potentiometer2_simulator';
import PotentiometerCellAnimation from './Physics/Class12/Potentiometer2/potentiometer2_animation';
import PotentiometerCellResource from './Physics/Class12/Potentiometer2/potentiometer2_resources';

//Galvanometer
import GalvanometerTheory from './Physics/Class12/Galvanometer/galvanometer_theory';
import GalvanometerProcedure from './Physics/Class12/Galvanometer/galvanometer_procedure';
import GalvanometerSimulator from './Physics/Class12/Galvanometer/galvanometer_simulator';
import GalvanometerVideo from './Physics/Class12/Galvanometer/galvanometer_video';
import GalvanometerResource from './Physics/Class12/Galvanometer/galvanometer_resources';

//Ammeter
import AmmeterTheory from './Physics/Class12/Ammeter/ammeter_theory';
import AmmeterProcedure from './Physics/Class12/Ammeter/ammeter_procedure';
import AmmeterSimulator from './Physics/Class12/Ammeter/ammeter_simulator';
import AmmeterVideo from './Physics/Class12/Ammeter/ammeter_video';
import AmmeterResource from './Physics/Class12/Ammeter/ammeter_resources';

//Sonometer
import SonometerTheory from './Physics/Class12/Sonometer/sonometer_theory';
import SonometerProcedure from './Physics/Class12/Sonometer/sonometer_procedure';
import SonometerSimulator from './Physics/Class12/Sonometer/sonometer_simulator';
import SonometerVideo from './Physics/Class12/Sonometer/sonometer_video';
import SonometerResource from './Physics/Class12/Sonometer/sonometer_resources';

//Concave
import ConcaveTheory from './Physics/Class12/Concave/concave_theory';
import ConcaveProcedure from './Physics/Class12/Concave/concave_procedure';
import ConcaveSimulator from './Physics/Class12/Concave/concave_simulator';
import ConcaveAnimation from './Physics/Class12/Concave/concave_animation';
import ConcaveResource from './Physics/Class12/Concave/concave_resources';

//Convex
import ConvexTheory from './Physics/Class12/Convex/convex_theory';
import ConvexProcedure from './Physics/Class12/Convex/convex_procedure';
import ConvexSimulator from './Physics/Class12/Convex/convex_simulator';
import ConvexAnimation from './Physics/Class12/Convex/convex_animation';
import ConvexResource from './Physics/Class12/Convex/convex_resources';

//ConcaveFocal
import ConcaveFocalTheory from './Physics/Class12/ConcaveFocal/concavefocal_theory';
import ConcaveFocalProcedure from './Physics/Class12/ConcaveFocal/concavefocal_procedure';
import ConcaveFocalSimulator from './Physics/Class12/ConcaveFocal/concavefocal_simulator';
import ConcaveFocalAnimation from './Physics/Class12/ConcaveFocal/concavefocal_animation';

import ConcaveFocalResource from './Physics/Class12/ConcaveFocal/concavefocal_resources';

//Spectrometer
import SpectrometerTheory from './Physics/Class12/Spectrometer/spectro_theory';
import SpectrometerProcedure from './Physics/Class12/Spectrometer/spectro_procedure';
import SpectrometerSimulator from './Physics/Class12/Spectrometer/spectro_simulator';

import SpectrometerResource from './Physics/Class12/Spectrometer/spectro_resources';

//Refractive Index
import RefractiveTheory from './Physics/Class12/RefractiveIndex/refractive_theory';
import RefractiveProcedure from './Physics/Class12/RefractiveIndex/refractive_procedure';
import RefractiveSimulator from './Physics/Class12/RefractiveIndex/refractive_simulator';

import RefractiveVideo from './Physics/Class12/RefractiveIndex/refractive_video';
import RefractiveResource from './Physics/Class12/RefractiveIndex/refractive_resources';

//Resistance
import ResistanceTheory from './Physics/Class12/Resistance/resistance_theory';
import ResistanceProcedure from './Physics/Class12/Resistance/resistance_procedure';
import ResistanceSimulator from './Physics/Class12/Resistance/resistance_simulator';

import ResistanceVideo from './Physics/Class12/Resistance/resistance_video';
import ResistanceResource from './Physics/Class12/Resistance/resistance_resources';

//Resistor
import ResistorTheory from './Physics/Class12/Resistor/resistor_theory';
import ResistorProcedure from './Physics/Class12/Resistor/resistor_procedure';
import ResistorSimulator from './Physics/Class12/Resistor/resistor_simulator';

import ResistorVideo from './Physics/Class12/Resistor/resistor_video';
import ResistorResource from './Physics/Class12/Resistor/resistor_resources';

//Diode
import DiodeTheory from './Physics/Class12/Diode/diode_theory';
import DiodeProcedure from './Physics/Class12/Diode/diode_procedure';
import DiodeSimulator from './Physics/Class12/Diode/diode_simulator';
import DiodeAnimation from './Physics/Class12/Diode/diode_animation';

import DiodeResource from './Physics/Class12/Diode/diode_resources';

//Zener
import ZenerTheory from './Physics/Class12/Zener/zener_theory';
import ZenerProcedure from './Physics/Class12/Zener/zener_procedure';
import ZenerSimulator from './Physics/Class12/Zener/zener_simulator';

import ZenerVideo from './Physics/Class12/Zener/zener_video';
import ZenerResource from './Physics/Class12/Zener/zener_resources';

//Transistor
import TransistorTheory from './Physics/Class12/Transistor/transistor_theory';
import TransistorProcedure from './Physics/Class12/Transistor/transistor_procedure';
import TransistorSimulator from './Physics/Class12/Transistor/transistor_simulator';
import TransistorAnimation from './Physics/Class12/Transistor/transistor_animation';

import TransistorResource from './Physics/Class12/Transistor/transistor_resources';

//screwGauge - 11
import ScrewGaugeTheory from './Physics/Class11/ScrewGauge/screwGauge_theory';
import ScrewGaugeProcedure from './Physics/Class11/ScrewGauge/screwGauge_procedure';
import ScrewGaugeSimulator from './Physics/Class11/ScrewGauge/screwGauge_simulator';
import ScrewGaugeAnimation from './Physics/Class11/ScrewGauge/screwGauge_animation';
import ScrewGaugeVideo from './Physics/Class11/ScrewGauge/screwGauge_video';
import ScrewGaugeResource from './Physics/Class11/ScrewGauge/screwGauge_resources';

//vernier Caliper - 11

import VernierCaliperTheory from './Physics/Class11/VernierCaliper/vernierCaliper_theory';
import VernierCaliperProcedure from './Physics/Class11/VernierCaliper/vernierCaliper_procedure';
import VernierCaliperAnimation from './Physics/Class11/VernierCaliper/vernierCaliper_animation';
import VernierCaliperSimulator from './Physics/Class11/VernierCaliper/vernierCaliper_simulator';
import VernierCaliperVideo from './Physics/Class11/VernierCaliper/vernierCaliper_video';
import VernierCaliperResource from './Physics/Class11/VernierCaliper/vernierCaliper_resources';

//Simple Pendulum - 11
import PendulumTheory from './Physics/Class11/Pendulum/pendulum_theory';
import PendulumProcedure from './Physics/Class11/Pendulum/pendulum_procedure';
import PendulumSimulator from './Physics/Class11/Pendulum/pendulum_simulator';
import PendulumAnimation from './Physics/Class11/Pendulum/pendulum_animation';
import PendulumVideo from './Physics/Class11/Pendulum/pendulum_video';
import PendulumResource from './Physics/Class11/Pendulum/pendulum_resources';

//Beam Balance - 11
import BeamTheory from './Physics/Class11/Beam/beam_theory';
import BeamProcedure from './Physics/Class11/Beam/beam_procedure';
import BeamSimulator from './Physics/Class11/Beam/beam_simulator';
import BeamAnimation from './Physics/Class11/Beam/beam_animation';
import BeamVideo from './Physics/Class11/Beam/beam_video';
import BeamResource from './Physics/Class11/Beam/beam_resources';

//Parallelogram Law of Vectors - 11
import ParallelogramTheory from './Physics/Class11/Parallelogram/parallelogram_theory';
import ParallelogramProcedure from './Physics/Class11/Parallelogram/parallelogram_procedure';
import ParallelogramSimulator from './Physics/Class11/Parallelogram/parallelogram_simulator';
import ParallelogramAnimation from './Physics/Class11/Parallelogram/parallelogram_animation';
import ParallelogramVideo from './Physics/Class11/Parallelogram/parallelogram_video';
import ParallelogramResource from './Physics/Class11/Parallelogram/parallelogram_resources';

//Spherometer - 11
import SpherometerTheory from './Physics/Class11/Spherometer/spherometer_theory';
import SpherometerProcedure from './Physics/Class11/Spherometer/spherometer_procedure';
import SpherometerSimulator from './Physics/Class11/Spherometer/spherometer_simulator';
import SpherometerAnimation from './Physics/Class11/Spherometer/spherometer_animation';
import SpherometerVideo from './Physics/Class11/Spherometer/spherometer_video';
import SpherometerResource from './Physics/Class11/Spherometer/spherometer_resources';

//Friction - 11
import FrictionTheory from './Physics/Class11/Friction/friction_theory';
import FrictionProcedure from './Physics/Class11/Friction/friction_procedure';
import FrictionSimulator from './Physics/Class11/Friction/friction_simulator';
import FrictionAnimation from './Physics/Class11/Friction/friction_animation';
import FrictionVideo from './Physics/Class11/Friction/friction_video';
import FrictionResource from './Physics/Class11/Friction/friction_resources';

//Helical Spring - 11
import SpringTheory from './Physics/Class11/Spring/spring_theory';
import SpringProcedure from './Physics/Class11/Spring/spring_procedure';
import SpringSimulator from './Physics/Class11/Spring/spring_simulator';
import SpringAnimation from './Physics/Class11/Spring/spring_animation';
import SpringVideo from './Physics/Class11/Spring/spring_video';
import SpringResource from './Physics/Class11/Spring/spring_resources';

//Viscosity of a liquid - Stoke's method - 11
import ViscosityTheory from './Physics/Class11/Viscosity/viscosity_theory';
import ViscosityProcedure from './Physics/Class11/Viscosity/viscosity_procedure';
import ViscositySimulator from './Physics/Class11/Viscosity/viscosity_simulator';
import ViscosityAnimation from './Physics/Class11/Viscosity/viscosity_animation';
import ViscosityVideo from './Physics/Class11/Viscosity/viscosity_video';
import ViscosityResource from './Physics/Class11/Viscosity/viscosity_resources';

//Inclined Plane - 11
import InclinedPlaneTheory from './Physics/Class11/InclinedPlane/inclinedplane_theory';
import InclinedPlaneProcedure from './Physics/Class11/InclinedPlane/inclinedplane_procedure';
import InclinedPlaneSimulator from './Physics/Class11/InclinedPlane/inclinedplane_simulator';
import InclinedPlaneAnimation from './Physics/Class11/InclinedPlane/inclinedplane_animation';
import InclinedPlaneVideo from './Physics/Class11/InclinedPlane/inclinedplane_video';
import InclinedPlaneResource from './Physics/Class11/InclinedPlane/inclinedplane_resources';

//Boyle's Law - 11
import BoyleTheory from './Physics/Class11/Boyle/boyle_theory';
import BoyleProcedure from './Physics/Class11/Boyle/boyle_procedure';
import BoyleSimulator from './Physics/Class11/Boyle/boyle_simulator';
import BoyleAnimation from './Physics/Class11/Boyle/boyle_animation';
import BoyleVideo from './Physics/Class11/Boyle/boyle_video';
import BoyleResource from './Physics/Class11/Boyle/boyle_resources';

//Surface Tension - 11
import SurfaceTensionTheory from './Physics/Class11/SurfaceTension/surfacetension_theory';
import SurfaceTensionProcedure from './Physics/Class11/SurfaceTension/surfacetension_procedure';
import SurfaceTensionSimulator from './Physics/Class11/SurfaceTension/surfacetension_simulator';
import SurfaceTensionAnimation from './Physics/Class11/SurfaceTension/surfacetension_animation';
import SurfaceTensionVideo from './Physics/Class11/SurfaceTension/surfacetension_video';
import SurfaceTensionResource from './Physics/Class11/SurfaceTension/surfacetension_resources';

//Young's Modulus - 11
import YoungTheory from './Physics/Class11/Young/young_theory';
import YoungProcedure from './Physics/Class11/Young/young_procedure';
import YoungSimulator from './Physics/Class11/Young/young_simulator';
import YoungAnimation from './Physics/Class11/Young/young_animation';
import YoungVideo from './Physics/Class11/Young/young_video';
import YoungResource from './Physics/Class11/Young/young_resources';

//Resonance Column
import ResonanceTheory from './Physics/Class11/Resonance/resonance_theory';
import ResonanceProcedure from './Physics/Class11/Resonance/resonance_procedure';
import ResonanceSimulator from './Physics/Class11/Resonance/resonance_simulator';
import ResonanceAnimation from './Physics/Class11/Resonance/resonance_animation';
import ResonanceResource from './Physics/Class11/Resonance/resonance_resources';

//Sonometer - 11
import Sonometer1Theory from './Physics/Class11/Sonometer11/sonometer_theory';
import Sonometer1Procedure from './Physics/Class11/Sonometer11/sonometer_procedure';
import Sonometer1Simulator from './Physics/Class11/Sonometer11/sonometer_simulator';
import Sonometer1Video from './Physics/Class11/Sonometer11/sonometer_video';
import Sonometer1Resource from './Physics/Class11/Sonometer11/sonometer_resources';

//Newton's Law of Cooling - 11
import NewtonCoolingTheory from './Physics/Class11/NewtonCooling/newtoncooling_theory';
import NewtonCoolingProcedure from './Physics/Class11/NewtonCooling/newtoncooling_procedure';
import NewtonCoolingSimulator from './Physics/Class11/NewtonCooling/newtoncooling_simulator';
import NewtonCoolingVideo from './Physics/Class11/NewtonCooling/newtoncooling_video';
import NewtonCoolingResource from './Physics/Class11/NewtonCooling/newtoncooling_resources';

//resister parallel - 10

import ResisterParallelTheory from './Physics/Class10/ResisterParellel/resisterParallel_theory';
import ResisterParallelSimulator from './Physics/Class10/ResisterParellel/resisterParallel_simulator';
import ResisterParallelProcedure from './Physics/Class10/ResisterParellel/resisterParallel_procedure';
import ResisterParallelAnimation from './Physics/Class10/ResisterParellel/resisterParallel_animation';
import ResisterParallelVideo from './Physics/Class10/ResisterParellel/resisterParallel_video';
import ResisterParallelResource from './Physics/Class10/ResisterParellel/resisterParallel_resources';

//resister series - 10

import ResisterSeriesTheory from './Physics/Class10/ResisterSeries/resisterSeries_theory';
import ResisterSeriesSimulator from './Physics/Class10/ResisterSeries/resisterSeries_simulator';
import ResisterSeriesProcedure from './Physics/Class10/ResisterSeries/resisterSeries_procedure';
import ResisterSeriesAnimation from './Physics/Class10/ResisterSeries/resisterSeries_animation';
import ResisterSeriesVideo from './Physics/Class10/ResisterSeries/resisterSeries_video';
import ResisterSeriesResource from './Physics/Class10/ResisterSeries/resisterSeries_resources';

//To find focal length of a Concave Mirror - 10
import ConcaveMirrorTheory from './Physics/Class10/ConcaveMirror/conmirror_theory';
import ConcaveMirrorProcedure from './Physics/Class10/ConcaveMirror/conmirror_procedure';
import ConcaveMirrorSimulator from './Physics/Class10/ConcaveMirror/conmirror_simulator';
import ConcaveMirrorAnimation from './Physics/Class10/ConcaveMirror/conmirror_animation';
// import ConcaveMirrorVideo from './Physics/Class10/ConcaveMirror/conmirror_video';
import ConcaveMirrorResource from './Physics/Class10/ConcaveMirror/conmirror_resources';

//Verification of Ohm's Law - 10
import VerifyOhmTheory from './Physics/Class10/VerifyOhm/verifyohm_theory';
import VerifyOhmProcedure from './Physics/Class10/VerifyOhm/verifyohm_procedure';
import VerifyOhmSimulator from './Physics/Class10/VerifyOhm/verifyohm_simulator';
// import VerifyOhmAnimation from './Physics/Class10/VerifyOhm/verifyohm_animation';
// import VerifyOhmVideo from './Physics/Class10/VerifyOhm/verifyohm_video';
import VerifyOhmResource from './Physics/Class10/VerifyOhm/verifyohm_resources';

//To study the field lines formed around a bar magnet - 10
import BarMagnetTheory from './Physics/Class10/BarMagnet/barmagnet_theory';
import BarMagnetProcedure from './Physics/Class10/BarMagnet/barmagnet_procedure';
import BarMagnetSimulator from './Physics/Class10/BarMagnet/barmagnet_simulator';
// import BarMagnetAnimation from './Physics/Class10/BarMagnet/barmagnet_animation';
// import BarMagnetVideo from './Physics/Class10/BarMagnet/barmagnet_video';
import BarMagnetResource from './Physics/Class10/BarMagnet/barmagnet_resources';

//Verification of Hooke's Law - 10
import HookeTheory from './Physics/Class10/Hooke/hooke_theory';
import HookeProcedure from './Physics/Class10/Hooke/hooke_procedure';
import HookeSimulator from './Physics/Class10/Hooke/hooke_simulator';
import HookeResource from './Physics/Class10/Hooke/hooke_resources';

//Force on a Current Carrying Conductor in a Magnetic Field - 10
import Force1Theory from './Physics/Class10/Force1/force1_theory';
import Force1Procedure from './Physics/Class10/Force1/force1_procedure';
import Force1Simulator from './Physics/Class10/Force1/force1_simulator';
import Force1Resource from './Physics/Class10/Force1/force1_resources';

//Electromagnetic Induction - 10
import ElectroMagnetTheory from './Physics/Class10/ElectroMagnet/electromagnet_theory';
import ElectroMagnetProcedure from './Physics/Class10/ElectroMagnet/electromagnet_procedure';
import ElectroMagnetSimulator from './Physics/Class10/ElectroMagnet/electromagnet_simulator';
// import ElectroMagnetAnimation from './Physics/Class10/ElectroMagnet/electromagnet_animation';
// import ElectroMagnetVideo from './Physics/Class10/ElectroMagnet/electromagnet_video';
import ElectroMagnetResource from './Physics/Class10/ElectroMagnet/electromagnet_resources';

//To study refraction of light in rectangular glass slab - 10
import RefractionGlassTheory from './Physics/Class10/RefractionGlass/refraction_theory';
import RefractionGlassProcedure from './Physics/Class10/RefractionGlass/refraction_procedure';
import RefractionGlassSimulator from './Physics/Class10/RefractionGlass/refraction_simulator';
import RefractionGlassAnimation from './Physics/Class10/RefractionGlass/refraction_animation';
// import RefractionGlassVideo from './Physics/Class10/RefractionGlass/refraction_video';
import RefractionGlassResource from './Physics/Class10/RefractionGlass/refraction_resources';

//To study reflection in concave mirror - 10
import ReflectionMirrorTheory from './Physics/Class10/ReflectionMirror/reflectionmirror_theory';
import ReflectionMirrorProcedure from './Physics/Class10/ReflectionMirror/reflectionmirror_procedure';
import ReflectionMirrorSimulator from './Physics/Class10/ReflectionMirror/reflectionmirror_simulator';
// import ReflectionMirrorAnimation from './Physics/Class10/ReflectionMirror/reflectionmirror_animation';
// import ReflectionMirrorVideo from './Physics/Class10/ReflectionMirror/reflectionmirror_video';
import ReflectionMirrorResource from './Physics/Class10/ReflectionMirror/reflectionmirror_resources';

//Ohm's law and resistance - 10
import OhmResistanceTheory from './Physics/Class10/OhmResistance/ohmresistance_theory';
import OhmResistanceProcedure from './Physics/Class10/OhmResistance/ohmresistance_procedure';
import OhmResistanceSimulator from './Physics/Class10/OhmResistance/ohmresistance_simulator';
import OhmResistanceAnimation from './Physics/Class10/OhmResistance/ohmresistance_animation';
import OhmResistanceVideo from './Physics/Class10/OhmResistance/ohmresistance_video';
import OhmResistanceResource from './Physics/Class10/OhmResistance/ohmresistance_resources';

//The magnetic field lines around current carrying solenoid - 10
import SolenoidTheory from './Physics/Class10/Solenoid/solenoid_theory';
import SolenoidProcedure from './Physics/Class10/Solenoid/solenoid_procedure';
import SolenoidSimulator from './Physics/Class10/Solenoid/solenoid_simulator';
// import SolenoidAnimation from './Physics/Class10/Solenoid/solenoid_animation';
// import SolenoidVideo from './Physics/Class10/Solenoid/solenoid_video';
import SolenoidResource from './Physics/Class10/Solenoid/solenoid_resources';

//Magnetic field lines around current carrying conductor - 10
import ConductorTheory from './Physics/Class10/Conductor/conductor_theory';
import ConductorProcedure from './Physics/Class10/Conductor/conductor_procedure';
import ConductorSimulator from './Physics/Class10/Conductor/conductor_simulator';
// import ConductorAnimation from './Physics/Class10/Conductor/conductor_animation';
// import ConductorVideo from './Physics/Class10/Conductor/conductor_video';
import ConductorResource from './Physics/Class10/Conductor/conductor_resources';

//belljar - 9

import BellJarTheory from './Physics/Class9/BellJar/bellJar_theory';
import BellJarProcedure from './Physics/Class9/BellJar/bellJar_procedure';
import BellJarAnimation from './Physics/Class9/BellJar/bellJar_animation';
import BellJarSimulator from './Physics/Class9/BellJar/bellJar_simulator';
import BellJarVideo from './Physics/Class9/BellJar/bellJar_video';
import BellJarResource from './Physics/Class9/BellJar/bellJar_resources';

//force - 9

import ForceTheory from './Physics/Class9/Force/force_theory';
import ForceProcedure from './Physics/Class9/Force/force_procedure';
import ForceAnimation from './Physics/Class9/Force/force_animation';
import ForceSimulator from './Physics/Class9/Force/force_simulator';
import ForceVideo from './Physics/Class9/Force/force_video';
import ForceResource from './Physics/Class9/Force/force_resources';

//Newton's Third law of Motion - 9
import NewtonThirdTheory from './Physics/Class9/NewtonThird/newtonthird_theory';
import NewtonThirdProcedure from './Physics/Class9/NewtonThird/newtonthird_procedure';
import NewtonThirdSimulator from './Physics/Class9/NewtonThird/newtonthird_simulator';
import NewtonThirdAnimation from './Physics/Class9/NewtonThird/newtonthird_animation';
import NewtonThirdVideo from './Physics/Class9/NewtonThird/newtonthird_video';
import NewtonThirdResource from './Physics/Class9/NewtonThird/newtonthird_resources';

//Pressure Exerted by a Solid Iron Cuboid on Sand - 9
import PressureTheory from './Physics/Class9/Pressure/pressure_theory';
import PressureProcedure from './Physics/Class9/Pressure/pressure_procedure';
import PressureSimulator from './Physics/Class9/Pressure/pressure_simulator';
import PressureAnimation from './Physics/Class9/Pressure/pressure_animation';
import PressureVideo from './Physics/Class9/Pressure/pressure_video';
import PressureResource from './Physics/Class9/Pressure/pressure_resources';

//Verification of Archimedes Principle - 9
import ArchimedesTheory from './Physics/Class9/Archimedes/archimedes_theory';
import ArchimedesProcedure from './Physics/Class9/Archimedes/archimedes_procedure';
import ArchimedesSimulator from './Physics/Class9/Archimedes/archimedes_simulator';
import ArchimedesAnimation from './Physics/Class9/Archimedes/archimedes_animation';
import ArchimedesVideo from './Physics/Class9/Archimedes/archimedes_video';
import ArchimedesResource from './Physics/Class9/Archimedes/archimedes_resources';

//Laws of Reflection of Sound - 9
import SoundTheory from './Physics/Class9/Sound/sound_theory';
import SoundProcedure from './Physics/Class9/Sound/sound_procedure';
import SoundSimulator from './Physics/Class9/Sound/sound_simulator';
import SoundAnimation from './Physics/Class9/Sound/sound_animation';
import SoundVideo from './Physics/Class9/Sound/sound_video';
import SoundResource from './Physics/Class9/Sound/sound_resources';

//Determination of Density of Solid - 9
import DensityTheory from './Physics/Class9/Density/density_theory';
import DensityProcedure from './Physics/Class9/Density/density_procedure';
import DensitySimulator from './Physics/Class9/Density/density_simulator';
import DensityAnimation from './Physics/Class9/Density/density_animation';
import DensityVideo from './Physics/Class9/Density/density_video';
import DensityResource from './Physics/Class9/Density/density_resources';

//Newton's Second Law - 9
import NewtonSecondTheory from './Physics/Class9/NewtonSecond/newtonsecond_theory';
import NewtonSecondProcedure from './Physics/Class9/NewtonSecond/newtonsecond_procedure';
import NewtonSecondSimulator from './Physics/Class9/NewtonSecond/newtonsecond_simulator';
import NewtonSecondAnimation from './Physics/Class9/NewtonSecond/newtonsecond_animation';
// import NewtonSecondVideo from './Physics/Class9/NewtonSecond/newtonsecond_video';
import NewtonSecondResource from './Physics/Class9/NewtonSecond/newtonsecond_resources';

//Velocity of a Pulse Propagated Through a Slinky - 9
import VelocityTheory from './Physics/Class9/Velocity/velocity_theory';
import VelocityProcedure from './Physics/Class9/Velocity/velocity_procedure';
import VelocitySimulator from './Physics/Class9/Velocity/velocity_simulator';
import VelocityAnimation from './Physics/Class9/Velocity/velocity_animation';
import VelocityVideo from './Physics/Class9/Velocity/velocity_video';
import VelocityResource from './Physics/Class9/Velocity/velocity_resources';

//chemistry

//EMF
import EMFTheory from './Chemistry/Class12/EMF_Cell/EMF_Cell_theory';
import EMFProcedure from './Chemistry/Class12/EMF_Cell/EMF_Cell_procedure';
import EMFSimulator from './Chemistry/Class12/EMF_Cell/EMF_Cell_simulator';
import EMFAnimation from './Chemistry/Class12/EMF_Cell/EMF_Cell_animation';
import EMFVideo from './Chemistry/Class12/EMF_Cell/EMF_Cell_video';
import EMFResource from './Chemistry/Class12/EMF_Cell/EMF_Cell_resources';

//KMNO4

import KMNO4Theory from './Chemistry/Class12/KMNO4_Sollution/KMNO4_Sollution_theory';
import KMNO4Procedure from './Chemistry/Class12/KMNO4_Sollution/KMNO4_Sollution_procedure';
import KMNO4Animation from './Chemistry/Class12/KMNO4_Sollution/KMNO4_Sollution_animation';
import KMNO4Simulator from './Chemistry/Class12/KMNO4_Sollution/KMNO4_Sollution_simulator';
import KMNO4Video from './Chemistry/Class12/KMNO4_Sollution/KMNO4_Sollution_video';
import KMNO4Resource from './Chemistry/Class12/KMNO4_Sollution/KMNO4_Sollution_resources';

//Kinetic Study on the Reaction between Iodide Ions and Hydrogen Peroxide - 12
import HPeroxideTheory from './Chemistry/Class12/HPeroxide/hperoxide_theory';
import HPeroxideProcedure from './Chemistry/Class12/HPeroxide/hperoxide_procedure';
import HPeroxideAnimation from './Chemistry/Class12/HPeroxide/hperoxide_animation';
import HPeroxideSimulator from './Chemistry/Class12/HPeroxide/hperoxide_simulator';
import HPeroxideVideo from './Chemistry/Class12/HPeroxide/hperoxide_video';
import HPeroxideResource from './Chemistry/Class12/HPeroxide/hperoxide_resources';

//Kinetic Study on the Reaction between Potassium Iodate and Sodium Sulphite - 12
import SSulphateTheory from './Chemistry/Class12/SSulphate/ssulphate_theory';
import SSulphateProcedure from './Chemistry/Class12/SSulphate/ssulphate_procedure';
import SSulphateSimulator from './Chemistry/Class12/SSulphate/ssulphate_simulator';
import SSulphateAnimation from './Chemistry/Class12/SSulphate/ssulphate_animation';
import SSulphateVideo from './Chemistry/Class12/SSulphate/ssulphate_video';
import SSulphateResource from './Chemistry/Class12/SSulphate/ssulphate_resources';

// Preparation of Inorganic Compounds - 12
import InorganicTheory from './Chemistry/Class12/InorganicChe/inorganic_theory';
import InorganicProcedure from './Chemistry/Class12/InorganicChe/inorganic_procedure';
import InorganicAnimation from './Chemistry/Class12/InorganicChe/inorganic_animation';
import InorganicSimulator from './Chemistry/Class12/InorganicChe/inorganic_simulator';
import InorganicVideo from './Chemistry/Class12/InorganicChe/inorganic_video';
import InorganicResource from './Chemistry/Class12/InorganicChe/inorganic_resources';

//Qualitative Analysis of Oils & Fats - 12
import OilTheory from './Chemistry/Class12/Oil/oil_theory';
import OilProcedure from './Chemistry/Class12/Oil/oil_procedure';
import OilSimulator from './Chemistry/Class12/Oil/oil_simulator';
import OilAnimation from './Chemistry/Class12/Oil/oil_animation';
import OilVideo from './Chemistry/Class12/Oil/oil_video';
import OilResource from './Chemistry/Class12/Oil/oil_resources';

//Qualitative Analysis of Proteins - 12
import ProteinTheory from './Chemistry/Class12/Protein/protein_theory';
import ProteinProcedure from './Chemistry/Class12/Protein/protein_procedure';
import ProteinSimulator from './Chemistry/Class12/Protein/protein_simulator';
import ProteinAnimation from './Chemistry/Class12/Protein/protein_animation';
import ProteinVideo from './Chemistry/Class12/Protein/protein_video';
import ProteinResource from './Chemistry/Class12/Protein/protein_resources';

//Paper Chromatography - 12
import PaperChromatographyTheory from './Chemistry/Class12/PaperChromatography/paperchromatography_theory';
import PaperChromatographyProcedure from './Chemistry/Class12/PaperChromatography/paperchromatography_procedure';
import PaperChromatographySimulator from './Chemistry/Class12/PaperChromatography/paperchromatography_simulator';
import PaperChromatographyAnimation from './Chemistry/Class12/PaperChromatography/paperchromatography_animation';
import PaperChromatographyVideo from './Chemistry/Class12/PaperChromatography/paperchromatography_video';
import PaperChromatographyResource from './Chemistry/Class12/PaperChromatography/paperchromatography_resources';

//Kinetics Study on the Reaction between Sodium Thiosulphate and Hydrochloric Acid - 12
import HCLTheory from './Chemistry/Class12/HCL/hcl_theory';
import HCLProcedure from './Chemistry/Class12/HCL/hcl_procedure';
import HCLSimulator from './Chemistry/Class12/HCL/hcl_simulator';
import HCLAnimation from './Chemistry/Class12/HCL/hcl_animation';
import HCLVideo from './Chemistry/Class12/HCL/hcl_video';
import HCLResource from './Chemistry/Class12/HCL/hcl_resources';

//Preparation of Organic Compounds - 12
import OrganicTheory from './Chemistry/Class12/Organic/organic_theory';
import OrganicProcedure from './Chemistry/Class12/Organic/organic_procedure';
import OrganicSimulator from './Chemistry/Class12/Organic/organic_simulator';
import OrganicAnimation from './Chemistry/Class12/Organic/organic_animation';
// import OrganicVideo from './Chemistry/Class12/Organic/organic_video';
import OrganicResource from './Chemistry/Class12/Organic/organic_resources';

//Qualitative Analysis of Carbohydrates - 12
import CarbohydratesTheory from './Chemistry/Class12/Carbohydrates/carbohydrates_theory';
import CarbohydratesProcedure from './Chemistry/Class12/Carbohydrates/carbohydrates_procedure';
import CarbohydratesSimulator from './Chemistry/Class12/Carbohydrates/carbohydrates_simulator';
import CarbohydratesAnimation from './Chemistry/Class12/Carbohydrates/carbohydrates_animation';
import CarbohydratesVideo from './Chemistry/Class12/Carbohydrates/carbohydrates_video';
import CarbohydratesResource from './Chemistry/Class12/Carbohydrates/carbohydrates_resources';

//Effectiveness of Different Common Oils in Forming Emulsions - 12
import EmulsionTheory from './Chemistry/Class12/Emulsion/emulsion_theory';
import EmulsionProcedure from './Chemistry/Class12/Emulsion/emulsion_procedure';
import EmulsionSimulator from './Chemistry/Class12/Emulsion/emulsion_simulator';
import EmulsionAnimation from './Chemistry/Class12/Emulsion/emulsion_animation';
import EmulsionVideo from './Chemistry/Class12/Emulsion/emulsion_video';
import EmulsionResource from './Chemistry/Class12/Emulsion/emulsion_resources';

//Preparation of Lyophilic and Lyophobic Sols - 12
import LyphobicTheory from './Chemistry/Class12/Lyphobic/lyphobic_theory';
import LyphobicProcedure from './Chemistry/Class12/Lyphobic/lyphobic_procedure';
import LyphobicSimulator from './Chemistry/Class12/Lyphobic/lyphobic_simulator';
import LyphobicAnimation from './Chemistry/Class12/Lyphobic/lyphobic_animation';
// import LyphobicVideo from './Chemistry/Class12/Lyphobic/lyphobic_video';
import LyphobicResource from './Chemistry/Class12/Lyphobic/lyphobic_resources';

//Tests for the functional groups - 12
import FunctionalGroupsTheory from './Chemistry/Class12/FunctionalGroups/functionalgroups_theory';
import FunctionalGroupsProcedure from './Chemistry/Class12/FunctionalGroups/functionalgroups_procedure';
import FunctionalGroupsSimulator from './Chemistry/Class12/FunctionalGroups/functionalgroups_simulator';
import FunctionalGroupsAnimation from './Chemistry/Class12/FunctionalGroups/functionalgroups_animation';
import FunctionalGroupsVideo from './Chemistry/Class12/FunctionalGroups/functionalgroups_video';
import FunctionalGroupsResource from './Chemistry/Class12/FunctionalGroups/functionalgroups_resources';

//Thermochemistry - 12
import ThermochemistryTheory from './Chemistry/Class12/Thermochemistry/thermochemistry_theory';
import ThermochemistryProcedure from './Chemistry/Class12/Thermochemistry/thermochemistry_procedure';
import ThermochemistrySimulator from './Chemistry/Class12/Thermochemistry/thermochemistry_simulator';
import ThermochemistryAnimation from './Chemistry/Class12/Thermochemistry/thermochemistry_animation';
// import ThermochemistryVideo from './Chemistry/Class12/Thermochemistry/thermochemistry_video';
import ThermochemistryResource from './Chemistry/Class12/Thermochemistry/thermochemistry_resources';

//Boiling point 11

import BoilingPointTheory from './Chemistry/Class11/BoilingPoint/boilingPoint_theory';
import BoilingPointProcedure from './Chemistry/Class11/BoilingPoint/boilingPoint_procedure';
import BoilingPointAnimation from './Chemistry/Class11/BoilingPoint/boilingPoint_animation';
import BoilingPointSimulator from './Chemistry/Class11/BoilingPoint/boilingPoint_simulator';
import BoilingPointVideo from './Chemistry/Class11/BoilingPoint/boilingPoint_video';
import BoilingPointResource from './Chemistry/Class11/BoilingPoint/boilingPoint_resources';

//Melting point 11

import MeltingPointTheory from './Chemistry/Class11/MeltingPoint/meltingPoint_theory';
import MeltingPointProcedure from './Chemistry/Class11/MeltingPoint/meltingPoint_procedure';
import MeltingPointAnimation from './Chemistry/Class11/MeltingPoint/meltingPoint_animation';
import MeltingPointSimulator from './Chemistry/Class11/MeltingPoint/meltingPoint_simulator';
import MeltingPointVideo from './Chemistry/Class11/MeltingPoint/meltingPoint_video';
import MeltingPointResource from './Chemistry/Class11/MeltingPoint/meltingPoint_resources';

// pH Determination - 11
import PHTheory from './Chemistry/Class11/PH/ph_theory';
import PHProcedure from './Chemistry/Class11/PH/ph_procedure';
import PHAnimation from './Chemistry/Class11/PH/ph_animation';
import PHSimulator from './Chemistry/Class11/PH/ph_simulator';
import PHVideo from './Chemistry/Class11/PH/ph_video';
import PHResource from './Chemistry/Class11/PH/ph_resources';

//Chemical equilibrium - 11
import EquilibriumTheory from './Chemistry/Class11/Equilibrium/equilibrium_theory';
import EquilibriumProcedure from './Chemistry/Class11/Equilibrium/equilibrium_procedure';
import EquilibriumSimulator from './Chemistry/Class11/Equilibrium/equilibrium_simulator';
import EquilibriumAnimation from './Chemistry/Class11/Equilibrium/equilibrium_animation';
import EquilibriumVideo from './Chemistry/Class11/Equilibrium/equilibrium_video';
import EquilibriumResource from './Chemistry/Class11/Equilibrium/equilibrium_resources';

//Quantitative Estimation - 11
import QuantitativeTheory from './Chemistry/Class11/Quantitative/quantitative_theory';
import QuantitativeProcedure from './Chemistry/Class11/Quantitative/quantitative_procedure';
import QuantitativeSimulator from './Chemistry/Class11/Quantitative/quantitative_simulator';
import QuantitativeAnimation from './Chemistry/Class11/Quantitative/quantitative_animation';
import QuantitativeVideo from './Chemistry/Class11/Quantitative/quantitative_video';
import QuantitativeResource from './Chemistry/Class11/Quantitative/quantitative_resources';

//Purification of Impure samples by Crystallisation - 11
import CrystallisationTheory from './Chemistry/Class11/Crystallisation/crystallisation_theory';
import CrystallisationProcedure from './Chemistry/Class11/Crystallisation/crystallisation_procedure';
import CrystallisationSimulator from './Chemistry/Class11/Crystallisation/crystallisation_simulator';
import CrystallisationAnimation from './Chemistry/Class11/Crystallisation/crystallisation_animation';
import CrystallisationVideo from './Chemistry/Class11/Crystallisation/crystallisation_video';
import CrystallisationResource from './Chemistry/Class11/Crystallisation/crystallisation_resources';

//Detection of Elements: Lassaigne's Test - 11
import LassaigneTheory from './Chemistry/Class11/Lassaigne/lassaigne_theory';
import LassaigneProcedure from './Chemistry/Class11/Lassaigne/lassaigne_procedure';
import LassaigneSimulator from './Chemistry/Class11/Lassaigne/lassaigne_simulator';
import LassaigneAnimation from './Chemistry/Class11/Lassaigne/lassaigne_animation';
import LassaigneVideo from './Chemistry/Class11/Lassaigne/lassaigne_video';
import LassaigneResource from './Chemistry/Class11/Lassaigne/lassaigne_resources';

//Basic Laboratory Techniques - 11
import LabTechniquesTheory from './Chemistry/Class11/LabTechniques/labtechniques_theory';
import LabTechniquesProcedure from './Chemistry/Class11/LabTechniques/labtechniques_procedure';
// import LabTechniquesSimulator from './Chemistry/Class11/LabTechniques/labtechniques_simulator';
import LabTechniquesAnimation from './Chemistry/Class11/LabTechniques/labtechniques_animation';
// import LabTechniquesVideo from './Chemistry/Class11/LabTechniques/labtechniques_video';
import LabTechniquesResource from './Chemistry/Class11/LabTechniques/labtechniques_resources';

//Qualitative Analysis of Anions - 11
import AnionTheory from './Chemistry/Class11/Anion/anion_theory';
import AnionProcedure from './Chemistry/Class11/Anion/anion_procedure';
import AnionSimulator from './Chemistry/Class11/Anion/anion_simulator';
// import AnionAnimation from './Chemistry/Class11/Anion/anion_animation';
import AnionVideo from './Chemistry/Class11/Anion/anion_video';
import AnionResource from './Chemistry/Class11/Anion/anion_resources';

//Qualitative Analysis of Cations - 11
import CationTheory from './Chemistry/Class11/Cation/cation_theory';
import CationProcedure from './Chemistry/Class11/Cation/cation_procedure';
import CationSimulator from './Chemistry/Class11/Cation/cation_simulator';
// import CationAnimation from './Chemistry/Class11/Cation/cation_animation';
import CationVideo from './Chemistry/Class11/Cation/cation_video';
import CationResource from './Chemistry/Class11/Cation/cation_resources';

//Combination Reaction 10

import CombinationReactionTheory from './Chemistry/Class10/CombinationReaction/combinationReaction_theory';
import CombinationReactionProcedure from './Chemistry/Class10/CombinationReaction/combinationReaction_procedure';
import CombinationReactionAnimation from './Chemistry/Class10/CombinationReaction/combinationReaction_animation';
import CombinationReactionSimulator from './Chemistry/Class10/CombinationReaction/combinationReaction_simulator';
import CombinationReactionVideo from './Chemistry/Class10/CombinationReaction/combinationReaction_video';
import CombinationReactionResource from './Chemistry/Class10/CombinationReaction/combinationReaction_resources';

//Combination Reaction 10

import DisplacementReactionTheory from './Chemistry/Class10/DisplacementReaction/displacementReaction_theory';
import DisplacementReactionProcedure from './Chemistry/Class10/DisplacementReaction/displacementReaction_procedure';
import DisplacementReactionAnimation from './Chemistry/Class10/DisplacementReaction/displacementReaction_animation';
import DisplacementReactionSimulator from './Chemistry/Class10/DisplacementReaction/displacementReaction_simulator';
import DisplacementReactionVideo from './Chemistry/Class10/DisplacementReaction/displacementReaction_video';
import DisplacementReactionResource from './Chemistry/Class10/DisplacementReaction/displacementReaction_resources';

//Determine pH with pH indicator strips / universal indicator solution 10

import PHStripTheory from './Chemistry/Class10/PHStrip/phstrip_theory';
import PHStripProcedure from './Chemistry/Class10/PHStrip/phstrip_procedure';
import PHStripAnimation from './Chemistry/Class10/PHStrip/phstrip_animation';
import PHStripSimulator from './Chemistry/Class10/PHStrip/phstrip_simulator';
import PHStripVideo from './Chemistry/Class10/PHStrip/phstrip_video';
import PHStripResource from './Chemistry/Class10/PHStrip/phstrip_resources';

//Decomposition Reaction 10

import DecompositionTheory from './Chemistry/Class10/Decomposition/decomposition_theory';
import DecompositionProcedure from './Chemistry/Class10/Decomposition/decomposition_procedure';
import DecompositionAnimation from './Chemistry/Class10/Decomposition/decomposition_animation';
import DecompositionSimulator from './Chemistry/Class10/Decomposition/decomposition_simulator';
import DecompositionVideo from './Chemistry/Class10/Decomposition/decomposition_video';
import DecompositionResource from './Chemistry/Class10/Decomposition/decomposition_resources';

// Properties of Acids and Bases - 10
import AcidBaseTheory from './Chemistry/Class10/AcidBase/acidbase_theory';
import AcidBaseProcedure from './Chemistry/Class10/AcidBase/acidbase_procedure';
import AcidBaseAnimation from './Chemistry/Class10/AcidBase/acidbase_animation';
import AcidBaseSimulator from './Chemistry/Class10/AcidBase/acidbase_simulator';
import AcidBaseVideo from './Chemistry/Class10/AcidBase/acidbase_video';
import AcidBaseResource from './Chemistry/Class10/AcidBase/acidbase_resources';

//Double Displacement Reaction - 10
import DoubleDisplacementTheory from './Chemistry/Class10/DoubleDisplacement/doubledisplacement_theory';
import DoubleDisplacementProcedure from './Chemistry/Class10/DoubleDisplacement/doubledisplacement_procedure';
import DoubleDisplacementSimulator from './Chemistry/Class10/DoubleDisplacement/doubledisplacement_simulator';
import DoubleDisplacementAnimation from './Chemistry/Class10/DoubleDisplacement/doubledisplacement_animation';
import DoubleDisplacementVideo from './Chemistry/Class10/DoubleDisplacement/doubledisplacement_video';
import DoubleDisplacementResource from './Chemistry/Class10/DoubleDisplacement/doubledisplacement_resources';

//Properties of Acetic Acid (Ethanoic Acid) - 10
import EthanoicTheory from './Chemistry/Class10/Ethanoic/ethanoic_theory';
import EthanoicProcedure from './Chemistry/Class10/Ethanoic/ethanoic_procedure';
import EthanoicSimulator from './Chemistry/Class10/Ethanoic/ethanoic_simulator';
import EthanoicAnimation from './Chemistry/Class10/Ethanoic/ethanoic_animation';
import EthanoicVideo from './Chemistry/Class10/Ethanoic/ethanoic_video';
import EthanoicResource from './Chemistry/Class10/Ethanoic/ethanoic_resources';

//To Study The Relative Reactivity of Metals Using Salt Solutions - 10
import SaltSolsTheory from './Chemistry/Class10/SaltSols/saltsols_theory';
import SaltSolsProcedure from './Chemistry/Class10/SaltSols/saltsols_procedure';
import SaltSolsSimulator from './Chemistry/Class10/SaltSols/saltsols_simulator';
import SaltSolsAnimation from './Chemistry/Class10/SaltSols/saltsols_animation';
import SaltSolsVideo from './Chemistry/Class10/SaltSols/saltsols_video';
import SaltSolsResource from './Chemistry/Class10/SaltSols/saltsols_resources';

//Cleaning Capacity of Soap with Hard and Soft Water - 10
import SoftHardTheory from './Chemistry/Class10/SoftHard/softhard_theory';
import SoftHardProcedure from './Chemistry/Class10/SoftHard/softhard_procedure';
import SoftHardSimulator from './Chemistry/Class10/SoftHard/softhard_simulator';
import SoftHardAnimation from './Chemistry/Class10/SoftHard/softhard_animation';
import SoftHardVideo from './Chemistry/Class10/SoftHard/softhard_video';
import SoftHardResource from './Chemistry/Class10/SoftHard/softhard_resources';

//Saponification-The process of Making Soap - 10
import SaponificationTheory from './Chemistry/Class10/Saponification/saponification_theory';
import SaponificationProcedure from './Chemistry/Class10/Saponification/saponification_procedure';
import SaponificationSimulator from './Chemistry/Class10/Saponification/saponification_simulator';
import SaponificationAnimation from './Chemistry/Class10/Saponification/saponification_animation';
import SaponificationVideo from './Chemistry/Class10/Saponification/saponification_video';
import SaponificationResource from './Chemistry/Class10/Saponification/saponification_resources';

//Chemical Reaction 9

import ChemicalReactionTheory from './Chemistry/Class9/ChemicalReaction/chemicalReaction_theory';
import ChemicalReactionProcedure from './Chemistry/Class9/ChemicalReaction/chemicalReaction_procedure';
import ChemicalReactionAnimation from './Chemistry/Class9/ChemicalReaction/chemicalReaction_animation';
import ChemicalReactionSimulator from './Chemistry/Class9/ChemicalReaction/chemicalReaction_simulator';
import ChemicalReactionVideo from './Chemistry/Class9/ChemicalReaction/chemicalReaction_video';
import ChemicalReactionResource from './Chemistry/Class9/ChemicalReaction/chemicalReaction_resources';

//melting point 9

import MeltingPointIceTheory from './Chemistry/Class9/MeltingPoint/meltingPointIce_theory';
import MeltingPointIceProcedure from './Chemistry/Class9/MeltingPoint/meltingPointIce_procedure';
import MeltingPointIceAnimation from './Chemistry/Class9/MeltingPoint/meltingPointIce_animation';
import MeltingPointIceSimulator from './Chemistry/Class9/MeltingPoint/meltingPointIce_simulator';
import MeltingPointIceVideo from './Chemistry/Class9/MeltingPoint/meltingPointIce_video';
import MeltingPointIceResource from './Chemistry/Class9/MeltingPoint/meltingPointIce_resources';

//Distinguish Between Mixture and Compound 9

import MixtureTheory from './Chemistry/Class9/Mixture/mixture_theory';
import MixtureProcedure from './Chemistry/Class9/Mixture/mixture_procedure';
import MixtureAnimation from './Chemistry/Class9/Mixture/mixture_animation';
import MixtureSimulator from './Chemistry/Class9/Mixture/mixture_simulator';
import MixtureVideo from './Chemistry/Class9/Mixture/mixture_video';
import MixtureResource from './Chemistry/Class9/Mixture/mixture_resources';

//Separation of Components of a Mixture 9

import MixtureSeparationTheory from './Chemistry/Class9/MixtureSeparation/mixtureseparation_theory';
import MixtureSeparationProcedure from './Chemistry/Class9/MixtureSeparation/mixtureseparation_procedure';
import MixtureSeparationAnimation from './Chemistry/Class9/MixtureSeparation/mixtureseparation_animation';
import MixtureSeparationSimulator from './Chemistry/Class9/MixtureSeparation/mixtureseparation_simulator';
import MixtureSeparationVideo from './Chemistry/Class9/MixtureSeparation/mixtureseparation_video';
import MixtureSeparationResource from './Chemistry/Class9/MixtureSeparation/mixtureseparation_resources';

// Distinguishing Between Solutions - 9
import SolsTheory from './Chemistry/Class9/Sols/sols_theory';
import SolsProcedure from './Chemistry/Class9/Sols/sols_procedure';
import SolsAnimation from './Chemistry/Class9/Sols/sols_animation';
import SolsSimulator from './Chemistry/Class9/Sols/sols_simulator';
import SolsVideo from './Chemistry/Class9/Sols/sols_video';
import SolsResource from './Chemistry/Class9/Sols/sols_resources';

//Separation of Mixtures Using Different Techniques - 9
import MixtureTechniquesTheory from './Chemistry/Class9/MixtureTechniques/mixturetechniques_theory';
import MixtureTechniquesProcedure from './Chemistry/Class9/MixtureTechniques/mixturetechniques_procedure';
import MixtureTechniquesSimulator from './Chemistry/Class9/MixtureTechniques/mixturetechniques_simulator';
import MixtureTechniquesAnimation from './Chemistry/Class9/MixtureTechniques/mixturetechniques_animation';
import MixtureTechniquesVideo from './Chemistry/Class9/MixtureTechniques/mixturetechniques_video';
import MixtureTechniquesResource from './Chemistry/Class9/MixtureTechniques/mixturetechniques_resources';

//Boiling Point of Water - 9
import WaterTheory from './Chemistry/Class9/Water/water_theory';
import WaterProcedure from './Chemistry/Class9/Water/water_procedure';
import WaterSimulator from './Chemistry/Class9/Water/water_simulator';
import WaterAnimation from './Chemistry/Class9/Water/water_animation';
import WaterVideo from './Chemistry/Class9/Water/water_video';
import WaterResource from './Chemistry/Class9/Water/water_resources';

//Rutherford's Scattering Experiment - 9
import ScatterTheory from './Chemistry/Class9/Scatter/scatter_theory';
import ScatterProcedure from './Chemistry/Class9/Scatter/scatter_procedure';
import ScatterSimulator from './Chemistry/Class9/Scatter/scatter_simulator';
import ScatterAnimation from './Chemistry/Class9/Scatter/scatter_animation';
// import ScatterVideo from './Chemistry/Class9/Scatter/scatter_video';
import ScatterResource from './Chemistry/Class9/Scatter/scatter_resources';

//Exothermic and Endothermic Reactions - 9
import ExothermicTheory from './Chemistry/Class9/Exothermic/exothermic_theory';
import ExothermicProcedure from './Chemistry/Class9/Exothermic/exothermic_procedure';
// import ExothermicSimulator from './Chemistry/Class9/Exothermic/exothermic_simulator';
import ExothermicAnimation from './Chemistry/Class9/Exothermic/exothermic_animation';
// import ExothermicVideo from './Chemistry/Class9/Exothermic/exothermic_video';
import ExothermicResource from './Chemistry/Class9/Exothermic/exothermic_resources';

//Modern Periodic Table - 9
import PeriodicTableTheory from './Chemistry/Class9/PeriodicTable/periodictable_theory';
import PeriodicTableProcedure from './Chemistry/Class9/PeriodicTable/periodictable_procedure';
import PeriodicTableSimulator from './Chemistry/Class9/PeriodicTable/periodictable_simulator';
// import PeriodicTableAnimation from './Chemistry/Class9/PeriodicTable/periodictable_animation';
// import PeriodicTableVideo from './Chemistry/Class9/PeriodicTable/periodictable_video';
import PeriodicTableResource from './Chemistry/Class9/PeriodicTable/periodictable_resources';

//The Law of Conservation of Mass in a Chemical Reaction - 9
import ConservationTheory from './Chemistry/Class9/Conservation/conservation_theory';
import ConservationProcedure from './Chemistry/Class9/Conservation/conservation_procedure';
import ConservationSimulator from './Chemistry/Class9/Conservation/conservation_simulator';
import ConservationAnimation from './Chemistry/Class9/Conservation/conservation_animation';
import ConservationVideo from './Chemistry/Class9/Conservation/conservation_video';
import ConservationResource from './Chemistry/Class9/Conservation/conservation_resources';

//pollen

import PollenTheory from './Biology/Class12/Pollen/Pollen_theory';
import PollenProcedure from './Biology/Class12/Pollen/Pollen_procedure';
import PollenAnimation from './Biology/Class12/Pollen/Pollen_animation';
import PollenSimulator from './Biology/Class12/Pollen/Pollen_simulator';
import PollenResource from './Biology/Class12/Pollen/Pollen_resources';
import PollenVideo from './Biology/Class12/Pollen/Pollen_video';

//Turbitidy

import TurbidityTheory from './Biology/Class12/Turbitidy/Turbitidy_theory';
import TurbidityProcedure from './Biology/Class12/Turbitidy/Turbitidy_procedure';
import TurbidityAnimation from './Biology/Class12/Turbitidy/Turbitidy_animation';
import TurbiditySimulator from './Biology/Class12/Turbitidy/Turbitidy_simulator';
import TurbidityResource from './Biology/Class12/Turbitidy/Turbitidy_resources';
import TurbidityVideo from './Biology/Class12/Turbitidy/Turbitidy_video';

//Study of Physical Properties of Soil

import SoilStudyTheory from './Biology/Class12/SoilStudy/soilstudy_theory';
import SoilStudyProcedure from './Biology/Class12/SoilStudy/soilstudy_procedure';
import SoilStudyAnimation from './Biology/Class12/SoilStudy/soilstudy_animation';
import SoilStudySimulator from './Biology/Class12/SoilStudy/soilstudy_simulator';
import SoilStudyResource from './Biology/Class12/SoilStudy/soilstudy_resources';
import SoilStudyVideo from './Biology/Class12/SoilStudy/soilstudy_video';

//Study of pollutants in Air

import AirStudyTheory from './Biology/Class12/AirStudy/airstudy_theory';
import AirStudyProcedure from './Biology/Class12/AirStudy/airstudy_procedure';
import AirStudyAnimation from './Biology/Class12/AirStudy/airstudy_animation';
import AirStudySimulator from './Biology/Class12/AirStudy/airstudy_simulator';
import AirStudyResource from './Biology/Class12/AirStudy/airstudy_resources';
import AirStudyVideo from './Biology/Class12/AirStudy/airstudy_video';

//Study of plant population density by quadrat method

import QuadratDensityTheory from './Biology/Class12/QuadratDensity/quadratdensity_theory';
import QuadratDensityProcedure from './Biology/Class12/QuadratDensity/quadratdensity_procedure';
import QuadratDensityAnimation from './Biology/Class12/QuadratDensity/quadratdensity_animation';
import QuadratDensitySimulator from './Biology/Class12/QuadratDensity/quadratdensity_simulator';
import QuadratDensityResource from './Biology/Class12/QuadratDensity/quadratdensity_resources';
// import QuadratDensityVideo from './Biology/Class12/QuadratDensity/quadratdensity_video';

//Study of plant population frequency by quadrat method

import QuadratFrequencyTheory from './Biology/Class12/QuadratFrequency/quadratfrequency_theory';
import QuadratFrequencyProcedure from './Biology/Class12/QuadratFrequency/quadratfrequency_procedure';
import QuadratFrequencyAnimation from './Biology/Class12/QuadratFrequency/quadratfrequency_animation';
import QuadratFrequencySimulator from './Biology/Class12/QuadratFrequency/quadratfrequency_simulator';
import QuadratFrequencyResource from './Biology/Class12/QuadratFrequency/quadratfrequency_resources';
// import QuadratFrequencyVideo from './Biology/Class12/QuadratFrequency/quadratfrequency_video';

//Study Mitosis in Onion Root Tip

import OnionTheory from './Biology/Class12/Onion/onion_theory';
import OnionProcedure from './Biology/Class12/Onion/onion_procedure';
import OnionAnimation from './Biology/Class12/Onion/onion_animation';
import OnionSimulator from './Biology/Class12/Onion/onion_simulator';
import OnionResource from './Biology/Class12/Onion/onion_resources';
// import OnionVideo from './Biology/Class12/Onion/onion_video';

//Action of Salivary Amylase on Starch

import SalivaTheory from './Biology/Class12/Saliva/saliva_theory';
import SalivaProcedure from './Biology/Class12/Saliva/saliva_procedure';
import SalivaAnimation from './Biology/Class12/Saliva/saliva_animation';
import SalivaSimulator from './Biology/Class12/Saliva/saliva_simulator';
import SalivaResource from './Biology/Class12/Saliva/saliva_resources';
// import SalivaVideo from './Biology/Class12/Saliva/saliva_video';

//osmosis

import OsmosisTheory from './Biology/Class11/Osmosis/osmosis_theory';
import OsmosisProcedure from './Biology/Class11/Osmosis/osmosis_procedure';
import OsmosisAnimation from './Biology/Class11/Osmosis/osmosis_animation';
import OsmosisSimulator from './Biology/Class11/Osmosis/osmosis_simulator';
import OsmosisResource from './Biology/Class11/Osmosis/osmosis_resources';
import OsmosisVideo from './Biology/Class11/Osmosis/osmosis_video';

//Transpiration

import TranspirationTheory from './Biology/Class11/Transpiration/Transpiration_theory';
import TranspirationProcedure from './Biology/Class11/Transpiration/Transpiration_procedure';
import TranspirationAnimation from './Biology/Class11/Transpiration/Transpiration_animation';
import TranspirationSimulator from './Biology/Class11/Transpiration/Transpiration_simulator';
import TranspirationResource from './Biology/Class11/Transpiration/Transpiration_resources';
import TranspirationVideo from './Biology/Class11/Transpiration/Transpiration_video';

//Study of Plasmolysis

import PlasmolysisTheory from './Biology/Class11/Plasmolysis/plasmolysis_theory';
import PlasmolysisProcedure from './Biology/Class11/Plasmolysis/plasmolysis_procedure';
import PlasmolysisAnimation from './Biology/Class11/Plasmolysis/plasmolysis_animation';
import PlasmolysisSimulator from './Biology/Class11/Plasmolysis/plasmolysis_simulator';
import PlasmolysisResource from './Biology/Class11/Plasmolysis/plasmolysis_resources';
import PlasmolysisVideo from './Biology/Class11/Plasmolysis/plasmolysis_video';

//Study of distribution of stomata

import StomataTheory from './Biology/Class11/Stomata/stomata_theory';
import StomataProcedure from './Biology/Class11/Stomata/stomata_procedure';
import StomataAnimation from './Biology/Class11/Stomata/stomata_animation';
import StomataSimulator from './Biology/Class11/Stomata/stomata_simulator';
import StomataResource from './Biology/Class11/Stomata/stomata_resources';
import StomataVideo from './Biology/Class11/Stomata/stomata_video';

//Paper Chromatography

import PaperChromTheory from './Biology/Class11/PaperChrom/paperchrom_theory';
import PaperChromProcedure from './Biology/Class11/PaperChrom/paperchrom_procedure';
import PaperChromAnimation from './Biology/Class11/PaperChrom/paperchrom_animation';
import PaperChromSimulator from './Biology/Class11/PaperChrom/paperchrom_simulator';
import PaperChromResource from './Biology/Class11/PaperChrom/paperchrom_resources';
import PaperChromVideo from './Biology/Class11/PaperChrom/paperchrom_video';

//Characteristics of Flowers

import FlowersTheory from './Biology/Class11/Flowers/flowers_theory';
import FlowersProcedure from './Biology/Class11/Flowers/flowers_procedure';
import FlowersAnimation from './Biology/Class11/Flowers/flowers_animation';
import FlowersSimulator from './Biology/Class11/Flowers/flowers_simulator';
import FlowersResource from './Biology/Class11/Flowers/flowers_resources';
import FlowersVideo from './Biology/Class11/Flowers/flowers_video';

//Characteristics of Dicot and Monocot Stem and Root

import MonocotTheory from './Biology/Class11/Monocot/monocot_theory';
import MonocotProcedure from './Biology/Class11/Monocot/monocot_procedure';
import MonocotAnimation from './Biology/Class11/Monocot/monocot_animation';
import MonocotSimulator from './Biology/Class11/Monocot/monocot_simulator';
import MonocotResource from './Biology/Class11/Monocot/monocot_resources';
import MonocotVideo from './Biology/Class11/Monocot/monocot_video';

//Rate of Respiration

import RespirationTheory from './Biology/Class11/Respiration/respiration_theory';
import RespirationProcedure from './Biology/Class11/Respiration/respiration_procedure';
// import RespirationAnimation from './Biology/Class11/Respiration/respiration_animation';
import RespirationSimulator from './Biology/Class11/Respiration/respiration_simulator';
import RespirationResource from './Biology/Class11/Respiration/respiration_resources';
import RespirationVideo from './Biology/Class11/Respiration/respiration_video';

//Detection of Sugar in Urine

import UrineTheory from './Biology/Class11/Urine/urine_theory';
import UrineProcedure from './Biology/Class11/Urine/urine_procedure';
import UrineAnimation from './Biology/Class11/Urine/urine_animation';
import UrineSimulator from './Biology/Class11/Urine/urine_simulator';
import UrineResource from './Biology/Class11/Urine/urine_resources';
import UrineVideo from './Biology/Class11/Urine/urine_video';

//Detection of Urea in Urine

import UreaTheory from './Biology/Class11/Urea/urea_theory';
import UreaProcedure from './Biology/Class11/Urea/urea_procedure';
import UreaAnimation from './Biology/Class11/Urea/urea_animation';
import UreaSimulator from './Biology/Class11/Urea/urea_simulator';
import UreaResource from './Biology/Class11/Urea/urea_resources';
import UreaVideo from './Biology/Class11/Urea/urea_video';

//Detection of Albumin in Urine

import AlbuminTheory from './Biology/Class11/Albumin/albumin_theory';
import AlbuminProcedure from './Biology/Class11/Albumin/albumin_procedure';
import AlbuminAnimation from './Biology/Class11/Albumin/albumin_animation';
import AlbuminSimulator from './Biology/Class11/Albumin/albumin_simulator';
import AlbuminResource from './Biology/Class11/Albumin/albumin_resources';
import AlbuminVideo from './Biology/Class11/Albumin/albumin_video';

//Detection of Bile salts in Urine

import BileTheory from './Biology/Class11/Bile/bile_theory';
import BileProcedure from './Biology/Class11/Bile/bile_procedure';
import BileAnimation from './Biology/Class11/Bile/bile_animation';
import BileSimulator from './Biology/Class11/Bile/bile_simulator';
import BileResource from './Biology/Class11/Bile/bile_resources';
import BileVideo from './Biology/Class11/Bile/bile_video';

//Detection of Carbohydrates, Proteins and Fats

import CPFTheory from './Biology/Class11/CPF/cpf_theory';
import CPFProcedure from './Biology/Class11/CPF/cpf_procedure';
import CPFAnimation from './Biology/Class11/CPF/cpf_animation';
import CPFSimulator from './Biology/Class11/CPF/cpf_simulator';
import CPFResource from './Biology/Class11/CPF/cpf_resources';
import CPFVideo from './Biology/Class11/CPF/cpf_video';

//amoeba
import AmoebaTheory from './Biology/Class10/Amoeba/amoeba_theory';
import AmoebaProcedure from './Biology/Class10/Amoeba/amoeba_procedure';
import AmoebaAnimation from './Biology/Class10/Amoeba/amoeba_animation';
import AmoebaSimulator from './Biology/Class10/Amoeba/amoeba_simulator';
import AmoebaResource from './Biology/Class10/Amoeba/amoeba_resources';
import AmoebaVideo from './Biology/Class10/Amoeba/amoeba_video';

//photosynthesis 10
import PhotosynthesisTheory from './Biology/Class10/Photosynthesis/photosynthesis_theory';
import PhotosynthesisProcedure from './Biology/Class10/Photosynthesis/photosynthesis_procedure';
import PhotosynthesisAnimation from './Biology/Class10/Photosynthesis/photosynthesis_animation';
import PhotosynthesisSimulator from './Biology/Class10/Photosynthesis/photosynthesis_simulator';
import PhotosynthesisResource from './Biology/Class10/Photosynthesis/photosynthesis_resources';
import PhotosynthesisVideo from './Biology/Class10/Photosynthesis/photosynthesis_video';

//Embryo of Dicot Seeds
import DicotTheory from './Biology/Class10/Dicot/dicot_theory';
import DicotProcedure from './Biology/Class10/Dicot/dicot_procedure';
import DicotAnimation from './Biology/Class10/Dicot/dicot_animation';
import DicotSimulator from './Biology/Class10/Dicot/dicot_simulator';
import DicotResource from './Biology/Class10/Dicot/dicot_resources';
import DicotVideo from './Biology/Class10/Dicot/dicot_video';

//Role of Carbon Dioxide During Respiration
import CO2Theory from './Biology/Class10/CO2/co2_theory';
import CO2Procedure from './Biology/Class10/CO2/co2_procedure';
import CO2Animation from './Biology/Class10/CO2/co2_animation';
import CO2Simulator from './Biology/Class10/CO2/co2_simulator';
import CO2Resource from './Biology/Class10/CO2/co2_resources';
import CO2Video from './Biology/Class10/CO2/co2_video';

//Demonstration of Stomata on a Leaf Peel
import LeafTheory from './Biology/Class10/Leaf/leaf_theory';
import LeafProcedure from './Biology/Class10/Leaf/leaf_procedure';
import LeafAnimation from './Biology/Class10/Leaf/leaf_animation';
import LeafSimulator from './Biology/Class10/Leaf/leaf_simulator';
import LeafResource from './Biology/Class10/Leaf/leaf_resources';
import LeafVideo from './Biology/Class10/Leaf/leaf_video';

//Homology and Analogy
import HomologyTheory from './Biology/Class10/Homology/homology_theory';
import HomologyProcedure from './Biology/Class10/Homology/homology_procedure';
// import HomologyAnimation from './Biology/Class10/Homology/homology_animation';
import HomologySimulator from './Biology/Class10/Homology/homology_simulator';
import HomologyResource from './Biology/Class10/Homology/homology_resources';
import HomologyVideo from './Biology/Class10/Homology/homology_video';

//adulterent
import AdulternetTheory from './Biology/Class9/Adulterent/adulternet_theory';
import AdulternetProcedure from './Biology/Class9/Adulterent/adulternet_procedure';
import AdulternetAnimation from './Biology/Class9/Adulterent/adulternet_animation';
import AdulternetSimulator from './Biology/Class9/Adulterent/adulternet_simulator';
import AdulternetResource from './Biology/Class9/Adulterent/adulternet_resources';
import AdulternetVideo from './Biology/Class9/Adulterent/adulternet_video';

//cheekcells
import CheekCellsTheory from './Biology/Class9/CheekCells/cheekCells_theory';
import CheekCellsProcedure from './Biology/Class9/CheekCells/cheekCells_procedure';
import CheekCellsAnimation from './Biology/Class9/CheekCells/cheekCells_animation';
import CheekCellsSimulator from './Biology/Class9/CheekCells/cheekCells_simulator';
import CheekCellsResource from './Biology/Class9/CheekCells/cheekCells_resources';
import CheekCellsVideo from './Biology/Class9/CheekCells/cheekCells_video';

//Adaptation in Animals
import AdaptationTheory from './Biology/Class9/Adaptation/adaptation_theory';
// import AdaptationProcedure from './Biology/Class9/Adaptation/adaptation_procedure';
// import AdaptationAnimation from './Biology/Class9/Adaptation/adaptation_animation';
// import AdaptationSimulator from './Biology/Class9/Adaptation/adaptation_simulator';
import AdaptationResource from './Biology/Class9/Adaptation/adaptation_resources';
import AdaptationVideo from './Biology/Class9/Adaptation/adaptation_video';

//Imbibition by Raisins
import ImbibitionTheory from './Biology/Class9/Imbibition/imbibition_theory';
import ImbibitionProcedure from './Biology/Class9/Imbibition/imbibition_procedure';
import ImbibitionAnimation from './Biology/Class9/Imbibition/imbibition_animation';
import ImbibitionSimulator from './Biology/Class9/Imbibition/imbibition_simulator';
import ImbibitionResource from './Biology/Class9/Imbibition/imbibition_resources';
import ImbibitionVideo from './Biology/Class9/Imbibition/imbibition_video';

//Plant and Animal Tissues
import PATissuesTheory from './Biology/Class9/PATissues/patissues_theory';
import PATissuesProcedure from './Biology/Class9/PATissues/patissues_procedure';
import PATissuesAnimation from './Biology/Class9/PATissues/patissues_animation';
import PATissuesSimulator from './Biology/Class9/PATissues/patissues_simulator';
import PATissuesResource from './Biology/Class9/PATissues/patissues_resources';
import PATissuesVideo from './Biology/Class9/PATissues/patissues_video';

//Detection of Starch in Food Samples
import StarchTheory from './Biology/Class9/Starch/starch_theory';
import StarchProcedure from './Biology/Class9/Starch/starch_procedure';
import StarchAnimation from './Biology/Class9/Starch/starch_animation';
import StarchSimulator from './Biology/Class9/Starch/starch_simulator';
import StarchResource from './Biology/Class9/Starch/starch_resources';
import StarchVideo from './Biology/Class9/Starch/starch_video';

//Life Cycle of a Mosquito
import MosquitoTheory from './Biology/Class9/Mosquito/mosquito_theory';
// import MosquitoProcedure from './Biology/Class9/Mosquito/mosquito_procedure';
import MosquitoAnimation from './Biology/Class9/Mosquito/mosquito_animation';
// import MosquitoSimulator from './Biology/Class9/Mosquito/mosquito_simulator';
import MosquitoResource from './Biology/Class9/Mosquito/mosquito_resources';
import MosquitoVideo from './Biology/Class9/Mosquito/mosquito_video';

//Monocot and Dicot Plants
import MDPlantsTheory from './Biology/Class9/MDPlants/mdplants_theory';
import MDPlantsProcedure from './Biology/Class9/MDPlants/mdplants_procedure';
// import MDPlantsAnimation from './Biology/Class9/MDPlants/mdplants_animation';
import MDPlantsSimulator from './Biology/Class9/MDPlants/mdplants_simulator';
import MDPlantsResource from './Biology/Class9/MDPlants/mdplants_resources';
import MDPlantsVideo from './Biology/Class9/MDPlants/mdplants_video';

//Characteristics of Plants
import CPlantsTheory from './Biology/Class9/CPlants/cplants_theory';
// import CPlantsProcedure from './Biology/Class9/CPlants/cplants_procedure';
// import CPlantsAnimation from './Biology/Class9/CPlants/cplants_animation';
// import CPlantsSimulator from './Biology/Class9/CPlants/cplants_simulator';
import CPlantsResource from './Biology/Class9/CPlants/cplants_resources';
import CPlantsVideo from './Biology/Class9/CPlants/cplants_video';

//sphere

import SphereTheory from './Maths/Class10/Sphere/sphere_theory';
import SphereProcedure from './Maths/Class10/Sphere/sphere_procedure';
import SphereAnimation from './Maths/Class10/Sphere/sphere_animation';
import SphereSimulator from './Maths/Class10/Sphere/sphere_simulator';
import SphereVideo from './Maths/Class10/Sphere/sphere_video';
import SphereResource from './Maths/Class10/Sphere/sphere_resources';

//surface

import SurfaceTheory from './Maths/Class10/Surface/surface_theory';
import SurfaceProcedure from './Maths/Class10/Surface/surface_procedure';
import SurfaceAnimation from './Maths/Class10/Surface/surface_animation';
import SurfaceSimulator from './Maths/Class10/Surface/surface_simulator';
import SurfaceVideo from './Maths/Class10/Surface/surface_video';
import SurfaceResource from './Maths/Class10/Surface/surface_resources';

//Angle at the centre of a circle by an arc

import ArcCircleTheory from './Maths/Class10/ArcCircle/arccircle_theory';
import ArcCircleProcedure from './Maths/Class10/ArcCircle/arccircle_procedure';
import ArcCircleAnimation from './Maths/Class10/ArcCircle/arccircle_animation';
import ArcCircleSimulator from './Maths/Class10/ArcCircle/arccircle_simulator';
// import ArcCircleVideo from './Maths/Class10/ArcCircle/arccircle_video';
import ArcCircleResource from './Maths/Class10/ArcCircle/arccircle_resources';

//Volume of right circular cone

import CircularConeTheory from './Maths/Class10/CircularCone/circularcone_theory';
import CircularConeProcedure from './Maths/Class10/CircularCone/circularcone_procedure';
// import CircularConeAnimation from './Maths/Class10/CircularCone/circularcone_animation';
import CircularConeSimulator from './Maths/Class10/CircularCone/circularcone_simulator';
// import CircularConeVideo from './Maths/Class10/CircularCone/circularcone_video';
import CircularConeResource from './Maths/Class10/CircularCone/circularcone_resources';

//Pythagoras theorem

import PythagorasTheory from './Maths/Class10/Pythagoras/pythagoras_theory';
import PythagorasProcedure from './Maths/Class10/Pythagoras/pythagoras_procedure';
import PythagorasAnimation from './Maths/Class10/Pythagoras/pythagoras_animation';
import PythagorasSimulator from './Maths/Class10/Pythagoras/pythagoras_simulator';
// import PythagorasVideo from './Maths/Class10/Pythagoras/pythagoras_video';
import PythagorasResource from './Maths/Class10/Pythagoras/pythagoras_resources';

//Surface area of a cylinder

import CylinderTheory from './Maths/Class10/Cylinder/cylinder_theory';
import CylinderProcedure from './Maths/Class10/Cylinder/cylinder_procedure';
import CylinderAnimation from './Maths/Class10/Cylinder/cylinder_animation';
import CylinderSimulator from './Maths/Class10/Cylinder/cylinder_simulator';
// import CylinderVideo from './Maths/Class10/Cylinder/cylinder_video';
import CylinderResource from './Maths/Class10/Cylinder/cylinder_resources';

//Volume of right circular cylinder

import CircleCylinderTheory from './Maths/Class10/CircleCylinder/circlecylinder_theory';
import CircleCylinderProcedure from './Maths/Class10/CircleCylinder/circlecylinder_procedure';
import CircleCylinderAnimation from './Maths/Class10/CircleCylinder/circlecylinder_animation';
import CircleCylinderSimulator from './Maths/Class10/CircleCylinder/circlecylinder_simulator';
// import CircleCylinderVideo from './Maths/Class10/CircleCylinder/circlecylinder_video';
import CircleCylinderResource from './Maths/Class10/CircleCylinder/circlecylinder_resources';

//Tangents drawn from an external point

import TangentsTheory from './Maths/Class10/Tangents/tangents_theory';
import TangentsProcedure from './Maths/Class10/Tangents/tangents_procedure';
import TangentsAnimation from './Maths/Class10/Tangents/tangents_animation';
import TangentsSimulator from './Maths/Class10/Tangents/tangents_simulator';
// import TangentsVideo from './Maths/Class10/Tangents/tangents_video';
import TangentsResource from './Maths/Class10/Tangents/tangents_resources';

//Arithmetic Progression

import APTheory from './Maths/Class10/AP/ap_theory';
import APProcedure from './Maths/Class10/AP/ap_procedure';
// import APAnimation from './Maths/Class10/AP/ap_animation';
import APSimulator from './Maths/Class10/AP/ap_simulator';
// import APVideo from './Maths/Class10/AP/ap_video';
import APResource from './Maths/Class10/AP/ap_resources';

//Angles in the Same Segment

import SegmentTheory from './Maths/Class10/Segment/segment_theory';
import SegmentProcedure from './Maths/Class10/Segment/segment_procedure';
import SegmentAnimation from './Maths/Class10/Segment/segment_animation';
import SegmentSimulator from './Maths/Class10/Segment/segment_simulator';
// import SegmentVideo from './Maths/Class10/Segment/segment_video';
import SegmentResource from './Maths/Class10/Segment/segment_resources';

//Right Circular Cylinder

import RightCylinderTheory from './Maths/Class10/RightCylinder/rightcylinder_theory';
import RightCylinderProcedure from './Maths/Class10/RightCylinder/rightcylinder_procedure';
import RightCylinderAnimation from './Maths/Class10/RightCylinder/rightcylinder_animation';
import RightCylinderSimulator from './Maths/Class10/RightCylinder/rightcylinder_simulator';
// import RightCylinderVideo from './Maths/Class10/RightCylinder/rightcylinder_video';
// import RightCylinderResource from './Maths/Class10/RightCylinder/rightcylinder_resources';

//Right Circular Cone

import RightConeTheory from './Maths/Class10/RightCone/rightcone_theory';
import RightConeProcedure from './Maths/Class10/RightCone/rightcone_procedure';
import RightConeAnimation from './Maths/Class10/RightCone/rightcone_animation';
import RightConeSimulator from './Maths/Class10/RightCone/rightcone_simulator';
// import RightConeVideo from './Maths/Class10/RightCone/rightcone_video';
// import RightConeResource from './Maths/Class10/RightCone/rightcone_resources';

//midpoint

import MidPointTheory from './Maths/Class9/MidPoint/midPoint_theory';
import MidPointProcedure from './Maths/Class9/MidPoint/midPoint_procedure';
import MidPointAnimation from './Maths/Class9/MidPoint/midPoint_animation';
import MidPointSimulator from './Maths/Class9/MidPoint/midPoint_simulator';
import MidPointVideo from './Maths/Class9/MidPoint/midPoint_video';
import MidPointResource from './Maths/Class9/MidPoint/midPoint_resources';

//Triangle

import TriangleTheory from './Maths/Class9/Triangle/triangle_theory';
import TriangleProcedure from './Maths/Class9/Triangle/triangle_procedure';
import TriangleAnimation from './Maths/Class9/Triangle/triangle_animation';
import TriangleSimulator from './Maths/Class9/Triangle/triangle_simulator';
import TriangleVideo from './Maths/Class9/Triangle/triangle_video';
import TriangleResource from './Maths/Class9/Triangle/triangle_resources';

//Area of Trapezium

import TrapeziumTheory from './Maths/Class9/Trapezium/trapezium_theory';
import TrapeziumProcedure from './Maths/Class9/Trapezium/trapezium_procedure';
import TrapeziumAnimation from './Maths/Class9/Trapezium/trapezium_animation';
import TrapeziumSimulator from './Maths/Class9/Trapezium/trapezium_simulator';
// import TrapeziumVideo from './Maths/Class9/Trapezium/trapezium_video';
import TrapeziumResource from './Maths/Class9/Trapezium/trapezium_resources';

//Area of Rhombus

import RhombusTheory from './Maths/Class9/Rhombus/rhombus_theory';
import RhombusProcedure from './Maths/Class9/Rhombus/rhombus_procedure';
import RhombusAnimation from './Maths/Class9/Rhombus/rhombus_animation';
import RhombusSimulator from './Maths/Class9/Rhombus/rhombus_simulator';
// import RhombusVideo from './Maths/Class9/Rhombus/rhombus_video';
import RhombusResource from './Maths/Class9/Rhombus/rhombus_resources';

//Area of Parallelogram

import AParallelogramTheory from './Maths/Class9/Parallelogram/parallelogram_theory';
import AParallelogramProcedure from './Maths/Class9/Parallelogram/parallelogram_procedure';
import AParallelogramAnimation from './Maths/Class9/Parallelogram/parallelogram_animation';
import AParallelogramSimulator from './Maths/Class9/Parallelogram/parallelogram_simulator';
// import ParallelogramVideo from './Maths/Class9/Parallelogram/parallelogram_video';
import AParallelogramResource from './Maths/Class9/Parallelogram/parallelogram_resources';

//Centroid of a Triangle

import CentroidTheory from './Maths/Class9/Centroid/centroid_theory';
import CentroidProcedure from './Maths/Class9/Centroid/centroid_procedure';
import CentroidAnimation from './Maths/Class9/Centroid/centroid_animation';
import CentroidSimulator from './Maths/Class9/Centroid/centroid_simulator';
// import CentroidVideo from './Maths/Class9/Centroid/centroid_video';
import CentroidResource from './Maths/Class9/Centroid/centroid_resources';

//Circumcentre of a Triangle

import CircumcentreTheory from './Maths/Class9/Circumcentre/circumcentre_theory';
import CircumcentreProcedure from './Maths/Class9/Circumcentre/circumcentre_procedure';
import CircumcentreAnimation from './Maths/Class9/Circumcentre/circumcentre_animation';
import CircumcentreSimulator from './Maths/Class9/Circumcentre/circumcentre_simulator';
// import CircumcentreVideo from './Maths/Class9/Circumcentre/circumcentre_video';
import CircumcentreResource from './Maths/Class9/Circumcentre/circumcentre_resources';

//Incentre of a Triangle

import IncentreTheory from './Maths/Class9/Incentre/incentre_theory';
import IncentreProcedure from './Maths/Class9/Incentre/incentre_procedure';
import IncentreAnimation from './Maths/Class9/Incentre/incentre_animation';
import IncentreSimulator from './Maths/Class9/Incentre/incentre_simulator';
// import IncentreVideo from './Maths/Class9/Incentre/incentre_video';
import IncentreResource from './Maths/Class9/Incentre/incentre_resources';

//The quadrilateral formed by the mid-points of a quadrilateral

import QuadrilateralTheory from './Maths/Class9/Quadrilateral/quadrilateral_theory';
import QuadrilateralProcedure from './Maths/Class9/Quadrilateral/quadrilateral_procedure';
import QuadrilateralAnimation from './Maths/Class9/Quadrilateral/quadrilateral_animation';
import QuadrilateralSimulator from './Maths/Class9/Quadrilateral/quadrilateral_simulator';
// import QuadrilateralVideo from './Maths/Class9/Quadrilateral/quadrilateral_video';
import QuadrilateralResource from './Maths/Class9/Quadrilateral/quadrilateral_resources';

//Area of Circle

import ACircleTheory from './Maths/Class9/ACircle/acircle_theory';
import ACircleProcedure from './Maths/Class9/ACircle/acircle_procedure';
import ACircleAnimation from './Maths/Class9/ACircle/acircle_animation';
import ACircleSimulator from './Maths/Class9/ACircle/acircle_simulator';
// import ACircleVideo from './Maths/Class9/ACircle/acircle_video';
import ACircleResource from './Maths/Class9/ACircle/acircle_resources';

//Properties of Parallelogram

import PParallelogramTheory from './Maths/Class9/PParallelogram/pparallelogram_theory';
import PParallelogramProcedure from './Maths/Class9/PParallelogram/pparallelogram_procedure';
import PParallelogramAnimation from './Maths/Class9/PParallelogram/pparallelogram_animation';
import PParallelogramSimulator from './Maths/Class9/PParallelogram/pparallelogram_simulator';
// import PParallelogramVideo from './Maths/Class9/PParallelogram/pparallelogram_video';
import PParallelogramResource from './Maths/Class9/PParallelogram/pparallelogram_resources';

//Solving Simultaneous Equations

import SimultaneousEqnTheory from './Maths/Class9/SimultaneousEqn/simultaneouseqn_theory';
import SimultaneousEqnProcedure from './Maths/Class9/SimultaneousEqn/simultaneouseqn_procedure';
// import SimultaneousEqnAnimation from './Maths/Class9/SimultaneousEqn/simultaneouseqn_animation';
import SimultaneousEqnSimulator from './Maths/Class9/SimultaneousEqn/simultaneouseqn_simulator';
// import SimultaneousEqnVideo from './Maths/Class9/SimultaneousEqn/simultaneouseqn_video';
// import SimultaneousEqnResource from './Maths/Class9/SimultaneousEqn/simultaneouseqn_resources';

//Least common multiple

import LCMTheory from './Maths/Class9/LCM/lcm_theory';
import LCMProcedure from './Maths/Class9/LCM/lcm_procedure';
// import LCMAnimation from './Maths/Class9/LCM/lcm_animation';
import LCMSimulator from './Maths/Class9/LCM/lcm_simulator';
// import LCMVideo from './Maths/Class9/LCM/lcm_video';
import LCMResource from './Maths/Class9/LCM/lcm_resources';

//Prepositions
import PrepositionTheory from './English/Prepositions/LearningPrepositions/prepositions_theory';
import PrepositionMistakes from './English/Prepositions/LearningPrepositions/prepositions_mistakes';
import PrepositionResource from './English/Prepositions/LearningPrepositions/prepositions_resources';
import PrepositionProcedure from './English/Prepositions/LearningPrepositions/prepositions_procedure';

//Corrections - only one

import CorrectionsTheory from './English/Prepositions/CorrectionsOmitivity/corrections_theory';

//Learning Prepositions of Location (Picture Dictation)
import PrepPictureTheory from './English/Prepositions/PrepPicture/preppicture_theory';
import PrepPictureResource from './English/Prepositions/PrepPicture/preppicture_resources';
import PrepPictureProcedure from './English/Prepositions/PrepPicture/preppicture_procedure';

//Learning Preposition of direction
import PrepDirectionTheory from './English/Prepositions/PrepDirection/prepdirection_theory';
import PrepDirectionResource from './English/Prepositions/PrepDirection/prepdirection_resources';
import PrepDirectionProcedure from './English/Prepositions/PrepDirection/prepdirection_procedure';

//ActiveToPassive

import ActiveTheory from './English/ActivePassive/ActiveToPassive/activeToPassive_theory';
import ActiveAnimation from './English/ActivePassive/ActiveToPassive/activeToPassive_animation';
import ActiveProcedure from './English/ActivePassive/ActiveToPassive/activeToPassive_procedure';
import ActiveResource from './English/ActivePassive/ActiveToPassive/activeToPassive_resources';

//PassiveActiveTo

import PassiveTheory from './English/ActivePassive/PassiveToActive/passiveToActive_theory';
import PassiveProcedure from './English/ActivePassive/PassiveToActive/passiveToActive_procedure';
import PassiveResource from './English/ActivePassive/PassiveToActive/passiveToActive_resources';

//Tense Conversion

import TenseTheory from './English/Tenses/Tense/tense_theory';
import TenseProcedure from './English/Tenses/Tense/tense_procedure';
import TenseResource from './English/Tenses/Tense/tense_resources';

//comprehension

import ComprehensionTheory from './English/Comprehension/ImprovingComprehensionSkills/comprehension_theory';
import ComprehensionProcedure from './English/Comprehension/ImprovingComprehensionSkills/comprehension_procedure';
import ComprehensionResource from './English/Comprehension/ImprovingComprehensionSkills/comprehension_resources';

//direct

import DirectTheory from './English/DirectToIndirect/DirectClass/direct_theory';
import DirectProcedure from './English/DirectToIndirect/DirectClass/direct_procedure';
import DirectResource from './English/DirectToIndirect/DirectClass/direct_resources';

//reportSpeech

import ReportTheory from './English/DirectToIndirect/ReportedSpeech/report_theory';
import ReportProcedure from './English/DirectToIndirect/ReportedSpeech/report_procedure';
import ReportResource from './English/DirectToIndirect/ReportedSpeech/report_resources';

//Subject-Verb Agreement

import SubVerbTheory from './English/SubjectVerbAgreement/SubVerb/subverb_theory';
import SubVerbProcedure from './English/SubjectVerbAgreement/SubVerb/subverb_procedure';
import SubVerbResource from './English/SubjectVerbAgreement/SubVerb/subverb_resources';

//Singular and Plural Conversion

import SinPluTheory from './English/SingularPlural/SinPlu/sinplu_theory';
import SinPluProcedure from './English/SingularPlural/SinPlu/sinplu_procedure';
import SinPluResource from './English/SingularPlural/SinPlu/sinplu_resources';

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
          <Typography>{children}</Typography>
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
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 9px #d6e0ff',
    background: '#fff',
    marginTop: 10,
    borderRadius: 3,
    padding: '20px !important',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  subName: {
    color: '#FF8B00',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  tabs: {
    // borderRight: `1px solid`,
    // color: KenColors.primary,
  },
  selected: {
    color: '#00218D',
    // boxShadow: 'inset 3px 0px 0px #00218D',
    backgroundColor: 'none',
    // marginTop: '10px !important',
    borderTop: 'none',
    borderTopRightRadius: 'unset',
    borderBottom: 'none',
  },
  indicator: {
    boxShadow: 'none',
    backgroundColor: 'none',
    borderTopRightRadius: '25%',
  },
  tabView: {
    border: '1px solid #e6dfdf',
  },
  TabPanel: {
    background: 'white',
  },
}));

export default function SubjectContent(props) {
  const classes = useStyles();
  const [value, setValue, age] = React.useState(0);
  const [expObj, setExpObj] = React.useState({});
  const { t } = useTranslation();
  const { drawerChanges } = props;

  // const id = 'exp_12_phy_01';
  const { topicName } = props.match.params;
  const array = [
    {
      title: 'title',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          title: "Ohm's law and resistance",
        },
        {
          titleID: 'exp_12_phy_02',
          title: 'Potentiometer-Internal Resistance of a Cell',
        },
        {
          titleID: 'exp_12_phy_03',
          title: 'Potentiometer-Comparison of emf',
        },
        {
          titleID: 'exp_12_phy_04',
          title: 'Figure of Merit of a Galvanometer',
        },
        {
          titleID: 'exp_12_phy_05',
          title: 'Conversion of Galvanometer to Ammeter',
        },
        {
          titleID: 'exp_12_phy_06',
          title: 'AC Sonometer',
        },
        {
          titleID: 'exp_12_phy_07',
          title: 'Concave Mirror-Focal Length by u-v Method',
        },
        {
          titleID: 'exp_12_phy_08',
          title: 'Convex Mirror-Focal Length',
        },
        {
          titleID: 'exp_12_phy_09',
          title: 'Concave Lens-Focal Length',
        },
        {
          titleID: 'exp_12_phy_10',
          title: 'Spectrometer-Prism',
        },
        {
          titleID: 'exp_12_phy_11',
          title: 'Refractive Index of Liquid',
        },
        {
          titleID: 'exp_12_phy_12',
          title: 'Metre bridge-Resistance of a wire',
        },
        {
          titleID: 'exp_12_phy_13',
          title: 'MetreBridge-Law of Combination of resistors',
        },
        {
          titleID: 'exp_12_phy_14',
          title: 'Diode Characteristics',
        },
        {
          titleID: 'exp_12_phy_15',
          title: 'Zener Diode',
        },
        {
          titleID: 'exp_12_phy_16',
          title: 'Transistor Characteristics',
        },
        {
          titleID: 'exp_11_phy_01',
          title: 'Screw Gauge',
        },
        {
          titleID: 'exp_11_phy_02',
          title: 'Vernier Calipers',
        },
        {
          titleID: 'exp_11_phy_03',
          title: 'Simple Pendulum',
        },
        {
          titleID: 'exp_11_phy_04',
          title: 'Beam Balance',
        },
        {
          titleID: 'exp_11_phy_05',
          title: 'Parallelogram Law of Vectors',
        },
        {
          titleID: 'exp_11_phy_06',
          title: 'Spherometer',
        },
        {
          titleID: 'exp_11_phy_07',
          title: 'Friction',
        },
        {
          titleID: 'exp_11_phy_08',
          title: 'Helical Spring',
        },
        {
          titleID: 'exp_11_phy_09',
          title: "Viscosity of a liquid - Stoke's method",
        },
        {
          titleID: 'exp_11_phy_10',
          title: 'Inclined Plane',
        },
        {
          titleID: 'exp_11_phy_11',
          title: "Boyle's Law",
        },
        {
          titleID: 'exp_11_phy_12',
          title: 'Surface Tension',
        },
        {
          titleID: 'exp_11_phy_13',
          title: "Young's Modulus",
        },
        {
          titleID: 'exp_11_phy_14',
          title: 'Resonance Column',
        },
        {
          titleID: 'exp_11_phy_15',
          title: 'Sonometer',
        },
        {
          titleID: 'exp_11_phy_16',
          title: "Newton's Law of Cooling",
        },
        {
          titleID: 'exp_10_phy_01',
          title: 'Equivalent Resistance of Resistors (Series)',
        },
        {
          titleID: 'exp_10_phy_02',
          title: 'Equivalent Resistance of Resistors (Parallel)',
        },
        {
          titleID: 'exp_10_phy_03',
          title: 'To find focal length of a Concave Mirror',
        },
        {
          titleID: 'exp_10_phy_04',
          title: "Verification of Ohm's Law",
        },
        {
          titleID: 'exp_10_phy_05',
          title: 'To study the field lines formed around a bar magnet',
        },
        {
          titleID: 'exp_10_phy_06',
          title: "Verification of Hooke's Law",
        },
        {
          titleID: 'exp_10_phy_07',
          title: 'Force on a Current Carrying Conductor in a Magnetic Field',
        },
        {
          titleID: 'exp_10_phy_08',
          title: 'Electromagnetic Induction',
        },
        {
          titleID: 'exp_10_phy_09',
          title: 'To study refraction of light in rectangular glass slab',
        },
        {
          titleID: 'exp_10_phy_10',
          title: 'To study reflection in concave mirror',
        },
        {
          titleID: 'exp_10_phy_11',
          title: "Ohm's law and resistance",
        },
        {
          titleID: 'exp_10_phy_12',
          title: 'The magnetic field lines around current carrying solenoid',
        },
        {
          titleID: 'exp_10_phy_13',
          title: 'Magnetic field lines around current carrying conductor',
        },
        {
          titleID: 'exp_9_phy_01',
          title: 'Bell Jar Experiment',
        },
        {
          titleID: 'exp_9_phy_02',
          title: 'Force Required to Move a Wooden Block on a Horizontal Table',
        },
        {
          titleID: 'exp_9_phy_03',
          title: "Newton's Third law of Motion",
        },
        {
          titleID: 'exp_9_phy_04',
          title: 'Pressure Exerted by a Solid Iron Cuboid on Sand',
        },
        {
          titleID: 'exp_9_phy_05',
          title: 'Verification of Archimedes Principle',
        },
        {
          titleID: 'exp_9_phy_06',
          title: 'Laws of Reflection of Sound',
        },
        {
          titleID: 'exp_9_phy_07',
          title: 'Determination of Density of Solid',
        },
        {
          titleID: 'exp_9_phy_08',
          title: "Newton's Second Law",
        },
        {
          titleID: 'exp_9_phy_09',
          title: 'Velocity of a Pulse Propagated Through a Slinky',
        },
        {
          titleID: 'exp_12_che_01',
          title: 'Determination of EMF of a Cell',
        },
        {
          titleID: 'exp_12_che_02',
          title: 'Determination of concentration of KMnO₄ solution',
        },
        {
          titleID: 'exp_12_che_03',
          title:
            'Kinetic Study on the Reaction between Iodide Ions and Hydrogen Peroxide',
        },
        {
          titleID: 'exp_12_che_04',
          title:
            'Kinetic Study on the Reaction between Potassium Iodate and Sodium Sulphite',
        },
        {
          titleID: 'exp_12_che_05',
          title: 'Preparation of Inorganic Compounds',
        },
        {
          titleID: 'exp_12_che_06',
          title: 'Qualitative Analysis of Oils & Fats',
        },
        {
          titleID: 'exp_12_che_07',
          title: 'Qualitative Analysis of Proteins',
        },
        {
          titleID: 'exp_12_che_08',
          title: 'Paper Chromatography',
        },
        {
          titleID: 'exp_12_che_09',
          title:
            'Kinetics Study on the Reaction between Sodium Thiosulphate and Hydrochloric Acid',
        },
        {
          titleID: 'exp_12_che_10',
          title: 'Preparation of Organic Compounds',
        },
        {
          titleID: 'exp_12_che_11',
          title: 'Qualitative Analysis of Carbohydrates',
        },
        {
          titleID: 'exp_12_che_12',
          title: 'Effectiveness of Different Common Oils in Forming Emulsions',
        },
        {
          titleID: 'exp_12_che_13',
          title: 'Preparation of Lyophilic and Lyophobic Sols',
        },
        {
          titleID: 'exp_12_che_14',
          title: 'Tests for the functional groups',
        },
        {
          titleID: 'exp_12_che_15',
          title: 'Thermochemistry',
        },
        {
          titleID: 'exp_11_che_01',
          title: 'Melting point of an Organic compound',
        },
        {
          titleID: 'exp_11_che_02',
          title: 'Boiling point of Organic compound',
        },
        {
          titleID: 'exp_11_che_03',
          title: 'pH Determination',
        },
        {
          titleID: 'exp_11_che_04',
          title: 'Chemical equilibrium',
        },
        {
          titleID: 'exp_11_che_05',
          title: 'Quantitative Estimation',
        },
        {
          titleID: 'exp_11_che_06',
          title: 'Purification of Impure samples by Crystallisation',
        },
        {
          titleID: 'exp_11_che_07',
          title: "Detection of Elements: Lassaigne's Test",
        },
        {
          titleID: 'exp_11_che_08',
          title: 'Basic Laboratory Techniques',
        },
        {
          titleID: 'exp_11_che_09',
          title: 'Qualitative Analysis of Anions',
        },
        {
          titleID: 'exp_11_che_10',
          title: 'Qualitative Analysis of Cations',
        },
        {
          titleID: 'exp_10_che_02',
          title: 'Combination Reaction',
        },
        {
          titleID: 'exp_10_che_01',
          title: 'Single Displacement Reaction',
        },
        {
          titleID: 'exp_10_che_03',
          title:
            'Determine pH with pH indicator strips / universal indicator solution',
        },
        {
          titleID: 'exp_10_che_04',
          title: 'Decomposition Reaction',
        },
        {
          titleID: 'exp_10_che_05',
          title: 'Properties of Acids and Bases',
        },
        {
          titleID: 'exp_10_che_06',
          title: 'Double Displacement Reaction',
        },
        {
          titleID: 'exp_10_che_07',
          title: 'Properties of Acetic Acid (Ethanoic Acid)',
        },
        {
          titleID: 'exp_10_che_08',
          title:
            'To Study The Relative Reactivity of Metals Using Salt Solutions',
        },
        {
          titleID: 'exp_10_che_09',
          title: 'Cleaning Capacity of Soap with Hard and Soft Water',
        },
        {
          titleID: 'exp_10_che_10',
          title: 'Saponification-The process of Making Soap',
        },
        {
          titleID: 'exp_9_che_01',
          title: 'Chemical-Reactions',
        },
        {
          titleID: 'exp_9_che_02',
          content: 'Melting Point of Ice',
        },
        {
          titleID: 'exp_9_che_03',
          title: 'Distinguish Between Mixture and Compound',
        },
        {
          titleID: 'exp_9_che_04',
          title: 'Separation of Components of a Mixture',
        },
        {
          titleID: 'exp_9_che_05',
          title: 'Distinguishing Between Solutions',
        },
        {
          titleID: 'exp_9_che_06',
          title: 'Separation of Mixtures Using Different Techniques',
        },
        {
          titleID: 'exp_9_che_07',
          title: 'Boiling Point of Water',
        },
        {
          titleID: 'exp_9_che_08',
          title: "Rutherford's Scattering Experiment",
        },
        {
          titleID: 'exp_9_che_09',
          title: 'Exothermic and Endothermic Reactions',
        },
        {
          titleID: 'exp_9_che_10',
          title: 'Modern Periodic Table',
        },
        {
          titleID: 'exp_9_che_11',
          title: 'The Law of Conservation of Mass in a Chemical Reaction',
        },
        {
          titleID: 'exp_12_bio_01',
          title: 'Study of Pollen Germination',
        },
        {
          titleID: 'exp_12_bio_02',
          title: 'Studies on Turbidity, pH and Microbial Presence in Water',
        },
        {
          titleID: 'exp_12_bio_03',
          title: 'Study of Physical Properties of Soil',
        },
        {
          titleID: 'exp_12_bio_04',
          title: 'Study of pollutants in Air',
        },
        {
          titleID: 'exp_12_bio_05',
          title: 'Study of plant population density by quadrat method',
        },
        {
          titleID: 'exp_12_bio_06',
          title: 'Study of plant population frequency by quadrat method',
        },
        {
          titleID: 'exp_12_bio_07',
          title: 'Study Mitosis in Onion Root Tip',
        },
        {
          titleID: 'exp_12_bio_08',
          title: 'Action of Salivary Amylase on Starch',
        },
        {
          titleID: 'exp_11_bio_01',
          title: 'Study of Osmosis',
        },
        {
          titleID: 'exp_11_bio_02',
          title: 'Rate of Transpiration',
        },
        {
          titleID: 'exp_11_bio_03',
          title: 'Study of Plasmolysis',
        },
        {
          titleID: 'exp_11_bio_04',
          title: 'Study of distribution of stomata',
        },
        {
          titleID: 'exp_11_bio_05',
          title: 'Paper Chromatography',
        },
        {
          titleID: 'exp_11_bio_06',
          title: 'Characteristics of Flowers',
        },
        {
          titleID: 'exp_11_bio_07',
          title: 'Characteristics of Dicot and Monocot Stem and Root',
        },
        {
          titleID: 'exp_11_bio_08',
          title: 'Rate of Respiration',
        },
        {
          titleID: 'exp_11_bio_09',
          title: 'Detection of Sugar in Urine',
        },
        {
          titleID: 'exp_11_bio_10',
          title: 'Detection of Urea in Urine',
        },
        {
          titleID: 'exp_11_bio_11',
          title: 'Detection of Albumin in Urine',
        },
        {
          titleID: 'exp_11_bio_12',
          title: 'Detection of Bile salts in Urine',
        },
        {
          titleID: 'exp_11_bio_13',
          title: 'Detection of Carbohydrates, Proteins and Fats',
        },

        {
          titleID: 'exp_10_bio_02',
          title: 'Asexual Reproduction in Amoeba and Yeast',
        },
        {
          titleID: 'exp_10_bio_01',
          title: 'Importance of Light in Photosynthesis',
        },
        {
          titleID: 'exp_10_bio_03',
          title: 'Embryo of Dicot Seeds',
        },
        {
          titleID: 'exp_10_bio_04',
          title: 'Role of Carbon Dioxide During Respiration',
        },
        {
          titleID: 'exp_10_bio_05',
          title: 'Demonstration of Stomata on a Leaf Peel',
        },
        {
          titleID: 'exp_10_bio_06',
          title: 'Homology and Analogy',
        },
        {
          titleID: 'exp_9_bio_02',
          title: 'Detection of adulterant in Dal',
        },
        {
          titleID: 'exp_9_bio_01',
          title: 'Onion and Cheek Cells',
        },
        {
          titleID: 'exp_9_bio_03',
          title: 'Adaptation in Animals',
        },
        {
          titleID: 'exp_9_bio_04',
          title: 'Imbibition by Raisins',
        },
        {
          titleID: 'exp_9_bio_05',
          title: 'Plant and Animal Tissues',
        },
        {
          titleID: 'exp_9_bio_06',
          title: 'Detection of Starch in Food Samples',
        },
        {
          titleID: 'exp_9_bio_07',
          title: 'Life Cycle of a Mosquito',
        },
        {
          titleID: 'exp_9_bio_08',
          title: 'Monocot and Dicot Plants',
        },
        {
          titleID: 'exp_9_bio_09',
          title: 'Characteristics of Plants',
        },
        {
          titleID: 'exp_10_mat_01',
          title: 'Volume of a sphere',
        },
        {
          titleID: 'exp_10_mat_02',
          title: 'Surface area of a sphere',
        },
        {
          titleID: 'exp_10_mat_03',
          title: 'Angle at the centre of a circle by an arc',
        },
        {
          titleID: 'exp_10_mat_04',
          title: 'Volume of right circular cone',
        },
        {
          titleID: 'exp_10_mat_05',
          title: 'Pythagoras theorem',
        },
        {
          titleID: 'exp_10_mat_06',
          title: 'Surface area of a cylinder',
        },
        {
          titleID: 'exp_10_mat_07',
          title: 'Volume of right circular cylinder',
        },
        {
          titleID: 'exp_10_mat_08',
          title: 'Tangents drawn from an external point',
        },
        {
          titleID: 'exp_10_mat_09',
          title: 'Arithmetic Progression',
        },
        {
          titleID: 'exp_10_mat_10',
          title: 'Angles in the Same Segment',
        },
        {
          titleID: 'exp_10_mat_11',
          title: 'Right Circular Cylinder',
        },
        {
          titleID: 'exp_10_mat_12',
          title: 'Right Circular Cone',
        },

        {
          titleID: 'exp_9_mat_01',
          title: 'Mid Point Theorem',
        },
        {
          titleID: 'exp_9_mat_02',
          title: 'Area of Triangle',
        },
        {
          titleID: 'exp_9_mat_03',
          title: 'Area of Trapezium',
        },
        {
          titleID: 'exp_9_mat_04',
          title: 'Area of Rhombus',
        },
        {
          titleID: 'exp_9_mat_05',
          title: 'Area of Parallelogram',
        },
        {
          titleID: 'exp_9_mat_06',
          title: 'Centroid of a Triangle',
        },
        {
          titleID: 'exp_9_mat_07',
          title: 'Circumcentre of a Triangle',
        },
        {
          titleID: 'exp_9_mat_08',
          title: 'Incentre of a Triangle',
        },
        {
          titleID: 'exp_9_mat_09',
          title:
            'The quadrilateral formed by the mid-points of a quadrilateral',
        },
        {
          titleID: 'exp_9_mat_10',
          title: 'Area of Circle',
        },
        {
          titleID: 'exp_9_mat_11',
          title: 'Properties of Parallelogram',
        },
        {
          titleID: 'exp_9_mat_12',
          title: 'Solving Simultaneous Equations',
        },
        {
          titleID: 'exp_9_mat_13',
          title: 'Least common multiple',
        },

        {
          titleID: 'pre_01',
          title: 'Learning Prepositions of Location',
        },
        {
          titleID: 'pre_02',
          title: 'Correction and Omission Activity',
        },
        {
          titleID: 'pre_03',
          title: 'Learning Prepositions of Location (Picture Dictation)',
        },
        {
          titleID: 'pre_04',
          title: 'Learning Preposition of direction',
        },
        {
          titleID: 'active_01',
          title: 'Passive to Active Voice Conversion',
        },
        {
          titleID: 'active_02',
          title: 'Active to Passive Voice Conversion',
        },
        {
          titleID: 'comp_01',
          title: 'Improving Comprehension Skills',
        },
        {
          titleID: 'direct_01',
          title: 'Direct to Indirect Speech',
        },
        {
          titleID: 'direct_02',
          title: 'Reported Speech',
        },
        {
          titleID: 'tense_01',
          title: 'Tense Conversion',
        },
        {
          titleID: 'subverb_01',
          title: 'Subject-Verb Agreement',
        },
        {
          titleID: 'sinplu_01',
          title: 'Singular to Plural Conversion',
        },
      ],
    },
    {
      title: 'Theory',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          content: <OhmsLawTheory />,
        },
        {
          titleID: 'exp_12_phy_02',
          content: <PotentiometerTheory />,
        },
        {
          titleID: 'exp_12_phy_03',
          content: <PotentiometerCellTheory />,
        },
        {
          titleID: 'exp_12_phy_04',
          content: <GalvanometerTheory />,
        },
        {
          titleID: 'exp_12_phy_05',
          content: <AmmeterTheory />,
        },
        {
          titleID: 'exp_12_phy_06',
          content: <SonometerTheory />,
        },
        {
          titleID: 'exp_12_phy_07',
          content: <ConcaveTheory />,
        },
        {
          titleID: 'exp_12_phy_08',
          content: <ConvexTheory />,
        },
        {
          titleID: 'exp_12_phy_09',
          content: <ConcaveFocalTheory />,
        },
        {
          titleID: 'exp_12_phy_10',
          content: <SpectrometerTheory />,
        },
        {
          titleID: 'exp_12_phy_11',
          content: <RefractiveTheory />,
        },
        {
          titleID: 'exp_12_phy_12',
          content: <ResistanceTheory />,
        },
        {
          titleID: 'exp_12_phy_13',
          content: <ResistorTheory />,
        },
        {
          titleID: 'exp_12_phy_14',
          content: <DiodeTheory />,
        },
        {
          titleID: 'exp_12_phy_15',
          content: <ZenerTheory />,
        },
        {
          titleID: 'exp_12_phy_16',
          content: <TransistorTheory />,
        },
        {
          titleID: 'exp_11_phy_01',
          content: <ScrewGaugeTheory />,
        },
        {
          titleID: 'exp_11_phy_02',
          content: <VernierCaliperTheory />,
        },
        {
          titleID: 'exp_11_phy_03',
          content: <PendulumTheory />,
        },
        {
          titleID: 'exp_11_phy_04',
          content: <BeamTheory />,
        },
        {
          titleID: 'exp_11_phy_05',
          content: <ParallelogramTheory />,
        },
        {
          titleID: 'exp_11_phy_06',
          content: <SpherometerTheory />,
        },
        {
          titleID: 'exp_11_phy_07',
          content: <FrictionTheory />,
        },
        {
          titleID: 'exp_11_phy_08',
          content: <SpringTheory />,
        },
        {
          titleID: 'exp_11_phy_09',
          content: <ViscosityTheory />,
        },
        {
          titleID: 'exp_11_phy_10',
          content: <InclinedPlaneTheory />,
        },
        {
          titleID: 'exp_11_phy_11',
          content: <BoyleTheory />,
        },
        {
          titleID: 'exp_11_phy_12',
          content: <SurfaceTensionTheory />,
        },
        {
          titleID: 'exp_11_phy_13',
          content: <YoungTheory />,
        },
        {
          titleID: 'exp_11_phy_14',
          content: <ResonanceTheory />,
        },
        {
          titleID: 'exp_11_phy_15',
          content: <Sonometer1Theory />,
        },
        {
          titleID: 'exp_11_phy_16',
          content: <NewtonCoolingTheory />,
        },
        {
          titleID: 'exp_10_phy_01',
          content: <ResisterSeriesTheory />,
        },
        {
          titleID: 'exp_10_phy_02',
          content: <ResisterParallelTheory />,
        },
        {
          titleID: 'exp_10_phy_03',
          content: <ConcaveMirrorTheory />,
        },
        {
          titleID: 'exp_10_phy_04',
          content: <VerifyOhmTheory />,
        },
        {
          titleID: 'exp_10_phy_05',
          content: <BarMagnetTheory />,
        },
        {
          titleID: 'exp_10_phy_06',
          content: <HookeTheory />,
        },
        {
          titleID: 'exp_10_phy_07',
          content: <Force1Theory />,
        },
        {
          titleID: 'exp_10_phy_08',
          content: <ElectroMagnetTheory />,
        },
        {
          titleID: 'exp_10_phy_09',
          content: <RefractionGlassTheory />,
        },
        {
          titleID: 'exp_10_phy_10',
          content: <ReflectionMirrorTheory />,
        },
        {
          titleID: 'exp_10_phy_11',
          content: <OhmResistanceTheory />,
        },
        {
          titleID: 'exp_10_phy_12',
          content: <SolenoidTheory />,
        },
        {
          titleID: 'exp_10_phy_13',
          content: <ConductorTheory />,
        },
        {
          titleID: 'exp_9_phy_01',
          content: <BellJarTheory />,
        },
        {
          titleID: 'exp_9_phy_02',
          content: <ForceTheory />,
        },
        {
          titleID: 'exp_9_phy_03',
          content: <NewtonThirdTheory />,
        },
        {
          titleID: 'exp_9_phy_04',
          content: <PressureTheory />,
        },
        {
          titleID: 'exp_9_phy_05',
          content: <ArchimedesTheory />,
        },
        {
          titleID: 'exp_9_phy_06',
          content: <SoundTheory />,
        },
        {
          titleID: 'exp_9_phy_07',
          content: <DensityTheory />,
        },
        {
          titleID: 'exp_9_phy_08',
          content: <NewtonSecondTheory />,
        },
        {
          titleID: 'exp_9_phy_09',
          content: <VelocityTheory />,
        },
        {
          titleID: 'exp_12_che_01',
          content: <EMFTheory />,
        },
        {
          titleID: 'exp_12_che_02',
          content: <KMNO4Theory />,
        },
        {
          titleID: 'exp_12_che_03',
          content: <HPeroxideTheory />,
        },
        {
          titleID: 'exp_12_che_04',
          content: <SSulphateTheory />,
        },
        {
          titleID: 'exp_12_che_05',
          content: <InorganicTheory />,
        },
        {
          titleID: 'exp_12_che_06',
          content: <OilTheory />,
        },
        {
          titleID: 'exp_12_che_07',
          content: <ProteinTheory />,
        },
        {
          titleID: 'exp_12_che_08',
          content: <PaperChromatographyTheory />,
        },
        {
          titleID: 'exp_12_che_09',
          content: <HCLTheory />,
        },
        {
          titleID: 'exp_12_che_10',
          content: <OrganicTheory />,
        },
        {
          titleID: 'exp_12_che_11',
          content: <CarbohydratesTheory />,
        },
        {
          titleID: 'exp_12_che_12',
          content: <EmulsionTheory />,
        },
        {
          titleID: 'exp_12_che_13',
          content: <LyphobicTheory />,
        },
        {
          titleID: 'exp_12_che_14',
          content: <FunctionalGroupsTheory />,
        },
        {
          titleID: 'exp_12_che_15',
          content: <ThermochemistryTheory />,
        },
        {
          titleID: 'exp_11_che_01',
          content: <MeltingPointTheory />,
        },
        {
          titleID: 'exp_11_che_02',
          content: <BoilingPointTheory />,
        },
        {
          titleID: 'exp_11_che_03',
          content: <PHTheory />,
        },
        {
          titleID: 'exp_11_che_04',
          content: <EquilibriumTheory />,
        },
        {
          titleID: 'exp_11_che_05',
          content: <QuantitativeTheory />,
        },
        {
          titleID: 'exp_11_che_06',
          content: <CrystallisationTheory />,
        },
        {
          titleID: 'exp_11_che_07',
          content: <LassaigneTheory />,
        },
        {
          titleID: 'exp_11_che_08',
          content: <LabTechniquesTheory />,
        },
        {
          titleID: 'exp_11_che_09',
          content: <AnionTheory />,
        },
        {
          titleID: 'exp_11_che_10',
          content: <CationTheory />,
        },
        {
          titleID: 'exp_10_che_02',
          content: <CombinationReactionTheory />,
        },
        {
          titleID: 'exp_10_che_01',
          content: <DisplacementReactionTheory />,
        },
        {
          titleID: 'exp_10_che_03',
          content: <PHStripTheory />,
        },
        {
          titleID: 'exp_10_che_04',
          content: <DecompositionTheory />,
        },
        {
          titleID: 'exp_10_che_05',
          content: <AcidBaseTheory />,
        },
        {
          titleID: 'exp_10_che_06',
          content: <DoubleDisplacementTheory />,
        },
        {
          titleID: 'exp_10_che_07',
          content: <EthanoicTheory />,
        },
        {
          titleID: 'exp_10_che_08',
          content: <SaltSolsTheory />,
        },
        {
          titleID: 'exp_10_che_09',
          content: <SoftHardTheory />,
        },
        {
          titleID: 'exp_10_che_10',
          content: <SaponificationTheory />,
        },
        {
          titleID: 'exp_9_che_01',
          content: <ChemicalReactionTheory />,
        },
        {
          titleID: 'exp_9_che_02',
          content: <MeltingPointIceTheory />,
        },
        {
          titleID: 'exp_9_che_03',
          content: <MixtureTheory />,
        },
        {
          titleID: 'exp_9_che_04',
          content: <MixtureSeparationTheory />,
        },
        {
          titleID: 'exp_9_che_05',
          content: <SolsTheory />,
        },
        {
          titleID: 'exp_9_che_06',
          content: <MixtureTechniquesTheory />,
        },
        {
          titleID: 'exp_9_che_07',
          content: <WaterTheory />,
        },
        {
          titleID: 'exp_9_che_08',
          content: <ScatterTheory />,
        },
        {
          titleID: 'exp_9_che_09',
          content: <ExothermicTheory />,
        },
        {
          titleID: 'exp_9_che_10',
          content: <PeriodicTableTheory />,
        },
        {
          titleID: 'exp_9_che_11',
          content: <ConservationTheory />,
        },
        {
          titleID: 'exp_12_bio_01',
          content: <PollenTheory />,
        },
        {
          titleID: 'exp_12_bio_02',
          content: <TurbidityTheory />,
        },
        {
          titleID: 'exp_12_bio_03',
          content: <SoilStudyTheory />,
        },
        {
          titleID: 'exp_12_bio_04',
          content: <AirStudyTheory />,
        },
        {
          titleID: 'exp_12_bio_05',
          content: <QuadratDensityTheory />,
        },
        {
          titleID: 'exp_12_bio_06',
          content: <QuadratFrequencyTheory />,
        },
        {
          titleID: 'exp_12_bio_07',
          content: <OnionTheory />,
        },
        {
          titleID: 'exp_12_bio_08',
          content: <SalivaTheory />,
        },
        {
          titleID: 'exp_11_bio_01',
          content: <OsmosisTheory />,
        },
        {
          titleID: 'exp_11_bio_02',
          content: <TranspirationTheory />,
        },
        {
          titleID: 'exp_11_bio_03',
          content: <PlasmolysisTheory />,
        },
        {
          titleID: 'exp_11_bio_04',
          content: <StomataTheory />,
        },
        {
          titleID: 'exp_11_bio_05',
          content: <PaperChromTheory />,
        },
        {
          titleID: 'exp_11_bio_06',
          content: <FlowersTheory />,
        },
        {
          titleID: 'exp_11_bio_07',
          content: <MonocotTheory />,
        },
        {
          titleID: 'exp_11_bio_08',
          content: <RespirationTheory />,
        },
        {
          titleID: 'exp_11_bio_09',
          content: <UrineTheory />,
        },
        {
          titleID: 'exp_11_bio_10',
          content: <UreaTheory />,
        },
        {
          titleID: 'exp_11_bio_11',
          content: <AlbuminTheory />,
        },
        {
          titleID: 'exp_11_bio_12',
          content: <BileTheory />,
        },
        {
          titleID: 'exp_11_bio_13',
          content: <CPFTheory />,
        },

        {
          titleID: 'exp_10_bio_02',
          content: <AmoebaTheory />,
        },
        {
          titleID: 'exp_10_bio_01',
          content: <PhotosynthesisTheory />,
        },
        {
          titleID: 'exp_10_bio_03',
          content: <DicotTheory />,
        },
        {
          titleID: 'exp_10_bio_04',
          content: <CO2Theory />,
        },
        {
          titleID: 'exp_10_bio_05',
          content: <LeafTheory />,
        },
        {
          titleID: 'exp_10_bio_06',
          content: <HomologyTheory />,
        },
        {
          titleID: 'exp_9_bio_02',
          content: <AdulternetTheory />,
        },
        {
          titleID: 'exp_9_bio_01',
          content: <CheekCellsTheory />,
        },
        {
          titleID: 'exp_9_bio_03',
          content: <AdaptationTheory />,
        },
        {
          titleID: 'exp_9_bio_04',
          content: <ImbibitionTheory />,
        },
        {
          titleID: 'exp_9_bio_05',
          content: <PATissuesTheory />,
        },
        {
          titleID: 'exp_9_bio_06',
          content: <StarchTheory />,
        },
        {
          titleID: 'exp_9_bio_07',
          content: <MosquitoTheory />,
        },
        {
          titleID: 'exp_9_bio_08',
          content: <MDPlantsTheory />,
        },
        {
          titleID: 'exp_9_bio_09',
          content: <CPlantsTheory />,
        },

        {
          titleID: 'exp_10_mat_01',
          content: <SphereTheory />,
        },
        {
          titleID: 'exp_10_mat_02',
          content: <SurfaceTheory />,
        },
        {
          titleID: 'exp_10_mat_03',
          content: <ArcCircleTheory />,
        },
        {
          titleID: 'exp_10_mat_04',
          content: <CircularConeTheory />,
        },
        {
          titleID: 'exp_10_mat_05',
          content: <PythagorasTheory />,
        },
        {
          titleID: 'exp_10_mat_06',
          content: <CylinderTheory />,
        },
        {
          titleID: 'exp_10_mat_07',
          content: <CircleCylinderTheory />,
        },
        {
          titleID: 'exp_10_mat_08',
          content: <TangentsTheory />,
        },
        {
          titleID: 'exp_10_mat_09',
          content: <APTheory />,
        },
        {
          titleID: 'exp_10_mat_10',
          content: <SegmentTheory />,
        },
        {
          titleID: 'exp_10_mat_11',
          content: <RightCylinderTheory />,
        },
        {
          titleID: 'exp_10_mat_12',
          content: <RightConeTheory />,
        },

        {
          titleID: 'exp_9_mat_01',
          content: <MidPointTheory />,
        },
        {
          titleID: 'exp_9_mat_02',
          content: <TriangleTheory />,
        },
        {
          titleID: 'exp_9_mat_03',
          content: <TrapeziumTheory />,
        },
        {
          titleID: 'exp_9_mat_04',
          content: <RhombusTheory />,
        },
        {
          titleID: 'exp_9_mat_05',
          content: <AParallelogramTheory />,
        },
        {
          titleID: 'exp_9_mat_06',
          content: <CentroidTheory />,
        },
        {
          titleID: 'exp_9_mat_07',
          content: <CircumcentreTheory />,
        },
        {
          titleID: 'exp_9_mat_08',
          content: <IncentreTheory />,
        },
        {
          titleID: 'exp_9_mat_09',
          content: <QuadrilateralTheory />,
        },
        {
          titleID: 'exp_9_mat_10',
          content: <ACircleTheory />,
        },
        {
          titleID: 'exp_9_mat_11',
          content: <PParallelogramTheory />,
        },
        {
          titleID: 'exp_9_mat_12',
          content: <SimultaneousEqnTheory />,
        },
        {
          titleID: 'exp_9_mat_13',
          content: <LCMTheory />,
        },

        {
          titleID: 'pre_01',
          content: <PrepositionTheory />,
        },
        {
          titleID: 'pre_02',
          content: <CorrectionsTheory />,
        },
        {
          titleID: 'pre_03',
          content: <PrepPictureTheory />,
        },
        {
          titleID: 'pre_04',
          content: <PrepDirectionTheory />,
        },
        {
          titleID: 'active_02',
          content: <ActiveTheory />,
        },
        {
          titleID: 'active_01',
          content: <PassiveTheory />,
        },
        {
          titleID: 'comp_01',
          content: <ComprehensionTheory />,
        },
        {
          titleID: 'tense_01',
          content: <TenseTheory />,
        },
        {
          titleID: 'direct_01',
          content: <DirectTheory />,
        },
        {
          titleID: 'direct_02',
          content: <ReportTheory />,
        },
        {
          titleID: 'subverb_01',
          content: <SubVerbTheory />,
        },
        {
          titleID: 'sinplu_01',
          content: <SinPluTheory />,
        },
      ],
    },
    {
      title: 'Procedure',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          content: <OhmsLawProcedure />,
        },
        {
          titleID: 'exp_12_phy_02',
          content: <PotentiometerProcedure />,
        },
        {
          titleID: 'exp_12_phy_03',
          content: <PotentiometerCellProcedure />,
        },
        {
          titleID: 'exp_12_phy_04',
          content: <GalvanometerProcedure />,
        },
        {
          titleID: 'exp_12_phy_05',
          content: <AmmeterProcedure />,
        },
        {
          titleID: 'exp_12_phy_06',
          content: <SonometerProcedure />,
        },
        {
          titleID: 'exp_12_phy_07',
          content: <ConcaveProcedure />,
        },
        {
          titleID: 'exp_12_phy_08',
          content: <ConvexProcedure />,
        },
        {
          titleID: 'exp_12_phy_09',
          content: <ConcaveFocalProcedure />,
        },
        {
          titleID: 'exp_12_phy_10',
          content: <SpectrometerProcedure />,
        },
        {
          titleID: 'exp_12_phy_11',
          content: <RefractiveProcedure />,
        },
        {
          titleID: 'exp_12_phy_12',
          content: <ResistanceProcedure />,
        },
        {
          titleID: 'exp_12_phy_13',
          content: <ResistorProcedure />,
        },
        {
          titleID: 'exp_12_phy_14',
          content: <DiodeProcedure />,
        },
        {
          titleID: 'exp_12_phy_15',
          content: <ZenerProcedure />,
        },
        {
          titleID: 'exp_12_phy_16',
          content: <TransistorProcedure />,
        },
        {
          titleID: 'exp_11_phy_01',
          content: <ScrewGaugeProcedure />,
        },
        {
          titleID: 'exp_11_phy_02',
          content: <VernierCaliperProcedure />,
        },
        {
          titleID: 'exp_11_phy_03',
          content: <PendulumProcedure />,
        },
        {
          titleID: 'exp_11_phy_04',
          content: <BeamProcedure />,
        },
        {
          titleID: 'exp_11_phy_05',
          content: <ParallelogramProcedure />,
        },
        {
          titleID: 'exp_11_phy_06',
          content: <SpherometerProcedure />,
        },
        {
          titleID: 'exp_11_phy_07',
          content: <FrictionProcedure />,
        },
        {
          titleID: 'exp_11_phy_08',
          content: <SpringProcedure />,
        },
        {
          titleID: 'exp_11_phy_09',
          content: <ViscosityProcedure />,
        },
        {
          titleID: 'exp_11_phy_10',
          content: <InclinedPlaneProcedure />,
        },
        {
          titleID: 'exp_11_phy_11',
          content: <BoyleProcedure />,
        },
        {
          titleID: 'exp_11_phy_12',
          content: <SurfaceTensionProcedure />,
        },
        {
          titleID: 'exp_11_phy_13',
          content: <YoungProcedure />,
        },
        {
          titleID: 'exp_11_phy_14',
          content: <ResonanceProcedure />,
        },
        {
          titleID: 'exp_11_phy_15',
          content: <Sonometer1Procedure />,
        },
        {
          titleID: 'exp_11_phy_16',
          content: <NewtonCoolingProcedure />,
        },
        {
          titleID: 'exp_10_phy_01',
          content: <ResisterSeriesProcedure />,
        },
        {
          titleID: 'exp_10_phy_02',
          content: <ResisterParallelProcedure />,
        },
        {
          titleID: 'exp_10_phy_03',
          content: <ConcaveMirrorProcedure />,
        },
        {
          titleID: 'exp_10_phy_04',
          content: <VerifyOhmProcedure />,
        },
        {
          titleID: 'exp_10_phy_05',
          content: <BarMagnetProcedure />,
        },
        {
          titleID: 'exp_10_phy_06',
          content: <HookeProcedure />,
        },
        {
          titleID: 'exp_10_phy_07',
          content: <Force1Procedure />,
        },
        {
          titleID: 'exp_10_phy_08',
          content: <ElectroMagnetProcedure />,
        },
        {
          titleID: 'exp_10_phy_09',
          content: <RefractionGlassProcedure />,
        },
        {
          titleID: 'exp_10_phy_10',
          content: <ReflectionMirrorProcedure />,
        },
        {
          titleID: 'exp_10_phy_11',
          content: <OhmResistanceProcedure />,
        },
        {
          titleID: 'exp_10_phy_12',
          content: <SolenoidProcedure />,
        },
        {
          titleID: 'exp_10_phy_13',
          content: <ConductorProcedure />,
        },
        {
          titleID: 'exp_9_phy_01',
          content: <BellJarProcedure />,
        },
        {
          titleID: 'exp_9_phy_02',
          content: <ForceProcedure />,
        },
        {
          titleID: 'exp_9_phy_03',
          content: <NewtonThirdProcedure />,
        },
        {
          titleID: 'exp_9_phy_04',
          content: <PressureProcedure />,
        },
        {
          titleID: 'exp_9_phy_05',
          content: <ArchimedesProcedure />,
        },
        {
          titleID: 'exp_9_phy_06',
          content: <SoundProcedure />,
        },
        {
          titleID: 'exp_9_phy_07',
          content: <DensityProcedure />,
        },
        {
          titleID: 'exp_9_phy_08',
          content: <NewtonSecondProcedure />,
        },
        {
          titleID: 'exp_9_phy_09',
          content: <VelocityProcedure />,
        },
        {
          titleID: 'exp_12_che_01',
          content: <EMFProcedure />,
        },
        {
          titleID: 'exp_12_che_02',
          content: <KMNO4Procedure />,
        },
        {
          titleID: 'exp_12_che_03',
          content: <HPeroxideProcedure />,
        },
        {
          titleID: 'exp_12_che_04',
          content: <SSulphateProcedure />,
        },
        {
          titleID: 'exp_12_che_05',
          content: <InorganicProcedure />,
        },
        {
          titleID: 'exp_12_che_06',
          content: <OilProcedure />,
        },
        {
          titleID: 'exp_12_che_07',
          content: <ProteinProcedure />,
        },
        {
          titleID: 'exp_12_che_08',
          content: <PaperChromatographyProcedure />,
        },
        {
          titleID: 'exp_12_che_09',
          content: <HCLProcedure />,
        },
        {
          titleID: 'exp_12_che_10',
          content: <OrganicProcedure />,
        },
        {
          titleID: 'exp_12_che_11',
          content: <CarbohydratesProcedure />,
        },
        {
          titleID: 'exp_12_che_12',
          content: <EmulsionProcedure />,
        },
        {
          titleID: 'exp_12_che_13',
          content: <LyphobicProcedure />,
        },
        {
          titleID: 'exp_12_che_14',
          content: <FunctionalGroupsProcedure />,
        },
        {
          titleID: 'exp_12_che_15',
          content: <ThermochemistryProcedure />,
        },
        {
          titleID: 'exp_11_che_01',
          content: <MeltingPointProcedure />,
        },
        {
          titleID: 'exp_11_che_02',
          content: <BoilingPointProcedure />,
        },
        {
          titleID: 'exp_11_che_03',
          content: <PHProcedure />,
        },
        {
          titleID: 'exp_11_che_04',
          content: <EquilibriumProcedure />,
        },
        {
          titleID: 'exp_11_che_05',
          content: <QuantitativeProcedure />,
        },
        {
          titleID: 'exp_11_che_06',
          content: <CrystallisationProcedure />,
        },
        {
          titleID: 'exp_11_che_07',
          content: <LassaigneProcedure />,
        },
        {
          titleID: 'exp_11_che_08',
          content: <LabTechniquesProcedure />,
        },
        {
          titleID: 'exp_11_che_09',
          content: <AnionProcedure />,
        },
        {
          titleID: 'exp_11_che_10',
          content: <CationProcedure />,
        },
        {
          titleID: 'exp_10_che_02',
          content: <CombinationReactionProcedure />,
        },
        {
          titleID: 'exp_10_che_01',
          content: <DisplacementReactionProcedure />,
        },
        {
          titleID: 'exp_10_che_03',
          content: <PHStripProcedure />,
        },
        {
          titleID: 'exp_10_che_04',
          content: <DecompositionProcedure />,
        },
        {
          titleID: 'exp_10_che_05',
          content: <AcidBaseProcedure />,
        },
        {
          titleID: 'exp_10_che_06',
          content: <DoubleDisplacementProcedure />,
        },
        {
          titleID: 'exp_10_che_07',
          content: <EthanoicProcedure />,
        },
        {
          titleID: 'exp_10_che_08',
          content: <SaltSolsProcedure />,
        },
        {
          titleID: 'exp_10_che_09',
          content: <SoftHardProcedure />,
        },
        {
          titleID: 'exp_10_che_10',
          content: <SaponificationProcedure />,
        },
        {
          titleID: 'exp_9_che_01',
          content: <ChemicalReactionProcedure />,
        },
        {
          titleID: 'exp_9_che_02',
          content: <MeltingPointIceProcedure />,
        },
        {
          titleID: 'exp_9_che_03',
          content: <MixtureProcedure />,
        },
        {
          titleID: 'exp_9_che_04',
          content: <MixtureSeparationProcedure />,
        },
        {
          titleID: 'exp_9_che_05',
          content: <SolsProcedure />,
        },
        {
          titleID: 'exp_9_che_06',
          content: <MixtureTechniquesProcedure />,
        },
        {
          titleID: 'exp_9_che_07',
          content: <WaterProcedure />,
        },
        {
          titleID: 'exp_9_che_08',
          content: <ScatterProcedure />,
        },
        {
          titleID: 'exp_9_che_09',
          content: <ExothermicProcedure />,
        },
        {
          titleID: 'exp_9_che_10',
          content: <PeriodicTableProcedure />,
        },
        {
          titleID: 'exp_9_che_11',
          content: <ConservationProcedure />,
        },
        {
          titleID: 'exp_12_bio_01',
          content: <PollenProcedure />,
        },
        {
          titleID: 'exp_12_bio_02',
          content: <TurbidityProcedure />,
        },
        {
          titleID: 'exp_12_bio_03',
          content: <SoilStudyProcedure />,
        },
        {
          titleID: 'exp_12_bio_04',
          content: <AirStudyProcedure />,
        },
        {
          titleID: 'exp_12_bio_05',
          content: <QuadratDensityProcedure />,
        },
        {
          titleID: 'exp_12_bio_06',
          content: <QuadratFrequencyProcedure />,
        },
        {
          titleID: 'exp_12_bio_07',
          content: <OnionProcedure />,
        },
        {
          titleID: 'exp_12_bio_08',
          content: <SalivaProcedure />,
        },
        {
          titleID: 'exp_11_bio_01',
          content: <OsmosisProcedure />,
        },
        {
          titleID: 'exp_11_bio_02',
          content: <TranspirationProcedure />,
        },
        {
          titleID: 'exp_11_bio_03',
          content: <PlasmolysisProcedure />,
        },
        {
          titleID: 'exp_11_bio_04',
          content: <StomataProcedure />,
        },
        {
          titleID: 'exp_11_bio_05',
          content: <PaperChromProcedure />,
        },
        {
          titleID: 'exp_11_bio_06',
          content: <FlowersProcedure />,
        },
        {
          titleID: 'exp_11_bio_07',
          content: <MonocotProcedure />,
        },
        {
          titleID: 'exp_11_bio_08',
          content: <RespirationProcedure />,
        },
        {
          titleID: 'exp_11_bio_09',
          content: <UrineProcedure />,
        },
        {
          titleID: 'exp_11_bio_10',
          content: <UreaProcedure />,
        },
        {
          titleID: 'exp_11_bio_11',
          content: <AlbuminProcedure />,
        },
        {
          titleID: 'exp_11_bio_12',
          content: <BileProcedure />,
        },
        {
          titleID: 'exp_11_bio_13',
          content: <CPFProcedure />,
        },
        {
          titleID: 'exp_10_bio_02',
          content: <AmoebaProcedure />,
        },
        {
          titleID: 'exp_10_bio_01',
          content: <PhotosynthesisProcedure />,
        },
        {
          titleID: 'exp_10_bio_03',
          content: <DicotProcedure />,
        },
        {
          titleID: 'exp_10_bio_04',
          content: <CO2Procedure />,
        },
        {
          titleID: 'exp_10_bio_05',
          content: <LeafProcedure />,
        },
        {
          titleID: 'exp_10_bio_06',
          content: <HomologyProcedure />,
        },
        {
          titleID: 'exp_9_bio_02',
          content: <AdulternetProcedure />,
        },
        {
          titleID: 'exp_9_bio_01',
          content: <CheekCellsProcedure />,
        },
        // {
        //   titleID: 'exp_9_bio_03',
        //   content: <AdaptationProcedure />,
        // },
        {
          titleID: 'exp_9_bio_04',
          content: <ImbibitionProcedure />,
        },
        {
          titleID: 'exp_9_bio_05',
          content: <PATissuesProcedure />,
        },
        {
          titleID: 'exp_9_bio_06',
          content: <StarchProcedure />,
        },
        // {
        //   titleID: 'exp_9_bio_07',
        //   content: <MosquitoProcedure />,
        // },
        {
          titleID: 'exp_9_bio_08',
          content: <MDPlantsProcedure />,
        },
        // {
        //   titleID: 'exp_9_bio_09',
        //   content: <CPlantsProcedure />,
        // },
        {
          titleID: 'exp_10_mat_01',
          content: <SphereProcedure />,
        },
        {
          titleID: 'exp_10_mat_02',
          content: <SurfaceProcedure />,
        },
        {
          titleID: 'exp_10_mat_03',
          content: <ArcCircleProcedure />,
        },
        {
          titleID: 'exp_10_mat_04',
          content: <CircularConeProcedure />,
        },
        {
          titleID: 'exp_10_mat_05',
          content: <PythagorasProcedure />,
        },
        {
          titleID: 'exp_10_mat_06',
          content: <CylinderProcedure />,
        },
        {
          titleID: 'exp_10_mat_07',
          content: <CircleCylinderProcedure />,
        },
        {
          titleID: 'exp_10_mat_08',
          content: <TangentsProcedure />,
        },
        {
          titleID: 'exp_10_mat_09',
          content: <APProcedure />,
        },
        {
          titleID: 'exp_10_mat_10',
          content: <SegmentProcedure />,
        },
        {
          titleID: 'exp_10_mat_11',
          content: <RightCylinderProcedure />,
        },
        {
          titleID: 'exp_10_mat_12',
          content: <RightConeProcedure />,
        },
        {
          titleID: 'exp_9_mat_01',
          content: <MidPointProcedure />,
        },
        {
          titleID: 'exp_9_mat_02',
          content: <TriangleProcedure />,
        },
        {
          titleID: 'exp_9_mat_03',
          content: <TrapeziumProcedure />,
        },
        {
          titleID: 'exp_9_mat_04',
          content: <RhombusProcedure />,
        },
        {
          titleID: 'exp_9_mat_05',
          content: <AParallelogramProcedure />,
        },
        {
          titleID: 'exp_9_mat_06',
          content: <CentroidProcedure />,
        },
        {
          titleID: 'exp_9_mat_07',
          content: <CircumcentreProcedure />,
        },
        {
          titleID: 'exp_9_mat_08',
          content: <IncentreProcedure />,
        },
        {
          titleID: 'exp_9_mat_09',
          content: <QuadrilateralProcedure />,
        },
        {
          titleID: 'exp_9_mat_10',
          content: <ACircleProcedure />,
        },
        {
          titleID: 'exp_9_mat_11',
          content: <PParallelogramProcedure />,
        },
        {
          titleID: 'exp_9_mat_12',
          content: <SimultaneousEqnProcedure />,
        },
        {
          titleID: 'exp_9_mat_13',
          content: <LCMProcedure />,
        },
        {
          titleID: 'pre_01',
          content: <PrepositionProcedure />,
        },
        {
          titleID: 'pre_03',
          content: <PrepPictureProcedure />,
        },
        {
          titleID: 'pre_04',
          content: <PrepDirectionProcedure />,
        },
        {
          titleID: 'active_02',
          content: <ActiveProcedure />,
        },
        {
          titleID: 'active_01',
          content: <PassiveProcedure />,
        },
        {
          titleID: 'comp_01',
          content: <ComprehensionProcedure />,
        },
        {
          titleID: 'tense_01',
          content: <TenseProcedure />,
        },
        {
          titleID: 'direct_01',
          content: <DirectProcedure />,
        },
        {
          titleID: 'direct_02',
          content: <ReportProcedure />,
        },
        {
          titleID: 'subverb_01',
          content: <SubVerbProcedure />,
        },
        {
          titleID: 'sinplu_01',
          content: <SinPluProcedure />,
        },
      ],
    },
    {
      title: 'Animation',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          content: <OhmsLawAnimation />,
        },
        {
          titleID: 'exp_12_phy_02',
          content: <PotentiometerAnimation />,
        },
        {
          titleID: 'exp_12_phy_03',
          content: <PotentiometerCellAnimation />,
        },
        // {
        //   titleID: 'exp_12_phy_04',
        //   content: <GalvanometerAnimation />,
        // },
        // {
        //   titleID: 'exp_12_phy_05',
        //   content: <AmmeterAnimation />,
        // },
        // {
        //   titleID: 'exp_12_phy_06',
        //   content: <SonometerAnimation />,
        // },
        {
          titleID: 'exp_12_phy_07',
          content: <ConcaveAnimation />,
        },
        {
          titleID: 'exp_12_phy_08',
          content: <ConvexAnimation />,
        },
        {
          titleID: 'exp_12_phy_09',
          content: <ConcaveFocalAnimation />,
        },
        // {
        //   titleID: 'exp_12_phy_10',
        //   content: <SpectrometerAnimation />,
        // },
        // {
        //   titleID: 'exp_12_phy_11',
        //   content: <RefractiveAnimation />,
        // },
        // {
        //   titleID: 'exp_12_phy_12',
        //   content: <ResistanceAnimation />,
        // },
        // {
        //   titleID: 'exp_12_phy_13',
        //   content: <ResistorAnimation />,
        // },
        {
          titleID: 'exp_12_phy_14',
          content: <DiodeAnimation />,
        },
        // {
        //   titleID: 'exp_12_phy_15',
        //   content: <ZenerAnimation />,
        // },
        {
          titleID: 'exp_12_phy_16',
          content: <TransistorAnimation />,
        },
        {
          titleID: 'exp_11_phy_01',
          content: <ScrewGaugeAnimation />,
        },
        {
          titleID: 'exp_11_phy_02',
          content: <VernierCaliperAnimation />,
        },
        {
          titleID: 'exp_11_phy_03',
          content: <PendulumAnimation />,
        },
        {
          titleID: 'exp_11_phy_04',
          content: <BeamAnimation />,
        },
        {
          titleID: 'exp_11_phy_05',
          content: <ParallelogramAnimation />,
        },
        {
          titleID: 'exp_11_phy_06',
          content: <SpherometerAnimation />,
        },
        {
          titleID: 'exp_11_phy_07',
          content: <FrictionAnimation />,
        },
        {
          titleID: 'exp_11_phy_08',
          content: <SpringAnimation />,
        },
        {
          titleID: 'exp_11_phy_09',
          content: <ViscosityAnimation />,
        },
        {
          titleID: 'exp_11_phy_10',
          content: <InclinedPlaneAnimation />,
        },
        {
          titleID: 'exp_11_phy_11',
          content: <BoyleAnimation />,
        },
        {
          titleID: 'exp_11_phy_12',
          content: <SurfaceTensionAnimation />,
        },
        {
          titleID: 'exp_11_phy_13',
          content: <YoungAnimation />,
        },
        {
          titleID: 'exp_11_phy_14',
          content: <ResonanceAnimation />,
        },
        // {
        //   titleID: 'exp_11_phy_15',
        //   content: <Sonometer1Animation />,
        // },
        // {
        //   titleID: 'exp_11_phy_16',
        //   content: <NewtonCoolingAnimation />,
        // },
        {
          titleID: 'exp_10_phy_01',
          content: <ResisterSeriesAnimation />,
        },
        {
          titleID: 'exp_10_phy_02',
          content: <ResisterParallelAnimation />,
        },
        {
          titleID: 'exp_10_phy_03',
          content: <ConcaveMirrorAnimation />,
        },
        // {
        //   titleID: 'exp_10_phy_04',
        //   content: <BVerifyOhmAnimation />,
        // },
        // {
        //    titleID: 'exp_10_phy_05',
        //    content: <BarMagnetAnimation />,
        //  },
        // {
        //   titleID: 'exp_10_phy_06',
        //   content: <HookeAnimation />,
        // },
        // {
        //   titleID: 'exp_10_phy_07',
        //   content: <Force1Animation />,
        // },
        // {
        //   titleID: 'exp_10_phy_08',
        //   content: <ElectroMagnetAnimation />,
        // },
        {
          titleID: 'exp_10_phy_09',
          content: <RefractionGlassAnimation />,
        },
        // {
        //   titleID: 'exp_10_phy_10',
        //   content: <ReflectionMirrorAnimation />,
        // },
        {
          titleID: 'exp_10_phy_11',
          content: <OhmResistanceAnimation />,
        },
        // {
        //   titleID: 'exp_10_phy_12',
        //   content: <SolenoidAnimation />,
        // },
        // {
        //    titleID: 'exp_10_phy_13',
        //    content: <ConductorAnimation />,
        //  },
        {
          titleID: 'exp_9_phy_01',
          content: <BellJarAnimation />,
        },
        {
          titleID: 'exp_9_phy_02',
          content: <ForceAnimation />,
        },
        {
          titleID: 'exp_9_phy_03',
          content: <NewtonThirdAnimation />,
        },
        {
          titleID: 'exp_9_phy_04',
          content: <PressureAnimation />,
        },
        {
          titleID: 'exp_9_phy_05',
          content: <ArchimedesAnimation />,
        },
        {
          titleID: 'exp_9_phy_06',
          content: <SoundAnimation />,
        },
        {
          titleID: 'exp_9_phy_07',
          content: <DensityAnimation />,
        },
        {
          titleID: 'exp_9_phy_08',
          content: <NewtonSecondAnimation />,
        },
        {
          titleID: 'exp_9_phy_09',
          content: <VelocityAnimation />,
        },
        {
          titleID: 'exp_12_che_01',
          content: <EMFAnimation />,
        },
        {
          titleID: 'exp_12_che_02',
          content: <KMNO4Animation />,
        },
        {
          titleID: 'exp_11_che_01',
          content: <MeltingPointAnimation />,
        },
        {
          titleID: 'exp_11_che_02',
          content: <BoilingPointAnimation />,
        },
        {
          titleID: 'exp_12_che_03',
          content: <HPeroxideAnimation />,
        },
        {
          titleID: 'exp_12_che_04',
          content: <SSulphateAnimation />,
        },
        {
          titleID: 'exp_12_che_05',
          content: <InorganicAnimation />,
        },
        {
          titleID: 'exp_12_che_06',
          content: <OilAnimation />,
        },
        {
          titleID: 'exp_12_che_07',
          content: <ProteinAnimation />,
        },
        {
          titleID: 'exp_12_che_08',
          content: <PaperChromatographyAnimation />,
        },
        {
          titleID: 'exp_12_che_09',
          content: <HCLAnimation />,
        },
        {
          titleID: 'exp_12_che_10',
          content: <OrganicAnimation />,
        },
        {
          titleID: 'exp_12_che_11',
          content: <CarbohydratesAnimation />,
        },
        {
          titleID: 'exp_12_che_12',
          content: <EmulsionAnimation />,
        },
        {
          titleID: 'exp_12_che_13',
          content: <LyphobicAnimation />,
        },
        {
          titleID: 'exp_12_che_14',
          content: <FunctionalGroupsAnimation />,
        },
        {
          titleID: 'exp_12_che_15',
          content: <ThermochemistryAnimation />,
        },
        {
          titleID: 'exp_11_che_03',
          content: <PHAnimation />,
        },
        {
          titleID: 'exp_11_che_04',
          content: <EquilibriumAnimation />,
        },
        {
          titleID: 'exp_11_che_05',
          content: <QuantitativeAnimation />,
        },
        {
          titleID: 'exp_11_che_06',
          content: <CrystallisationAnimation />,
        },
        {
          titleID: 'exp_11_che_07',
          content: <LassaigneAnimation />,
        },
        {
          titleID: 'exp_11_che_08',
          content: <LabTechniquesAnimation />,
        },
        // {
        //   titleID: 'exp_11_che_09',
        //   content: <AnionAnimation />,
        // },
        // {
        //   titleID: 'exp_11_che_10',
        //   content: <CationAnimation />,
        // },
        {
          titleID: 'exp_10_che_02',
          content: <CombinationReactionAnimation />,
        },
        {
          titleID: 'exp_10_che_01',
          content: <DisplacementReactionAnimation />,
        },
        {
          titleID: 'exp_10_che_03',
          content: <PHStripAnimation />,
        },
        {
          titleID: 'exp_10_che_04',
          content: <DecompositionAnimation />,
        },
        {
          titleID: 'exp_10_che_05',
          content: <AcidBaseAnimation />,
        },
        {
          titleID: 'exp_10_che_06',
          content: <DoubleDisplacementAnimation />,
        },
        {
          titleID: 'exp_10_che_07',
          content: <EthanoicAnimation />,
        },
        {
          titleID: 'exp_10_che_08',
          content: <SaltSolsAnimation />,
        },
        {
          titleID: 'exp_10_che_09',
          content: <SoftHardAnimation />,
        },
        {
          titleID: 'exp_10_che_10',
          content: <SaponificationAnimation />,
        },
        {
          titleID: 'exp_9_che_01',
          content: <ChemicalReactionAnimation />,
        },
        {
          titleID: 'exp_9_che_02',
          content: <MeltingPointIceAnimation />,
        },
        {
          titleID: 'exp_9_che_03',
          content: <MixtureAnimation />,
        },
        {
          titleID: 'exp_9_che_04',
          content: <MixtureSeparationAnimation />,
        },
        {
          titleID: 'exp_9_che_05',
          content: <SolsAnimation />,
        },
        {
          titleID: 'exp_9_che_06',
          content: <MixtureTechniquesAnimation />,
        },
        {
          titleID: 'exp_9_che_07',
          content: <WaterAnimation />,
        },
        {
          titleID: 'exp_9_che_08',
          content: <ScatterAnimation />,
        },
        {
          titleID: 'exp_9_che_09',
          content: <ExothermicAnimation />,
        },
        // {
        //   titleID: 'exp_9_che_10',
        //   content: <PeriodicTableAnimation />,
        // },
        {
          titleID: 'exp_9_che_11',
          content: <ConservationAnimation />,
        },
        {
          titleID: 'exp_12_bio_01',
          content: <PollenAnimation />,
        },
        {
          titleID: 'exp_12_bio_02',
          content: <TurbidityAnimation />,
        },
        {
          titleID: 'exp_12_bio_03',
          content: <SoilStudyAnimation />,
        },
        {
          titleID: 'exp_12_bio_04',
          content: <AirStudyAnimation />,
        },
        {
          titleID: 'exp_12_bio_05',
          content: <QuadratDensityAnimation />,
        },
        {
          titleID: 'exp_12_bio_06',
          content: <QuadratFrequencyAnimation />,
        },
        {
          titleID: 'exp_12_bio_07',
          content: <OnionAnimation />,
        },
        {
          titleID: 'exp_12_bio_08',
          content: <SalivaAnimation />,
        },
        {
          titleID: 'exp_11_bio_01',
          content: <OsmosisAnimation />,
        },
        {
          titleID: 'exp_11_bio_02',
          content: <TranspirationAnimation />,
        },
        {
          titleID: 'exp_11_bio_03',
          content: <PlasmolysisAnimation />,
        },
        {
          titleID: 'exp_11_bio_04',
          content: <StomataAnimation />,
        },
        {
          titleID: 'exp_11_bio_05',
          content: <PaperChromAnimation />,
        },
        {
          titleID: 'exp_11_bio_06',
          content: <FlowersAnimation />,
        },
        {
          titleID: 'exp_11_bio_07',
          content: <MonocotAnimation />,
        },
        // {
        //   titleID: 'exp_11_bio_08',
        //   content: <RespirationAnimation />,
        // },
        {
          titleID: 'exp_11_bio_09',
          content: <UrineAnimation />,
        },
        {
          titleID: 'exp_11_bio_10',
          content: <UreaAnimation />,
        },
        {
          titleID: 'exp_11_bio_11',
          content: <AlbuminAnimation />,
        },
        {
          titleID: 'exp_11_bio_12',
          content: <BileAnimation />,
        },
        {
          titleID: 'exp_11_bio_13',
          content: <CPFAnimation />,
        },
        {
          titleID: 'exp_10_bio_02',
          content: <AmoebaAnimation />,
        },
        {
          titleID: 'exp_10_bio_01',
          content: <PhotosynthesisAnimation />,
        },
        {
          titleID: 'exp_10_bio_03',
          content: <DicotAnimation />,
        },
        {
          titleID: 'exp_10_bio_04',
          content: <CO2Animation />,
        },
        {
          titleID: 'exp_10_bio_05',
          content: <LeafAnimation />,
        },
        // {
        //   titleID: 'exp_10_bio_06',
        //   content: <HomologyAnimation />,
        // },
        {
          titleID: 'exp_9_bio_02',
          content: <AdulternetAnimation />,
        },
        {
          titleID: 'exp_9_bio_01',
          content: <CheekCellsAnimation />,
        },
        // {
        //   titleID: 'exp_9_bio_03',
        //   content: <AdaptationAnimation />,
        // },
        {
          titleID: 'exp_9_bio_04',
          content: <ImbibitionAnimation />,
        },
        {
          titleID: 'exp_9_bio_05',
          content: <PATissuesAnimation />,
        },
        {
          titleID: 'exp_9_bio_06',
          content: <StarchAnimation />,
        },
        {
          titleID: 'exp_9_bio_07',
          content: <MosquitoAnimation />,
        },
        // {
        //   titleID: 'exp_9_bio_08',
        //   content: <MDPlantsAnimation />,
        // },
        // {
        //   titleID: 'exp_9_bio_09',
        //   content: <CPlantsAnimation />,
        // },
        {
          titleID: 'exp_10_mat_01',
          content: <SphereAnimation />,
        },
        {
          titleID: 'exp_10_mat_02',
          content: <SurfaceAnimation />,
        },
        {
          titleID: 'exp_10_mat_03',
          content: <ArcCircleAnimation />,
        },
        // {
        //   titleID: 'exp_10_mat_04',
        //   content: <CircularConeAnimation />,
        // },
        {
          titleID: 'exp_10_mat_05',
          content: <PythagorasAnimation />,
        },
        {
          titleID: 'exp_10_mat_06',
          content: <CylinderAnimation />,
        },
        {
          titleID: 'exp_10_mat_07',
          content: <CircleCylinderAnimation />,
        },
        {
          titleID: 'exp_10_mat_08',
          content: <TangentsAnimation />,
        },
        // {
        //   titleID: 'exp_10_mat_09',
        //   content: <APAnimation />,
        // },
        {
          titleID: 'exp_10_mat_10',
          content: <SegmentAnimation />,
        },
        {
          titleID: 'exp_10_mat_11',
          content: <RightCylinderAnimation />,
        },
        {
          titleID: 'exp_10_mat_12',
          content: <RightConeAnimation />,
        },
        {
          titleID: 'exp_9_mat_01',
          content: <MidPointAnimation />,
        },
        {
          titleID: 'exp_9_mat_02',
          content: <TriangleAnimation />,
        },
        {
          titleID: 'exp_9_mat_03',
          content: <TrapeziumAnimation />,
        },
        {
          titleID: 'exp_9_mat_04',
          content: <RhombusAnimation />,
        },
        {
          titleID: 'exp_9_mat_05',
          content: <AParallelogramAnimation />,
        },
        {
          titleID: 'exp_9_mat_06',
          content: <CentroidAnimation />,
        },
        {
          titleID: 'exp_9_mat_07',
          content: <CircumcentreAnimation />,
        },
        {
          titleID: 'exp_9_mat_08',
          content: <IncentreAnimation />,
        },
        {
          titleID: 'exp_9_mat_09',
          content: <QuadrilateralAnimation />,
        },
        {
          titleID: 'exp_9_mat_10',
          content: <ACircleAnimation />,
        },
        {
          titleID: 'exp_9_mat_11',
          content: <PParallelogramAnimation />,
        },
        // {
        //   titleID: 'exp_9_mat_12',
        //   content: <SimultaneousEqnAnimation />,
        // },
        // {
        //   titleID: 'exp_9_mat_13',
        //   content: <LCMAnimation />,
        // },
        {
          titleID: 'active_02',
          content: <ActiveAnimation />,
        },
      ],
    },
    {
      title: 'Simulator',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          content: <OhmsLawSimulator />,
        },
        {
          titleID: 'exp_12_phy_02',
          content: <PotentiometerSimulator />,
        },
        {
          titleID: 'exp_12_phy_03',
          content: <PotentiometerCellSimulator />,
        },
        {
          titleID: 'exp_12_phy_04',
          content: <GalvanometerSimulator />,
        },
        {
          titleID: 'exp_12_phy_05',
          content: <AmmeterSimulator />,
        },
        {
          titleID: 'exp_12_phy_06',
          content: <SonometerSimulator />,
        },
        {
          titleID: 'exp_12_phy_07',
          content: <ConcaveSimulator />,
        },
        {
          titleID: 'exp_12_phy_08',
          content: <ConvexSimulator />,
        },
        {
          titleID: 'exp_12_phy_09',
          content: <ConcaveFocalSimulator />,
        },
        {
          titleID: 'exp_12_phy_10',
          content: <SpectrometerSimulator />,
        },
        {
          titleID: 'exp_12_phy_11',
          content: <RefractiveSimulator />,
        },
        {
          titleID: 'exp_12_phy_12',
          content: <ResistanceSimulator />,
        },
        {
          titleID: 'exp_12_phy_13',
          content: <ResistorSimulator />,
        },
        {
          titleID: 'exp_12_phy_14',
          content: <DiodeSimulator />,
        },
        {
          titleID: 'exp_12_phy_15',
          content: <ZenerSimulator />,
        },
        {
          titleID: 'exp_12_phy_16',
          content: <TransistorSimulator />,
        },
        {
          titleID: 'exp_11_phy_01',
          content: <ScrewGaugeSimulator />,
        },
        {
          titleID: 'exp_11_phy_02',
          content: <VernierCaliperSimulator />,
        },
        {
          titleID: 'exp_11_phy_03',
          content: <PendulumSimulator />,
        },
        {
          titleID: 'exp_11_phy_04',
          content: <BeamSimulator />,
        },
        {
          titleID: 'exp_11_phy_05',
          content: <ParallelogramSimulator />,
        },
        {
          titleID: 'exp_11_phy_06',
          content: <SpherometerSimulator />,
        },
        {
          titleID: 'exp_11_phy_07',
          content: <FrictionSimulator />,
        },
        {
          titleID: 'exp_11_phy_08',
          content: <SpringSimulator />,
        },
        {
          titleID: 'exp_11_phy_09',
          content: <ViscositySimulator />,
        },
        {
          titleID: 'exp_11_phy_10',
          content: <InclinedPlaneSimulator />,
        },
        {
          titleID: 'exp_11_phy_11',
          content: <BoyleSimulator />,
        },
        {
          titleID: 'exp_11_phy_12',
          content: <SurfaceTensionSimulator />,
        },
        {
          titleID: 'exp_11_phy_13',
          content: <YoungSimulator />,
        },
        {
          titleID: 'exp_11_phy_14',
          content: <ResonanceSimulator />,
        },
        {
          titleID: 'exp_11_phy_15',
          content: <Sonometer1Simulator />,
        },
        {
          titleID: 'exp_11_phy_16',
          content: <NewtonCoolingSimulator />,
        },
        {
          titleID: 'exp_10_phy_01',
          content: <ResisterSeriesSimulator />,
        },
        {
          titleID: 'exp_10_phy_02',
          content: <ResisterParallelSimulator />,
        },
        {
          titleID: 'exp_10_phy_03',
          content: <ConcaveMirrorSimulator />,
        },
        {
          titleID: 'exp_10_phy_04',
          content: <VerifyOhmSimulator />,
        },
        {
          titleID: 'exp_10_phy_05',
          content: <BarMagnetSimulator />,
        },
        {
          titleID: 'exp_10_phy_06',
          content: <HookeSimulator />,
        },
        {
          titleID: 'exp_10_phy_07',
          content: <Force1Simulator />,
        },
        {
          titleID: 'exp_10_phy_08',
          content: <ElectroMagnetSimulator />,
        },
        {
          titleID: 'exp_10_phy_09',
          content: <RefractionGlassSimulator />,
        },
        {
          titleID: 'exp_10_phy_10',
          content: <ReflectionMirrorSimulator />,
        },
        {
          titleID: 'exp_10_phy_11',
          content: <OhmResistanceSimulator />,
        },
        {
          titleID: 'exp_10_phy_12',
          content: <SolenoidSimulator />,
        },
        {
          titleID: 'exp_10_phy_13',
          content: <ConductorSimulator />,
        },
        {
          titleID: 'exp_9_phy_01',
          content: <BellJarSimulator />,
        },
        {
          titleID: 'exp_9_phy_02',
          content: <ForceSimulator />,
        },
        {
          titleID: 'exp_9_phy_03',
          content: <NewtonThirdSimulator />,
        },
        {
          titleID: 'exp_9_phy_04',
          content: <PressureSimulator />,
        },
        {
          titleID: 'exp_9_phy_05',
          content: <ArchimedesSimulator />,
        },
        {
          titleID: 'exp_9_phy_06',
          content: <SoundSimulator />,
        },
        {
          titleID: 'exp_9_phy_07',
          content: <DensitySimulator />,
        },
        {
          titleID: 'exp_9_phy_08',
          content: <NewtonSecondSimulator />,
        },
        {
          titleID: 'exp_9_phy_09',
          content: <VelocitySimulator />,
        },
        {
          titleID: 'exp_12_che_01',
          content: <EMFSimulator />,
        },

        {
          titleID: 'exp_12_che_02',
          content: <KMNO4Simulator />,
        },
        {
          titleID: 'exp_12_che_03',
          content: <HPeroxideSimulator />,
        },
        {
          titleID: 'exp_12_che_04',
          content: <SSulphateSimulator />,
        },
        {
          titleID: 'exp_12_che_05',
          content: <InorganicSimulator />,
        },
        {
          titleID: 'exp_12_che_06',
          content: <OilSimulator />,
        },
        {
          titleID: 'exp_12_che_07',
          content: <ProteinSimulator />,
        },
        {
          titleID: 'exp_12_che_08',
          content: <PaperChromatographySimulator />,
        },
        {
          titleID: 'exp_12_che_09',
          content: <HCLSimulator />,
        },
        {
          titleID: 'exp_12_che_10',
          content: <OrganicSimulator />,
        },
        {
          titleID: 'exp_12_che_11',
          content: <CarbohydratesSimulator />,
        },
        {
          titleID: 'exp_12_che_12',
          content: <EmulsionSimulator />,
        },
        {
          titleID: 'exp_12_che_13',
          content: <LyphobicSimulator />,
        },
        {
          titleID: 'exp_12_che_14',
          content: <FunctionalGroupsSimulator />,
        },
        {
          titleID: 'exp_12_che_15',
          content: <ThermochemistrySimulator />,
        },
        {
          titleID: 'exp_11_che_01',
          content: <MeltingPointSimulator />,
        },
        {
          titleID: 'exp_11_che_02',
          content: <BoilingPointSimulator />,
        },
        {
          titleID: 'exp_11_che_03',
          content: <PHSimulator />,
        },
        {
          titleID: 'exp_11_che_04',
          content: <EquilibriumSimulator />,
        },
        {
          titleID: 'exp_11_che_05',
          content: <QuantitativeSimulator />,
        },
        {
          titleID: 'exp_11_che_06',
          content: <CrystallisationSimulator />,
        },
        {
          titleID: 'exp_11_che_07',
          content: <LassaigneSimulator />,
        },
        // {
        //   titleID: 'exp_11_che_08',
        //   content: <LabTechniquesSimulator />,
        // },
        {
          titleID: 'exp_11_che_09',
          content: <AnionSimulator />,
        },
        {
          titleID: 'exp_11_che_10',
          content: <CationSimulator />,
        },
        {
          titleID: 'exp_10_che_02',
          content: <CombinationReactionSimulator />,
        },
        {
          titleID: 'exp_10_che_01',
          content: <DisplacementReactionSimulator />,
        },
        {
          titleID: 'exp_10_che_03',
          content: <PHStripSimulator />,
        },
        {
          titleID: 'exp_10_che_04',
          content: <DecompositionSimulator />,
        },
        {
          titleID: 'exp_10_che_05',
          content: <AcidBaseSimulator />,
        },
        {
          titleID: 'exp_10_che_06',
          content: <DoubleDisplacementSimulator />,
        },
        {
          titleID: 'exp_10_che_07',
          content: <EthanoicSimulator />,
        },
        {
          titleID: 'exp_10_che_08',
          content: <SaltSolsSimulator />,
        },
        {
          titleID: 'exp_10_che_09',
          content: <SoftHardSimulator />,
        },
        {
          titleID: 'exp_10_che_10',
          content: <SaponificationSimulator />,
        },
        {
          titleID: 'exp_9_che_01',
          content: <ChemicalReactionSimulator />,
        },
        {
          titleID: 'exp_9_che_02',
          content: <MeltingPointIceSimulator />,
        },
        {
          titleID: 'exp_9_che_03',
          content: <MixtureSimulator />,
        },
        {
          titleID: 'exp_9_che_04',
          content: <MixtureSeparationSimulator />,
        },
        {
          titleID: 'exp_9_che_05',
          content: <SolsSimulator />,
        },
        {
          titleID: 'exp_9_che_06',
          content: <MixtureTechniquesSimulator />,
        },
        {
          titleID: 'exp_9_che_07',
          content: <WaterSimulator />,
        },
        {
          titleID: 'exp_9_che_08',
          content: <ScatterSimulator />,
        },
        // {
        //   titleID: 'exp_9_che_09',
        //   content: <ExothermicSimulator />,
        // },
        {
          titleID: 'exp_9_che_10',
          content: <PeriodicTableSimulator />,
        },
        {
          titleID: 'exp_9_che_11',
          content: <ConservationSimulator />,
        },
        {
          titleID: 'exp_12_bio_01',
          content: <PollenSimulator />,
        },
        {
          titleID: 'exp_12_bio_02',
          content: <TurbiditySimulator />,
        },
        {
          titleID: 'exp_12_bio_03',
          content: <SoilStudySimulator />,
        },
        {
          titleID: 'exp_12_bio_04',
          content: <AirStudySimulator />,
        },
        {
          titleID: 'exp_12_bio_05',
          content: <QuadratDensitySimulator />,
        },
        {
          titleID: 'exp_12_bio_06',
          content: <QuadratFrequencySimulator />,
        },
        {
          titleID: 'exp_12_bio_07',
          content: <OnionSimulator />,
        },
        {
          titleID: 'exp_12_bio_08',
          content: <SalivaSimulator />,
        },
        {
          titleID: 'exp_11_bio_01',
          content: <OsmosisSimulator />,
        },
        {
          titleID: 'exp_11_bio_02',
          content: <TranspirationSimulator />,
        },
        {
          titleID: 'exp_11_bio_03',
          content: <PlasmolysisSimulator />,
        },
        {
          titleID: 'exp_11_bio_04',
          content: <StomataSimulator />,
        },
        {
          titleID: 'exp_11_bio_05',
          content: <PaperChromSimulator />,
        },
        {
          titleID: 'exp_11_bio_06',
          content: <FlowersSimulator />,
        },
        {
          titleID: 'exp_11_bio_07',
          content: <MonocotSimulator />,
        },
        {
          titleID: 'exp_11_bio_08',
          content: <RespirationSimulator />,
        },
        {
          titleID: 'exp_11_bio_09',
          content: <UrineSimulator />,
        },
        {
          titleID: 'exp_11_bio_10',
          content: <UreaSimulator />,
        },
        {
          titleID: 'exp_11_bio_11',
          content: <AlbuminSimulator />,
        },
        {
          titleID: 'exp_11_bio_12',
          content: <BileSimulator />,
        },
        {
          titleID: 'exp_11_bio_13',
          content: <CPFSimulator />,
        },
        {
          titleID: 'exp_10_bio_02',
          content: <AmoebaSimulator />,
        },
        {
          titleID: 'exp_10_bio_01',
          content: <PhotosynthesisSimulator />,
        },
        {
          titleID: 'exp_10_bio_03',
          content: <DicotSimulator />,
        },
        {
          titleID: 'exp_10_bio_04',
          content: <CO2Simulator />,
        },
        {
          titleID: 'exp_10_bio_05',
          content: <LeafSimulator />,
        },
        {
          titleID: 'exp_10_bio_06',
          content: <HomologySimulator />,
        },
        {
          titleID: 'exp_9_bio_02',
          content: <AdulternetSimulator />,
        },
        {
          titleID: 'exp_9_bio_01',
          content: <CheekCellsSimulator />,
        },
        // {
        //   titleID: 'exp_9_bio_03',
        //   content: <AdaptationSimulator />,
        // },
        {
          titleID: 'exp_9_bio_04',
          content: <ImbibitionSimulator />,
        },
        {
          titleID: 'exp_9_bio_05',
          content: <PATissuesSimulator />,
        },
        {
          titleID: 'exp_9_bio_06',
          content: <StarchSimulator />,
        },
        // {
        //   titleID: 'exp_9_bio_07',
        //   content: <MosquitoSimulator />,
        // },
        {
          titleID: 'exp_9_bio_08',
          content: <MDPlantsSimulator />,
        },
        // {
        //   titleID: 'exp_9_bio_09',
        //   content: <CPlantsSimulator />,
        // },
        {
          titleID: 'exp_10_mat_01',
          content: <SphereSimulator />,
        },
        {
          titleID: 'exp_10_mat_02',
          content: <SurfaceSimulator />,
        },
        {
          titleID: 'exp_10_mat_03',
          content: <ArcCircleSimulator />,
        },
        {
          titleID: 'exp_10_mat_04',
          content: <CircularConeSimulator />,
        },
        {
          titleID: 'exp_10_mat_05',
          content: <PythagorasSimulator />,
        },
        {
          titleID: 'exp_10_mat_06',
          content: <CylinderSimulator />,
        },
        {
          titleID: 'exp_10_mat_07',
          content: <CircleCylinderSimulator />,
        },
        {
          titleID: 'exp_10_mat_08',
          content: <TangentsSimulator />,
        },
        {
          titleID: 'exp_10_mat_09',
          content: <APSimulator />,
        },
        {
          titleID: 'exp_10_mat_10',
          content: <SegmentSimulator />,
        },
        {
          titleID: 'exp_10_mat_11',
          content: <RightCylinderSimulator />,
        },
        {
          titleID: 'exp_10_mat_12',
          content: <RightConeSimulator />,
        },
        {
          titleID: 'exp_9_mat_01',
          content: <MidPointSimulator />,
        },
        {
          titleID: 'exp_9_mat_02',
          content: <TriangleSimulator />,
        },
        {
          titleID: 'exp_9_mat_03',
          content: <TrapeziumSimulator />,
        },
        {
          titleID: 'exp_9_mat_04',
          content: <RhombusSimulator />,
        },
        {
          titleID: 'exp_9_mat_05',
          content: <AParallelogramSimulator />,
        },
        {
          titleID: 'exp_9_mat_06',
          content: <CentroidSimulator />,
        },
        {
          titleID: 'exp_9_mat_07',
          content: <CircumcentreSimulator />,
        },
        {
          titleID: 'exp_9_mat_08',
          content: <IncentreSimulator />,
        },
        {
          titleID: 'exp_9_mat_09',
          content: <QuadrilateralSimulator />,
        },
        {
          titleID: 'exp_9_mat_10',
          content: <ACircleSimulator />,
        },
        {
          titleID: 'exp_9_mat_11',
          content: <PParallelogramSimulator />,
        },
        {
          titleID: 'exp_9_mat_12',
          content: <SimultaneousEqnSimulator />,
        },
        {
          titleID: 'exp_9_mat_13',
          content: <LCMSimulator />,
        },
      ],
    },
    {
      title: 'Video',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          content: <OhmsLawVideo />,
        },
        {
          titleID: 'exp_12_phy_04',
          content: <GalvanometerVideo />,
        },
        {
          titleID: 'exp_12_phy_05',
          content: <AmmeterVideo />,
        },
        {
          titleID: 'exp_12_phy_06',
          content: <SonometerVideo />,
        },
        // {
        //   titleID: 'exp_12_phy_07',
        //   content: <ConcaveVideo />,
        // },
        // {
        //   titleID: 'exp_12_phy_08',
        //   content: <ConvexVideo />,
        // },
        // {
        //   titleID: 'exp_12_phy_09',
        //   content: <ConcaveFocalVideo />,
        // },
        // {
        //   titleID: 'exp_12_phy_10',
        //   content: <SpectrometerVideo />,
        // },
        {
          titleID: 'exp_12_phy_11',
          content: <RefractiveVideo />,
        },
        {
          titleID: 'exp_12_phy_12',
          content: <ResistanceVideo />,
        },
        {
          titleID: 'exp_12_phy_13',
          content: <ResistorVideo />,
        },
        // {
        //   titleID: 'exp_12_phy_14',
        //   content: <DiodeVideo />,
        // },
        {
          titleID: 'exp_12_phy_15',
          content: <ZenerVideo />,
        },
        // {
        //   titleID: 'exp_12_phy_16',
        //   content: <TransistorVideo />,
        // },
        {
          titleID: 'exp_11_phy_01',
          content: <ScrewGaugeVideo />,
        },
        {
          titleID: 'exp_11_phy_02',
          content: <VernierCaliperVideo />,
        },
        {
          titleID: 'exp_11_phy_03',
          content: <PendulumVideo />,
        },
        {
          titleID: 'exp_11_phy_04',
          content: <BeamVideo />,
        },
        {
          titleID: 'exp_11_phy_05',
          content: <ParallelogramVideo />,
        },
        {
          titleID: 'exp_11_phy_06',
          content: <SpherometerVideo />,
        },
        {
          titleID: 'exp_11_phy_07',
          content: <FrictionVideo />,
        },
        {
          titleID: 'exp_11_phy_08',
          content: <SpringVideo />,
        },
        {
          titleID: 'exp_11_phy_09',
          content: <ViscosityVideo />,
        },
        {
          titleID: 'exp_11_phy_10',
          content: <InclinedPlaneVideo />,
        },
        {
          titleID: 'exp_11_phy_11',
          content: <BoyleVideo />,
        },
        {
          titleID: 'exp_11_phy_12',
          content: <SurfaceTensionVideo />,
        },
        {
          titleID: 'exp_11_phy_13',
          content: <YoungVideo />,
        },
        // {
        //   titleID: 'exp_11_phy_14',
        //   content: <ResonanceVideo />,
        // },
        {
          titleID: 'exp_11_phy_15',
          content: <Sonometer1Video />,
        },
        {
          titleID: 'exp_11_phy_16',
          content: <NewtonCoolingVideo />,
        },
        {
          titleID: 'exp_10_phy_01',
          content: <ResisterSeriesVideo />,
        },
        {
          titleID: 'exp_10_phy_02',
          content: <ResisterParallelVideo />,
        },
        // {
        //   titleID: 'exp_10_phy_03',
        //   content: <ConcaveMirrorVideo />,
        // },
        // {
        //   titleID: 'exp_10_phy_04',
        //   content: <VerifyOhmVideo />,
        // },
        // {
        //    titleID: 'exp_10_phy_05',
        //    content: <BarMagnetVideo />,
        //  },
        // {
        //   titleID: 'exp_10_phy_06',
        //   content: <HookeVideo />,
        // },
        // {
        //   titleID: 'exp_10_phy_07',
        //   content: <Force1Video />,
        // },
        // {
        //   titleID: 'exp_10_phy_08',
        //   content: <ElectroMagnetVideo />,
        // },
        // {
        //   titleID: 'exp_10_phy_09',
        //   content: <RefractionGlassVideo />,
        // },
        // {
        //   titleID: 'exp_10_phy_10',
        //   content: <ReflectionMirrorVideo/>,
        // },
        {
          titleID: 'exp_10_phy_11',
          content: <OhmResistanceVideo />,
        },
        // {
        //   titleID: 'exp_10_phy_12',
        //   content: <SolenoidVideo />,
        // },
        // {
        //    titleID: 'exp_10_phy_13',
        //    content: <ConductorVideo />,
        //  },
        {
          titleID: 'exp_9_phy_01',
          content: <BellJarVideo />,
        },
        {
          titleID: 'exp_9_phy_02',
          content: <ForceVideo />,
        },
        {
          titleID: 'exp_9_phy_03',
          content: <NewtonThirdVideo />,
        },
        {
          titleID: 'exp_9_phy_04',
          content: <PressureVideo />,
        },
        {
          titleID: 'exp_9_phy_05',
          content: <ArchimedesVideo />,
        },
        {
          titleID: 'exp_9_phy_06',
          content: <SoundVideo />,
        },
        {
          titleID: 'exp_9_phy_07',
          content: <DensityVideo />,
        },
        // {
        //   titleID: 'exp_9_phy_08',
        //   content: <NewtonSecondVideo />,
        // },
        {
          titleID: 'exp_9_phy_09',
          content: <VelocityVideo />,
        },
        {
          titleID: 'exp_12_che_01',
          content: <EMFVideo />,
        },
        {
          titleID: 'exp_12_che_02',
          content: <KMNO4Video />,
        },
        {
          titleID: 'exp_12_che_03',
          content: <HPeroxideVideo />,
        },
        {
          titleID: 'exp_12_che_04',
          content: <SSulphateVideo />,
        },
        {
          titleID: 'exp_12_che_05',
          content: <InorganicVideo />,
        },
        {
          titleID: 'exp_12_che_06',
          content: <OilVideo />,
        },
        {
          titleID: 'exp_12_che_07',
          content: <ProteinVideo />,
        },
        {
          titleID: 'exp_12_che_08',
          content: <PaperChromatographyVideo />,
        },
        {
          titleID: 'exp_12_che_09',
          content: <HCLVideo />,
        },
        // {
        //   titleID: 'exp_12_che_10',
        //   content: <OrganicVideo />,
        // },
        {
          titleID: 'exp_12_che_11',
          content: <CarbohydratesVideo />,
        },
        {
          titleID: 'exp_12_che_12',
          content: <EmulsionVideo />,
        },
        // {
        //    titleID: 'exp_12_che_13',
        //    content: <LyphobicSVideo />,
        //  },
        {
          titleID: 'exp_12_che_14',
          content: <FunctionalGroupsVideo />,
        },
        // {
        //   titleID: 'exp_12_che_15',
        //   content: <ThermochemistryVideo />,
        // },
        {
          titleID: 'exp_11_che_01',
          content: <MeltingPointVideo />,
        },
        {
          titleID: 'exp_11_che_02',
          content: <BoilingPointVideo />,
        },
        {
          titleID: 'exp_11_che_03',
          content: <PHVideo />,
        },
        {
          titleID: 'exp_11_che_04',
          content: <EquilibriumVideo />,
        },
        {
          titleID: 'exp_11_che_05',
          content: <QuantitativeVideo />,
        },
        {
          titleID: 'exp_11_che_06',
          content: <CrystallisationVideo />,
        },
        {
          titleID: 'exp_11_che_07',
          content: <LassaigneVideo />,
        },
        // {
        //   titleID: 'exp_11_che_08',
        //   content: <LabTechniquesVideo />,
        // },
        {
          titleID: 'exp_11_che_09',
          content: <AnionVideo />,
        },
        {
          titleID: 'exp_11_che_10',
          content: <CationVideo />,
        },
        {
          titleID: 'exp_10_che_02',
          content: <CombinationReactionVideo />,
        },
        {
          titleID: 'exp_10_che_01',
          content: <DisplacementReactionVideo />,
        },
        {
          titleID: 'exp_10_che_03',
          content: <PHStripVideo />,
        },
        {
          titleID: 'exp_10_che_04',
          content: <DecompositionVideo />,
        },
        {
          titleID: 'exp_10_che_05',
          content: <AcidBaseVideo />,
        },
        {
          titleID: 'exp_10_che_06',
          content: <DoubleDisplacementVideo />,
        },
        {
          titleID: 'exp_10_che_07',
          content: <EthanoicVideo />,
        },
        {
          titleID: 'exp_10_che_08',
          content: <SaltSolsVideo />,
        },
        {
          titleID: 'exp_10_che_09',
          content: <SoftHardVideo />,
        },
        {
          titleID: 'exp_10_che_10',
          content: <SaponificationVideo />,
        },
        {
          titleID: 'exp_9_che_01',
          content: <ChemicalReactionVideo />,
        },
        {
          titleID: 'exp_9_che_02',
          content: <MeltingPointIceVideo />,
        },
        {
          titleID: 'exp_9_che_03',
          content: <MixtureVideo />,
        },
        {
          titleID: 'exp_9_che_04',
          content: <MixtureSeparationVideo />,
        },
        {
          titleID: 'exp_9_che_05',
          content: <SolsVideo />,
        },
        {
          titleID: 'exp_9_che_06',
          content: <MixtureTechniquesVideo />,
        },
        {
          titleID: 'exp_9_che_07',
          content: <WaterVideo />,
        },
        // {
        //   titleID: 'exp_9_che_08',
        //   content: <ScatterVideo />,
        // },
        // {
        //   titleID: 'exp_9_che_09',
        //   content: <ExothermicVideo />,
        // },
        // {
        //   titleID: 'exp_9_che_10',
        //   content: <PeriodicTableVideo />,
        // },
        {
          titleID: 'exp_9_che_11',
          content: <ConservationVideo />,
        },
        {
          titleID: 'exp_12_bio_01',
          content: <PollenVideo />,
        },
        {
          titleID: 'exp_12_bio_02',
          content: <TurbidityVideo />,
        },
        {
          titleID: 'exp_12_bio_03',
          content: <SoilStudyVideo />,
        },
        {
          titleID: 'exp_12_bio_04',
          content: <AirStudyVideo />,
        },
        // {
        //   titleID: 'exp_12_bio_05',
        //   content: <QuadratDensityVideo />,
        // },
        // {
        //   titleID: 'exp_12_bio_06',
        //   content: <QuadratFrequencyVideo />,
        // },
        // {
        //   titleID: 'exp_12_bio_07',
        //   content: <OnionVideo />,
        // },
        // {
        //   titleID: 'exp_12_bio_08',
        //   content: <SalivaVideo />,
        // },
        {
          titleID: 'exp_11_bio_01',
          content: <OsmosisVideo />,
        },
        {
          titleID: 'exp_11_bio_02',
          content: <TranspirationVideo />,
        },
        {
          titleID: 'exp_11_bio_03',
          content: <PlasmolysisVideo />,
        },
        {
          titleID: 'exp_11_bio_04',
          content: <StomataVideo />,
        },
        {
          titleID: 'exp_11_bio_05',
          content: <PaperChromVideo />,
        },
        {
          titleID: 'exp_11_bio_06',
          content: <FlowersVideo />,
        },
        {
          titleID: 'exp_11_bio_07',
          content: <MonocotVideo />,
        },
        {
          titleID: 'exp_11_bio_08',
          content: <RespirationVideo />,
        },
        {
          titleID: 'exp_11_bio_09',
          content: <UrineVideo />,
        },
        {
          titleID: 'exp_11_bio_10',
          content: <UreaVideo />,
        },
        {
          titleID: 'exp_11_bio_11',
          content: <AlbuminVideo />,
        },
        {
          titleID: 'exp_11_bio_12',
          content: <BileVideo />,
        },
        {
          titleID: 'exp_11_bio_13',
          content: <CPFVideo />,
        },
        {
          titleID: 'exp_10_bio_02',
          content: <AmoebaVideo />,
        },
        {
          titleID: 'exp_10_bio_01',
          content: <PhotosynthesisVideo />,
        },
        {
          titleID: 'exp_10_bio_03',
          content: <DicotVideo />,
        },
        {
          titleID: 'exp_10_bio_04',
          content: <CO2Video />,
        },
        {
          titleID: 'exp_10_bio_05',
          content: <LeafVideo />,
        },
        {
          titleID: 'exp_10_bio_06',
          content: <HomologyVideo />,
        },
        {
          titleID: 'exp_9_bio_02',
          content: <AdulternetVideo />,
        },
        {
          titleID: 'exp_9_bio_01',
          content: <CheekCellsVideo />,
        },
        {
          titleID: 'exp_9_bio_03',
          content: <AdaptationVideo />,
        },
        {
          titleID: 'exp_9_bio_04',
          content: <ImbibitionVideo />,
        },
        {
          titleID: 'exp_9_bio_05',
          content: <PATissuesVideo />,
        },
        {
          titleID: 'exp_9_bio_06',
          content: <StarchVideo />,
        },
        {
          titleID: 'exp_9_bio_07',
          content: <MosquitoVideo />,
        },
        {
          titleID: 'exp_9_bio_08',
          content: <MDPlantsVideo />,
        },
        {
          titleID: 'exp_9_bio_09',
          content: <CPlantsVideo />,
        },
        {
          titleID: 'exp_10_mat_01',
          content: <SphereVideo />,
        },
        {
          titleID: 'exp_10_mat_02',
          content: <SurfaceVideo />,
        },
        // {
        //   titleID: 'exp_10_mat_03',
        //   content: <ArcCircleVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_04',
        //   content: <CircularConeVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_05',
        //   content: <PythagorasVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_06',
        //   content: <CylinderVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_07',
        //   content: <CircleCylinderVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_08',
        //   content: <TangentsVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_09',
        //   content: <APVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_10',
        //   content: <SegmentVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_11',
        //   content: <RightCylinderVideo />,
        // },
        // {
        //   titleID: 'exp_10_mat_12',
        //   content: <RightConeVideo />,
        // },
        {
          titleID: 'exp_9_mat_01',
          content: <MidPointVideo />,
        },
        {
          titleID: 'exp_9_mat_02',
          content: <TriangleVideo />,
        },
        // {
        //   titleID: 'exp_9_mat_03',
        //   content: <TrapeziumVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_04',
        //   content: <RhombusVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_05',
        //   content: <AParallelogramVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_06',
        //   content: <CentroidVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_07',
        //   content: <CircumcentreVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_08',
        //   content: <IncentreVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_09',
        //   content: <QuadrilateralVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_10',
        //   content: <ACircleVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_11',
        //   content: <PParallelogramVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_12',
        //   content: <SimultaneousEqnVideo />,
        // },
        // {
        //   titleID: 'exp_9_mat_13',
        //   content: <LCMVideo />,
        // },
      ],
    },
    {
      title: 'Resource',
      titleDetails: [
        {
          titleID: 'exp_12_phy_01',
          content: <OhmsLawResource />,
        },
        {
          titleID: 'exp_12_phy_02',
          content: <PotentiometerResource />,
        },
        {
          titleID: 'exp_12_phy_03',
          content: <PotentiometerCellResource />,
        },
        {
          titleID: 'exp_12_phy_04',
          content: <GalvanometerResource />,
        },
        {
          titleID: 'exp_12_phy_05',
          content: <AmmeterResource />,
        },
        {
          titleID: 'exp_12_phy_06',
          content: <SonometerResource />,
        },
        {
          titleID: 'exp_12_phy_07',
          content: <ConcaveResource />,
        },
        {
          titleID: 'exp_12_phy_08',
          content: <ConvexResource />,
        },
        {
          titleID: 'exp_12_phy_09',
          content: <ConcaveFocalResource />,
        },
        {
          titleID: 'exp_12_phy_10',
          content: <SpectrometerResource />,
        },
        {
          titleID: 'exp_12_phy_11',
          content: <RefractiveResource />,
        },
        {
          titleID: 'exp_12_phy_12',
          content: <ResistanceResource />,
        },
        {
          titleID: 'exp_12_phy_13',
          content: <ResistorResource />,
        },
        {
          titleID: 'exp_12_phy_14',
          content: <DiodeResource />,
        },
        {
          titleID: 'exp_12_phy_15',
          content: <ZenerResource />,
        },
        {
          titleID: 'exp_12_phy_16',
          content: <TransistorResource />,
        },
        {
          titleID: 'exp_11_phy_01',
          content: <ScrewGaugeResource />,
        },
        {
          titleID: 'exp_11_phy_02',
          content: <VernierCaliperResource />,
        },
        {
          titleID: 'exp_11_phy_03',
          content: <PendulumResource />,
        },
        {
          titleID: 'exp_11_phy_04',
          content: <BeamResource />,
        },
        {
          titleID: 'exp_11_phy_05',
          content: <ParallelogramResource />,
        },
        {
          titleID: 'exp_11_phy_06',
          content: <SpherometerResource />,
        },
        {
          titleID: 'exp_11_phy_07',
          content: <FrictionResource />,
        },
        {
          titleID: 'exp_11_phy_08',
          content: <SpringResource />,
        },
        {
          titleID: 'exp_11_phy_09',
          content: <ViscosityResource />,
        },
        {
          titleID: 'exp_11_phy_10',
          content: <InclinedPlaneResource />,
        },
        {
          titleID: 'exp_11_phy_11',
          content: <BoyleResource />,
        },
        {
          titleID: 'exp_11_phy_12',
          content: <SurfaceTensionResource />,
        },
        {
          titleID: 'exp_11_phy_13',
          content: <YoungResource />,
        },
        {
          titleID: 'exp_11_phy_14',
          content: <ResonanceResource />,
        },
        {
          titleID: 'exp_11_phy_15',
          content: <Sonometer1Resource />,
        },
        {
          titleID: 'exp_11_phy_16',
          content: <NewtonCoolingResource />,
        },
        {
          titleID: 'exp_10_phy_01',
          content: <ResisterSeriesResource />,
        },
        {
          titleID: 'exp_10_phy_02',
          content: <ResisterParallelResource />,
        },
        {
          titleID: 'exp_10_phy_03',
          content: <ConcaveMirrorResource />,
        },
        {
          titleID: 'exp_10_phy_04',
          content: <VerifyOhmResource />,
        },
        {
          titleID: 'exp_10_phy_05',
          content: <BarMagnetResource />,
        },
        {
          titleID: 'exp_10_phy_06',
          content: <HookeResource />,
        },
        {
          titleID: 'exp_10_phy_07',
          content: <Force1Resource />,
        },
        {
          titleID: 'exp_10_phy_08',
          content: <ElectroMagnetResource />,
        },
        {
          titleID: 'exp_10_phy_09',
          content: <RefractionGlassResource />,
        },
        {
          titleID: 'exp_10_phy_10',
          content: <ReflectionMirrorResource />,
        },
        {
          titleID: 'exp_10_phy_11',
          content: <OhmResistanceResource />,
        },
        {
          titleID: 'exp_10_phy_12',
          content: <SolenoidResource />,
        },
        {
          titleID: 'exp_10_phy_13',
          content: <ConductorResource />,
        },
        {
          titleID: 'exp_9_phy_01',
          content: <BellJarResource />,
        },
        {
          titleID: 'exp_9_phy_02',
          content: <ForceResource />,
        },
        {
          titleID: 'exp_9_phy_03',
          content: <NewtonThirdResource />,
        },
        {
          titleID: 'exp_9_phy_04',
          content: <PressureResource />,
        },
        {
          titleID: 'exp_9_phy_05',
          content: <ArchimedesResource />,
        },
        {
          titleID: 'exp_9_phy_06',
          content: <SoundResource />,
        },
        {
          titleID: 'exp_9_phy_07',
          content: <DensityResource />,
        },
        {
          titleID: 'exp_9_phy_08',
          content: <NewtonSecondResource />,
        },
        {
          titleID: 'exp_9_phy_09',
          content: <VelocityResource />,
        },
        {
          titleID: 'exp_12_che_01',
          content: <EMFResource />,
        },
        {
          titleID: 'exp_12_che_02',
          content: <KMNO4Resource />,
        },
        {
          titleID: 'exp_12_che_03',
          content: <HPeroxideResource />,
        },
        {
          titleID: 'exp_12_che_04',
          content: <SSulphateResource />,
        },
        {
          titleID: 'exp_12_che_05',
          content: <InorganicResource />,
        },
        {
          titleID: 'exp_12_che_06',
          content: <OilResource />,
        },
        {
          titleID: 'exp_12_che_07',
          content: <ProteinResource />,
        },
        {
          titleID: 'exp_12_che_08',
          content: <PaperChromatographyResource />,
        },
        {
          titleID: 'exp_12_che_09',
          content: <HCLResource />,
        },
        {
          titleID: 'exp_12_che_10',
          content: <OrganicResource />,
        },
        {
          titleID: 'exp_12_che_11',
          content: <CarbohydratesResource />,
        },
        {
          titleID: 'exp_12_che_12',
          content: <EmulsionResource />,
        },
        {
          titleID: 'exp_12_che_13',
          content: <LyphobicResource />,
        },
        {
          titleID: 'exp_12_che_14',
          content: <FunctionalGroupsResource />,
        },
        {
          titleID: 'exp_12_che_15',
          content: <ThermochemistryResource />,
        },
        {
          titleID: 'exp_11_che_01',
          content: <MeltingPointResource />,
        },
        {
          titleID: 'exp_11_che_02',
          content: <BoilingPointResource />,
        },
        {
          titleID: 'exp_11_che_03',
          content: <PHResource />,
        },
        {
          titleID: 'exp_11_che_04',
          content: <EquilibriumResource />,
        },
        {
          titleID: 'exp_11_che_05',
          content: <QuantitativeResource />,
        },
        {
          titleID: 'exp_11_che_06',
          content: <CrystallisationResource />,
        },
        {
          titleID: 'exp_11_che_07',
          content: <LassaigneResource />,
        },
        {
          titleID: 'exp_11_che_08',
          content: <LabTechniquesResource />,
        },
        {
          titleID: 'exp_11_che_09',
          content: <AnionResource />,
        },
        {
          titleID: 'exp_11_che_10',
          content: <CationResource />,
        },
        {
          titleID: 'exp_10_che_02',
          content: <CombinationReactionResource />,
        },
        {
          titleID: 'exp_10_che_01',
          content: <DisplacementReactionResource />,
        },
        {
          titleID: 'exp_10_che_03',
          content: <PHStripResource />,
        },
        {
          titleID: 'exp_10_che_04',
          content: <DecompositionResource />,
        },
        {
          titleID: 'exp_10_che_05',
          content: <AcidBaseResource />,
        },
        {
          titleID: 'exp_10_che_06',
          content: <DoubleDisplacementResource />,
        },
        {
          titleID: 'exp_10_che_07',
          content: <EthanoicResource />,
        },
        {
          titleID: 'exp_10_che_08',
          content: <SaltSolsResource />,
        },
        {
          titleID: 'exp_10_che_09',
          content: <SoftHardResource />,
        },
        {
          titleID: 'exp_10_che_10',
          content: <SaponificationResource />,
        },
        {
          titleID: 'exp_9_che_01',
          content: <ChemicalReactionResource />,
        },
        {
          titleID: 'exp_9_che_02',
          content: <MeltingPointIceResource />,
        },
        {
          titleID: 'exp_9_che_03',
          content: <MixtureResource />,
        },
        {
          titleID: 'exp_9_che_04',
          content: <MixtureSeparationResource />,
        },
        {
          titleID: 'exp_9_che_05',
          content: <SolsResource />,
        },
        {
          titleID: 'exp_9_che_06',
          content: <MixtureTechniquesResource />,
        },
        {
          titleID: 'exp_9_che_07',
          content: <WaterResource />,
        },
        {
          titleID: 'exp_9_che_08',
          content: <ScatterResource />,
        },
        {
          titleID: 'exp_9_che_09',
          content: <ExothermicResource />,
        },
        {
          titleID: 'exp_9_che_10',
          content: <PeriodicTableResource />,
        },
        {
          titleID: 'exp_9_che_11',
          content: <ConservationResource />,
        },
        {
          titleID: 'exp_12_bio_01',
          content: <PollenResource />,
        },
        {
          titleID: 'exp_12_bio_02',
          content: <TurbidityResource />,
        },
        {
          titleID: 'exp_12_bio_03',
          content: <SoilStudyResource />,
        },
        {
          titleID: 'exp_12_bio_04',
          content: <AirStudyResource />,
        },
        {
          titleID: 'exp_12_bio_05',
          content: <QuadratDensityResource />,
        },
        {
          titleID: 'exp_12_bio_06',
          content: <QuadratFrequencyResource />,
        },
        {
          titleID: 'exp_12_bio_07',
          content: <OnionResource />,
        },
        {
          titleID: 'exp_12_bio_08',
          content: <SalivaResource />,
        },
        {
          titleID: 'exp_11_bio_01',
          content: <OsmosisResource />,
        },
        {
          titleID: 'exp_11_bio_02',
          content: <TranspirationResource />,
        },
        {
          titleID: 'exp_11_bio_03',
          content: <PlasmolysisResource />,
        },
        {
          titleID: 'exp_11_bio_04',
          content: <StomataResource />,
        },
        {
          titleID: 'exp_11_bio_05',
          content: <PaperChromResource />,
        },
        {
          titleID: 'exp_11_bio_06',
          content: <FlowersResource />,
        },
        {
          titleID: 'exp_11_bio_07',
          content: <MonocotResource />,
        },
        {
          titleID: 'exp_11_bio_08',
          content: <RespirationResource />,
        },
        {
          titleID: 'exp_11_bio_09',
          content: <UrineResource />,
        },
        {
          titleID: 'exp_11_bio_10',
          content: <UreaResource />,
        },
        {
          titleID: 'exp_11_bio_11',
          content: <AlbuminResource />,
        },
        {
          titleID: 'exp_11_bio_12',
          content: <BileResource />,
        },
        {
          titleID: 'exp_11_bio_13',
          content: <CPFResource />,
        },
        {
          titleID: 'exp_10_bio_02',
          content: <AmoebaResource />,
        },
        {
          titleID: 'exp_10_bio_01',
          content: <PhotosynthesisResource />,
        },
        {
          titleID: 'exp_10_bio_03',
          content: <DicotResource />,
        },
        {
          titleID: 'exp_10_bio_04',
          content: <CO2Resource />,
        },
        {
          titleID: 'exp_10_bio_05',
          content: <LeafResource />,
        },
        {
          titleID: 'exp_10_bio_06',
          content: <HomologyResource />,
        },
        {
          titleID: 'exp_9_bio_02',
          content: <AdulternetResource />,
        },
        {
          titleID: 'exp_9_bio_01',
          content: <CheekCellsResource />,
        },
        {
          titleID: 'exp_9_bio_03',
          content: <AdaptationResource />,
        },
        {
          titleID: 'exp_9_bio_04',
          content: <ImbibitionResource />,
        },
        {
          titleID: 'exp_9_bio_05',
          content: <PATissuesResource />,
        },
        {
          titleID: 'exp_9_bio_06',
          content: <StarchResource />,
        },
        {
          titleID: 'exp_9_bio_07',
          content: <MosquitoResource />,
        },
        {
          titleID: 'exp_9_bio_08',
          content: <MDPlantsResource />,
        },
        {
          titleID: 'exp_9_bio_09',
          content: <CPlantsResource />,
        },
        {
          titleID: 'exp_10_mat_01',
          content: <SphereResource />,
        },
        {
          titleID: 'exp_10_mat_02',
          content: <SurfaceResource />,
        },
        {
          titleID: 'exp_10_mat_03',
          content: <ArcCircleResource />,
        },
        {
          titleID: 'exp_10_mat_04',
          content: <CircularConeResource />,
        },
        {
          titleID: 'exp_10_mat_05',
          content: <PythagorasResource />,
        },
        {
          titleID: 'exp_10_mat_06',
          content: <CylinderResource />,
        },
        {
          titleID: 'exp_10_mat_07',
          content: <CircleCylinderResource />,
        },
        {
          titleID: 'exp_10_mat_08',
          content: <TangentsResource />,
        },
        {
          titleID: 'exp_10_mat_09',
          content: <APResource />,
        },
        {
          titleID: 'exp_10_mat_10',
          content: <SegmentResource />,
        },
        // {
        //   titleID: 'exp_10_mat_11',
        //   content: <RightCylinderResource />,
        // },
        // {
        //   titleID: 'exp_10_mat_12',
        //   content: <RightConeResource />,
        // },
        {
          titleID: 'exp_9_mat_01',
          content: <MidPointResource />,
        },
        {
          titleID: 'exp_9_mat_02',
          content: <TriangleResource />,
        },
        {
          titleID: 'exp_9_mat_03',
          content: <TrapeziumResource />,
        },
        {
          titleID: 'exp_9_mat_04',
          content: <RhombusResource />,
        },
        {
          titleID: 'exp_9_mat_05',
          content: <AParallelogramResource />,
        },
        {
          titleID: 'exp_9_mat_06',
          content: <CentroidResource />,
        },
        {
          titleID: 'exp_9_mat_07',
          content: <CircumcentreResource />,
        },
        {
          titleID: 'exp_9_mat_08',
          content: <IncentreResource />,
        },
        {
          titleID: 'exp_9_mat_09',
          content: <QuadrilateralResource />,
        },
        {
          titleID: 'exp_9_mat_10',
          content: <ACircleResource />,
        },
        {
          titleID: 'exp_9_mat_11',
          content: <PParallelogramResource />,
        },
        // {
        //   titleID: 'exp_9_mat_12',
        //   content: <SimultaneousEqnResource />,
        // },
        {
          titleID: 'exp_9_mat_13',
          content: <LCMResource />,
        },
        {
          titleID: 'pre_01',
          content: <PrepositionResource />,
        },
        {
          titleID: 'pre_03',
          content: <PrepPictureResource />,
        },
        {
          titleID: 'pre_04',
          content: <PrepDirectionResource />,
        },
        {
          titleID: 'active_02',
          content: <ActiveResource />,
        },
        {
          titleID: 'active_01',
          content: <PassiveResource />,
        },
        {
          titleID: 'comp_01',
          content: <ComprehensionResource />,
        },
        {
          titleID: 'tense_01',
          content: <TenseResource />,
        },
        {
          titleID: 'direct_01',
          content: <DirectResource />,
        },
        {
          titleID: 'direct_02',
          content: <ReportResource />,
        },
        {
          titleID: 'subverb_01',
          content: <SubVerbResource />,
        },
        {
          titleID: 'sinplu_01',
          content: <SinPluResource />,
        },
      ],
    },
    {
      title: 'Common Mistakes',
      titleDetails: [
        {
          titleID: 'pre_02',
          content: <PrepositionMistakes />,
        },
      ],
    },
  ];

  const data = [
    {
      title: 'Theory',
    },
    {
      title: 'Procedure',
    },
    {
      title: 'Animation',
    },
    {
      title: 'Simulator',
    },
    {
      title: 'Video',
    },
    {
      title: 'Resource',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  React.useEffect(() => {
    let obj = {};
    let titleData = {};
    array.forEach(data => {
      data.titleDetails.forEach((tname, i) => {
        // if topic name and title id is same
        // title will be removed and push into objct

        if (topicName == tname.titleID) {
          if (data.title.toLowerCase() !== 'title') {
            titleData[`${data.title}`] = obj[data.title] = {
              titleId: tname.titleID,
              data: tname.content,
            };
          }
        }
      });
    });
    setExpObj(titleData);
  }, []);

  const handleClick = () => {
    props.history.goBack();
  };

  React.useEffect(() => {
    drawerChanges('show');
  }, []);
  return (
    <Box p={2}>
      <div
        onClick={handleClick}
        style={{ display: 'flex', marginBottom: 10, cursor: 'pointer' }}
      >
        <ArrowBackIcon color="primary" style={{ width: 14 }} />
        <Typography color="primary" style={{ fontSize: 14 }}>
          {t('Back')}
        </Typography>
      </div>
      <Grid className={classes.mainGrid} container>
        <KenCard className={classes.subCard}>
          <Typography className={classes.subName}>
            {array &&
              array.map(item =>
                item.title == 'title' ? (
                  <Grid>
                    <Grid className={classes.cardDetails} sm={12} xs={12}>
                      {item.titleDetails &&
                        item.titleDetails.map(element =>
                          element.titleID == topicName ? element.title : ''
                        )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </Typography>
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
            {Object.keys(expObj).map((el, index) => {
              return (
                <Tab
                  classes={{ wrapper: classes.wrapper }}
                  label={el}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            {Object.entries(expObj).map((item, y) => (
              <TabPanel value={value} index={y}>
                {item.map((data, i) => {
                  if (typeof data === 'object' && data !== null) {
                    return (
                      <Grid>
                        <Grid className={classes.cardDetails} sm={12} xs={12}>
                          {data.data}
                        </Grid>
                      </Grid>
                    );
                  } else {
                    return null;
                  }
                })}
              </TabPanel>
            ))}
          </SwipeableViews>
        </KenCard>
      </Grid>
    </Box>
  );
}
