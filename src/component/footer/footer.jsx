import { link } from './link';
import style from './footer.less';

const Footer = () => {
  const handleClick = (href) => {
    window.location.href = href;
  };

  return (
    <div className={`${style.footerWrapper}`}>
      <div>
        {link.map((item) => {
          return (
            <div className="link-item" key={item.icon}>
              <img
                src={item.icon}
                alt=""
                onClick={() => handleClick(item.href)}
              />
            </div>
          );
        })}
      </div>
      <span className="footer-description">Copyright © GOTOO 2022</span>
    </div>
  );
};

export default Footer;
