import style from './test.less';

const Test = () => {
  return (
      <div className={`${style.wrapper}`}>
        <div className="preview-wrapper">
          <div className="wrapper">
            <div className="button">
              <div className="icon">
                <i>G</i>
              </div>
              <span>Facebook </span>
            </div>
            <div className="button">
              <div className="icon">
                <i>O</i>
              </div>
              <span>Twitter</span>
            </div>
            <div className="button">
              <div className="icon">
                <i>T</i>
              </div>
              <span>Instagram</span>
            </div>
            <div className="button">
              <div className="icon">
                <i>O</i>
              </div>
              <span>Github</span>
            </div>
            <div className="button">
              <div className="icon">
                <i>O</i>
              </div>
              <span>YouTube</span>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Test;
