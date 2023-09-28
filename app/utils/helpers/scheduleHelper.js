import { axiosInstance } from '../ApiService';
import { getUri } from './userAgentApplication';
import { RRuleSet, rrulestr } from 'rrule';

// const rule =
//   "DTSTART:20200701T000000Z;RRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,TH,FR;UNTIL=20201231T000000Z";

const getDatesFromRrule = (rule, startDate, endDate) => {
  try {
    const rrule = rrulestr(rule);

    const rruleSet = new RRuleSet();
    rruleSet.rrule(rrule);
    //   const arr = rruleSet.between(
    //     new Date(Date.UTC(2020, 7, 1)),
    //     new Date(Date.UTC(2020, 9, 5))
    //   );

    const arr = rruleSet.between(startDate, endDate || startDate, true);

    return arr;
  } catch (error) {
    console.log('error in schedule: ', error);
    return [];
  }
};

const transFormRrule = rule => {
  const ruleArr = rule.split(';');
  ruleArr[1] = '\n' + ruleArr[1];
  return ruleArr.join(';');
};

export const generateLink = (schedule, config) => {
  let userdetails = JSON.parse(localStorage.getItem('userDetails'));
  let link;
  if (userdetails.Type == 'Faculty') {
    link = encodeURI(
      `${config.bbbmiddleware}/virtualClass/faculty?meetingName=${
        schedule.Name
      }&meetingId=${schedule.Id}&fullName=${userdetails.Name}&courseId=${
        schedule.CourseOfferingID
      }&ContactId=${userdetails.ContactId}&starttime=${
        schedule.hed__Start_Time__c
      }&startdate=${schedule.hed__Start_Date__c}&endtime=${
        schedule.hed__End_Time__c
      }&enddate=${schedule.hed__End_Date__c}&email=${userdetails.mail}`
    );
    return link;
  } else {
    link = encodeURI(
      `${config.bbbmiddleware}/virtualClass/student?courseId=${
        schedule.CourseOfferingID
      }&studentId=${userdetails.ContactId}&starttime=${
        schedule.hed__Start_Time__c
      }&startdate=${schedule.hed__Start_Date__c}`
    );
    return link;
  }
};

export const onStartClass = (bbbLinks, toggleLoader, config) => {
  let redirect = getUri(config) + '/closetab';
  console.log(redirect);
  let data = {
    token: localStorage.getItem('access_token'),
    redirectUrl: redirect,
  };
  axiosInstance
    .post(bbbLinks, data)
    .then(result => {
      let link = result.data;
      if (link.moderatorLink) {
        toggleLoader(false);
        window.open(link.moderatorLink, '_blank');
      } else {
        console.log('Something went wrong');
        toggleLoader(false);
      }
    })
    .catch(error => {
      console.log('error', error);
      toggleLoader(false);
    });
};

export const onJoinClass = (bbbLinks, snackbar, toggleLoader) => {
  axiosInstance
    .get(bbbLinks)
    .then(result => {
      let link = result.data;
      if (link.studentLink !== 'link not found') {
        toggleLoader(false);
        var a = window.open(link.studentLink, '_blank');
      } else {
        toggleLoader(false);
        snackbar();
        toggleLoader(false);
      }
    })
    .catch(error => {
      console.log('error', error);
      toggleLoader(false);
    });
};

export const generateMeetLink = (schedule, config) => {
  let userdetails = JSON.parse(localStorage.getItem('userDetails'));
  let link;
  if (userdetails.Type == 'Faculty') {
    link = encodeURI(
      `${config.bbbmiddleware}/virtualClass/faculty?meetingName=${
        schedule.Name
      }&meetingId=${schedule.Id}&fullName=${userdetails.Name}&courseId=${
        schedule.CourseOfferingID
      }&ContactId=${userdetails.ContactId}&starttime=${
        schedule.hed__Start_Time__c
      }&startdate=${schedule.hed__Start_Date__c}&endtime=${
        schedule.hed__End_Time__c
      }&enddate=${schedule.hed__End_Date__c}`
    );
    return link;
  } else {
    link = encodeURI(
      `${config.bbbmiddleware}/virtualClass/student?courseId=${
        schedule.CourseOfferingID
      }&studentId=${userdetails.ContactId}&starttime=${
        schedule.hed__Start_Time__c
      }&startdate=${schedule.hed__Start_Date__c}`
    );
    return link;
  }
};

export { transFormRrule, getDatesFromRrule };
