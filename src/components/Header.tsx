import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="text-center py-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h3 className="text-xl font-semibold text-gray-600">Presidente 2027</h3>
    </header>
  );
};

export default Header;
