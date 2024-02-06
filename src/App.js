import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Offer from "./components/Offer";
import Support from "./components/Support";
import Search from "./components/Search";
import Error from "./components/Error";
import Restaurent from "./components/Restaurent";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";
// adding the store to root of our app

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="dark:bg-black overflow-x-hidden">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
};

const routerConfig = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/search",
                    element: <Search />,
                },
                {
                    path: "/offers",
                    element: <Offer />,
                },
                {
                    path: "/support",
                    element: <Support />,
                },
                {
                    path: "/checkout",
                    element: <Cart />,
                },
                {
                    path: "/restaurent/:id",
                    element: <Restaurent />,
                },
            ],
            errorElement: <Error />,
        },
    ],
    {
        basename: "/",
    }
);

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={routerConfig} />);
