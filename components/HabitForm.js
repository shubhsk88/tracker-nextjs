import { Field, Form, Formik } from 'formik';

const HabitForm = ({ setHabits }) => {
  return (
    <Formik
      initialValues={{ habit: '' }}
      onSubmit={(data) => setHabits((prev) => [...prev, data.habit])}
    >
      <Form>
        <Field placeholder="Enter your habit name" name="habit" />
        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
};

export default HabitForm;
