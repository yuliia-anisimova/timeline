import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MonthEvent } from '../../types/monthEvent';
import EventsList from '../EventsList';
import classes from './Timeline.module.scss';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const events: MonthEvent[] = [
  {
    id: 1,
    name: 'Term Start 1',
    date: '2022-06-24T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Term Start 2',
    date: '2022-09-24T00:00:00.000Z',
  },
  {
    id: 3,
    name: 'Term Start 3',
    date: '2022-10-24T00:00:00.000Z',
  },
  {
    id: 4,
    name: 'Term Start 4',
    date: '2022-08-24T00:00:00.000Z',
  },
  {
    id: 5,
    name: 'Term Start 5',
    date: '2022-11-12T00:00:00.000Z',
  },
  {
    id: 6,
    name: 'Term Start 6',
    date: '2022-11-24T00:00:00.000Z',
  },
];

function getEvents(month: number) {
  return events.filter((e) => new Date(e.date).getMonth() === month);
}

const displayedEvents = months.map((month, index) => {
  const id = uuidv4();

  return {
    id,
    month,
    monthEvents: getEvents(index),
  };
});

const {
  container,
} = classes;

const Timeline = () => {
  return (
    <article className={container}>
      {displayedEvents.map(({ id, month, monthEvents }) => (
        <section key={id}>
          <p>{month}</p>
          <EventsList events={monthEvents} />
        </section>
      ))}
    </article>
  );
};

export default Timeline;
