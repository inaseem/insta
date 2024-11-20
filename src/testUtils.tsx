import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const TestBaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
export const renderApp = (Component: React.ReactElement) => {
  return render(<TestBaseLayout>{Component}</TestBaseLayout>);
};
