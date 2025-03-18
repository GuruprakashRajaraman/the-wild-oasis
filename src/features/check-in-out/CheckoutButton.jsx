import Button from "../../ui/Button";
import {useCheckout} from './useCheckout'
function CheckoutButton({ bookingId }) {
  const {Checkout , isCheckingOut} = useCheckout();
  return (
    <Button variation="primary" size="small" onClick={()=>Checkout(bookingId)} disabled={isCheckingOut}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
