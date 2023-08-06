import React, {useContext, useEffect, useState} from 'react';
import LocaleContext from '../locale-provider/context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './header.less';

const Header = (props) => {

  const [isHome, setIsHome] = useState(false);

  const res = useContext(LocaleContext);
  const list = [];
  Object.keys(res).forEach((key) => {
    list.push([key, res[key]]);
  });

  useEffect(() => {
    if (location.hash.includes('/home')) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.hash])

  return (
    <>
      <div className={`${style.headerWrapper} ${isHome ? style.homePageHeaderWrapper : ''}`}>
        <div
            className={`header-content ${
                props.theme === 'dark' ? 'header-theme-dark' : 'header-theme-light'
            }`}
        >
          <Link to={`/home`}>
            <div className="header-logo">Just4u</div>
          </Link>
          <div className="header-nav">
            {list.map((item) => {
              let linkTo = item[0];
              if(item[0] === 'lab') {
                linkTo = 'lab/test';
              }
              return (
                <Link to={`/${linkTo}`} key={item[0]}>
                  <span className="nav-item">{item[1]}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
