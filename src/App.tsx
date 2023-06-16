import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/components/HomePage/HomePage.tsx';
import { CreatePage } from '@components/CreatePage';
import { useAppDispatch } from '@store/store.ts';
import { setCurrentStep } from '@store/rootReducer.ts';
import './styles/App.css';

export const routes = [
  { id: 1, path: '/', element: <HomePage/> },
  { id: 2, path: '/create', element: <CreatePage/> },
];

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentStep(0));
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element, id }) => (
              <Route path={path} element={element} key={id}/>
          ))}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
