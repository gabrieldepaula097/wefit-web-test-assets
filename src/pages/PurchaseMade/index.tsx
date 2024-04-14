import { ImgContainer, PurchaseContainer, PurchaseText, PurchaseWrapper } from "./styles"
import PurchaseImg from '../../assets/purchase.svg'
import Button from "components/Button"

const PurchaseMade = () => {
  return (
    <PurchaseWrapper>
      <PurchaseContainer>
        <PurchaseText>Compra realizada com sucesso!</PurchaseText>
        <ImgContainer>
          <img src={PurchaseImg} />
        </ImgContainer>
        <Button height="40" width="157" text="VOLTAR" />
      </PurchaseContainer>
    </PurchaseWrapper>

  )
}
export default PurchaseMade