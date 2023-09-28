import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import ParentServiceCard from '../../../../components/CardWidgets/Service';
import English from '../../../../assets/icons/English.svg';
import Mathematics from '../../../../assets/icons/Mathematics.png';
import Chemistry from '../../../../assets/icons/Chemistry.svg';
import Biology from '../../../../assets/icons/Biology.svg';
import Physics from '../../../../assets/icons/Physics.svg';

// import history from '../../../../utils/history';
// import { useHistory } from 'react-router-dom';

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
    padding: '20px !important',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export default function SmartContent(props) {
  const { history } = props;
  const classes = useStyles();
  // const history = useHistory();
  const { drawerChanges } = props;

  const array = [
    {
      Heading: 'PHYSICS',
      Subject: 'Physics',
      Description:
        'Physics is the branch of science that deals with the structure of matter and how the fundamental constituents of the universe interact. It studies objects ranging from the very small using quantum mechanics to the entire universe using general relativity.',
      imageURL: Physics,
    },
    {
      Heading: 'CHEMISTRY',
      Subject: 'Chemistry',
      Description:
        'Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.',
      imageURL: Chemistry,
    },
    {
      Heading: 'BIOLOGY',
      Subject: 'Biology',
      Description:
        'Biology is the natural science that studies life and living organisms, chemical processes, physiological mechanisms, development and evolution. Despite the complexity of the science, certain unifying concepts consolidate it into a single, coherent field.',
      // Url: 'www.mylibraryinfo.com',
      imageURL: Biology,
    },
    {
      Heading: 'MATHEMATICS',
      Subject: 'Mathematics',
      Description:
        'Mathematics includes the study of such topics as quantity, structure, space, and change. Mathematicians seek and use patterns to formulate new conjectures; they resolve the truth or falsity of such by mathematical proof.',
      imageURL: Mathematics,
    },

    {
      Heading: 'ENGLISH',
      Subject: 'English',
      Description:
        'English is a West Germanic language first spoken in early medieval England, which eventually became the leading language of international discourse in the 21st century. One of the ancient Germanic peoples that migrated to the area of Great Britain that later took their name, England.',
      imageURL: English,
    },
  ];

  //handleclick event for next link

  const handleClick = e => {
    console.log(e.Subject, 'e.subject');
    history.push({
      pathname: `/subjectClass/${e.Subject}`,
    });
  };

  React.useEffect(() => {
    drawerChanges('show');
  }, []);
  return (
    <Box p={2}>
      <Grid className={classes.mainGrid} container spacing={3}>
        {array &&
          array.map(item => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              onClick={() => {
                handleClick(item);
              }}
              style={{ cursor: 'pointer' }}
            >
              <ParentServiceCard
                data={item}
                dimensions={{ minHeight: false }}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
