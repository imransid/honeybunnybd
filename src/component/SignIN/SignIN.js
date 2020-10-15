import React from "react";
import { View, Text } from "react-native";
import { Grid, Row, Col } from "native-base";

import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD } from "../../constant";

const Index = (props) => {
  return (
    <>
      {/* Header Title Row With Back Navigation */}
      <View
        style={{
          backgroundColor: "#242A35",
          height: 140,
        }}
      >
        <Grid>
          <Row
            style={{
              height: 35,
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <Text style={{ color: "#FFF", fontFamily: MAIN_FONT_SEMI_BOLD }}>
              {" "}
              {"< "}BACK
            </Text>
          </Row>
          <Row
            style={{
              paddingLeft: 30,
            }}
          >
            <Col>
              <Row style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: MAIN_FONT_BOLD,
                    fontSize: 28,
                  }}
                >
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
    </>
  );
};

export default Index;
