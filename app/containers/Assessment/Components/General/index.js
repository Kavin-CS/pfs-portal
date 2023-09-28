import React from 'react';
import { Box, Grid } from '@material-ui/core';
import KenInputField from '../../../../components/KenInputField/index';
import KenToggleButton from '../../../../global_components/KenToggleButton/index';
import KenCheckBox from '../../../../global_components/KenCheckbox/index';
import KenLoader from '../../../../components/KenLoader';

export default function General(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldTouched,
    setFieldValue,
  } = props;

  console.log('values in assessment', values);

  const [sectionsArray, setSectionsArray] = React.useState([]);
  const [subjectsArray, setSubjectsArray] = React.useState([]);

  const change = (name, e, index) => {
    e.persist();
    handleChange(e);
    setFieldValue(name, e.target.value);
    setFieldTouched(name, true, false);
  };

  React.useEffect(() => {
    const currentSectionArray = [];
    const currentSubjectArray = [];

    setFieldValue('className', values.className);
    values.courses?.map((data, i) => {
      if (data.accountname == values.className) {
        //sections
        currentSectionArray.push(data.Section);
        let subSectionArray = [...new Set(currentSectionArray)];
        setSectionsArray(subSectionArray);

        //subjects
        currentSubjectArray.push(data.hed__Course__cName);
        let subSubjectArray = [...new Set(currentSubjectArray)];
        setSubjectsArray(subSubjectArray);
      } else {
        return null;
      }
    });
  }, [values.className]);

  return (
    <Grid sm={8} x={12}>
      <form onSubmit={values.handleChange}>
        {values.loading && <KenLoader />}
        <Box mt={2}>
          <KenInputField
            required
            label="Assessment name"
            placeholder="Enter assessment name"
            value={values.assessmentName}
            name="assessmentName"
            onChange={change.bind(null, 'assessmentName')}
            errors={errors?.assessmentName}
            setFieldTouched={setFieldTouched}
            touched={touched?.assessmentName}
          />
        </Box>
        <Box mt={3}>
          <KenInputField
            label="Description"
            multiline
            rows={5}
            value={values.descriptionDetail}
            setFieldTouched={setFieldTouched}
            name="descriptionDetail"
            onChange={change.bind(null, 'descriptionDetail')}
            errors={errors?.descriptionDetail}
            touched={touched?.descriptionDetail}
          />
        </Box>
        <Box>
          <KenCheckBox label="Display description on course page" />
        </Box>
        <Box mt={3}>
          <KenToggleButton
            onChange={newValue => {
              setFieldValue('className', newValue);
            }}
            value={values.className}
            required={true}
            setFieldTouched={setFieldTouched}
            label="Select class *"
            options={values.classesArray}
            name="className"
            exclusive={true} // we can select only one option
            variant="outline"
            errors={errors?.className}
            touched={touched?.className}
          />
        </Box>
        <Box mt={3}>
          <KenToggleButton
            onChange={newValue => {
              setFieldValue('sectionName', newValue);
            }}
            setFieldTouched={setFieldTouched}
            name="sectionName"
            value={values.sectionName}
            label="Select section * (Can select multiple)"
            options={sectionsArray}
            required={true}
            variant="outline"
            errors={errors?.sectionName}
            touched={touched?.sectionName}
          />
        </Box>
        <Box mt={3}>
          <KenToggleButton
            onChange={newValue => {
              setFieldValue('subjectName', newValue);
            }}
            name="subjectName"
            value={values.subjectName}
            label="Select Subject *"
            options={subjectsArray}
            setFieldTouched={setFieldTouched}
            required={true}
            exclusive={true} // we can select only one option
            variant="outline"
            errors={errors?.subjectName}
            touched={touched?.subjectName}
          />
        </Box>
        {/* Note: For current Feature we dont need it */}
        {/* <Box mt={3} className={classes.instructionsWrap}>
          <KenInputField
            label="Assessment Instructions *"
            multiline
            value={values.instructionContent}
            rows={5}
            onChange={change.bind(null, 'instructionContent')}
            name="instructionContent"
            value={values.instructionContent}
            errors={errors?.instructionContent}
            touched={touched?.instructionContent}
          />
        </Box> */}
      </form>
    </Grid>
  );
}
