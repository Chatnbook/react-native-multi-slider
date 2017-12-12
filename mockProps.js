"use strict";

import React from "react";
import PropTypes from "prop-types";
import { ViewPropTypes, View } from "react-native";

const BasicMarker = props => {
  return (
    <View
      style={[props.markerStyle, props.pressed && props.pressedMarkerStyle]}
    />
  );
};

BasicMarker.propTypes = {
  pressed: PropTypes.bool,
  pressedMarkerStyle: ViewPropTypes.style || View.propTypes.style,
  markerStyle: ViewPropTypes.style || View.propTypes.style
};

const mockProps = {
  values: [0],
  onValuesChangeStart: () => {},
  onValuesChange: () => {},
  onValuesChangeFinish: () => {},
  step: 1,
  min: 0,
  max: 10,
  selectedStyle: {
    backgroundColor: "blue"
  },
  unselectedStyle: {
    backgroundColor: "grey"
  },
  containerStyle: {
    height: 30
  },
  trackStyle: {
    height: 7,
    borderRadius: 3.5
  },
  touchDimensions: {
    height: 30,
    width: 30,
    borderRadius: 15,
    slipDisplacement: 30
  },
  markerStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#E8E8E8",
    borderWidth: 0.5,
    borderColor: "grey"
  },
  customMarker: BasicMarker,
  pressedMarkerStyle: {
    backgroundColor: "#D3D3D3"
  },
  sliderLength: 280
};

module.exports = mockProps;
