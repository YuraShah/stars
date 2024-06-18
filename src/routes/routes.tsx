import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import { useAppSelector } from "../app/hooks";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import History from "../pages/History/History";
import About from "../pages/About/About";
import News from "../pages/News/News";
import Signin from "../pages/Auth/Signin/Signin";
import Register from "../pages/Auth/Register/Register";
import User from "../pages/Auth/User/User";
import UserChars from "../pages/Auth/User/UserChars/UserChars";
import UserAddCat from "../pages/Auth/User/UserAddCat/UserAddCat";
import UserViewCat from "../pages/Auth/User/UserViewCat/UserViewCat";

const Routes = () => {
   const { user } = useAppSelector((state) => state.signinStore)

   const routing = useRoutes([
      {
         path: '*', element: <Layout />, children: [
            { path: '*', element: <ErrorPage /> }
         ]
      },
      {
         path: '/', element: <Layout />, children: [
            { path: '', element: <Home /> },
            { path: 'sign-in', element: <Signin /> },
            { path: 'register', element: !user ? <Register /> : <Navigate to={"/profile"} /> },
            {
               path: 'profile/', element: user ? <User /> : <Navigate to={"/"} />,
               children: [
                  { path: '', element: <UserChars /> },
                  { path: 'add', element: <UserAddCat /> },
                  { path: 'view/:uid', element: <UserViewCat /> },
               ]
            },
            { path: '/history', element: <History /> },
            { path: '/about', element: <About /> },
            { path: '/news', element: <News /> }
         ]
      }
   ])
   return routing
}

export default Routes;