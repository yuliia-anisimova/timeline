import React from 'react';
import { MonthEvent } from '../../types/monthEvent';
import classes from './EventsList.module.scss';

interface Props {
  events: MonthEvent[];
}

const {
  'events-list': eventsList,
  'event-item': eventItem,
  title,
  description,
} = classes;

const EventsList: React.FC<Props> = ({ events }) => {
  return (
    <ul className={eventsList}>
      {events.map((e) => {
        const dateString = e.date;
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        };

        const formattedDate = date.toLocaleDateString('en-US', options);

        return (
          <li key={e.id} className={eventItem}>
            <p className={title}>{e.name}</p>
            <p className={description}>{formattedDate}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
