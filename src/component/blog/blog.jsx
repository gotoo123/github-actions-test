import Markdown from '../markdown/markdown';
import { useLocation } from 'react-router-dom';
import style from './blog.less';
import ArrowLeft from '../../assets/icon/arrow-left.svg';
import {useState, useEffect} from 'react';
import {axiosGet} from "../../api";

const Blog = () => {
  const location = useLocation();
  const title = location.pathname.replace('/blog/', '');
  const [md, setMd] = useState('');

  useEffect(() => {
    axiosGet(`/api/note/${title}`)
      .then((res) => {
      setMd(res.data);
    })
      .catch((err) => {
      console.log(err)
    })
  })

  function backStep() {
  }

  return (
    <>
      <div className={`${style.markdownWrap}`}>
        <div className={`markdownContainer`}>
          <Markdown md={md} />
        </div>
      </div>

      <div className={style.backStep} onClick={backStep}>
        <img alt="back" src={ArrowLeft}/>
        <span>返回</span>
      </div>
    </>
  );
};

export default Blog;
