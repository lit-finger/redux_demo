import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add} from "../action/actionUser"

export class Adduser extends Component {
    adduser = () => {
        let username = this.refs.username.value;
        let userpwd = this.refs.userpwd.value;
        let userList = this.props.list;
        this.props.add({id: userList.length?userList[userList.length - 1].id + 1:1, username, userpwd})
    }
    render() {
        return (
            <div>
                用户名:<input ref="username" />
                密码:<input ref="userpwd" />
                <button onClick={() => { this.adduser() }}>新增</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list:state.userInfo.list
})

const mapDispatchToProps = {
    add
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser)
