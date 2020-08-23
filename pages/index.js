import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';

import { gql, useQuery } from '@apollo/client';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

const HELLO_QUERY = gql`
  query HelloThere {
    helloWorld
  }
`;
function Home() {
  const { data, error, loading } = useQuery(HELLO_QUERY);
  if (loading) return <div />;
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Make new Habits</h1>
        <div className={styles.list}>
          <HabitForm />
          <HabitList />
        </div>
      </main>
    </Layout>
  );
}
export default withApollo(Home);
