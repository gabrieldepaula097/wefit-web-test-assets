import { CartWrapper } from "./styles"
import { CartDesktop } from "components/CartDesktop";
import { CartMobile } from "components/CartMobile";
import useDeviceDetection from "utils/useDeviceDetection";

const Cart = () => {
  const isMobile = useDeviceDetection()
  
  return (
    <CartWrapper>
      {isMobile ? <CartMobile /> : <CartDesktop />}
    </CartWrapper>
  )
}

export default Cart