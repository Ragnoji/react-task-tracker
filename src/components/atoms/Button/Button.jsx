import styled, { css } from "styled-components";

const Wrapper = styled.button(
  ({ color, background }) => css`
    color: ${color};
    background: ${background};
    padding: 10px 20px;
    outline: none;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  `,
);

const Button = ({
  children,
  label = "ok",
  onClick = () => {},
  disabled = false,
  color = "#fff",
  background = "#666",
}) => {
  return (
    <Wrapper onClick={onClick} disabled={disabled} color={color} background={background}>
      <p>{label}</p>
      {children}
    </Wrapper>
  );
};

export default Button;
