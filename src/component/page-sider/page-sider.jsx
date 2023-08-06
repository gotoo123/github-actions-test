import { Link } from 'react-router-dom';
import style from './page-sider.less';

const PageSider = (props) => {
  const { title, menu } = props;
    return (
      <div className={`${style.pageSiderWrapper}`}>
        <div className="page-sider-title">{title}</div>
        <div className="page-sider-list">
          {
            menu.map(item =>
              <Link to={item.route} key={item.name}>
                <div className="page-sider-item">{item.name}</div>
              </Link>
            )
          }
        </div>
      </div>
    );
};

export default PageSider;
