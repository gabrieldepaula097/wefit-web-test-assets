import { ButtonStyled } from "./styles"

export type ButtonProps = {
  height: string,
  text: string,
  width: string,
}

const Button = ({ height, text, width }: ButtonProps) => {
  return (
    <ButtonStyled height={height} width={width}>
      {text}
    </ButtonStyled>
  )
}

export default Button