import { keyframes } from "@emotion/react";

const fadeInRightShorter = keyframes`
  from {
    opacity: 0;
    transform: translate(-100px,0);
    transform-origin: 0 0;
  }
  
  to {
    opacity: 1;
    transform: none
  }`;

const fadeInDownShorter = keyframes`
  from {
      opacity: 0;
      transform: translate(0,-50px);
      transform-origin: 0 0;
  }
  
  to {
      opacity: 1;
      transform: none
  }`

export {
  fadeInRightShorter,
  fadeInDownShorter
}