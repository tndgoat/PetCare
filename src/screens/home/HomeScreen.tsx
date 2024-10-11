import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  Button,
} from 'react-native';
import {ButtonComponent, TextComponent} from '../../components';
import {fontFamily} from '../../constants/fontFamily';
import {appColor} from '../../constants/appColor';

// icon
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          paddingTop: 78,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 28,
            marginHorizontal: 35,
          }}>
          <TextComponent
            text="Love your pet with endless care."
            color={appColor.text}
            size={22}
            font={fontFamily.semiBold}
            numberOfLine={2}
            flex={0.75}
          />
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            borderColor: '#F3E8EC',
            borderRadius: 24,
            borderWidth: 1,
            paddingVertical: 14,
            paddingHorizontal: 20,
            marginBottom: 27,
            marginHorizontal: 35,
          }}>
          <View
            style={{
              width: 16,
              marginRight: 16,
            }}>
            <AntDesign name="search1" size={18} color="black" />
          </View>
          <Text
            style={{
              color: '#ADADAD',
              fontSize: 12,
              flex: 1,
              fontFamily: fontFamily.regular,
            }}>
            {'Search vet clinics, articles...'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F3E8EC',
            borderRadius: 10,
            paddingLeft: 27,
            paddingRight: 1,
            marginBottom: 23,
            marginHorizontal: 35,
          }}>
          <View
            style={{
              width: 127,
            }}>
            <TextComponent
              text="Enjoy our app? Give us a rate!"
              size={16}
              font={fontFamily.semiBold}
              styles={{
                marginBottom: 31,
                width: 127,
              }}
            />
            <ButtonComponent
              color={appColor.primary}
              text="Rate us now"
              type="primary"
              styles={{
                width: 108,
                height: 40,
                alignItems: 'center',
                backgroundColor: '#DB3169',
                borderRadius: 20,
                paddingVertical: 11,
              }}
              textStyles={{fontSize: 12}}
              textFont={fontFamily.semiBold}
            />
          </View>
          <Image
            source={require('../../assets/images/banner.png')}
            resizeMode={'stretch'}
            style={{
              borderRadius: 10,
              width: 130,
              height: 150,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            marginHorizontal: 24,
          }}>
          <Text
            style={{
              color: '#101623',
              fontSize: 16,
            }}>
            {'My Pets'}
          </Text>
          <Text
            style={{
              color: '#DB3169',
              fontSize: 12,
            }}>
            {'See all'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 22,
            marginHorizontal: 23,
          }}>
          <View
            style={{
              width: 118,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#F3E8EC',
                borderRadius: 11,
                borderWidth: 1,
                paddingTop: 20,
                paddingBottom: 35,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  height: 71,
                  marginBottom: 20,
                  marginHorizontal: 23,
                }}
              />
              <Text
                style={{
                  color: '#555555',
                  fontSize: 12,
                  marginBottom: 6,
                  marginLeft: 4,
                }}>
                {'Bob the crying cat'}
              </Text>
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 9,
                  marginLeft: 10,
                }}>
                {'Tuxedo Cat'}
              </Text>
            </View>
            <Text
              style={{
                position: 'absolute',
                bottom: -3,
                left: 50,
                color: '#ADADAD',
                fontSize: 20,
              }}>
              {'...'}
            </Text>
          </View>
          <View
            style={{
              width: 118,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#F3E8EC',
                borderRadius: 11,
                borderWidth: 1,
                paddingTop: 20,
                paddingBottom: 35,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  height: 71,
                  marginBottom: 21,
                  marginHorizontal: 23,
                }}
              />
              <Text
                style={{
                  color: '#3B4453',
                  fontSize: 12,
                  marginBottom: 5,
                  marginLeft: 8,
                }}>
                {'Mr. Golden'}
              </Text>
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 9,
                  marginLeft: 8,
                }}>
                {'Shiba Inu Dog'}
              </Text>
            </View>
            <Text
              style={{
                position: 'absolute',
                bottom: -3,
                left: 50,
                color: '#ADADAD',
                fontSize: 20,
              }}>
              {'...'}
            </Text>
          </View>
          <View
            style={{
              width: 118,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#F3E8EC',
                borderRadius: 11,
                borderWidth: 1,
                paddingTop: 20,
                paddingBottom: 35,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  height: 71,
                  marginBottom: 21,
                  marginHorizontal: 23,
                }}
              />
              <Text
                style={{
                  color: '#3B4453',
                  fontSize: 12,
                  marginBottom: 5,
                  marginLeft: 10,
                }}>
                {'Bob’s Snack'}
              </Text>
              <Text
                style={{
                  color: '#A0A7B0',
                  fontSize: 9,
                  marginLeft: 10,
                }}>
                {'Hamster'}
              </Text>
            </View>
            <Text
              style={{
                position: 'absolute',
                bottom: -3,
                left: 50,
                color: '#ADADAD',
                fontSize: 20,
              }}>
              {'...'}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
            marginHorizontal: 25,
          }}>
          <Text
            style={{
              color: '#101623',
              fontSize: 16,
            }}>
            {'Upcoming Appointments'}
          </Text>
          <Text
            style={{
              color: '#DB3169',
              fontSize: 12,
            }}>
            {'See all'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderColor: '#F3E8EC',
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 14,
            paddingHorizontal: 6,
            marginBottom: 9,
            marginHorizontal: 23,
          }}>
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              borderRadius: 8,
              width: 62,
              height: 64,
            }}
          />
          <View
            style={{
              width: 294,
            }}>
            <Text
              style={{
                color: '#565656',
                fontSize: 13,
                marginBottom: 10,
              }}>
              {'Bob’s Neutering: The reason he’s crying...'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 12,
                  marginRight: 15,
                }}>
                {'14:30'}
              </Text>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 2,
                  height: 2,
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 12,
                  marginRight: 22,
                }}>
                {'09/13/2024'}
              </Text>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 8,
                  height: 10,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 12,
                  flex: 1,
                }}>
                {'BK Vet Clinic'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 69,
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderColor: '#DB3169',
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 8,
                }}>
                <Text
                  style={{
                    color: '#DB3169',
                    fontSize: 12,
                  }}>
                  {'Cancel'}
                </Text>
              </View>
              <View
                style={{
                  width: 80,
                  alignItems: 'center',
                  backgroundColor: '#DB3169',
                  borderRadius: 15,
                  paddingVertical: 8,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 12,
                  }}>
                  {'Complete'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 21,
            marginHorizontal: 26,
          }}>
          <Text
            style={{
              color: '#101623',
              fontSize: 16,
            }}>
            {'Reminders'}
          </Text>
          <Text
            style={{
              color: '#DB3169',
              fontSize: 12,
            }}>
            {'See all'}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderColor: '#F3E8EC',
              borderRadius: 10,
              borderWidth: 1,
              paddingVertical: 7,
              paddingHorizontal: 6,
              marginHorizontal: 23,
            }}>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                borderRadius: 8,
                width: 62,
                height: 64,
                marginRight: 15,
              }}
            />
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#565656',
                  fontSize: 13,
                  marginBottom: 10,
                }}>
                {'Take Golden for a walk'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: '#ADADAD',
                    fontSize: 12,
                  }}>
                  {'16:30'}
                </Text>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    width: 2,
                    height: 2,
                  }}
                />
                <Text
                  style={{
                    color: '#ADADAD',
                    fontSize: 12,
                  }}>
                  {'09/13/2024'}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              paddingVertical: 28,
              marginTop: -28,
            }}>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 21,
                height: 22,
                marginRight: 47,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 29,
                height: 29,
                marginRight: 47,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 33,
                height: 33,
                marginRight: 45,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 20,
                height: 22,
                marginRight: 49,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 16,
                height: 20,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
