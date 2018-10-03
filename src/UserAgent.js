import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions'

export class UserAgent extends Component {
  componentDidMount() {
    this.props.loadUA()
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <span>Loading...</span>}
        {this.props.error && <span>Error</span>}
        {!this.props.isFetching &&
          !this.props.error && (
            <span>User Agent: {this.props.data['user-agent']}</span>
          )}
      </div>
    )
    return
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUA: () => dispatch(actions.loadUA())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAgent)
