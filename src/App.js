import React, { Component } from 'react'
import Router from "./router";
import { connect } from 'react-redux'

export class App extends Component {
    render() {
        let style = {
            display: this.props.flag ? "block" : "none"
        }
        return (
            <>
                <div style={style}>
                    <a href="#/">首页</a>&emsp;|&emsp;
                   <a href="#/about">关于</a>&emsp;|&emsp;
                   <a href="#/adduser">新增用户</a>&emsp;|&emsp;
                   <a href="#/userinfo">用户列表</a>
                </div>
                <div className="main">
                    <Router></Router>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    flag: state.navInfo.flag
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)