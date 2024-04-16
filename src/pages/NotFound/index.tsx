import Button from "components/Button"
import { ContainerNotFound, ImgContainer, Separator, TextNotFound, WrapperNotFound } from "./styles"
import NotFoundImg from '@/assets/notFound.svg'
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  const sendToHome = () => {
    navigate("/")
  } 
  return (
    <WrapperNotFound>
      <ContainerNotFound>
        <TextNotFound> Parece que não há nada por aqui :( </TextNotFound>
        <ImgContainer>
          <img src={NotFoundImg} />
        </ImgContainer>
        <Separator />
        <Button height="40" width="175" text="Recarregar página" onClick={sendToHome}>
        </Button>
      </ContainerNotFound>
    </WrapperNotFound>
  )
}
  
export default NotFound