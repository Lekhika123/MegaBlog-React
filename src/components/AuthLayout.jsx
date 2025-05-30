import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        if (authStatus === undefined) return;
        if(authentication && authStatus !== authentication){
         console.log("111");
         
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
         console.log("222");
         
            navigate("/")
        }
        
        setLoader(false);
        console.log(loader);
        
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
