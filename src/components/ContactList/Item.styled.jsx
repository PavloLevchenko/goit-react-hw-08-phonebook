import styled from 'styled-components';

export const Item = styled.li`
display:flex;
justify-content:space-between; 
padding:${p => p.theme.space[2]}px;
:hover{
  background-color:${p => p.theme.colors.primary};
}
`;