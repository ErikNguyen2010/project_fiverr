import React, {Fragment, useEffect} from "react"
import { Route } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


export const  HomeTemplate = (props) =>{
    let Component = props.component

    useEffect(() => {
        window.scrollTo(0, 0);
      });

      
    return <Route exact path={props.path} render={(propsRoute) =>{
        return <Fragment>
            <Header/>
            <Component {...propsRoute}/>
            <Footer/>
        </Fragment>
    }}/>
}

