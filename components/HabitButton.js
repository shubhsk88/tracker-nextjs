import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_EVENT = gql`
  mutation AddEvent($habitId: ID, $date: Date) {
    addEvent(habitId: $habitId, date: $date) {
      _id
      title
      events {
        _id
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation RemoveEvent($habitId: ID, $eventId: ID) {
    removeEvent(habitId: $habitId, eventId: $eventId) {
      _id
      title
      events {
        _id
        date
      }
    }
  }
`;

const HabitButton = ({ date, habitId }) => {
  const [selector, setSelector] = useState(false);
  const [addEvent] = useMutation(ADD_EVENT, { refetchQueries: ['getEvents'] });
  const [removeEvent] = useMutation(REMOVE_EVENT, {
    refetchQueries: ['getEvents'],
  });
  const isFound = false;

  return (
    <span>
      {`${date.getMonth() + 1}/${date.getDate()}`}
      {isFound ? (
        <button
          onClick={() =>
            removeEvent({ variables: { eventId: 'dsjak', habitId } })
          }
        >
          X
        </button>
      ) : (
        <button onClick={() => addEvent({ variables: { habitId, date } })}>
          O
        </button>
      )}

      <style jsx>
        {`
          span {
            display: flex;
            flex-direction: column;
          }
          span + span {
            margin-left: 10px;
          }
        `}
      </style>
    </span>
  );
};

export default HabitButton;
