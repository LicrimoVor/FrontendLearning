import { lazy } from 'react';


export const AboutPageAsync = lazy(
  () => new Promise<any>((resolve) => {
    setTimeout(()=> resolve(import('./AboutPage') ), 1000)
    }
  )
  // () => import('./AboutPage')
);