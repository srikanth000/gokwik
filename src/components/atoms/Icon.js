import styled, { css } from 'styled-components';
import { Box } from 'rebass';

const Icon = styled(Box).attrs(({
  rotate, pointer, width, height, borderRadius
}) => ({as: 'img', rotate, pointer, width, height, borderRadius}))`
    ${({ theme: { iconSizes }, size = 'sm' }) => {
    return css`
            width: ${size};
            height: ${size};
            background-size: cover;
            vertical-align: ${({verticalAlign}) => verticalAlign || 'middle'};
            ${({ rounded }) => rounded && css`border-radius: 50%`};
            ${({ rotate }) => rotate && css`transform: rotate(${rotate}deg)`};
            ${({ ml }) => ml && css`margin-left: ${ml}`};
            ${({ mt }) => mt && css`margin-top: ${mt}`};
            ${({ pointer }) => pointer && css`cursor: pointer`};
            ${({ borderRadius }) => borderRadius && css`border-radius: ${borderRadius}`};
        `
  }}
`

Icon.defaultProps = {
}

export default Icon;