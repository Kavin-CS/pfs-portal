import React, { useEffect, useState } from 'react';
import { getStudentDetails } from '../../utils/ApiService';
import { getUserDetails } from '../../utils/helpers/storageHelper';
import CommonTT from './Components/CommonTT';
import ClassAndSubjectTT from './Components/ClassAndSubjectTT';
import { KEY_USER_TYPE } from '../../utils/constants';
import KenLoader from '../../components/KenLoader';

export default function TimeTable() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userDetails = getUserDetails();
    if (
      userDetails?.Type?.toLocaleLowerCase() ===
      KEY_USER_TYPE.parent.toLocaleLowerCase()
    ) {
      getStudentDetails(userDetails?.ContactId)
        .then(res => {
          setLoading(false);
          const student = {
            ...userDetails,
            AccountId: res.AccountId,
            studentDetails: res,
          };
          setUser(student);
        })
        .catch(err => {
          setLoading(false);
          console.log('error in finding student', err);
        });
    } else {
      setLoading(false);
      setUser(userDetails);
    }
  }, []);

  const timetable = () => {
    if (user) {
      const key = user?.Type?.toLocaleLowerCase();
      //   const key = 'ctst';
      console.log('key', key);
      switch (key) {
        case 'ctst':
          return <ClassAndSubjectTT user={user} />;
        case 'student':
        case 'faculty':
          return <CommonTT user={user} />;
        default:
          return <CommonTT user={user} />;
      }
    } else return null;
  };

  return (
    <div>
      {loading && <KenLoader />}
      {timetable()}
    </div>
  );
}
