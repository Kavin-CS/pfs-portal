/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid, Typography } from '@material-ui/core';
import ClassroomStudentTabs from './components/ClassroomStudentTabs';




export default function ClassroomStudentPage() {


  const [value, setValue] = React.useState()

  const dropdownValue = [

    {
      option: "English",
      label: "ENGLISH",
      value: "english"

    },
    {
      option: "Biology",
      label: "BIOLOGY",
      value: "biology"

    },
    {
      option: "Physics",
      label: "PHYSICS",
      value: "physics"

    },
    {
      option: "Chemistry",
      label: "CHEMISTRY",
      value: "chemistry"

    }, {
      option: "Maths",
      label: "MATHS",
      value: "maths"

    },
    {
      option: "Computer",
      label: "COMPUTER",
      value: "computer"

    }
  ]

  return (



    <div >
      <ClassroomStudentTabs dropdownValue={dropdownValue} value={value} setValue={setValue} />
    </div>
  );


}
