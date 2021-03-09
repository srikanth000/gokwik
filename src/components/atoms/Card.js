import styled, { css } from 'styled-components';
import { Card as Base } from 'rebass';

const Card = styled(Base).attrs(({ flexDirection }) => ({
  flexDirection
}))`
  ${({ top }) => top && css`top: ${top};`}
  ${({ bottom }) => bottom && css`bottom: ${bottom};`}
  ${({ left }) => left && css`left: ${left};`}
  ${({ right }) => right && css`right: ${right};`}
  ${({ position }) => position && css`position: ${position};`}
  box-sizing: border-box;
  word-wrap: break-word;
  background-clip: border-box;
  display: flex;
  ${({ flexDirection }) => flexDirection && css`flex-direction: ${flexDirection};`}
  ${({ borderRequired}) => {
    return borderRequired && css`border: 1px solid ${props =>  props.theme.borders[props.borderColor] || props.theme.colors.border};`
  }}
  ${({ borderRadius }) => borderRadius && css`border-radius: ${borderRadius};`}
  ${({ backgroundColor }) => backgroundColor && css`background-color: ${backgroundColor};`}
  ${({ height }) => height && css`height: ${height};`}
  ${({ minHeight}) => minHeight && css`min-height: ${minHeight};`}
  ${({ minWidth }) => minWidth && css`min-width: ${minWidth};`}
  ${({ cursor }) => cursor && css`cursor: ${cursor};`}
  ${({ alignContent }) => alignContent && css`text-align: ${alignContent};`}
  ${({ alignItems }) => alignItems && css`align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && css`justify-content: ${justifyContent};`}
  ${({ pointer }) => pointer && css`cursor: pointer;`}

  ${({ boxShadow }) => {
    return boxShadow && css`
      box-shadow: ${boxShadow};
    `
  }}
  ${({flex}) => {
    return flex && css`
      flex: ${flex};
    `
  }}
  
  ${({ active }) => {
    return active && css`
      background-color: ${({ theme: { colors }}) => colors.primary};
      color: ${({ theme: { colors }}) => colors.white};
    `
  }}
  ${props => {
    return props.hoverBorderColor && css`
      &:hover {
        border: 1px solid ${props => props.theme.borders[props.hoverBorderColor]};
      }
    `
  }}
`

Card.defaultProps = {
  flexDirection: 'column',
  backgroundColor: 'white',
  height: null,
  borderRequired: true,
  active: false,
  borderRadius: '0.25em',
  position: 'relative'
}
export default Card;