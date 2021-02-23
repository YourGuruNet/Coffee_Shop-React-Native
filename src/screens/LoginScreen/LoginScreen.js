import React from 'react';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Title,
} from 'native-base';
import {baseStyles, baseColorDark} from '../../assets/styles';

const LoginScreen = ({navigation}) => {
  return (
    <Container style={baseStyles.container}>
      <Form style={baseStyles.loginForm}>
        <Title style={baseStyles.heading1}>Welcome to Coffee Shop</Title>
        <Item floatingLabel style={baseStyles.loginFormInput}>
          <Label style={baseStyles.loginFormLabel}>Username</Label>
          <Input selectionColor={baseColorDark} />
        </Item>
        <Item floatingLabel style={baseStyles.loginFormInput}>
          <Label style={baseStyles.loginFormLabel}>Password</Label>
          <Input selectionColor={baseColorDark} />
        </Item>
        <Button
          style={baseStyles.mainButton}
          block
          onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={baseStyles.mainButtonText}>Login</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default LoginScreen;
