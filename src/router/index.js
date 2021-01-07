import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import loadable from '../utils/loadable.js'
import Home from "../views/Home"
import NotFound from "../views/404";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                {
                    path: "/",
                    com: Home,
                    exact: true
                },
                {
                    path:"/home",
                    com:Home
                },
                {
                    path:"/about",
                    com:loadable(()=>import("../views/About"))
                },
                {
                    path:"/adduser",
                    com:loadable(()=>import("../views/Adduser"))
                },
                {
                    path:"/userinfo",
                    com:loadable(()=>import("../views/Userinfo"))
                },
                {
                    path: "/404",
                    com: NotFound
                }
            ]
        }
    }
    render() {
        return (
            <>
                <HashRouter>
                    <Switch>
                        {this.state.routerList.map((item, index) => {
                            return <Route key={index} path={item.path} component={item.com} exact={item.exact} />
                        })}
                        <Redirect to="/404"></Redirect>
                    </Switch>
                </HashRouter>
            </>
        )
    }
}
