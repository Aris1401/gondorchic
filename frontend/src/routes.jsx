import { createBrowserRouter } from "react-router";
import { PageAccueil } from "./pages/PageAccueil/PageAccueil";
import { PageAccueilPersonnaliser } from "./pages/PageAcceuilPersonnaliser/PageAccueilPersonnaliser";
import { MainLayout } from "./pages/_layout/MainLayout";

const PageAccueilAfficher = () => {
    let isAuth = false;    

    return !isAuth ? <PageAccueil /> : <PageAccueilPersonnaliser />;
}

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{
            path: '/',
            element: <PageAccueilAfficher />
        }]
    }
])