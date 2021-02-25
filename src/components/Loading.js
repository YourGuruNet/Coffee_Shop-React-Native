import React from 'react';
import {Content, Spinner} from 'native-base';
import {baseColorDark} from '../assets/styles';

const Loading = () => {
  return (
    <Content>
      <Spinner color={baseColorDark} />
    </Content>
  );
};

export default Loading;
