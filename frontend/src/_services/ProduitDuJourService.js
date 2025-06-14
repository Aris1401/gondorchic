import axiosInstance from "./api/Api"

export const ObtenirProduitDuJour = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('/produits/jour').then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}