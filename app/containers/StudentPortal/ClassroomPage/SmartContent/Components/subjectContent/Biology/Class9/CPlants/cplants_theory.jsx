import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CPlantsThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/CPlants1/cplants-the1.gif';
import CPlantsThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/CPlants1/cplants-the2.gif';
import CPlantsThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/CPlants1/cplants-the3.gif';
import CPlantsThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/CPlants1/cplants-the4.gif';
import CPlantsThe5 from '../../../../../../../../../assets/Images/Subjects/Biology/CPlants1/cplants-the5.gif';

import CPlantsThe7 from '../../../../../../../../../assets/Images/Subjects/Biology/CPlants1/cplants-the7.jpg';

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
      <h1 className={classes.headTag}>Objectives:&nbsp;</h1>

      <ol>
        <li>
          Study the characteristics of spirogyra, agaricus, moss, fern, pinus
          (either with male or female cones) and an angiosperm (White
          Orchid-tree).
        </li>
        <li>Identify two features that indicate the group they belong to.</li>
      </ol>

      <h1 className={classes.headTag}>Theory:</h1>

      <p>
        <strong>
          The kingdom Plantae consists of different types of plants that are
          eukaryotic, multicellular organisms having photosynthetic pigments and
          cell walls.
        </strong>
      </p>

      <p>
        Plants are classified in several different ways based on various
        external and internal characteristics. Based on these characteristics,
        plants are classified into multicellular groups such as thalophytes,
        bryophytes, pteridophytes, gymnosperms and angiosperms. We will look at
        spirogyra, agaricus, moss, fern, pinus and an angiosperm (White
        Orchid-tree), to identify their characteristics and classify them into
        the respective groups.
      </p>

      <h2 className={classes.secondaryTag}>Spirogyra (Pond Silk)</h2>

      <p>
        <strong>
          Sub-kingdom: Cryptogamae; Division: Thallophyta; Group: Chlorophyta
        </strong>
      </p>

      <p>
        <img alt="" src={CPlantsThe1} />
      </p>

      <p>
        Thalophytes are the simplest plants and do not have a
        well-differentiated body design. The body design is called ‘thallus’ as
        it is unicellular and non-jacketed. The vascular system and embryo stage
        is absent in their life cycle.
      </p>

      <p>
        The plants included in this group are commonly known as
        <strong> algae,</strong> usually found in water or in moist regions.{' '}
        <strong>
          The plants in this group do not bear flowers, but they contain
          chlorophyll and prepare their own food.
        </strong>
      </p>

      <h3 className={classes.secondaryTag}>Characteristics of Spirogyra</h3>

      <p>
        Spirogyra is a filamentous green algae that is seen in fresh water
        bodies such as ditches, ponds and lakes. It is commonly called water
        silk. Spirogyra measures approximately 10 to 100μm in width and may
        stretch centimetres long.
      </p>

      <p>
        Each filament is unbranched and consists of cylindrical cells placed end
        to end. These cells have one or more beautiful spiral chloroplasts, so
        they appears dark green.
      </p>

      <p>
        The cell wall is two layered and made up of cellulose and pectin. Pectin
        dissolves in water and makes the filament slimy to touch.
      </p>

      <p>
        The cytoplasm lies in the periphery of the cell enclosing a vacuole at
        the centre. The nucleus is located at the centre of the cell and is
        suspended from strands of cytoplasm from the cell periphery.
      </p>

      <h3 className={classes.secondaryTag}>Identifying features:</h3>

      <ol>
        <li>
          Contains chlorophyll in quantities that are as high as those found in
          plants.
        </li>
        <li>Grows mostly in fresh water bodies.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Agaricus (Mushroom)</h2>

      <p>
        <strong>
          Sub-kingdom: Cryptogamae; Division: Thallophyta; Group: Fungi
        </strong>
      </p>

      <p>
        <img alt="" src={CPlantsThe2} />
      </p>

      <p>
        Fungus is a eukaryotic organism classified as a separate kingdom and is
        not grouped under plants, animals and bacteria. This kingdom includes
        microorganisms such as yeasts, moulds and mushrooms. Fungal cells have
        cell walls that contain chitin, unlike the cell walls of plants, which
        contain cellulose.
      </p>

      <p>
        Fungi lack chloroplasts and are heterotrophic organisms, and so require
        preformed (previously formed) organic compounds as energy sources. These
        organic compounds have already been made by plants, bacteria, fungi, or
        other animals; they are 'preformed', so to speak, by those other
        organisms.
      </p>

      <h3 className={classes.secondaryTag}>Characteristics of Agaricus sp. (Mushroom)</h3>

      <p>
        Agaricus is a fleshy saprophytic fungus with over 300 species and&nbsp;
        contains both edible and poisonous species. It is found in wet and damp
        climates. It grows on wood and in humus-rich soil.
      </p>

      <p>
        The upper part which is visible above ground is called basidiocarp. It
        consists of a fleshy cap called pileus. Horizontal groove-like
        structures called gills or lamellae are present on the lower surface of
        the cap. The gills bear club shaped basidia on either side, which
        contain spores called basidiospores. Below the cap is a stalk or stipe
        (stem) which has a ring-like structure called annulus. This gets cut off
        from the margin of the cap during its development.
      </p>

      <h3 className={classes.secondaryTag}>Identifying features:</h3>

      <ol>
        <li>Agaricus does not possess chlorophyll pigment.</li>
        <li>
          It is saprophytic in nutrition, which means that it obtains its
          nutrients from non-living organic matter.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Moss (Funaria)</h2>

      <p>
        <strong>Sub-kingdom: Cryptogamae; Division: Bryophyta</strong>
      </p>

      <p>
        Bryophytes do not have true vascular tissues and are therefore called
        'non-vascular plants'. They, however, have the embryo stage present in
        their life cycle. Bryophytes do not have flowers or seeds and reproduce
        through spores.
      </p>

      <p>
        Plants in this group have stems and leaves, but no roots. They
        have&nbsp; root like structures called ‘rhizoids’. Rhizoids help the
      </p>

      <p>
        <img alt="" src={CPlantsThe3} />
      </p>

      <p>
        plant to anchor itself to a surface, but they do&nbsp;not absorb
        nutrients from the soil as roots do in other plants.
      </p>

      <h3 className={classes.secondaryTag}>Characteristics of Mosses</h3>

      <p>
        Moss grows on moist brick walls, on sidewalks, and as thick mats on
        forest floors. It is green, erect and is differentiated into leaves,
        axis and rhizoids. The main body of an adult plant is called a
        gametophyte. The rhizoids that anchor the plant are multicellular and
        branched with oblique septa.
      </p>

      <p>
        Mosses are bisexual. The same plant bears the female reproductive organ
        (archegonia) and male reproductive organ (antheridia). Mosses reproduce
        in a unique way. The first generation moss, the gametophyte, produces a
        sperm and an egg that come together and grow into the next generation
        sporophyte. The female branch of the older moss plants bears the
        sporophyte that has no chlorophyll and lives on a gametophyte.
      </p>

      <p>
        The sporophyte dries and releases spores that grow into a new generation
        of gametophytes. The sporophyte is the organ for asexual reproduction
        and consists of a foot, seta and capsule. The capsule is a beak like
        structure found on top of a thin stalk and produces the spores. Mosses
        show alternation of generation between gametophytic and sporophytic
        generations though the plant has a gametophyte dominant cycle.
      </p>

      <h3 className={classes.secondaryTag}>Identifying features:</h3>

      <ol>
        <li>Funaria is a non- vascular plant.</li>
        <li>
          It bears male and female, as well as asexual organs, on the same
          plant.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Fern (Dryopteris)</h2>

      <p>
        <strong>Sub-kingdom: Cryptogamae; Division: Pteridophyta</strong>
      </p>

      <p>
        Pteridophytes are vascular plants. The plants in this group contain
        roots, stems and leaves, but do not produce flowers and seeds. The adult
        plant body is a saprophyte. It shows differentiation into true roots,
        stems and leaves. The stem is mostly herbaceous. Leaves may be small or
        large. Vascular tissues are present in all the vegetative parts of the
        plant body. Reproduction involves production of spores inside special
        structures called sporangia that can be found on the ventral surface of
        fertile leaves called sporophylls. Sporangia may sometimes be found in
        groups called sori.
      </p>

      <p>
        <img alt="" src={CPlantsThe4} />
      </p>

      <p>Characteristics of Fern (Dryopteris)</p>

      <p>
        Ferns are found in humid and shady places, both in tropical and
        subtropical climates. They can also be found in aquatic habitats. Ferns
        are vascular plants having xylem and phloem. Like all vascular plants,
        they have stems, leaves and roots.
      </p>

      <p>
        The stem is short, stout and mostly an underground creeping rhizome. In
        some species the stem is above the ground and is erect and woody. From
        the adventitious buds on the stem arise large, compound leaves called
        fronds. Leaves are of three types:
      </p>

      <ol>
        <li>
          <strong>Trophophyll </strong>- A leaf that does not produce spores,
          but produces only sugars by photosynthesis.
        </li>
        <li>
          <strong>Sporophyll </strong>- A leaf that produces spores and also
          sugars by photosynthesis. The leaves are similar to the scales of pine
          cones or to stamens and pistil in angiosperms.
        </li>
        <li>
          <strong>Brophophyll </strong>- A leaf that produces very large amounts
          of spores. These leaves are larger than other leaves and resemble
          trophophylls.
        </li>
      </ol>

      <p>
        Clusters of adventitious roots arise from the underside of the stem near
        each node. Ferns reproduce through spores, and have neither seeds nor
        flowers. Like all vascular plants, ferns have a life cycle that sees
        alternation of generations, although the plant has a sporophyte dominant
        cycle.
      </p>

      <h3 className={classes.secondaryTag}>Identifying features</h3>

      <ol>
        <li>
          Ferns are vascular plants having xylem and phloem for conduction of
          food and water.
        </li>
        <li>
          They have stems, leaves and roots, and the adult plant is sporophytic
          dominant.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Pinus (Pine)</h2>

      <p>
        <strong>Sub-kingdom: Phanerogamae; Division: Gymnospermae</strong>
      </p>

      <p>
        Gymnosperms are seed producing plants. The word gymnosperm comes from
        the Latin word ‘gymnospermos’ meaning ‘naked seeds’, which means the
        plants bear naked seeds which are exposed to the environment.Gymnosperm
        seeds develop either on the surface of scale or leaf-like appendages of
        cones, or at the end of short stalks. The cones are the reproductive
        organs of the plants. Gymnosperms do not have the ability to make
        flowers.
      </p>

      <p>
        <img alt="" src={CPlantsThe5} />
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>Characteristics of Pinus (Pine)</h3>

      <p>
        The Pine is a tall evergreen tree found mostly in hilly areas in
        tropical and temperate climates. It is a vascular plant having well
        developed xylem and phloem.
      </p>

      <p>
        The stem is covered with bark, is thick and bears long and short
        branches. The long branches arise from the main stem and have unlimited
        growth and bear scale leaves. The short branches arise from the scale
        leaves of the long branches and have limited growth. They bear needle
        like leaves.
      </p>

      <p>The adult pine has two types of leaves:</p>

      <ol>
        <li>
          The scale leaves, that are small, brown and are non-photosynthetic.
          They are arranged spirally.
        </li>
        <li>
          The adult needle-like leaves are green and photosynthetic. These
          needle-like leaves are bundled in clusters of 1 to 6 or 2 to 5, called
          fascicles. Each fascicle is produced from a small bud on a short
          branch in the axil of a scale leaf.
        </li>
      </ol>

      <p>
        <strong>The pine tree has taproots.</strong> It is monoecious, which
        means the tree bears both the male and female cones. It produces naked
        seeds that are not enclosed in a fruit. A pine tree produces two types
        of spores- the microspores seen on male cones and megaspores seen on
        female cones. Hence, they are heterosporic.
      </p>

      <p>
        <strong>Male Cones</strong>
      </p>

      <p>
        Male cones are borne in clusters in the axil of the scale leaves of the
        long branches. A mature cone is dark brown in colour and ovoid in shape.
        A male cone consists of numerous spore bearing leaves, the
        microsporophylls, that are arranged spirally on the central axis.
      </p>

      <p>
        Each microsporophyll has a stalk, a broad lamina and a tip curved
        upwards to fit over the microsporophyll above it. It bears two sporangia
        on its lower surface. The sporangia are filled with numerous winged
        microspores. The wings help the pollen grains to be carried by the wind
        that reach the ovules (megasporangia) in the female cones.
      </p>

      <p>
        <strong>Female cones</strong>
      </p>

      <p>
        A female cone is brown in colour, woody in structure and found in groups
        of 2 to 4 in the axil of the scale leaves of the long branches. Branches
        that bear male cones do not bear female cones. It contains 80-90 bract
        scales arranged spirally on the central axis. In the axils of each bract
        scale an ovuliferous scale is present, called the microsporophyll. It
        bears two ovules on the upper surface. The ovules contain eggs that are
        fertilised by the winged pollen grains released by the microsporangia of
        the male cone.
      </p>

      <h3 className={classes.secondaryTag}>Identifying features:</h3>

      <ol>
        <li>
          The seeds are naked, which means they are not enclosed in an ovary or fruit.
        </li>
        <li>The reproductive organs are the cones.</li>
      </ol>

      <h2 className={classes.secondaryTag}>White Orchid-tree (Bauhinia acuminata)</h2>

      <p>
        <strong>
          Sub-kingdom: Phanerogamae; Division: Angiospermae; Class:
          Dicotyledonae
        </strong>
      </p>

      <p>
        Angiosperms are flowering plants and are the most diverse group of land
        plants, with a vascular system. Angiosperms have stems, roots, and
        leaves. They produce seeds that are enclosed within a fruit. Angiosperms
        bear flowers that are reproductive organs. Flowering plants are divided
        into two major groups, or classes on the basis of the number of
        cotyledons present in the seed, the Monocots and Dicots. Monocot seeds
        have one cotyledon and dicot seeds having two cotyledons. The cotyledons
        are enclosed in an embryo.
      </p>

      <h3 className={classes.secondaryTag}>
        Characteristics of White Orchid-tree (Bauhinia acuminata)
        <img alt="" src={CPlantsThe7} />
      </h3>

      <p>
        Bauhinia acuminata is a species of flowering plant native to tropical
        south eastern Asia. It grows two to three meters tall and is a
        semi-deciduous large shrub or small tree with white butterfly-like
        flowers. This shrub is drought tolerant. Bauhinia acuminata is very
        sensitive to cold winds.
      </p>

      <p>
        Like the other Bauhinia species, the leaves are bilobed and shaped like
        an ox’s hoof. Its leaves are sessile and have a reticulate venation.
      </p>

      <p>The flowers have five petals and so are pentamerous.</p>

      <p>
        The seeds are enclosed inside the fruit. A member of the bean family,
        the orchid tree produces flattened brown woody legumes (pea shaped pods)
        with 4 to 6 seeds in each pod.
      </p>

      <p>
        The root system is a tap root system with a number of root hairs
        emerging from it.
      </p>

      <h3 className={classes.secondaryTag}>Identifying features</h3>

      <ol>
        <li>
          The leaves of Bauhinia acuminata are bilobed and shared like an ox’s
          hoof.
        </li>
        <li>It produces flattened pea shaped pods with seeds in them.</li>
      </ol>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ol>
        <li>
          Students understand terms like thalophytes, bryophytes, pteridophytes,
          gymnosperms, angiosperms.
        </li>
        <li>
          Students will be able to identify the features of the different
          divisions of the kingdom Plantae.
        </li>
        <li>
          Students understand the characteristics of spirogyra, agaricus, moss,
          fern, pinus and angiospermic plants.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Characteristics of Plants. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=130&cnt=1
        </Typography>
      </div>
    </div>
  );
}
