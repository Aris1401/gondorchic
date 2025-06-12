import axiosInstance from "./api/api"

// export const ObtenirProduitDuJour = () => {
//     return new Promise((resolve, reject) => {
//         axiosInstance.get('/products/jour').then((response) => {
//             resolve(response.data)
//         })
//     })
// }

export const ObtenirProduitDuJour = () => {
    return new Promise((resolve, reject) => {
        resolve(
            {
                id: 0,
                libelle: "Poudre de Fee d'Eryn Galen",
                description: "Sint officia adipisicing do sit laborum quis magna pariatur consectetur aute duis duis deserunt officia. Reprehenderit ex ad ad quis non tempor elit sint consequat mollit et. Laboris cillum id fugiat magna. Ea cupidatat consectetur dolore nulla voluptate qui. Nisi cillum laboris aute voluptate sunt commodo anim ad aliqua est labore. Duis Lorem anim nulla sint ad qui.",
                quantiteEnStock: 37,
                prix: 30.00
            }
        )
    })
}