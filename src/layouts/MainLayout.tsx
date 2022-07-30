import React from 'react';
import { Header } from '../components/Header/Header';

interface IProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
