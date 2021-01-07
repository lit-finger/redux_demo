import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        return (
            <div>
                主页 {this.props.num}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    num:state.numInfo.num
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
