import { useSelector } from 'react-redux';

import { Layout } from './layout/Layout';
import { RootState } from './store/rootReducer';
import { Quiz, SelectCategories, Results } from './screens';

export const App = () => {
  const { currentStep } = useSelector((state: RootState) => state.quiz);

  return (
    <Layout>
      {
        currentStep === 1
        ? <SelectCategories />
        : currentStep === 2
        ? <Quiz />
        : <Results />
      }
    </Layout>
  );
};
