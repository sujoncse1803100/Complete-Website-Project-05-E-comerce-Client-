import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 760px) {
      ${props}
    }
  `;
};

export const desctop = (props) => {
  return css`
    @media only screen and (min-width: 580px) {
      ${props}
    }
  `;
};
