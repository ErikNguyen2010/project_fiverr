import React, {Fragment, useEffect} from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../../pages/HeaderHome/HeaderHome"


export const  HomeTemplate = (props) =>{
    let Component = props.component

    useEffect(() => {
        window.scrollTo(0, 0);
      });

      
    return <Route exact path={props.path} render={(propsRoute) =>{
        return <Fragment>
            <HeaderHome {...propsRoute}/>
            <Component {...propsRoute}/>
            <footer className="text=white bg-dark display-4">footer</footer>
        </Fragment>
    }}/>
}

