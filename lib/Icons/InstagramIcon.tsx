import React from "react";

interface Props {
  className?: string;
}

export const InstagramIcon = (props: Props) => (
  <svg
    className={props.className}
    role="img"
    width="20"
    height="20"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Instagram</title>
    <path
      data-name="layer2"
      d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0"
      fill="none"
      stroke="#202020"
    ></path>
    <path
      data-name="layer1"
      d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0"
      fill="none"
      stroke="#202020"
    ></path>
  </svg>
);
