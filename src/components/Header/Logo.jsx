import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const Logo = () => {
  const { logo } = useContext(PortfolioContext);
  const { image, imageAlt } = logo;

  return (
    <div id="logo">
      {image ? (
        <LogoImg filename={image} alt={imageAlt} />
      ) : (
        <p>
          <span className="text-color-main">R</span>M
        </p>
      )}
    </div>
  );
};

export default Logo;
