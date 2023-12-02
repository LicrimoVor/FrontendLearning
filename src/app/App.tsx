import { Route, Routes, Link } from 'react-router-dom';
import { Suspense,} from 'react';

import './styles/index.scss';
import { MainPage } from 'pages/MainPages';
import { AboutPage } from 'pages/AboutPages';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

/** Главная приложуха */
function App() {
  const {theme, hundlerTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link  to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Загрузонька...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
      <button onClick={hundlerTheme}>{theme}</button>
    </div>
  )
}

export default App;