import { createContext, useState } from "react";

const UsersConnectContext = createContext({})

const UserConnectProvider = props => {
    const [user, setUser] = useState(false)
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