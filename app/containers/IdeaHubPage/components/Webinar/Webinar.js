import React from 'react';
import {Box} from '@material-ui/core';
import VideoImg from '../../../../assets/Images/Rectangle 221.svg';
import AvatarImg from '../../../../assets/Avatar/Avatar4.svg';
import WebinarCard from './WebinarCard';


const array = [
    {
        Video:VideoImg,
        Details:"Code Gladiators reveals the best coding talent from start-ups ",
        Avatar:AvatarImg,
        AvatarName:"Dean Elger",
        AvatarPost:"Project Manager, MS Research UK ...",
    },
    {
        Video:VideoImg,
        Details:"Martin reveals how to improve the coding skills ",
        Avatar:AvatarImg,
        AvatarName:"Patrix Martin",
        AvatarPost:"Project Manager, Physics Research USA ...",
    },
    {
        Video:VideoImg,
        Details:"Smith reveals how to survive in start ups ",
        Avatar:AvatarImg,
        AvatarName:"Greame Smith",
        AvatarPost:"Project Manager, MS Research India ...",
    },
];

export default function Webinar() {
    return (
        <Box>
            {
                array && array.map(item=>(
                    <WebinarCard object={item} />
                ))
            }
        </Box>
    )
}
