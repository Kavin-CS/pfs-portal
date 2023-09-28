import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import React from 'react';
import {
  getAllEvents,
  getAllRegisterEvents,
} from '../../../../utils/ApiService';
import EventRow from './EventRow';
import UpcomingEventsView from './UpcomingEventsView';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  container: {
    padding: 16,
    maxHeight: '50vh',
    minHeight: '45vh',
    overflowY: 'scroll',
  },
  semiTitle: {
    color: theme.palette.KenColors.neutral400,
    fontSize: 12,
    marginLeft: 12,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default function UpcomingEvents(props) {
  const { user } = props;
  const styles = useStyles();
  const [events, setEvents] = React.useState();

  const onClickAll = () => {
    getAllEvents().then(res => {
      getAllRegisterEvents(user.ContactId).then(resp => {
        for (let evnt of res) {
          for (let regis of resp) {
            if (regis.EventId === evnt.Id) {
              evnt.type = 'Registered';
            }
          }
        }
        let arr = res.map(el => {
          if (el?.type) {
            return { ...el };
          } else {
            return { ...el, type: 'Un-Registered' };
          }
        });
        setEvents(arr);
      });
    });
  };

  React.useEffect(() => {
    onClickAll();
  }, []);

  const handleSelected = (e, name) => {
    switch (name) {
      case 'all':
        onClickAll();
        break;
      case 'registered':
        getAllRegisterEvents(user.ContactId).then(res => {
          setEvents(res);
        });
        break;
      case 'unregistered':
        getAllEvents().then(res => {
          getAllRegisterEvents(user.ContactId).then(resp => {
            for (let evnt of res) {
              for (let regis of resp) {
                if (regis.EventId === evnt.Id) {
                  evnt.type = 'Registered';
                }
              }
            }
            let arr = [];
            res.forEach(el => {
              if (!el?.type) {
                arr.push(el);
              }
            });
            setEvents(arr);
          });
        });
        break;
    }
  };

  return <UpcomingEventsView events={events} handleSelected={handleSelected} />;
}
