import { createContext, useState } from "react";

const UsersConnectContext = createContext({})

const UserConnectProvider = props => {
    const [user, setUser] = useState(false)
    const [userArray, setUserArray] = useState()
    const userURL = "http://localhost:5000/users"
    const value = {
        user: user,
        setUser: setUser
    }
    return (
        <UsersConnectContext.Provider value = {value}>
            {props.children}
        </UsersConnectContext.Provider>
    )

}

export {
    UserConnectProvider,
    UsersConnectContext
}