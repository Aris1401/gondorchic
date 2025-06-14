import { createBrowserRouter } from "react-router";
import { PageAccueil } from "./pages/PageAccueil/PageAccueil";
import { PageAccueilPerso } from "./pages/PageAcceuilPerso/PageAccueilPerso";
import { MainLayout } from "./pages/_layout/MainLayout";
import { useAuth } from "./_hooks/useAuth";

const PageAccueilAfficher = () => {
    let { isAuth } = useAuth();

    return !isAuth ? <PageAccueil /> : <PageAccueilPerso />;
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