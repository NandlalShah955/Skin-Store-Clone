import { useState,createContext } from "react"

export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
  const [Auth, setisAuth] = useState(false)
    return (
    <AuthContext.Provider value={{Auth,setisAuth}}>
{children}
    </AuthContext.Provider>
  )
}

