import React, { useState } from 'react';
import { ReactComponent as ChevronRight } from '../svg/chevron-right.svg';

interface PropuestaLiProps {
  title: string;
  description: string;
  share?: {
    twitter: string;
    facebook: string;
  };
}

const PropuestaLi: React.FC<PropuestaLiProps> = ({
  title,
  description,
  share,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li className="bg-gray-200 rounded-md transition duration-300 ease-in-out">
      <header
        className={`flex justify-between cursor-pointer  py-2 px-4 rounded-tl-md rounded-tr-md ${
          isOpen ? '' : 'rounded-md'
        }  transition duration-300 ease-in-out overflow-hidden hover:bg-gray-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <ChevronRight
          className={`${
            isOpen ? 'rotate-90' : ''
          } duration-300 transition-transform ease-in-out`}
        />
      </header>

      <section
        className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden w-full
        ${isOpen ? 'py-2 px-4' : 'h-0'}`}
      >
        <p>{description}</p>
        {share && (
          <div className="py-4">
            <a href={share.twitter}>Twitter</a>
            <a href={share.facebook}>Facebook</a>
          </div>
        )}
      </section>
    </li>
  );
};

export default PropuestaLi;
