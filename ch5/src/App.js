import React, { Component } from 'react';
// import Validation from './components/Validation';
import ScrollBox from './components/ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
