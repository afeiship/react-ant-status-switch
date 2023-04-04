# react-ant-status-switch
> React status swicher component based on antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/react-ant-status-switch
```

## usage
1. import js
  ```js
  import React, { useState } from 'react';
  import ReactAntStatusSwitch from '@/main';
  import styled from 'styled-components';
  import { Button } from 'antd';

  const Container = styled.div`
    width: 80%;
    margin: 100px auto 0;
    p {
      margin-top: 10px;
    }
  `;

  const items = [
    {
      value: 'default',
      label: '默认 🤡'
    },
    {
      value: 'success',
      label: '成功 😎'
    },
    {
      value: 'warning',
      label: '警告 🥸'
    },
    {
      value: 'error',
      label: '失败 😤'
    },
    {
      value: 'customize',
      color: '#080',
      label: '自定义状态 🤩'
    }
  ];

  export default () => {
    const [val, setVal] = useState('success');
    return (
      <Container>
        <p>轻轻的移向我，我会改变状态滴.</p>
        <ReactAntStatusSwitch
          value={val}
          items={items}
          layout={'flat'}
          popoverOpts={{ placement: 'top' }}
          onChange={(e) => {
            console.log('e.', e.target.value);
            setVal(e.target.value);
          }}
        />

        <ReactAntStatusSwitch
          value={val}
          items={items}
          layout={'popover'}
          popoverOpts={{ placement: 'top' }}
          onChange={(e) => {
            console.log('e.', e.target.value);
            setVal(e.target.value);
          }}
        />

        <p>
          Current status: <strong>{val}</strong>
        </p>

        <p>Only tag status</p>

        <ReactAntStatusSwitch value={val} items={items} layout={'tag'} />

        <p>
          <Button type="primary" onClick={() => setVal('success')}>
            Force to Set status
          </Button>
        </p>
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-ant-status-switch/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-status-switch/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-status-switch
[version-url]: https://npmjs.org/package/@jswork/react-ant-status-switch

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-status-switch
[license-url]: https://github.com/afeiship/react-ant-status-switch/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-status-switch
[size-url]: https://github.com/afeiship/react-ant-status-switch/blob/master/dist/react-ant-status-switch.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-status-switch
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-status-switch
