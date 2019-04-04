import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './Components/Text';
import Button from './Components/Button';
import getTime from './Utils/Time';

const App = () => {
  const [logs, setLogs] = useState([]);

  return (
    <Wrapper>
      <Text size="40px">Welcome to my wonderful app!</Text>
      <StyledButton onClick={() => setLogs([...logs, getTime(new Date())])}>
        What time is it ?
      </StyledButton>
      <LogsWrapper>
        {logs.map(log => (
          <Text style={{ margin: 0, marginBottom: '10px' }}>{log}</Text>
        ))}
      </LogsWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 0;
  margin-bottom: 40px;
  width: 300px;
`;

const LogsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
