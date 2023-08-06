import Footer from '../../component/footer/footer';
import Wave from '../../component/wave/wave';
import BlogList from '../../component/blog/blogList/blog-list';
import style from  './home.less';
import RollPhrase from "../../component/roll-phrase/index";

const Home = () => {

  return (
    <>
      <div className={`${style.wrapper}`}>
        <header className="header-container">
          <div/>
          <div className="content">
            <div className="title">Just4u</div>
            <div className="description">
              <RollPhrase />
            </div>
          </div>
          <Wave />
        </header>
        <section className="content-container">
          <BlogList />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
