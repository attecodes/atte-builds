import { css } from "@emotion/css";
import breakpoints from "lib/theme/breakpoints";

export const googleReviews = css`
  --color-1: #4285f4; /* Google Blue */
  --color-2: #ea4335; /* Google Red */
  --color-3: #fbbc05; /* Google Yellow */
  --color-4: #34a853; /* Google Green */
  --color-5: #f4b400; /* Warm Yellow */
  --color-6: #0f9d58; /* Deep Green */
  --color-7: #db4437; /* Bright Red */
  --color-8: #3367d6; /* Deep Blue */
  .bg-1 {
    background-color: var(--color-1);
  }
  .bg-2 {
    background-color: var(--color-2);
  }
  .bg-3 {
    background-color: var(--color-3);
  }
  .bg-4 {
    background-color: var(--color-4);
  }
  .bg-5 {
    background-color: var(--color-5);
  }
  .bg-6 {
    background-color: var(--color-6);
  }
  .bg-7 {
    background-color: var(--color-7);
  }
  .bg-8 {
    background-color: var(--color-8);
  }
  .customArrow {
    background: #004aad;
    padding: 1.5rem;
    font-size: 2rem;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 30%;
  }

  .rightArrow {
    right: -4rem;
    ${breakpoints.medium} {
      right: -3rem;
    }
    ${breakpoints.small} {
      right: -4rem;
    }
  }

  .leftArrow {
    left: -4rem;
    ${breakpoints.medium} {
      left: -3rem;
    }
    ${breakpoints.small} {
      left: -4rem;
    }
  }

  .customArrow:hover {
    color: #ccc;
  }
  .carousel-container {
    position: relative;
  }
  .carousel-test {
    position: unset;
    width: 80vw;
    ${breakpoints.large} {
      width: 90vw;
    }
  }
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin: 1rem;
  }
  .card-head {
    display: flex;
    gap: 2rem;
  }

  .card-left {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 2px solid white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  .card-right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
  .stars {
    gap: 5px;
    font-size: 3rem;
    color: #ffd700;
    text-shadow: 0px 0px 15px rgba(255, 215, 0, 0.8);
  }
`;
