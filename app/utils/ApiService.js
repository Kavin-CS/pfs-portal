import axios from 'axios';
import moment from 'moment';
import UrlEndPoints from './urlEndPoints.json';
import {
  KEY_ACCESS_TOKEN,
  KEY_CONFIG_URL,
  KEY_DATE_FORMAT,
  TOKEN_URL_REPORT_CARD,
} from './constants';

let appConfig;
export let axiosInstance;
const configUrl = KEY_CONFIG_URL;
let paymentInstance;
let integrationInstance;

const getInsConfig = config => {
  return config;
};

export const getAxiosInstance = async data => {
  appConfig = data[0]?.config;
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = axios.create({
    baseURL: `${appConfig.apiBaseUrl}`,
    timeout: 15000,
  });

  axiosInstance.interceptors.request.use(req => {
    const token = localStorage.getItem(KEY_ACCESS_TOKEN);
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });

  //Response interceptor for API calls
  axiosInstance.interceptors.response.use(
    resp => {
      return resp;
    },
    async function(error) {
      console.log('ApiService: Interceptor: ', error);
      if (!error.response?.config && error.response?.status !== 401) {
        return error;
      }
      var config = {
        method: 'get',
        // baseURL: `${appConfig.apiBaseUrl}/token?grant_type=client_credentials`,
        // headers: {
        //   Authorization: `Basic ${appConfig.tokenHeader}`,
        // },
        baseURL: `${appConfig.tokenUrl}`,
      };
      return axios(config).then(function(response) {
        localStorage.setItem(KEY_ACCESS_TOKEN, response.data.access_token);
        error.response.config.headers['Authorization'] = `Bearer ${
          response.data.access_token
        }`;
        return axios(error.response.config);
      });
    }
  );
};

export const getIntegrationInstance = async data => {
  appConfig = await getInsConfig(data[0].config);
  integrationInstance = axios.create({
    baseURL: `${appConfig.bbbmiddleware}`,
    timeout: 15000,
  });

  integrationInstance.interceptors.request.use(req => {
    const token = localStorage.getItem(KEY_ACCESS_TOKEN);
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });

  //Response interceptor for API calls
  integrationInstance.interceptors.response.use(
    resp => {
      return resp;
    },
    async function(error) {
      var config = {
        method: 'get',
        baseURL: `${appConfig.tokenUrl}`,
      };
      return axios(config).then(function(response) {
        localStorage.setItem(KEY_ACCESS_TOKEN, response.data.access_token);
        error.response.config.headers['Authorization'] = `Bearer ${
          response.data.access_token
        }`;
        return axios(error.response.config);
      });
    }
  );
};

export const createQuiz = async data => {
  const res = await axios.post(
    `${appConfig.lmsURL}/${UrlEndPoints.createQuiz}`,
    data,
    {
      headers: {
        Authorization: `${appConfig.lmsToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  return res && res.data ? res.data : null;
};

export const getPaymentInstance = async data => {
  appConfig = await getInsConfig(data[0].config);
  paymentInstance = await axios.create({
    baseURL: `${appConfig.paymentBaseUrl}`,
    timeout: 15000,
  });
};

// Request interceptor for API calls

const ApiService = (method, url, config = null) => {
  switch (method) {
    case 'get':
      return axiosInstance.get(url);

    case 'post':
      return axiosInstance.post(url, config.body || {});

    case 'put':
      return axiosInstance.post(url, config.body ? config.body : null);

    case 'delete':
      return axiosInstance.delete(url);

    default:
      console.log('axios default: ', method, url, config);
      break;
  }
};

export const PaymentApiService = (method, url, config = null) => {
  switch (method) {
    case 'get':
      return paymentInstance.get(url);

    case 'post':
      return paymentInstance.post(url, config.body || {});

    case 'put':
      return paymentInstance.post(url, config.body ? config.body : null);

    case 'delete':
      return paymentInstance.delete(url);

    default:
      console.log('axios default: ', method, url, config);

      break;
  }
};

export const getWhoAmI = async contactId => {
  const res = await axiosInstance.get(
    `/${UrlEndPoints.WhoAmI}?emailId=${contactId}`
  );
  return res && res.data ? res.data : null;
};

export const authenticate = async email => {
  const res = await axiosInstance.get(
    `/${UrlEndPoints.authenticate}?UniqueId=${email}`
  );
  return res && res.data ? res.data : null;
};

export const getStudentDetails = async contactId => {
  const res = await axiosInstance.get(`/${UrlEndPoints.contact}/${contactId}`);
  return res && res.data ? res.data : null;
};

export const getFacultyDetails = async academicProgramId => {
  const res = await axiosInstance.get(
    `${UrlEndPoints.faculty}/${academicProgramId}`
  );
  return res && res.data ? res.data : null;
};

export const getAllCourses = async (contactId, programId) => {
  const res = await axiosInstance.get(
    `${UrlEndPoints.getallcourse}/${contactId}/${programId}`
  );
  return res && res.data ? res.data : null;
};

export const getSchedule = async contactId => {
  const res = await axiosInstance.get(
    `/${UrlEndPoints.whyiamhere}/${contactId}`
  );

  return res && res.data ? res.data : null;
};

export const getEvents = async ContactID => {
  const res = await axiosInstance.get(`/${UrlEndPoints.event}/${ContactID}`);
  return res && res.data ? res.data : null;
};

export const getStudents = async courseOfferingId => {
  const path = `/${UrlEndPoints.getstudent}/${courseOfferingId.trim()}`;
  const res = await axiosInstance.get(path);
  return res && res.data ? res.data : null;
};

export const getStudentsBySection = async (programPlanId, section) => {
  const path = `/${
    UrlEndPoints.studentBySection
  }/${programPlanId.trim()}/${section}`;
  const res = await axiosInstance.get(path);
  return res && res.data ? res.data : null;
};

export const postAttendance = async data => {
  const res = await axiosInstance.post(
    `/${UrlEndPoints.submit_attendance}`,
    data
  );
  return res && res.data ? res.data : null;
};

// get courses for faculty
export const getCourses = async facultyID => {
  const path = `/${UrlEndPoints.getcourse}/${facultyID?.trim()}`;
  const res = await axiosInstance?.get(path);
  return res && res.data ? res.data : null;
};

// get grade details
export const getGradeDetails = async () => {
  const path = `/${UrlEndPoints.gradeType}`;
  const res = await axiosInstance?.get(path);
  return res && res.data ? res.data : null;
};

// get exam details
export const getExamDetails = async () => {
  const path = `/${UrlEndPoints.examType}`;
  const res = await axiosInstance?.get(path);
  return res && res.data ? res.data : null;
};

// scholastic grade distribution

export const getScholasticGrade = async () => {
  const path = `/${UrlEndPoints.scholasticGradeDistribution}`;
  const res = await axiosInstance.get(path);
  return res && res.data ? res.data : null;
};

export const getCoScholasticGrade = async () => {
  const path = `/${UrlEndPoints.coScholasticGradeDistribution}`;
  const res = await axiosInstance.get(path);
  return res && res.data ? res.data : null;
};

export const getMarketplaceURL = async params => {
  const path = `/${UrlEndPoints.marketplace}`;
  const res = await integrationInstance.get(`${path}?${params}`);
  return res && res.data ? res.data : null;
};

//Get payment schedule
export const getPaymentSchedule = async (contactId, orgID) => {
  const path = `/${
    UrlEndPoints.pendingFees
  }/${contactId.trim()}?orgId=${orgID.trim()}`;
  const res = await paymentInstance.get(path);
  return res && res.data ? res.data : null;
};

//Get payment history
export const getPaymentHistory = async (contactId, orgID) => {
  const path = `/${
    UrlEndPoints.paymentHistory
  }/${contactId.trim()}?orgId=${orgID.trim()}`;
  const res = await paymentInstance.get(path);
  return res && res.data ? res.data : null;
};

export const payNow = async data => {
  const path = `/${UrlEndPoints.paynow}?orgId=${appConfig.orgID}`;
  const res = await paymentInstance.post(path, data);
  return res && res.data ? res.data : null;
};

export const addPay = async data => {
  const path = `/${UrlEndPoints.addPayment}`;
  const res = await paymentInstance.post(path, data);
  return res && res.data ? res.data : null;
};

export const feesInfo = async (contactID, orgID) => {
  const path = `/${
    UrlEndPoints.feesinfo
  }/${contactID.trim()}?orgId=${orgID.trim()}`;
  const res = await paymentInstance.get(path);
  return res && res.data ? res.data : null;
};

export const getParentDetails = async phoneNo => {
  const path = `/${UrlEndPoints.parent}/${phoneNo.trim()}`;
  const res = await axiosInstance.get(path);
  return res && res.data ? res.data : null;
};

export const facultyActivities = async (
  contactID,
  connectionID,
  startDate,
  endDate
) => {
  startDate =
    startDate ||
    moment()
      .subtract(6, 'month')
      .format(KEY_DATE_FORMAT)
      .toLowerCase();
  endDate =
    endDate ||
    moment()
      .add(6, 'months')
      .format(KEY_DATE_FORMAT)
      .toLowerCase();
  const data = {
    useridnumber: contactID,
    connectionid: connectionID,
    modtype: '',
    startdate: startDate,
    enddate: endDate,
  };
  const res = await axios.post(
    `${appConfig.lmsURL}/${UrlEndPoints.activities}`,
    data,
    {
      headers: {
        Authorization: `${appConfig.lmsToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  return res && res.data ? res.data : null;
};

export const StudentActivities = async (
  contactID,
  connectionID,
  startDate,
  endDate
) => {
  startDate =
    startDate ||
    moment()
      .subtract(6, 'month')
      .format(KEY_DATE_FORMAT)
      .toLowerCase();
  endDate =
    endDate ||
    moment()
      .add(6, 'months')
      .format(KEY_DATE_FORMAT)
      .toLowerCase();
  const data = {
    useridnumber: contactID,
    connectionid: connectionID,
    modtype: '',
    startdate: startDate,
    enddate: endDate,
  };
  const res = await axios.post(
    `${appConfig.lmsURL}/${UrlEndPoints.studentactivities}`,
    data,
    {
      headers: {
        Authorization: `${appConfig.lmsToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  return res && res.data ? res.data : null;
};

export const getConfig = async () => {
  const path = `${window.location.host}`;
  //   const path = 'dev-parentportal.ken42.com';
  // const path = 'dev-portal.ken42.com';
  // const path = 'vkgi-stg-portal.ken42.com';
  const res = await axios.get(`${configUrl}/${path}`);
  return res && res.data ? res.data : null;
};

export const putAccountDetails = async (studentId, data) => {
  const path = `${UrlEndPoints.accountDetails}`;
  const res = await axios.put(
    `${appConfig.paymentBaseUrl}/${path}/${studentId}`,
    data
  );
  return res && res.data ? res.data : null;
};

export const getAccountDetails = async studentId => {
  const path = `${UrlEndPoints.accountDetails}`;
  const res = await axios.get(
    `${appConfig.paymentBaseUrl}/${path}/${studentId}?orgId=${appConfig.orgID}`
  );
  return res && res.data ? res.data : null;
};

export const getOtp = async params => {
  const path = `otp`;
  const res = await axiosInstance.get(`${appConfig.smsURL}/${path}?${params}`);
  return res && res.data ? res.data : null;
};

export const subscribe = async data => {
  const path = `notification/subscribeWeb`;
  const res = await axiosInstance.post(
    `${appConfig.firebaseBaseURL}/${path}`,
    data
  );
  return res && res.data ? res.data : null;
};

export const unsubscribe = async data => {
  const path = `notification/unsubscribeWeb`;
  const res = await axiosInstance.post(
    `${appConfig.firebaseBaseURL}/${path}`,
    data
  );
  return res && res.data ? res.data : null;
};

export const getValidateOtp = async params => {
  const path = `/validateotp`;
  const res = await axiosInstance.get(`${appConfig.smsURL}/${path}?${params}`);
  return res && res.data ? res.data : null;
};

// TODO: remove hardcode
export const sendMail = async data => {
  const path = `email`;
  const res = await axiosInstance.post(
    `https://api.ken42.com/vks/pfs/v1/${path}`,
    data
  );
  return res && res.data ? res.data : null;
};

export const getAllEvents = async params => {
  const res = await axiosInstance.get(`${appConfig.apiBaseUrl}/event`);
  return res && res.data ? res.data : null;
};

export const getAllRegisterEvents = async contactId => {
  const res = await axiosInstance.get(
    `${appConfig.apiBaseUrl}/event/${contactId}`
  );
  return res && res.data ? res.data : null;
};
export const getReportCardDetails = async (
  contactId,
  programEnrollmentId,
  loginContactId
) => {
  const path = `report/details`;
  const res = await axiosInstance.get(
    `${
      appConfig.bbbmiddleware
    }/${path}?contactId=${contactId}&programEnrollmentId=${programEnrollmentId}&loginContactId=${loginContactId}`
  );
  return res && res.data ? res.data : null;
};

// Query Comments

export const getCommentsById = async id => {
  if (!id) return;
  const path = `/${UrlEndPoints.comments}/${id}`;
  const res = await axiosInstance.get(path);
  return res && res.data ? res.data : null;
};

export const postComments = async (ContactId, Comment, ParentId) => {
  const path = `/${UrlEndPoints.comments}`;
  const res = await axiosInstance.post(path, { ContactId, Comment, ParentId });
  return res && res.data ? res.data : null;
};
export const postBreakdownMarks = async data => {
  const path = '/submit-additional-grade-pfs';
  const res = await axiosInstance.post(`${path}`, data);
  return res && res.data ? res.data : null;
};

export const getEventDetails = async (eventId, contactId) => {
  const res = await axiosInstance.get(
    `${appConfig.apiBaseUrl}/eventsubsciber/${eventId}/${contactId}`
  );
  return res && res.data ? res.data : null;
};

export const registersEvent = async payload => {
  const res = await axiosInstance.post(
    `${appConfig.apiBaseUrl}/subscribeevent`,
    payload
  );
  return res && res.data ? res.data : null;
};

export const unRegistersEvent = async eventId => {
  const res = await axiosInstance.delete(
    `${appConfig.apiBaseUrl}/unsubscibeevent/${eventId}`
  );
  return res && res.data ? res.data : null;
};

export const postScholasticMarks = async data => {
  const path = '/submit-main-grade-pfs';
  const res = await axiosInstance.post(`${path}`, data);
  return res && res.data ? res.data : null;
};

export const postScholasticMainMarks = async data => {
  const path = '/submit-grade-pfs';
  const res = await axiosInstance.post(`${path}`, data);
  return res && res.data ? res.data : null;
};

export const postCoScholasticMarks = async data => {
  const path = '/submit-coscholastic-pfs';
  const res = await axiosInstance.post(`${path}`, data);
  return res && res.data ? res.data : null;
};

export const getStudentListDetails = async (
  courseOfferingId,
  loginContactId
) => {
  const path = `/report/grades`;
  const res = await axiosInstance.get(
    `${
      appConfig.bbbmiddleware
    }${path}?courseOfferingId=${courseOfferingId}&loginContactId=${loginContactId}`
  );
  return res && res.data ? res.data : null;
};

export const getSignature = async (programEnrollmentId, fileName) => {
  const path = `/report/signature`;
  const res = await axiosInstance.get(
    `${
      appConfig.bbbmiddleware
    }${path}?programEnrollmentId=${programEnrollmentId}&fileName=${fileName}`
  );
  return res && res.data ? res.data : null;
};

export const uploadSignature = async (programEnrollmentId, fileName, data) => {
  const path = `/report/signature`;

  const apiUrl = `${
    appConfig.bbbmiddleware
  }${path}?programEnrollmentId=${programEnrollmentId}&fileName=${fileName}`;

  let formData = new FormData();
  formData.append('signature', data);

  const res = await axiosInstance.post(apiUrl, formData);
  return res && res.data ? res.data : null;
};

export const getConsolidatedMarks = async (classId, sectionName) => {
  const path = `/report/consolidatedReports`;
  const res = await axiosInstance.get(
    `${
      appConfig.bbbmiddleware
    }${path}?classId=${classId}&sectionName=${sectionName}`
  );
  return res && res.data ? res.data : null;
};

//Timetable---------------------------------------------------------------------------------

//Get all time blocks
export const getAllTimeBlocks = async instituteId => {
  const path = `/alltimeblock`;
  const res = await axiosInstance.get(
    `${appConfig.apiBaseUrl}${path}/${instituteId}`
  );
  return res && res.data ? res.data : null;
};

//get teacher time table
export const getTimetableByContactId = async (date, instituteId, contactId) => {
  let formattedDate;
  if (date instanceof Date) {
    formattedDate = moment(date).format('YYYY-MM-DD');
  }
  const path = `/facultytimetable`;
  const res = await axiosInstance.get(
    `${
      appConfig.apiBaseUrl
    }${path}/${formattedDate}/${instituteId}/${contactId}`
  );
  return res && res.data ? res.data : null;
};

//get timetable (student/parent)
export const getTimetable = async (date, instituteId) => {
  let formattedDate;
  if (date instanceof Date) {
    formattedDate = moment(date).format('YYYY-MM-DD');
  }
  const path = `/gettimetable`;
  const res = await axiosInstance.get(
    `${appConfig.apiBaseUrl}${path}/${formattedDate}/${instituteId}`
  );
  return res && res.data ? res.data : null;
};

export const getAttendancePercentage = async (data) => {
  const path = encodeURIComponent(
    `getAttendancePercentage?${data}`
  );
  const res = await axiosInstance.get(
    `${appConfig.bbbmiddleware}/${
      UrlEndPoints.attendancePercentage
    }?api=${path}`
  );
  return res && res.data ? res.data : null;
};

export default ApiService;
