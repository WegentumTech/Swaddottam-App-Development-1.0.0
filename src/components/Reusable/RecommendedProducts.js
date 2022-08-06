import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const RecommendedProducts = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{marginTop: 5}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleMealScreen', {MealId: 2})}>
        <View style={{margin: 5}}>
          <Image
            source={require('../../assets/mealScrollable.jpg')}
            style={styles.ScrollableProducts}
          />
          <Text
            style={{
              color: '#707070',
              top: -15,
              backgroundColor: '#FFFFFF',
              width: 100,
              textAlign: 'center',
              left: 90,
              borderRadius: 10,
              padding: 2,
              top: -12,
              borderColor: '#707070',
              borderWidth: 0.5,
              borderStyle: 'solid',
            }}>
            Free Delivery
          </Text>

          <View style={{marginTop: 5}}>
            <Text style={styles.randomScrollableProductHead}>
              Product Name...
            </Text>
            <Text style={styles.randomScrollableProductPara}>
              Category Name
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: '#333333',
                  marginTop: 9,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 250
              </Text>
              <Text style={{color: '#F88922', fontSize: 23, marginLeft: 5}}>
                ₹ 120
              </Text>
              <Text style={{marginLeft: 60}}>
                <Ionicons name="heart" size={30} color="#C8C8C8" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RecommendedProducts;
