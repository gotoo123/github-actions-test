import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import router from './router';
import LocaleContext from './component/locale-provider/context';
import { en, zh } from './component/locale/locale';
import style from './App.less';
import globalStyle from './style/theme/theme.less';
import sun from './assets/icon/sun.svg';
import moon from './assets/icon/moon.svg';
import Header from "./component/header/header";


const App = () => {
  const [theme, setTheme] = useState('Dark');
  const [lang, setLang] = useState(en);

  const changeTheme = () => {
    theme === 'Dark' ? setTheme('Light') : setTheme('Dark');
  };

  const changeLang = () => {
    lang === en ? setLang(zh) : setLang(en);
  };

  return (
    <LocaleContext.Provider value={lang}>
      <main className={`${style.wrapper} ${globalStyle[`theme${theme}`]}`}>
        <Header theme={theme.toLowerCase()}/>
        {useRoutes(router)}
        <div className="box" onClick={changeTheme} >
          {
            theme === 'Dark' ? <img src={sun} alt="sun" className={`theme-icon-sun`}/> : <img src={moon} alt="moon"/>
          }
        </div>
        <div className="box change-lang" onClick={changeLang} >
          {
            lang === en ? <span>zh</span> : <span>en</span>
          }
        </div>
      </main>
    </LocaleContext.Provider>
  );
};

export default App;
