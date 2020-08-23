import { useState } from 'react';

const HabitButton = ({ date }) => {
  const [selector, setSelector] = useState(false);

  return (
    <span>
      {`${date.getMonth() + 1}/${date.getDate()}`}
      <button onClick={() => setSelector(!selector)}>
        {selector ? 'X' : 'O'}
      </button>
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
