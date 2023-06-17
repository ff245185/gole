import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Footer/Navebar/Home"

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
        

        ]
    }
])

export default router;