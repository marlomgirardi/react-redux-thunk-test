import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions'

export class Info extends Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    if (this.props.isFetching) return <span>Loading...</span>
    if (this.props.error) return <span>Error</span>
    return <span>Info: {this.props.data.origin}</span>
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(actions.loadData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)
