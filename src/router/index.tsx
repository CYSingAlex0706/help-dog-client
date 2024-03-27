import Centre from "../views/centre"
import Detail from "../views/detail"
import Favourites from "../views/favourites"
import Home from "../views/home"
import Login from "../views/login"
import Register from "../views/register"

export interface routeType {
    path: string,
    element?: any
}
// define routing
const routes: Array<routeType> = [
    {
        path: '/',
        element: < Home />
    },
    {
        path: '/login',
        element: < Login />
    },
    {
        path: '/detail',
        element: < Detail />
    },
    {
        path: '/centre',
        element: < Centre />
    },
    {
        path: '/favorites',
        element: < Favourites />
    },
    {
        path: '/register',
        element: < Register />
    },
]

export default routes