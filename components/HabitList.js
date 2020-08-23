const { default: Habit } = require('./Habit');
import { useQuery, gql } from '@apollo/client';

const HABIT_QUERY = gql`
  query getHabits {
    habits {
      title
      _id
    }
  }
`;
const HabitList = ({}) => {
  const { data, error, loading } = useQuery(HABIT_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error)
    return <div>Error connecting to servers with response {error}</div>;
  return (
    <section>
      <h2>My Habits</h2>
      {data.habits.map((habit, index) => (
        <Habit key={habit._id} habit={habit.title} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
