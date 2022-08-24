import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import LogoThumb from '../Image/LogoThumb';

const Logo = () => {
  const { logo } = useContext(PortfolioContext);
  const { image, imageAlt } = logo;

  return (
    <div id="logo">
      {image ? (
        <LogoThumb filename={image} alt={imageAlt} />
      ) : (
        <p>
          <span className="text-color-main">R</span>M
        </p>
      )}
    </div>
  );
};

export default Logo;
