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
    handleStartTimer();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(10);

  const route = useRoute();

  const UserNumber = route.params.Number;

  // console.log(UserNumber, OTP);

  const handleVerifyCode = () => {
    setIsLoading(true);

    if (
      enteredOTP == pin1.pin1
    ) {
      console.log('this works');
      setMessage('');

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
              console.log(acc.data);

              if (acc.data.new_user) {
                navigation.replace('ReferUseSection');

                const valueString = JSON.stringify(acc.data.user_id);
                console.log(valueString);
                AsyncStorage.setItem('ActiveUserId', valueString);
              } else {
                navigation.replace('Home');

                const valueString = JSON.stringify(acc.data.user_id);
                console.log(valueString);
                AsyncStorage.setItem('ActiveUserId', valueString);
              }
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

  const handleResendOtp = () => {
    handleStartTimer();

    console.log('sending otp again');
    try {
      axios
        .post(
          BACKEND_URL + 'getotp',
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
          console.log(acc.data);
          setEnteredOTP(acc.data.otp);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStartTimer = () => {
    // handleVerifyCode();
    var timeleft = 9;

    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        console.log('now it will be close');
        clearInterval(downloadTimer);
      }

      setCountdown(1 + timeleft);
      timeleft -= 1;
    }, 1000);
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
        letterSpacing={8}
        placeholder='00000'
          ref={pin1Ref}
          maxLength={5}
          keyboardType="number-pad"
          style={styles.otpInputBox}
          onChangeText={text => {
            setPin1({pin1: text});
          }}
        />
       
      </View>

      <Text style={styles.errorMessage}>{message}</Text>
      {countdown == 1 ? (
        <Text style={styles.resendOtpText}>
          Didn???t received OTP?{' '}
          <Text onPress={handleResendOtp} style={styles.resenButton}>
            RESEND
          </Text>
        </Text>
      ) : (
        <>
          <Text style={styles.resendOtpText}>
            Resend OTP In <Text style={styles.resenButton}>{countdown}</Text>
          </Text>
        </>
      )}

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
