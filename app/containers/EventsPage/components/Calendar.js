import React, { useState, useEffect, useCallback, useRef } from 'react';
import moment from 'moment';
import './calendar.css';

import TUICalendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));
const schedules = [
  {
    calendarId: '2',
    category: 'allday',
    isVisible: true,
    title: 'Meeting',
    id: '2',
    body: 'Description',
    start: new Date(),
    end: new Date(1624300200000),
  },
];

const calendars = [
  {
    id: '1',
    name: 'My Calendar',
    color: '#ffffff',
    bgColor: '#9e5fff',
    dragBgColor: '#9e5fff',
    borderColor: '#9e5fff',
  },
];

const Calender = ({ eventDates, showEventDetails }) => {
  const cal = useRef(null);

  const onClickSchedule = useCallback(e => {
    const { calendarId, id } = e.schedule;
    const el = cal.current.calendarInst.getElement(id, calendarId);
    showEventDetails(e.schedule);
    // console.log(e, el.getBoundingClientRect());
  }, []);

  const onBeforeCreateSchedule = useCallback(scheduleData => {
    console.log(scheduleData);

    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? 'allday' : 'time',
      dueDateClass: '',
      location: scheduleData.location,
      raw: {
        class: scheduleData.raw['class'],
      },
      state: scheduleData.state,
    };

    cal.current.calendarInst.createSchedules([schedule]);
  }, []);

  const onBeforeDeleteSchedule = useCallback(res => {
    console.log(res);

    const { id, calendarId } = res.schedule;

    cal.current.calendarInst.deleteSchedule(id, calendarId);
  }, []);

  const onBeforeUpdateSchedule = useCallback(e => {
    console.log(e);

    const { schedule, changes } = e;

    cal.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId,
      changes
    );
  }, []);

  function _getFormattedTime(time) {
    const date = new Date(time);
    const h = date.getHours();
    const m = date.getMinutes();

    return `${h}:${m}`;
  }

  function _getTimeTemplate(schedule, isAllDay) {
    var html = [];

    if (!isAllDay) {
      html.push('<strong>' + _getFormattedTime(schedule.start) + '</strong> ');
    }
    if (schedule.isPrivate) {
      html.push('<span class="calendar-font-icon ic-lock-b"></span>');
      html.push(' Private');
    } else {
      if (schedule.isReadOnly) {
        html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
      } else if (schedule.recurrenceRule) {
        html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
      } else if (schedule.attendees.length) {
        html.push('<span class="calendar-font-icon ic-user-b"></span>');
      } else if (schedule.location) {
        html.push('<span class="calendar-font-icon ic-location-b"></span>');
      }
      html.push(' ' + schedule.title);
    }

    return html.join('');
  }

  const templates = {
    time: function(schedule) {
      console.log(schedule);
      return _getTimeTemplate(schedule, false);
    },
  };

  const handleClickNextButton = () => {
    const calendarInstance = cal.current.getInstance();

    calendarInstance.next();
  };
  const handleClickPerviousButton = () => {
    const calendarInstance = cal.current.getInstance();

    calendarInstance.prev();
  };

  const handleClickDayname = ev => {
    console.log(ev.date);
  };

  return (
    <div>
      <div className="calender_icon">
        <ArrowBackIosIcon onClick={handleClickPerviousButton} />
        <ArrowForwardIosIcon onClick={handleClickNextButton} />
      </div>
      <TUICalendar
        ref={cal}
        height="500px"
        view="month"
        useCreationPopup={false}
        useDetailPopup={false}
        template={templates}
        calendars={calendars}
        schedules={eventDates}
        onClickSchedule={onClickSchedule}
        onClickDayname={handleClickDayname}
        isReadOnly={true}
      />
    </div>
  );
};
export default Calender;
