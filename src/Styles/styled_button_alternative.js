import styled from 'styled-components'

export const ButtonAlternative = styled.button`
  background-color: red;
  font-size: ${props => props.size};
  color: ${props => props.color};
  background-color: ${props => props.back};
  border-style: none;
  width: fit-content;
  padding: 3px 20px 3px 20px;
  border: 2px solid ${props => props.back};
  border-radius: 50px;
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  &:hover{
    transform: scale(1.05)
  }
`
