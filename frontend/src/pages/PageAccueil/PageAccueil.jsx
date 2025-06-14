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
            <div className="content-produit-jour young-serif-regular">
                <div className="details-produit-jour">
                    <div className="informations">
                        <div className="contenu">
                            <h1 className="sous-titre">{ produitDuJour && produitDuJour.libelle }</h1>
                        </div>
                        
                        <div className="titre">
                            <h3>Produit du jour</h3>
                        </div>
                    </div>

                    <div className="quantite">
                        <div className="quantite-informations">
                            <div className="prix">
                                <h3>{ produitDuJour && parseFloat(produitDuJour.prix).toFixed(2) } Or</h3>
                                <p>Quantite en stock: { produitDuJour && produitDuJour.quantiteEnStock }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}