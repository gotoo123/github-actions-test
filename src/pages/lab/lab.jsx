import { Outlet } from 'react-router-dom';
import PageSider from '../../component/page-sider/page-sider';
import { menu } from './menu';
import style from './lab.less';
const Lab = () => {
  return (
    <>
      <div className={`${style.labWrapper}`}>
        <div>
          <PageSider title="LAB" menu={menu} />
        </div>
        <div className="lab-content-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Lab;
