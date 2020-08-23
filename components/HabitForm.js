import { Field, Form, Formik } from 'formik';
import { useMutation, gql } from '@apollo/client';

const ADD_HABIT = gql`
  mutation AddHabit($habit: HabitInput) {
    addHabit(habit: $habit) {
      _id
      title
    }
  }
`;
const HabitForm = () => {
  const [addHabit] = useMutation(ADD_HABIT, { refetchQueries: ['getHabits'] });
  return (
    <Formik
      initialValues={{ habit: '' }}
      onSubmit={(data) =>
        addHabit({
          variables: {
            habit: {
              title: data.habit,
            },
          },
        })
      }
    >
      <Form>
        <Field placeholder="Enter your habit name" name="habit" />
        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
};

export default HabitForm;
