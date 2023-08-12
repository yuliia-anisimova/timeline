import React from 'react';
import { MonthEvent } from '../../types/monthEvent';
import classes from './EventsList.module.scss';

interface Props {
  events: MonthEvent[];
}

const {
  list,
  item,
  text,
} = classes;

const EventsList: React.FC<Props> = ({ events }) => {
  return (
    <ul className={list}>
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
          <li key={e.id} className={item}>
            <p className={text}>{e.name}</p>
            <p className={text}>{formattedDate}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
