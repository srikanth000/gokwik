import styled from 'styled-components';
import { media } from '../../utils/mediaBreakpoints';

const ToggleVisibility = styled.span
  .attrs(({ visibleOn }) => 
    ({ visibleOn }))`
    ${({ visibleOn: { mobile } }) => mobile === false && media.mobile`
        display: none;
    `}
    ${({ visibleOn: { tablet } }) => tablet === false && media.tablet`
        display: none;
    `}
    ${({ visibleOn: { desktop } }) => desktop === false && media.desktop`
        display: none;
    `}
`

ToggleVisibility.defaultProps = {
  visibleOn: {
    mobile: true,
    tablet: true,
    desktop: true
  }
}

export default ToggleVisibility;