import React from "react";
import { View, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox'
import { Grid, Row, Col, Item, Label, Input } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD, WHITE, TEXT_GRAY } from "../../constant";

import CustomButton from "../../element/Button/CustomLoginButton/CustomLoginButton";

import { FakeView } from "../../@library"

import styles from './Styles'

const Index = (props) => {
  return (
    <>
      {/* Header Title Row With Back Navigation */}
      <View
        style={styles.containerHeader}
      >
        <Grid>
          <Row style={styles.headerNavigation}>
            <FontAwesomeIcon icon={faArrowLeft} size={16} color={WHITE} />
            <Text style={styles.headerNavigationText}>
              {" "} BACK
            </Text>
          </Row>
          <Row style={styles.headerTitle} >
            <Col>
              <Row style={{ alignItems: "center" }}>
                <Text style={styles.headerTitleText}>
                  Log into
                </Text>
              </Row>
              <Row>
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: MAIN_FONT_BOLD,
                    fontSize: 28,
                    marginTop: -5,
                  }}
                >
                  your account
                </Text>
              </Row>
            </Col>
          </Row>
        </Grid>
      </View>

      {/* End Header Title Row */}


      {/* Body Email And password Field */}

      <View style={{
        height: 270, paddingRight: 30, paddingLeft: 30
      }}>

        {/* Input Field */}
        <View style={{
          height: 108,
          flexDirection: 'column'
        }}>

          <View style={{ width: '100%' }}>

            <Item floatingLabel>
              <Label style={{ fontFamily: MAIN_FONT, color: TEXT_GRAY, fontSize: 15 }}>Email</Label>
              <Input />
            </Item>

          </View>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            <View style={{ width: 270 }}>
              <Item floatingLabel>
                <Label style={{ fontFamily: MAIN_FONT, color: TEXT_GRAY, fontSize: 15 }}>Password</Label>
                <Input style={{
                  borderColor: TEXT_GRAY,
                }} />
              </Item>
            </View>
            <View style={{
              width: 80, justifyContent: 'center', alignItems: 'center',
              borderColor: TEXT_GRAY, borderBottomWidth: 1.1,
            }}>
              <Text style={{ fontFamily: MAIN_FONT, color: TEXT_GRAY, fontSize: 15 }}>Forget ?</Text>
            </View>
          </View>
          <View>

          </View>

        </View>

        {/* Remember Row */}
        <View style={{ height: 70, width: '100%' }}>
          <Grid>
            <Row>
              <Col style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <CheckBox
                  value={true}
                  tintColors={'#FFF'}
                  onValueChange={() => console.log('change value')}
                />
              </Col>
              <Col style={{ width: 160, justifyContent: 'center' }}>
                <Text style={{ fontFamily: MAIN_FONT, color: TEXT_GRAY, fontSize: 15, width: 150, letterSpacing: 1 }}>Remember me</Text>
              </Col>
            </Row>
          </Grid>
        </View>

        {/* Fake View */}
        <FakeView height={10} />
        {/* End Fake View */}

        {/* Button */}

        <View style={{ height: 60, width: '100%' }}>

          <CustomButton text="Sign in" fb={false} />
        </View>
        {/* End Button */}

        {/* Fake View */}
        <FakeView height={10} />
        {/* End Fake View */}

        {/* Social Button */}

        <View style={{ height: 60, width: '100%' }}>
          <CustomButton text="sign in with facebook" fb={true} />
        </View>
        {/* End Soci
        
        
        
        
        
        al Button */}





      </View>

    </>
  );
};

export default Index;
