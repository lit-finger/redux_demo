import React, { Component } from 'react'
import { connect } from 'react-redux'
import {asyncAdd} from "../action/actionUser"

export class Adduser extends Component {
    adduser = () => {
        let username = this.refs.username.value;
        let userpwd = this.refs.userpwd.value;
        this.props.asyncAdd({username, userpwd})
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
    asyncAdd
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser)
