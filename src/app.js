import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/Results/results';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      header: null,
      body: null,
    };
  }

  getFormData = (body, headers) => {
    this.setState({body, header: headers});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form onReceiveData = {this.getFormData} />
        <Footer />
        <Results header={this.state.header} body={this.state.body} />
      </React.Fragment>
    );
  }
}

export default App;
