import { preact, h, render, Component } from 'preact';

class MyComp extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 0
    };
  }
  render() {
    return (
        <div id="foo">
            <span>Hello, world! {this.state.clicked}</span>
            <button onClick={ e => this.setState({clicked: this.state.clicked+1}) }>Click Me</button>
        </div>
    );
  }
}

render(<MyComp />, document.body);
