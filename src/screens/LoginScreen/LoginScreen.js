import React, {useRef} from 'react';
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
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({navigation}) => {
  return (
    <Container style={baseStyles.container}>
      <Form style={baseStyles.loginForm}>
        <Animatable.View animation="fadeInLeft">
          <Title style={baseStyles.heading1}> Welcome to Coffee Shop</Title>
        </Animatable.View>
        <Animatable.View animation="fadeIn" delay={150}>
          <Item floatingLabel style={baseStyles.loginFormInput}>
            <Label style={baseStyles.loginFormLabel}>Username</Label>
            <Input selectionColor={baseColorDark} />
          </Item>
          <Item floatingLabel style={baseStyles.loginFormInput}>
            <Label style={baseStyles.loginFormLabel}>Password</Label>
            <Input selectionColor={baseColorDark} />
          </Item>
        </Animatable.View>
        <Animatable.View animation="fadeInRight">
          <Button
            style={baseStyles.mainButton}
            block
            onPress={() => navigation.navigate('MenuScreen')}>
            <Text style={baseStyles.mainButtonText}>Login</Text>
          </Button>
        </Animatable.View>
      </Form>
    </Container>
  );
};

export default LoginScreen;
