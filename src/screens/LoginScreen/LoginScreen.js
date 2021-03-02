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
import {NavigateToNextPageAnimation} from '../../components/reducer/ShopListActions';

const LoginScreen = ({navigation}) => {
  const AnimationRef = useRef(null);

  return (
    <Container style={baseStyles.container}>
      <Form style={baseStyles.loginForm}>
        <Animatable.View ref={AnimationRef}>
          <Animatable.View animation="fadeInUp">
            <Title style={baseStyles.heading1}> Welcome to Coffee Shop</Title>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={150}>
            <Item floatingLabel style={baseStyles.loginFormInput}>
              <Label style={baseStyles.loginFormLabel}>Username</Label>
              <Input selectionColor={baseColorDark} />
            </Item>
            <Item floatingLabel style={baseStyles.loginFormInput}>
              <Label style={baseStyles.loginFormLabel}>Password</Label>
              <Input selectionColor={baseColorDark} />
            </Item>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={300}>
            <Button
              style={baseStyles.mainButton}
              block
              onPress={() =>
                NavigateToNextPageAnimation(
                  'MenuScreen',
                  AnimationRef,
                  navigation,
                )
              }>
              <Text style={baseStyles.mainButtonText}>Login</Text>
            </Button>
          </Animatable.View>
        </Animatable.View>
      </Form>
    </Container>
  );
};

export default LoginScreen;
