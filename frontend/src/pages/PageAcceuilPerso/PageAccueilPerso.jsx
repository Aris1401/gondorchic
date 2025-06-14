import { useEffect, useState } from "react"
import { ObtenirProduitDuJour } from "../../_services/ProduitDuJourService"
import { FaShoppingCart } from "react-icons/fa";

export const PageAccueilPerso = () => {
    const [produitDuJour, setProduitDuJour] = useState(null);
    useEffect(() => {
        ObtenirProduitDuJour().then((produit) => {
            setProduitDuJour(produit)
        })
    }, [])

    return (
        <div className="content-produit-jour young-serif-regular">
            <div className="details-produit-jour">
                <div className="informations">
                    <div className="contenu">
                        <h1 className="sous-titre">{produitDuJour && produitDuJour.libelle}</h1>
                    </div>

                    <div className="titre">
                        <h3>Produit du jour</h3>
                    </div>
                </div>

                <div className="quantite">
                    <div className="quantite-informations">
                        <div className="prix">
                            <h3>{produitDuJour && parseFloat(produitDuJour.prix).toFixed(2)} Or</h3>
                            <p>Quantite en stock: {produitDuJour && produitDuJour.quantiteEnStock}</p>
                        </div>

                        <div className="action">
                            <div className="quantite-input">
                                <label htmlFor="quantite">Quantite</label>
                                <input type="number" name="quantite" id="quantite" min={0} />
                            </div>
                            <button>
                                <FaShoppingCart />
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}