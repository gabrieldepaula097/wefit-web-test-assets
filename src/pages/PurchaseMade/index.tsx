import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'

import {
  ImgContainer,
  PurchaseContainer,
  PurchaseText,
  PurchaseWrapper
} from './styles'

import PurchaseImg from '../../assets/purchase.svg'

const PurchaseMade = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <PurchaseWrapper>
      <PurchaseContainer>
        <PurchaseText>Compra realizada com sucesso!</PurchaseText>
        <ImgContainer>
          <img src={PurchaseImg} />
        </ImgContainer>
        <Button height="40" width="157px" text="VOLTAR" onClick={handleClick} />
      </PurchaseContainer>
    </PurchaseWrapper>
  )
}
export default PurchaseMade
