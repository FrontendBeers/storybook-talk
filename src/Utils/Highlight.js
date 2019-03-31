import styled from 'styled-components';
import COLORS from './Colors';

export const Highlight = styled.span`
  color: ${props => props.color || COLORS.PINK};
`;

export default { Highlight };
