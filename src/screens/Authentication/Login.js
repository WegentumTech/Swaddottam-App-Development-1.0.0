import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_URL} from '../../helper/baseUrl';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
const Login = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = () => {
    setIsLoading(true);
    if (mobileNumber.mobileNumber.length < 10) {
      setIsLoading(false);
      return setMessage('Please Rechek Your Number');
    }
    setMessage('');

    try {
      axios
        .post(
          BACKEND_URL + 'getotp',
          {
            mobile: mobileNumber.mobileNumber,
          },
          {
            headers: {
              authkey: AuthKey,
              secretkey: AuthPassword,
            },
          },
        )
        .then(acc => {
          setIsLoading(false);
            console.log(acc.data);
          navigation.replace('VerifyOtp', {
            Number: mobileNumber.mobileNumber,
            ReveviedOtp: acc.data.otp,
          });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.backScreen}>
      <Image
        style={styles.loginImageLogo}
        source={require('../../assets/loginIllustrator.webp')}
      />

      <View>
        <Text style={styles.mainHeaderBoldText}>Enter Your Phone Number</Text>

        <View style={{marginHorizontal: 60}}>
          <Text style={styles.paraHeaderBoldTextAligned}>
            We will send and SMS message to verify your phone number.
          </Text>
        </View>
      </View>

      <View style={{marginTop: 30, marginHorizontal: 20}}>
        <Text style={styles.loginTopHeading}>Enter Mobile Number</Text>
      </View>

      <View style={{flexDirection: 'row', marginHorizontal: 20,marginTop:10}}>
        <View style={styles.countryCodeAndImageBox}>
          <Image
            style={styles.countryFlagicon}
            source={require('../../assets/Flag_of_India.png')}
          />

          <Text style={styles.inputBoxCountryCode}>+91</Text>
        </View>

        <TextInput
        autoFocus
          keyboardType="number-pad"
          placeholder="00000..."
          placeholderTextColor="#8c8989"
          maxLength={10}
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '75%',
            borderColor:
              message === 'Please Rechek Your Number' ? 'red' : '#7D7D7D',
            borderRadius: 5,
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
          }}
          onChangeText={text => {
            setMobileNumber({mobileNumber: text});
          }}
        />
      </View>

      <Text style={styles.errorMessage}>{message}</Text>

      <View style={{alignSelf: 'center', marginTop: 30}}>
        {isLoading ? (
          <>
            <Text style={styles.button1}>
              <ActivityIndicator color="black" size="small" />
            </Text>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={handleSendOTP}>
              <Text style={styles.button1}>Get OTP</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Login;
