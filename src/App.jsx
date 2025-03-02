import './App.css';
import MasterLayout from './components/MasterLayout/MasterLayout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Work from './components/Work/Work.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <NotFound />, 
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'experience', element: <Experience /> },
        { path: 'work', element: <Work /> }, 
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;