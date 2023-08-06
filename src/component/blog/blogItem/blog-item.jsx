import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './blog-item.less';

const BlogItem = (props) => {
  const { title, desc, intro } = props;
  return (
      <div className={`${style.wrapper}`}>
        <Link to={`/blog/${title}`}>
          <div className="blog-item-wrap">
            <div className="title">{title}</div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div className="desc">{desc}</div>
              <div className="intro">{intro}</div>
            </div>
          </div>
        </Link>
      </div>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  desc: PropTypes.string,
};

export default BlogItem;
