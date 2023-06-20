import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Footer/Navebar/Home"
import Login from "../component/Sining/Login";
import Sining from "../component/Sining/Sining";
import Card from "../page/Home/Footer/Navebar/Card";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
             path:"/",
             element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
          {
            path:'/login',
            element:<Login></Login>
          },
       
         {
          path:'/sining',
          element:<Sining></Sining>
         },
         {
            path:'/card',
            element:<Card></Card>
         }
        ]
    }
])

export default router;