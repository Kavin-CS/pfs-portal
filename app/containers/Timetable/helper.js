import moment from 'moment';

export const getDayStartEnd = array => {
  array.sort(function(a, b) {
    return (
      new Date(`2015-03-04T${a.StartTime}`) -
      new Date(`2015-03-04T${b.StartTime}`) // Date instance can not be created only with time.
    );
  });

  //remove '.000Z' from the time because generateTimeSlot() throws error for 10:00:00.000Z
  return {
    StartTime: array[0]?.StartTime.substring(
      0,
      array[0]?.StartTime.indexOf('.')
    ),
    EndTime: array[array.length - 1]?.EndTime.substring(
      0,
      array[array.length - 1]?.EndTime.indexOf('.')
    ),
  };
};

export function getCurrentWeek(selectedDate) {
  let weekStart = moment(selectedDate)
    .clone()
    .startOf('isoWeek');
  let days = [];

  for (var i = 0; i <= 6; i++) {
    days.push({
      date: moment(weekStart)
        .add(i, 'days')
        .format('DD/MM/YYYY'),
      day: moment(weekStart)
        .add(i, 'days')
        .format('dddd'),
    });
  }
  return days;
}

export const formatData = (rawData, dateToViewTT) => {
  const week = getCurrentWeek(dateToViewTT);
  if (week && rawData) {
    const dayWiseClasses = [];
    week.map(day => {
      let obj = {
        date: day.date,
        day: day.day,
        classes: [],
      };
      const dayWiseSubject = [];
      rawData.forEach(subject => {
        if (subject[day?.day?.toLowerCase()] === true) {
          let subjectObject = {
            ...subject,
            date: day.date,
            day: day.day,
            classId: subject.Classname + '-' + subject.Section,
            color: subject.CoureseColor,
          };
          dayWiseSubject.push(subjectObject);
        }
      });
      obj.classes = [...dayWiseSubject];
      dayWiseClasses.push(obj);
    });
    console.log('dayWiseClasses', dayWiseClasses);
    return dayWiseClasses;
  } else return null;
};

export const changeWeek = op => {
  let newWeekStart;
  if (op === 'next') {
    let endOfWeek = moment(dateToViewTT)
      .endOf('week')
      .toDate();
    newWeekStart = moment(endOfWeek).add(2, 'days');
  } else {
    let startOfWeek = moment(dateToViewTT)
      .startOf('week')
      .toDate();
    newWeekStart = moment(startOfWeek).subtract(2, 'days');
  }
  setDateToViewTT(new Date(newWeekStart));
};

export const isDateNew = (currentWeek, date) => {
  return !currentWeek.some(function(el) {
    return el.date == moment(date).format('DD/MM/YYYY');
  });
};
