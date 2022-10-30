import React,{createContext,useContext,useState} from 'react';
const AuthContext = createContext()

export function AuthProvider({children}){
   const [email,setEmail] = useState()
   const [password,setPassword] = useState()
   async function login(email,password){
    setEmail = email
   setPassword = password
   }
   async function logout(){
    alert("Usuario deslogado!")
   }

    return(
        <AuthContext.Provider value={{email,password,setEmail,setPassword,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    const context = useContext(AuthContext)
    if(!context){
        throw new error("app tem que ficar dentro do provider")
    }
    return context
}