import { Layout } from './layout/Layout';

import { Quiz, SelectCategories, Results } from './components';

export const App = () => {
  return (
    <Layout>
      <SelectCategories />
      {/* <Quiz /> */}
      {/* <Results /> */}
    </Layout>
  );
};
