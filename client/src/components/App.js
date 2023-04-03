import '../styles/App.css';
import '../styles/Main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/** react routes **/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>Root Element</Main>,
  },
  {
    path: '/quiz',
    element: <Quiz>Quiz Component</Quiz>,
  },
  {
    path: '/result',
    element: <Result>result Component</Result>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
