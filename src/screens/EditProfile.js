import {View, Text, Image, TouchableOpacity, TextInput,Alert} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import PressBack from '../components/Reusable/PressBack';
import styles from '../styles/globalStyles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import {AuthKey} from '../helper/baseUrl';
import {AuthPassword} from '../helper/baseUrl';
import {BACKEND_URL} from '../helper/baseUrl';
import {SIMPLE_URL} from '../helper/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const [imageLink, setImageLink] = useState('');
  const refRBSheet = useRef();
  const [datas, setDatas] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [photo, setPhoto] = useState("")

  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [height, setHeight] = useState('');
  const [type, setType] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    GetUserId();
  }, []);

  const GetUserId = async () => {
    const userId = await AsyncStorage.getItem('ActiveUserId');
    console.log(userId);
    setUserId(userId);

    try {
      axios
        .post(
          BACKEND_URL + 'getuser',
          {
            user_id: userId,
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
          setDatas(acc.data);
          setFullName({fullName: acc.data.name});
          setEmail({email: acc.data.Email});
          setContactNumber({contactNumber: acc.data.mobile});
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateUser = async () => {

    // console.log(imageLink)


    let newFile = {
      uri: imageLink,
      type: `test/${imageLink.split(".")[1]}`,
      name: `test.${imageLink.split(".")[1]}`,
    };
    console.log(newFile)



    const data = new FormData()
    data.append('file', imageLink)
    data.append('upload_preset', 'mystore')
    data.append("cloud_name", "learnerboy")
    fetch("https://api.cloudinary.com/v1_1/learnerboy/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        setPhoto(data.secure_url)
        console.log(data)
      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })







    
    
    
    // let newFile = {
    //   uri: imageLink,
    //   type: `test/${imageLink.split(".")[1]}`,
    //   name: `test.${imageLink.split(".")[1]}`,
    // };
    
  
    // const data = new FormData();
    // data.append("file", imageLink);
    // data.append("upload_preset", "mystore");
    // data.append("cloud_name", "learnerboy");
    // fetch(
    //   "https://api.cloudinary.com/v1_1/learnerboy/image/upload",
    //   {
    //     method: "POST",
    //     body: data,
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);



       







    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Alert.alert("An Error Occured While Uploading");
    //   });


    // api to upload other credentials



    // try {
    //   axios
    //     .post(
    //       BACKEND_URL + 'updateuser',
    //       {
    //         user_id: userId,
    //         name: fullName.fullName,
    //         mobile: contactNumber.contactNumber,
    //         Email: email.email,
    //         profile_photo:data.secure_url
    //       },
    //       {
    //         headers: {
    //           authkey: AuthKey,
    //           secretkey: AuthPassword,
    //         },
    //       },
    //     )
    //     .then(acc => {
    //       console.log('i got this response ==> '+acc.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

   
  };

  const clicked = () => {
    Toast.show({
      type: 'success',
      text1: 'Your Profile Is Updated',
      text2: 'You Can Go Back Now',
    });
  };

  const handleCameraOpen = async () => {
    const result = await launchCamera();
    console.log(result);
    setImageLink(result.assets[0].uri);
    setImageUrl(result.assets[0].uri);
    setFileName(result.assets[0].fileName);
    setFileSize(result.assets[0].fileSize);
    setHeight(result.assets[0].height);
    setType(result.assets[0].type);
  };

  const handleGalleryOpen = async () => {
    const result = await launchImageLibrary();
    console.log(result);
    setImageLink(result.assets[0].uri);
    setImageUrl(result.assets[0].uri);
    setFileName(result.assets[0].fileName);
    setFileSize(result.assets[0].fileSize);
    setHeight(result.assets[0].height);
    setType(result.assets[0].type);
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Toast position="bottom" />
      <PressBack />

      <View style={{marginTop: 50}}>
        {imageLink ? (
          <Image
            source={{
              uri: imageLink,
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              top: -45,
              alignSelf: 'center',
            }}
          />
        ) : (
          <Image
            source={{
              uri: SIMPLE_URL + datas.profile_photo,
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              top: -45,
              alignSelf: 'center',
            }}
          />
        )}
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View
            style={{
              alignSelf: 'center',
              top: -90,
              left: 50,
              backgroundColor: '#F79320',
              padding: 5,
              borderRadius: 30,
            }}>
            <AntDesign name="camera" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: 30, marginTop: 20}}>
        <View>
          <TextInput
            onChangeText={text => {
              setFullName({fullName: text});
            }}
            defaultValue={datas.name}
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
            Full Name
          </Text>
        </View>

        <View>
          <TextInput
            onChangeText={text => {
              setEmail({email: text});
            }}
            defaultValue={datas.Email}
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
            Email
          </Text>
        </View>

        <View>
          <TextInput
            onChangeText={text => {
              setContactNumber({contactNumber: text});
            }}
            defaultValue={datas.mobile}
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

      <View style={{alignSelf: 'center', marginTop: 40}}>
        <TouchableOpacity onPress={UpdateUser}>
          <Text style={styles.button2}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <RBSheet
          animationType="slide"
          height={130}
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#86868C',
            },
          }}>
          <View>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={handleCameraOpen} style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <AntDesign name="camera" size={30} color="black" />
                  <Text
                    style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                    {'   '}Camera
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleGalleryOpen} style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Entypo name="folder-images" size={30} color="black" />
                  <Text
                    style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                    {'   '}Gallery
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default EditProfile;
