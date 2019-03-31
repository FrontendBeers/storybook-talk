import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../Utils/Colors';

const Tabs = ({ children, allDisabled }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = tabIndex => {
    setSelectedTab(tabIndex);
  };

  return (
    <TabsWrapper>
      <TabList role="tablist">
        {React.Children.map(
          children,
          ({ props: { label, isDisabled } }, index) => (
            <TabButton
              role="tab"
              isSelected={selectedTab === index}
              aria-selected={selectedTab === index ? 'true' : 'false'}
              onClick={() => !allDisabled && !isDisabled && selectTab(index)}
              isDisabled={allDisabled || isDisabled}
            >
              {label}
            </TabButton>
          )
        )}
      </TabList>

      <Content>
        {React.Children.map(children, (comp, index) =>
          selectedTab === index ? comp : undefined
        )}
      </Content>
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  allDisabled: PropTypes.bool
};

Tabs.defaultProps = {
  allDisabled: false
};

export default Tabs;

const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabButton = styled.button`
  flex: 1;
  height: 50px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: default;
  outline: none;
  transition: border-color 0.2s ease-in;
  border: 1px solid ${COLORS.GRAY};
  color: ${props => (props.isDisabled ? COLORS.DARK : COLORS.BLACK)};
  border-radius: 10px 10px 0 0;
  border-bottom: 4px solid
    ${props => (props.isSelected ? COLORS.PINK : COLORS.WHITE)};

  &:hover,
  &:focus,
  &:active {
    border-bottom: 4px solid
      ${props => (props.isSelected ? COLORS.PINK : COLORS.GRAY)};
    cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: ${props => props.breakPoint}) {
    flex-direction: column;
    & > div,
    & > div > button {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 16px;
`;
