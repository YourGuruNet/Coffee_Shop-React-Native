import React from 'react';
import {Title, Container} from 'native-base';
import {baseStyles} from '../../assets/styles';
import {SafeAreaView} from 'react-native';
const AddPaymentScreen = () => {
  return (
    <Container style={baseStyles.container}>
      <SafeAreaView />
      <Title style={baseStyles.heading1}>Add your payment</Title>
    </Container>
  );
};

export default AddPaymentScreen;
