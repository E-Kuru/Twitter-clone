import { createContext, useState } from "react";

const UsersConnectContext = createContext({})

const UserConnectProvider = props => {
    const [User, setUser] = useState(false)
    const userURL = "http://localhost:5000/users"
    const value = {
        user: User,
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