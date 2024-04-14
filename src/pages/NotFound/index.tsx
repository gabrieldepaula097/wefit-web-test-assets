import Button from "components/Button"
import { ContainerNotFound, ImgContainer, Separator, TextNotFound, WrapperNotFound } from "./styles"
import NotFoundImg from '@/assets/notFound.svg'

const NotFound = () => (
  <WrapperNotFound>
    <ContainerNotFound>
      <TextNotFound> Parece que não há nada por aqui :( </TextNotFound>
      <ImgContainer>
        <img src={NotFoundImg} />
      </ImgContainer>
      <Separator />
      <Button height="40" width="175" text="Recarregar página">
      </Button>
    </ContainerNotFound>
  </WrapperNotFound>
)
  
export default NotFound