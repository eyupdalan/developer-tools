import { ComponentType } from 'react';
import Layout from './layout';

export const withLayout = (Component: ComponentType) => function () {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Layout;
