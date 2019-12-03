import React from 'react';
import routes from "../routes";
import Sidebar from '../components/Sidebar';

export default class Create extends React.Component{
    render() {
        return (
            <Sidebar
            {...this.props}
            routes={routes}
            logo={{
              innerLink: "/admin/index",
              imgSrc: require("../assets/img/brand/argon-react.png"),
              imgAlt: "..."
            }}
          /> 
        )
    }
}