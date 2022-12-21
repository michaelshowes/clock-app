import { css } from 'styled-components'

// PX to Rem converter //
// Converts a pixel value to rem
export const rem = (value) => css`
  font-size: ${value / 16}rem;
`;

// Absolute //
// Absolulety positions an element
export const absolute = (top = null, right = null, bottom = null, left = null) => css`
  position: absolute;
  top: ${top}px;
  right: ${right}px;
  bottom: ${bottom}px;
  left: ${left}px;
`;

// Square //
// Keeps height same value as width (Aspect ratio 1:1)
export const square = (w, h = w) => css`
  width: ${w}px;
  height: ${h}px;
`;

// Font Clamp //
// Clamps a value between an upper and lower bound while selecting a middle value within a range of values between a defined minimum and maximum
export const fontClamp = (min, val, max) => css`
  font-size: max(${min / 16}rem, min(${val}vw, ${max / 16}rem));
`;

// Media Queries
// Makes it easier to apply screen width-based media queries
const breakpoints = {
  1:  100,
  2:  200,
  3:  360,
  4:  400,
  5:  500,
  6:  600,
  7:  768,
  8:  800,
  9:  900,
  10: 1000,
  11: 1100,
  12: 1200,
  13: 1300,
  14: 1400,
  15: 1500,
  16: 1600,
  17: 1700,
  18: 1800,
  19: 1920,
  20: 2000
}
// Styles active from given value
export const activeFrom = (value) => {
  return () => `@media (min-width: ${breakpoints[value]}px)`;
}
// Styles active until given value
export const activeUntil = (value) => {
  return () => `@media (max-width: ${breakpoints[value]}px)`;
}
// Styles active between 2 given values
export const activeBetween = (minValue, maxValue) => {
  return () => `@media (min-width: ${breakpoints[minValue]}px) and (max-width: ${breakpoints[maxValue]}px)`;
}

// Hover
export const hover = () => {
  return () => `&:hover, &:active, &:focus`;
}