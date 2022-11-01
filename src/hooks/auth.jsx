import React,{createContext,useContext,useState} from 'react';

const AuthContext = createContext()

export function AuthProvider({children}){
const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
  
   async function login(email,password){
    setEmail(email)
    setPassword(password)
    // requisição sessao de login retorna token
   }
   async function createUser(name,email,password){
    setName(name)
    setEmail(email)
    setPassword(password)
    // requisição sessao de cadastro retorna token
   }
   async function logout(){
    setEmail('')
    setPassword("")
    //destroy token
    alert("Usuario deslogado!")
   }

    return(
        <AuthContext.Provider value={{email,password,name,setEmail,setPassword,login,logout,createUser}}>
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