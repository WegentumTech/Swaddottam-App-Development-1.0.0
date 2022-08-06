import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PressBack from './Reusable/PressBack';
import styles from '../styles/globalStyles';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const BillingAndPayment = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('Pay Online');
  const [billingName, setBillingName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [AreaCode, setAreaCode] = useState('');
  const [remark, setRemark] = useState('');
  const route = useRoute();

  var radio_props = [
    {label: 'Pay Online', value: 'Pay Online'},
    {label: 'Cash On Delivery', value: 'Cash On Delivery'},
  ];

  return (
    <View View style={{backgroundColor: 'white', height: '100%'}}>
      <PressBack />
      <ScrollView>
        <Text
          style={{
            color: '#0A191E',
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Billing & Payment
        </Text>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput
              keyboardType="default"
              onChangeText={text => {
                setBillingName({billingName: text});
              }}
              style={styles.billingInput}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Billing Name
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput
              keyboardType="default"
              onChangeText={text => {
                setAddress({address: text});
              }}
              style={styles.billingInput}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Address
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput
              keyboardType="number-pad"
              maxLength={12}
              onChangeText={text => {
                setContactNumber({contactNumber: text});
              }}
              style={styles.billingInput}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Contact Number
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput
              maxLength={6}
              keyboardType="number-pad"
              onChangeText={text => {
                setAreaCode({AreaCode: text});
              }}
              style={styles.billingInput}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Area Code
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginTop: 20}}>
          <View>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.billingInput}
              onChangeText={text => {
                setRemark({remark: text});
              }}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                position: 'absolute',
                top: 5,
                left: 12,
              }}>
              Remark
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 40, marginTop: 30}}>
          <RadioForm
            formHorizontal={false}
            labelHorizontal={true}
            onPress={value => {
              setValue({value: value});
            }}
            radio_props={radio_props}
          />
        </View>

        {billingName.billingName &&
        address.address &&
        contactNumber.contactNumber &&
        AreaCode.AreaCode &&
        remark.remark ? (
          <View style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity
              onPress={() =>
                navigation.replace('OrderSummary', {
                  billingName: billingName.billingName,
                  address: address.address,
                  contactNumber: contactNumber.contactNumber,
                  areaCode: AreaCode.AreaCode,
                  remark: remark.remark,
                  paymentMethod: value.value ? value.value : value,
                  totPayment: route.params.totalPayment,
                })
              }>
              <Text style={styles.button2}>Proceed</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}>
            <Text style={styles.button2Disabled}>Proceed</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BillingAndPayment;
