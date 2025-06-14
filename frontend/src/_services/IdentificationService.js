import axiosInstance from "./api/Api"

export const identifierClient = (pseudo, motDePasse) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/clients/login", {
            pseudo: pseudo,
            motDePasse: motDePasse
        }).then((response) => {
            localStorage.setItem("accessToken", response.data)

            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const obtenirInfomationsClient = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('/clients/informations').then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}