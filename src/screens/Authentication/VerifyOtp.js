import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {BACKEND_URL} from '../../helper/baseUrl';
import {AuthKey} from '../../helper/baseUrl';
import {AuthPassword} from '../../helper/baseUrl';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyOtp = () => {
  const navigation = useNavigation();
  const [enteredOTP, setEnteredOTP] = useState('');
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  useEffect(() => {
    const OTP = route.params.ReveviedOtp;
    setEnteredOTP(OTP);
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const route = useRoute();

  const UserNumber = route.params.Number;

  // console.log(UserNumber, OTP);

  const handleResendOtp = () => {
    console.log('send otp again');
  };

  const handleVerifyCode = () => {
    setIsLoading(true);

    if (
      String(enteredOTP).slice(0, 1) === pin1.pin1 &&
      String(enteredOTP).slice(1, 2) === pin2.pin2 &&
      String(enteredOTP).slice(2, 3) === pin3.pin3 &&
      String(enteredOTP).slice(3, 4) === pin4.pin4
    ) {
      console.log('this works');
      setMessage('');
      navigation.replace('Home');

      const registerUser = () => {
        try {
          axios
            .post(
              BACKEND_URL + 'authentic',
              {
                mobile: UserNumber,
              },
              {
                headers: {
                  authkey: AuthKey,
                  secretkey: AuthPassword,
                },
              },
            )
            .then(acc => {
              const valueString = JSON.stringify(acc.data.user_id);
              console.log(valueString)
             AsyncStorage.setItem('ActiveUserId', valueString);
            
            
            
            })
            .catch(err => {
              console.log(err);
              setIsLoading(false);
            });
        } catch (error) {
          console.log(error);
        }
      };
      registerUser();
    } else {
      setMessage('Entered OTP Is Wrong');
      console.log('Entered OTP Is Wrong');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.backScreen}>
      <Image
        style={styles.loginImageLogo}
        source={require('../../assets/loginIllustrator.webp')}
      />

      <View>
        <Text style={styles.mainHeaderBoldText}>OTP Verification</Text>

        <View style={{marginHorizontal: 60}}>
          <Text style={styles.paraHeaderBoldTextAligned}>
            Enter the OTP sent to{' '}
            <Text style={{fontWeight: 'bold'}}>+91{UserNumber}</Text>
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
        <TextInput
          ref={pin1Ref}
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
          onChangeText={text => {
            setPin1({pin1: text});

            if (pin1.pin1 != '') {
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2Ref}
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
          onChangeText={text => {
            setPin2({pin2: text});
            if (pin2.pin2 != '') {
              pin3Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3Ref}
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
          onChangeText={text => {
            setPin3({pin3: text});
            if (pin3.pin3 != '') {
              pin4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4Ref}
          onChangeText={text => {
            setPin4({pin4: text});
          }}
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpInputBox}
        />
      </View>

      <Text style={styles.errorMessage}>{message}</Text>

      <Text style={styles.resendOtpText}>
        Didn’t received OTP?{' '}
        <Text onPress={handleResendOtp} style={styles.resenButton}>
          RESEND
        </Text>
      </Text>

      <View style={{alignSelf: 'center', marginTop: 30}}>
        {isLoading ? (
          <>
            <Text style={styles.button1}>
              {' '}
              <ActivityIndicator color="black" size="small" />
            </Text>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={handleVerifyCode}>
              <Text style={styles.button1}>Verify & Continue</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default VerifyOtp;
