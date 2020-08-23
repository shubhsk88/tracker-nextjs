const { default: HabitButton } = require('./HabitButton');

const Habit = ({ habit }) => {
  const dates = getLast5Days();

  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map((date) => (
          <HabitButton date={date} key={date.getMilliseconds} />
        ))}
      </div>
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
