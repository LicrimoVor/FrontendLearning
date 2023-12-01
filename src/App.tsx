import { Route, Routes, Link } from 'react-router-dom';
import { Suspense,} from 'react';

import './styles/index.scss';
import { MainPageAsync } from './pages/MainPages/MainPage.async';
import { AboutPageAsync } from './pages/AboutPages/AboutPage.async';
import useTheme from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

/** Главная приложуха */
function App() {
  const {theme, hundlerTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link  to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Загрузонька...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
      <button onClick={hundlerTheme}>{theme}</button>
    </div>
  )
}

export default App;