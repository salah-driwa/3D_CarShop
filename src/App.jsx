import  { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <div className=' min-h-screen '>
      <Suspense fallback={<div>Loading...</div>}>
        {routing}
      </Suspense>
    </div>
  );
};

export default App;
