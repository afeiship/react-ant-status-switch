import React, { useState } from 'react';
import ReactAntStatusSwitch from '../../src/main';
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

export default (props: any) => {
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
        <Button type="primary" onClick={(e) => setVal('success')}>
          Force to Set status
        </Button>
      </p>
    </Container>
  );
};
