import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Test from "../../views/Test";

const Home = lazy(() => import('../../views/Home'))
const NotFound = lazy(() => import('../../views/NotFound'))
const Test = lazy(() => import('../../views/Test'))
const DefaultRoute = "/home"
const Routes = [
    {
        path:"/",
        index: true,
        element: <Navigate replace to={DefaultRoute}/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/test',
        element:<Test/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
]

const TotalRoutes = Routes.filter(route => {
    const lesRoutes = [];
    lesRoutes.push(route)
    return lesRoutes
});

export {DefaultRoute, TotalRoutes as Routes}