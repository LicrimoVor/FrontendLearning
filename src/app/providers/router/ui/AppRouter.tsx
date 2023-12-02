import { Suspense,} from 'react';
import { Route, Routes,} from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';

/** Роутер  */
export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузонька...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route 
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
  )
}
