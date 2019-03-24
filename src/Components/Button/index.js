import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../Utils/Colors';

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;

Button.defaultProps = {
  className: undefined,
  style: undefined,
  type: 'button',
  title: undefined,
  onClick: () => undefined
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  title: PropTypes.string,
  onClick: PropTypes.func
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
