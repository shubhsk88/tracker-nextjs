import { useState } from 'react';

const HabitButton = ({ date }) => {
  const [selector, setSelector] = useState(false);

  return (
    <span>
      {`${date.getMonth}/${date.getDate}`}
      <button onClick={() => setSelector(!selector)}>
        {selector ? 'X' : 'O'}
      </button>
    </span>
  );
};

export default HabitButton;
