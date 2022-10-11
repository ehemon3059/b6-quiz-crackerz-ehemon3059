
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Layouts/Main';
import Topic from './Components/Topic/Topic';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:
      [
        {
          path: '/',
           loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topic></Topic>
          
        },
        {
          path:'Statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'Blogs',
          element:<Blogs></Blogs>
        }
      ]
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
