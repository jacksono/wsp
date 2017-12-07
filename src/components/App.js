import React, {PropTypes} from 'react';
import Header from './common/header'
import Footer from './common/footer'

class App extends React.Component {
    render() {
        return (
          <div className="body">
          <span className="glyphicon "/>
              <Header />
            {this.props.children}
            <Footer />
          </div>
        );
    }
}

export default App;
