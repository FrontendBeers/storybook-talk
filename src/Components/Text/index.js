import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = ({children, ...props}) => <Tag {...props}>{children}</Tag>;

Text.defaultProps = {
    children: void 0,
    className: void 0,
    style: void 0,
    size: '20px',
    weight: 400,
};

Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.string,
    weight: PropTypes.number,
};

export default Text;

const Tag = styled.p`
    font-size: ${props => props.size};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
`;