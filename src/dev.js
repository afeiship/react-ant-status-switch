import './dev.scss';
import ReactTransfer from './main';

/*===example start===*/

// install: npm install afeiship/react-transfer --save
// import : import ReactTransfer from 'react-transfer'

class App extends React.Component {
  state = {
    items: [
      {
        value: 1,
        label: 'item-1'
      },
      {
        value: 2,
        label: 'item-2'
      },
      {
        value: 3,
        label: 'item-3'
      },
      {
        value: 4,
        label: 'item-4'
      },
      {
        value: 5,
        label: 'item-5'
      },
      {
        value: 6,
        label: 'item-6'
      },
      {
        value: 7,
        label: 'item-7'
      },
      {
        value: 8,
        label: 'item-8'
      },
      {
        value: 9,
        label: 'item-9'
      }
    ],
    value: [1, 2, 5]
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="hello-react-transfer">
        <ReactTransfer items={this.state.items} value={this.state.value} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
