import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Cards from '../../../components/CardWidgets/FacultyCard';
import LoginImage from '../../../assets/avatar.png';
import Icon from '../../../assets/Group 717.png';
import { Link } from 'react-router-dom';
import Routes from '../../../utils/routes.json';

const data = [{
    img: LoginImage,
    name: "Pranjal Kumar ",
    post: "Asst. Professor(resident)",
    dept: "Dept. of computer Science",
    city: "Bangaluru",
    email: "pranchal@gmail.com",
    mobile: "9878546724",
    icon: Icon,
    color: 'red',
},
{
    img: LoginImage,
    name: "Devesh Chaudhary",
    post: "Asst. professor(resident)",
    dept: "Dept. of computer Science",
    city: "Bangaluru",
    email: "devesh@gmail.com",
    mobile: "9567843562",
    icon: Icon,
    color: 'green',
},
{
    img: LoginImage,
    name: "Jaihind Jonna",
    post: "Asst. professor(resident)",
    dept: "Dept. of computer Science",
    city: "Bangaluru",
    email: "jai@gmail.com",
    mobile: "9956783342",
    icon: Icon,
    color: 'yellow',
},
{
    img: LoginImage,
    name: "Manokhar",
    post: "Asst. professor",
    dept: "Dept. of computer Science",
    city: "Bangaluru",
    email: "manokhar@gmail.com",
    mobile: "95789515643",
    icon: Icon,
    color: 'blue',
},
{
    img: LoginImage,
    name: "Narendra Pratap singh",
    post: "Asst. professor",
    dept: "Dept. of computer Science",
    city: "Bangaluru",
    email: "narendra@gmail.com",
    mobile: "9678342568",
    icon: Icon,
    color: 'purple',
},];


export default function index(props) {

    const { drawerChanges } = props;
    
    React.useEffect(() => {
       drawerChanges("show");
    }, [])

    return (
        <Box>
            <Grid container spacing={2}>
                {
                    data.map(item => (
                        <Grid item xs={12} sm={6} md={4}>
                            {item && <Link to={{ pathname: `/${Routes.facultyDetails}`, state: { item } }} style={{textDecoration:"none"}} >
                                <Cards data={item} />
                            </Link>}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
