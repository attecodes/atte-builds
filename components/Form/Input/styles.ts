import { css } from "@emotion/css";

export const formGroup = css`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 1.2rem;
  width: 80%;
  textarea {
    resize: none;
  }
  .form_field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    color: var(--font-01);
    padding: 0.8rem 0;
    background: transparent;
    transition: border-color 0.2s;
    input:placeholder {
      color: transparent;
    }
  }
  .form_label {
    display: block;
    transition: 0.2s;
    font-size: 1.6rem;
    color: #9b9b9b;
  }

  .form_field:focus {
    ~ .form_label {
      transition: 0.2s;
      color: var(--harvard-red);
    }
    font-weight: 700;
    border-width: 0.4rem;
    border-image: linear-gradient(
      to right,
      var(--harvard-gold),
      var(--harvard-red)
    );
    border-image-slice: 1;
  }
`;
