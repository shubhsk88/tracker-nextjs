import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import { useState } from 'react';

import { gql, useQuery } from '@apollo/client';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

const HELLO_QUERY = gql`
  query HelloThere {
    helloWorld
  }
`;
function Home() {
  const [habits, setHabits] = useState(['Do the dishes']);
  const { data, error, loading } = useQuery(HELLO_QUERY);
  if (loading) return <div />;
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{data.helloWorld}!</a>
        </h1>
        <div className={styles.list}>
          <HabitForm setHabits={setHabits} />
          <HabitList habits={habits} />
        </div>
      </main>
    </Layout>
  );
}
export default withApollo(Home);
