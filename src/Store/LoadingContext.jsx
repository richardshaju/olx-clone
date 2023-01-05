import {createContext, useState} from  'react'

export const LoadingContext = createContext(null)


function Post({children}){
    const [loading, setloading] = useState(false)
    return(
        <LoadingContext.Provider value={{loading,setloading}}>
            {children}
        </LoadingContext.Provider>
    )
}


export default Post