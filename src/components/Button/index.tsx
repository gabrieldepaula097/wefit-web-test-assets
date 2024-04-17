import { ButtonStyled } from './styles'

export type ButtonProps = {
  height: string
  text: string
  width: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({ height, text, width, onClick }: ButtonProps) => {
  return (
    <ButtonStyled height={height} width={width} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}

export default Button
