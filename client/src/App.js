
import './App.css';
import Body from './components/Body';
import Home from './components/Home';
import Setting from './components/Setting';
import Friends from './components/sections/Friends';
import Messages from './components/sections/Messages';
import Notification from './components/sections/Notification';
import ProfileSection from './components/sections/ProfileSection';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
   {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/profile',
        element: <ProfileSection />
      },
      {
        path: 'connections',
        element: <Friends/>
      },
      {
        path:'/messages',
        element: <Messages />
      },
      {
        path:'/notification',
        element: < Notification />
      },
      {
        path:'/settings',
        element:<Setting/>
      }
    ]
   }
])

function App() {
  return <>
      <RouterProvider router={router}/>
  </>
}

export default App;
