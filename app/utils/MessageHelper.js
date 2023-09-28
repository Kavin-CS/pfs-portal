import {
  getAllCourses,
  getStudentDetails,
  subscribe,
  unsubscribe,
} from './ApiService';

const handleToken = rToken => {
  return rToken;
};

const getTopicPrefix = config => {
  return config.clientUid;
};

export const subscribeMessage = (
  config,
  userDetails,
  parentDetails,
  rToken
) => {
  const topicPrefix = getTopicPrefix(config);
  const regToken = handleToken(rToken);
  subscribe({ token: regToken, topic: 'Ken42' })
    .then(res => {
      console.log('SUBSCRIBED', res);
    })
    .catch(err => {
      console.log(err);
    });

  subscribe({ token: regToken, topic: topicPrefix })
    .then(res => {
      console.log('SUBSCRIBED', res);
    })
    .catch(err => {
      console.log(err);
    });

  if (parentDetails) {
    subscribe({
      token: regToken,
      topic: `${topicPrefix}_${parentDetails.Type}`,
    })
      .then(res => {
        console.log(
          'SUBSCRIBED',
          res
        );
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    subscribe({ token: regToken, topic: `${topicPrefix}_${userDetails.Type}` })
      .then(res => {
        console.log(
          'SUBSCRIBED',
          res
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  if (parentDetails && parentDetails.Type === 'Parent') {
    parentDetails.RelatedTO.map(el => {
      getStudentDetails(el.ContactId).then(res => {
        const current =
          res.Program_Enrollment.find(item => item.Status === 'Current') ||
          res.Program_Enrollment[0];
        getAllCourses(el.ContactId, current.Id).then(data => {
          let subject = Object.values(data);
          subject = subject[0];
          subject.forEach(elem => {
            subscribe({ token: regToken, topic: `${topicPrefix}_${elem.Id}` })
              .then(resp => {
                console.log('SUBSCRIBED', resp);
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      });
    });
  } else {
    getStudentDetails(userDetails.ContactId).then(res => {
      console.log(res);
      const current =
        res.Program_Enrollment.find(item => item.Status === 'Current') ||
        res.Program_Enrollment[0];
      getAllCourses(userDetails.ContactId, current.Id).then(data => {
        let subject = Object.values(data);
        subject = subject[0];
        subject.forEach(elem => {
          subscribe({ token: regToken, topic: `${topicPrefix}_${elem.Id}` })
            .then(resp => {
              console.log('SUBSCRIBED', resp);
            })
            .catch(err => {
              console.log(err);
            });
        });
      });
    });
  }
};

export const unsubscribeMessage = (
  config,
  userDetails,
  parentDetails,
  rToken
) => {
  const regToken = handleToken(rToken);
  unsubscribe({ token: regToken, topic: 'Ken42' })
    .then(res => {
      console.log('UNSUBSCRIBED ', res);
    })
    .catch(err => {
      console.log(err);
    });

  const topicPrefix = getTopicPrefix(config);

  unsubscribe({ token: regToken, topic: topicPrefix })
    .then(res => {
      console.log('UNSUBSCRIBED', res);
    })
    .catch(err => {
      console.log(err);
    });

  if (parentDetails) {
    unsubscribe({
      token: regToken,
      topic: `${topicPrefix}_${parentDetails.Type}`,
    })
      .then(res => {
        console.log(
          'UNSUBSCRIBED ',
          res
        );
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    unsubscribe({
      token: regToken,
      topic: `${topicPrefix}_${userDetails.Type}`,
    })
      .then(res => {
        console.log('UNSUBSCRIBED', res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  if (parentDetails && parentDetails.Type === 'Parent') {
    parentDetails.RelatedTO.map(el => {
      getStudentDetails(el.ContactId).then(res => {
        const current =
          res.Program_Enrollment.find(item => item.Status === 'Current') ||
          res.Program_Enrollment[0];
        getAllCourses(el.ContactId, current.Id).then(data => {
          let subject = Object.values(data);
          subject = subject[0];
          subject.forEach(elem => {
            unsubscribe({ token: regToken, topic: `${topicPrefix}_${elem.Id}` })
              .then(resp => {
                console.log('UNSUBSCRIBED', resp);
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      });
    });
  } else {
    getStudentDetails(userDetails.ContactId).then(res => {
      console.log(res);
      const current =
        res.Program_Enrollment.find(item => item.Status === 'Current') ||
        res.Program_Enrollment[0];
      getAllCourses(userDetails.ContactId, current.Id).then(data => {
        let subject = Object.values(data);
        subject = subject[0];
        subject.forEach(elem => {
          unsubscribe({ token: regToken, topic: `${topicPrefix}_${elem.Id}` })
            .then(resp => {
              console.log('UNSUBSCRIBED', resp);
            })
            .catch(err => {
              console.log(err);
            });
        });
      });
    });
  }
};
