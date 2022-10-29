import React,{createContext,useContext,useState} from 'react';
const AuthContext = createContext()

export function AuthProvider({children}){
   const [email,setEmail] = useState()
   const [password,setPassword] = useState()
   async function login(){
   
     alert("Bem vindo")
   }
   async function logout(){
    alert("Usuario deslogado!")
   }
    return(
        <AuthContext.Provider value={{email,password,login,logout}}>
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