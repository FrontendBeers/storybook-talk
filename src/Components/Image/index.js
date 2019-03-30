import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FALLBACK_IMAGE = require('../../../assets/fallback.jpg');

const Image = ({ className, src, ...props }) => (
  <Wrapper className={className}>
    <Img {...props} src={src} />
  </Wrapper>
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCircle: PropTypes.bool
};

Image.defaultProps = {
  className: undefined,
  src: FALLBACK_IMAGE,
  alt: undefined,
  width: 400,
  height: 400,
  isCircle: false
};

export default Image;

const Wrapper = styled.span`
  position: relative;
`;

const Img = styled.img`
  height: ${props => (props.height ? props.height : 'initial')};
  width: ${props => (props.width ? props.width : 'initial')};

  ${props => props.isCircle && 'border-radius: 50%'};
`;
