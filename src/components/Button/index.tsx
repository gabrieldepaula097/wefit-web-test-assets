import { ButtonStyled } from './styles'

import { ButtonProps } from 'types/types'

const Button = ({ height, text, width, onClick }: ButtonProps) => {
  return (
    <ButtonStyled height={height} width={width} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}

export default Button
