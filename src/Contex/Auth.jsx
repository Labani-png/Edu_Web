import { createContext, useContext, useEffect, useState } from "react";


const AuthContex = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({

        user: null,
        token: ""

    })

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if (data) {
            const ParseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: ParseData.user,
                token: ParseData.token
            })
        }

    }, [])

    return (
        <>
            <AuthContex.Provider value={[auth, setAuth]}>
                {children}
            </AuthContex.Provider>

        </>
    )

};

const useAuth=()=>useContext(AuthContex)

export { useAuth, AuthProvider };
