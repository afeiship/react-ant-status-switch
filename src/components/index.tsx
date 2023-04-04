import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactAntRadioGroup from '@jswork/react-ant-radio-group';
import RctplAntRadioButton from '@jswork/rctpl-ant-radio-button';
import { Popover, Tag } from 'antd';

const CLASS_NAME = 'react-ant-status-switch';

export interface TemplateArgs {
  items: any[];
  item: any;
  index: number;
}

export type ReactAntStatusSwitchProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * List data source.
   */
  items?: any[];
  /**
   * List item template.
   */
  template?: (args: TemplateArgs) => any;
  /**
   * Default value.
   */
  value?: any;
  /**
   * The status label
   */
  text?: string;
  /**
   * The default layout.
   */
  layout?: string;
  /**
   * The change handler.
   */
  onChange?: Function;
  /**
   * Popover options.
   */
  popoverOpts?: any;
  /**
   * Tag options.
   */
  tagOpts?: any;
};

export default class ReactAntStatusSwitch extends Component<ReactAntStatusSwitchProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    layout: 'popover',
    items: [],
    onChange: noop
  };

  state = {
    value: this.props.value
  };

  get contentView() {
    const { items } = this.props;
    const { value } = this.state;
    return (
      <ReactAntRadioGroup
        size="small"
        items={items}
        template={RctplAntRadioButton}
        value={value}
        onChange={this.handleRGChange}
      />
    );
  }

  get color() {
    const { value } = this.state;
    const { items } = this.props;
    return items?.find((item) => item.value === value)?.color || value;
  }

  get text() {
    const { value } = this.state;
    const { text, items } = this.props;
    const target = items?.find((item) => item.value === value);
    return text || target?.label || value;
  }

  // @layout
  get flatLayout() {
    return this.contentView;
  }

  // @layout
  get popoverLayout() {
    const { popoverOpts } = this.props;
    return (
      <Popover content={this.contentView} {...popoverOpts}>
        {this.tagLayout}
      </Popover>
    );
  }

  // @layout
  get tagLayout() {
    const { tagOpts } = this.props;
    return (
      <Tag color={this.color} {...tagOpts}>
        {this.text}
      </Tag>
    );
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleRGChange = (inEvent) => {
    const { onChange } = this.props;
    const { value } = inEvent.target;
    this.setState({ value }, () => onChange!(inEvent));
  };

  render() {
    const { className, value, layout, onChange, items, template, popoverOpts, ...props } =
      this.props;

    return (
      <div
        data-component={CLASS_NAME}
        data-layout={layout}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this[layout! + 'Layout']}
      </div>
    );
  }
}
