import { Navbar } from "../_components/Navbar/Navbar";
import "./PageAccueil.css";
import { ObtenirProduitDuJour } from "../../_services/ProduitDuJourService"
import { useEffect, useState } from "react";

export const PageAccueil = () => {
    const [produitDuJour, setProduitDuJour] = useState(null);
    useEffect(() => {
        ObtenirProduitDuJour().then((produit) => {
            setProduitDuJour(produit)
        })
    }, [])

    return (
        <>
            <Navbar />

            <div className="content-produit-jour young-serif-regular">
                <div className="details-produit-jour">
                    <div className="informations">
                        <div className="titre">
                            <h3>Produit du jour</h3>
                        </div>

                        <div className="contenu">
                            <h1 className="sous-titre">{ produitDuJour && produitDuJour.libelle }</h1>
                        </div>
                    </div>

                    <div className="quantite">
                        <div className="prix">
                            <h3>{ produitDuJour && produitDuJour.prix } Or</h3>
                            <p>Quantite en stock: { produitDuJour && produitDuJour.quantiteEnStock }</p>
                        </div>

                        <div className="action">
                            <button>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}