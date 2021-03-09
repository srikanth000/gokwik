import styled, { css } from 'styled-components';
import { Flex } from 'rebass';

const Text = styled(Flex)`
	color: ${({ theme: { colors }, color }) => colors[color]};
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
  font-weight: ${({ bolder, bold, normal, theme: { fontWeights }}) => {
    if(bolder) {
      return fontWeights.bolder
    } else if(bold) {
      return fontWeights.bold
    } else {
      return fontWeights.normal
    }
  }};
  line-height: ${({ theme: { lineHeights }, lineHeight }) => lineHeights[lineHeight]};
  letter-spacing: ${({ theme: { letterSpaces }, letterSpace}) => letterSpaces[letterSpace]};
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `};
  justify-content: ${props => props.justifyContent};
`

Text.defaultProps = {
  lineHeight: 'md',
  fontSize: 'md',
  lineSpace: 'md',
  color: 'body',
  justifyContent: 'start'
}

export default Text