import styled, { css } from 'styled-components'


const Button = styled.button`
  padding: ${props => props.paddong};
  color: ${props => props.color};
  background-color: ${props => props.disabled ? '#d0d4d6' : props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  font-family: ${({ bolder, bold, theme: { fonts }}) => {
    if(bolder) {
      return fonts.extraBold
    } else if(bold) {
      return fonts.semiBold
    } else {
      return fonts.normal
    }
  }};
  line-height: ${({ theme: { lineHeights }, lineHeight }) => lineHeights[lineHeight]};
  letter-spacing: ${({ theme: { letterSpaces }, letterSpace}) => letterSpaces[letterSpace]};
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `};
  padding: ${props => props.padding};

  &:focus {
    outline: none;
  }
  border-color: #d3dbe6;
  cursor: pointer;
  position: relative;
`

Button.defaultProps = {
  disabled: false
}


export default Button;