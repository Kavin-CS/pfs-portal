import React from 'react';
import {Box} from '@material-ui/core';
import HowToCard from './components/HowToCard';


const array = [
    {
        Heading:"Import contacts from document",
        Description:"Learn about importing contracts from the best in the industry",
    },
    {
        Heading:"Upload Assignments",
        Description:"Learn about how to upload assignments in your account",
    },
    {
        Heading:"Add Assessments",
        Description:"Learn about importing contracts from the best in the industry",
    },
    {
        Heading:" Submit Asessments",
        Description:"Learn about how to submit your thoughts",
    },

   
];

export default function HowTo() {
    return (
        <Box>
            {
                array && array.map(item=>(
                    <HowToCard object={item} />
                ))
            }
        </Box>
    )
}
