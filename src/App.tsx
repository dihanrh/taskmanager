import React from 'react';
import Layout from '../src/layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../src/redux/store';

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Layout />
    </div>
  );
};

export default App;
