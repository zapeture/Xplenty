import styled from 'styled-components';

export const Button = styled.a`
  /* common styles */
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0px 2px 7px #00000033;
  letter-spacing: 0px;
  opacity: 1;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  font-family: 'Open Sans';

  /* specific  styles*/
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 20px 9px 20px'
      : size === 'large' && '15px 31px 16px 31px'};
  background: ${({ background }) =>
    background === 'yellow'
      ? '#ffe200 0% 0% no-repeat padding-box'
      : background === 'blue' &&
        'transparent linear-gradient(90deg, #3ba9fb 0%, #148af1 100%) 0% 0% no-repeat padding-box'};
  color: ${({ text_color }) =>
    text_color === 'light'
      ? '#fff !important'
      : text_color === 'dark' && '#3f3f3f !important'};
  border: ${({ outline }) => outline === 'white' && '2px solid #ffffff'};
  text-align: ${({ large, small }) => (small ? 'left' : large && 'center')};
  font-size: ${({ large, small }) => (small ? '13px' : large && '16px ')};
  line-height: ${({ large, small }) => (small ? '18px' : large && '22px')};
  margin: ${({ size }) => size === 'large' && '0 10px'};
`;
