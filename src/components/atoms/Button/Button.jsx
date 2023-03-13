import styled, { css } from "styled-components";

const Wrapper = styled.button(
  ({ color }) => css`
    color: ${color};
  `,
);

const Button = ({ label, onClick, disabled, color }) => {
  return (
    <Wrapper onClick={onClick} disabled={disabled} color={color}>
      {label}
    </Wrapper>
  );
};

export default Button;
