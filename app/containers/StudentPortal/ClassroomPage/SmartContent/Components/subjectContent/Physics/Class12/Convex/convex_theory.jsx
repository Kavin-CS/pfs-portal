import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ConvexThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Convex1/conv-the1.jpg';
import ConvexThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Convex1/conv-the2.jpg';
import ConvexThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Convex1/conv-the3.png';


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
      <h1 className={classes.headTag}>Our Objective:</h1>

      <p>To find the focal length of a convex mirror using a convex lens.</p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2 className={classes.secondaryTag}>Convex mirror</h2>

      <p>
        A convex mirror is a curved mirror in which the reflecting surface
        bulges towards the light source. Convex mirrors reflect light outwards;
        therefore they are not used to focus light. A convex mirror is also
        known as fish eye mirror or diverging mirror.
        <br />
        The image formed by a convex lens is virtual and erect, since the focal
        point (F) and the centre of curvature (2F) are both imaginary points
        "inside" the mirror that cannot be reached. As a result, images formed
        by these mirrors cannot be projected on a screen, since the image is
        inside the mirror. Therefore, its focal length cannot be determined
        directly. The image is smaller than the object, but gets larger as the
        object approaches the mirror. The ray diagram of a convex mirror is
        shown below.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ConvexThe1} />
      </p>

      <p>
        The focal length of a convex mirror can be determined by introducing a
        convex lens between the object and the convex mirror. An image can be
        obtained with the help of a convex lens side by side with the object
        when the convex mirror reflects the rays along the same path, i.e., when
        the rays fall normally on the mirror. Then, the radius of curvature, R,
        of the mirror is the distance between the screen and the mirror.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={ConvexThe2} />
      </p>

      <p>
        The focal length f of the convex mirror is calculated using the formula,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={ConvexThe3}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <p>Students understand the following terms:</p>

      <ul>
        <li>Convex mirror</li>
        <li>Focal point</li>
        <li>Radius of curvature</li>
      </ul>

      <p>
        Students are better able to do the experiment in the real laboratory
        once they understand the procedure.
      </p>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Convex Mirror - Focal Length. Retrieved
          19 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=243&cnt=1
        </Typography>
      </div>

      
    </div>
  );
}
