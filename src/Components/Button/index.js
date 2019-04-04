import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../Utils/Colors';

const Button = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

export default Button;

Button.defaultProps = {
  type: 'button',
  title: undefined,
  onClick: () => undefined
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  title: PropTypes.string,
  onClick: PropTypes.func
};

const StyledButton = styled.button`
  float: left;
  position: relative;
  top: 0;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
  margin: 0 7px 11px 0;
  font-size: 30px;
  padding: 10px 20px;
  text-align: center;
  user-select: none;
  transition: all 0.2s ease;
  background: #65ce92;
  color: ${COLORS.WHITE};
  box-shadow: 0px 5px #51bc81;
  outline: 0;

  &:hover {
    background: #51bc81;
    color: ${COLORS.WHITE};
    box-shadow: 0px 4px #439667;
  }

  &:active {
    box-shadow: 0px 0px #439667;
    top: 4px;
  }
`;
