import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Title,
  Left,
  Icon,
} from 'native-base';
const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Coffee Shop</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button
          style={{margin: 10}}
          block
          dark
          onPress={() => navigation.navigate('MenuScreen')}>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default LoginScreen;
