import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add,reduce} from "../action/actionNum"

export class About extends Component {
    render() {
        return (
            <div>
                关于页面 <button onClick={()=>{
                    this.props.add(5)
                }}>+</button>
                <button onClick={()=>{
                    this.props.reduce(3)
                }}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    add,
    reduce
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
