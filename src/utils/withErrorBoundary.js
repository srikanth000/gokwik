import React from 'react';
import SomethingWentWrongPage from '../../src/pages/errors/SomethingWentWrongPage'

const withErrorBoundaryHOC = (Component) => (
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isError: false,
        errorInfo: null
      }
    }

    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        isError: true,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }

    onClickAction = () => window.location.reload();

    render() {
      const { isError } = this.state;
      if(isError) {
        return (<SomethingWentWrongPage clickToAction={{onClick: this.onClickAction, text: `Refresh the page`}}/>);
      }
      return (<Component {...this.props}/>);
    }
  }
)

export default withErrorBoundaryHOC;