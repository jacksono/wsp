import React, {PropTypes} from 'react';
import Header from './common/header'

class App extends React.Component {
    render() {
        return (
          <div className="body">
          <span className="glyphicon "/>
              < Header />
            {this.props.children}
            <span className="glyphicon glyphicon-user "/> hold
          </div>
        );
    }
}

export default App;
