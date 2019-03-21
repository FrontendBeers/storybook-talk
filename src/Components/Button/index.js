import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../Utils/Colors';

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

export default Button;

Button.defaultProps = {
  className: void 0,
  style: void 0,
  type: 'button',
  title: void 0,
  onClick: () => void 0,
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  title: PropTypes.string,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.1rem ${COLORS.BLACK};
  }
`;