import { lazy } from 'react';


export const MainPageAsync = lazy(
  () => new Promise<any>((resolve) => {
    setTimeout(()=> resolve(import('./MainPage') ), 1000)
    }
  )
  // () => import('./MainPage')
);
