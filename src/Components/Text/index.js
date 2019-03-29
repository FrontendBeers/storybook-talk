import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../Utils/Colors';

const Text = ({ children, ...props }) => <Tag {...props}>{children}</Tag>;

Text.defaultProps = {
  children: undefined,
  size: '20px',
  weight: 400,
  color: COLORS.BLACK
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  weight: PropTypes.number,
  color: PropTypes.string
};

export default Text;

const Tag = styled.p`
  font-size: ${props => props.size};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial;
  color: ${props => props.color};
`;
