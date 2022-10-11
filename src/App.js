
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './Layouts/Main';
import Topic from './Components/Topic/Topic';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import Quiz from './Components/Quiz/Quiz';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:
      [
        {
          path: '/',
           loader:async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topic></Topic>
          
        },
        {
          path:'Statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'Blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'quiz/:quizID',
          loader: async({params})=>{
           return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
            
          },
          element:<Quiz></Quiz>
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
