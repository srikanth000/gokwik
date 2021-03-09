import styled, { css } from 'styled-components';
import { Box } from 'rebass';

const Input = styled(Box).attrs(({ p, mb }) => ({as: 'input', p, mb }))`
  ${({ backgroundColor }) => backgroundColor && css`background-color: ${props => props.backgroundColor};`}
  font-size: ${({ theme: { fontSizes }, fontSize }) => fontSizes[fontSize]};
  font-family: ${({ bolder, bold, theme: { fonts }}) => {
    if(bolder) {
      return fonts.extraBold
    } else if(bold) {
      return fonts.semiBold
    } else {
      return fonts.normal
    }
  }};
  border-radius: 4px;
  margin-top: ${({ mt }) => mt || '0px'};
  border: 1px solid ${({ theme: { borders }}) => borders.input};
  ${({ variant }) => variant && css`border-color: ${({ theme: { colors } }) => colors[`${variant}`]};`}
  &:focus {
    outline: none;
  }
  ${({ minWidth }) => minWidth && css`min-width: ${props => props.minWidth};`}
  ${({hidden}) => hidden && css`display: none;`}
  ${({ isDateType }) => isDateType && css`
    text-align: start;
    background: ${({ theme: { colors }}) => colors.lightestGreyNew};
    font-size: ${({ theme: { fontSizes }}) => fontSizes.md};
    color: ${({ theme: { colors }}) => colors.darkerGrey};
    font-family: "ProximaNova-Semibold";
    letter-spacing: ${({ theme: { space }}) => `${space[2]}px;`}
  `}
`

Input.defaultProps = {
  p: '0.8em',
  mb: '0.5em',
  backgroundColor: '#f5f7f9',
  fontSize: 'sm',

}

export default Input
