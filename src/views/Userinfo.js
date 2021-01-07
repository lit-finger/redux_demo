import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../css/userList.css"
import {del} from "../action/actionUser"
import {changeNav} from "../action/actionNav"

export class Userinfo extends Component {
    componentDidMount(){
        this.props.changeNav(false);
    }
    componentWillUnmount(){
        this.props.changeNav(true);
    }
    render() {
        return (
            <div className="userlist">
                <table>
                    <tbody>
                        <tr>
                            <td>用户名</td>
                            <td>密码</td>
                            <td>操作</td>
                        </tr>
                        {this.props.list.map(item => {
                            return <tr key={item.id}>
                                <td>{item.username}</td>
                                <td>{item.userpwd}</td>
                                <td><span onClick={()=>{this.props.del(item.id)}}>删除</span></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.userInfo.list
})

const mapDispatchToProps = {
    del,
    changeNav
}

export default connect(mapStateToProps, mapDispatchToProps)(Userinfo)
