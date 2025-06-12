import "./Navbar.css"

export const Navbar = () => {
    let isAuth = false;

    return (
        <div className="navbar young-serif-regular">
            <div className="navtitle">
                <h3>GondorCHIC</h3>
            </div>

            <div className="navright">
                { isAuth ? 
                    <div className="navUser">
                        <p>Bonjour, Marie DUPOND</p>
                    </div> 
                    : 
                    <form action="#" className="navlogin">
                        <div className="form-input">
                            <label htmlFor="pseudo">Pseudo</label>
                            <input type="text" name="pseudo" id="pseudo" />
                        </div>

                        <div className="form-input">
                            <label htmlFor="mot-de-passe">Mot de passe</label>
                            <input type="text" name="mot-de-passe" id="mot-de-passe" />
                        </div>

                        <input type="submit" value="S'identifier" />
                    </form>
                }
            </div>
        </div>
    )
}