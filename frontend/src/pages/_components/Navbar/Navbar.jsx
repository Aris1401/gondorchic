import { useEffect, useRef, useState } from "react";
import "./Navbar.css"
import { FaRegUser } from "react-icons/fa6"
import { identifierClient } from "../../../_services/IdentificationService"
import { useAuth } from "../../../_hooks/useAuth";

export const Navbar = ({ notifyError }) => {
    let { isAuth, login, client } = useAuth()

    let pseudo = useRef(null)
    let motDePasse = useRef(null)

    const tryIdentifierClient = (e) => {
        e.preventDefault();

        identifierClient(pseudo.current.value, motDePasse.current.value).then((response) => {
            login(response.data)
        }).catch((err) => {
            notifyError(err.data)
        })
    }

    return (
        <div className="navbar young-serif-regular">
            <div className="navtitle">
                <h3>GondorCHIC</h3>
            </div>

            <div className="navright">
                { isAuth ? 
                    <div className="navUser">
                        <FaRegUser />
                        <p>Bonjour, {client && client.prenom} {client && client.nom}</p>
                    </div> 
                    : 
                    <form action="#" className="navlogin">
                        <div className="form-input">
                            <label htmlFor="pseudo">Pseudo</label>
                            <input type="text" name="pseudo" id="pseudo" ref={pseudo} />
                        </div>

                        <div className="form-input">
                            <label htmlFor="mot-de-passe">Mot de passe</label>
                            <input type="password" name="mot-de-passe" id="mot-de-passe" ref={motDePasse} />
                        </div>

                        <input type="submit" value="S'identifier" onClick={(e) => { tryIdentifierClient(e) }} />
                    </form>
                }
            </div>
        </div>
    )
}