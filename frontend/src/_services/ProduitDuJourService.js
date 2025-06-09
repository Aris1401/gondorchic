import axiosInstance from "./api/api"

export const ObtenirProduitDuJour = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('/products/jour').then((response) => {
            resolve(response.data)
        })
    })
}