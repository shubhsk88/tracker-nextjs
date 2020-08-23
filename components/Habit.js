import HabitButton from './HabitButton';

const Habit = ({ habit, index }) => {
  const dates = getLast5Days();
  const colors = ['#f9ed69', '#f08a5d', '#b83b5e', '#6a2c70', '#2d4059'];
  return (
    <article>
      <h3 style={{ borderColor: colors[index] }}>{habit}</h3>
      <div className="buttons">
        {dates.map((date) => (
          <HabitButton date={date} key={date.getTime()} />
        ))}
      </div>
      <style jsx>{`
        article {
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
        }

        h3 {
          font-size: 2rem;
          border-bottom: 4px solid grey;
        }
        .buttons {
          display: flex;
        }
      `}</style>
    </article>
  );
};

const getLast5Days = () => {
  const dates = '01234'.split('').map((date) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - date);

    return tempDate;
  });
  return dates;
};
export default Habit;
