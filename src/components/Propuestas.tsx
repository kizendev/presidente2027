import React from 'react';
import PropuestaLi from './PropuestaLi';

const Propuestas: React.FC = () => {
  return (
    <section className="py-2">
      <header className="text-2xl font-bold">
        <h1>Propuestas</h1>
      </header>
      <ul className="py-4 flex flex-col gap-4">
        <PropuestaLi title="Propuesta 1" description="Desc" />
        <PropuestaLi title="Propuesta 2" description="Desc 2" />
      </ul>
    </section>
  );
};

export default Propuestas;
