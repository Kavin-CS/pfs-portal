import React from 'react';
import {
    Box,
    Grid,
} from '@material-ui/core';
import ParentServiceCard from '../../../components/CardWidgets/Service';

const array = [{
    Heading: "Library Services",
    Description: "libraries also provide the services of librarians who are experts at finding and organizing information and at interpreting information needs",
    Url: "www.mylibraryinfo.com",
    PhoneNo: 8439923545,
}, {
    Heading: "Compliance Services",
    Description: "A confidential channel for employees to seek help on possible compliance issues",
    Url: "www.mycomplianceinfo.com",
    PhoneNo: 9786587462,
}, {
    Heading: "Trainings & Workshops",
    Description: "Training is teaching, or developing in oneself or others, any skills and knowledge or fitness that relate to specific useful competencies.",
    // Url:"www.mylibraryinfo.com",
    // PhoneNo:8439923545,
}, {
    Heading: "IT Helpdesk",
    Description: "A confidential channel for employees to seek help on possible compliance issues",
    Button: "Pay Online",
}];


export default function index() {
    return (
        <Box p={2}>
            <Grid container spacing={2}>
                {
                    array && array.map(item => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ParentServiceCard data={item} dimensions={{ minHeight: false }} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
