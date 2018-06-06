import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactSelect from 'react-select';
import NxDomEvent from 'next-dom-event';
import nxGroupBy from 'next-group-by';


export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop
  };
  /*===properties end===*/


  get dataSource() {
    const { value, items } = this.props;
    return nxGroupBy(items, (_, item) => {
      return ~value.indexOf(item.value) ? 'source' : 'target';
    });
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      sourceValue: [],
      targetValue: [],
    };
    this.attachEvents();
    this._target = null;
  }

  attachEvents() {
    this._keyupRes = NxDomEvent.on(window, 'keyup', ({ code }) => {
      console.log(code);
      (this[`on${code}`] || noop).call(this);
    });
  }

  onEnter = inEvent => { };
  onArrowLeft = inEvent => { };
  onArrowRight = inEvent => { };

  detachEvents() {
    this._keyupRes.destroy();
  }

  componentWillUnmount() {
    this.detachEvents();
    this._target = null;
  }

  _onFocus = inTarget => {
    this._target = inTarget;
    console.log(this._target);
  };

  _onBlur = inTarget => {
    // this.setState({
    //   [`${inTarget}Value`]: []
    // });
  };

  _onChange = (inTarget, inEvent) => {
    const { value } = inEvent.target;
    this.setState({
      [`${inTarget}Value`]: value
    });
  };


  render() {
    const { className, items, value, ...props } = this.props;
    const { source, target } = this.dataSource;
    const { sourceValue, targetValue } = this.state;
    console.log(sourceValue, targetValue);

    return (
      <section {...props} className={classNames('react-transfer', className)}>
        <ReactSelect
          onFocus={this._onFocus.bind(this, 'source')}
          onBlur={this._onBlur.bind(this, 'source')}
          onChange={this._onChange.bind(this, 'source')}
          value={sourceValue}
          items={source} />
        <ReactSelect
          onFocus={this._onFocus.bind(this, 'target')}
          onBlur={this._onBlur.bind(this, 'target')}
          onChange={this._onChange.bind(this, 'target')}
          value={targetValue}
          items={target} />
      </section>
    );
  }
}
