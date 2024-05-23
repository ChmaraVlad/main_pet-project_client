import React, { useEffect } from 'react';
import { Button } from "@mui/material"
import { useStripe } from "@stripe/react-stripe-js"

// components
import { IProduct } from '..';

// services
import { PaymentType, useCreatePaymentMutation } from '../../../../services/stripeApi';

interface IPropsStripeCheckoutForm {
    cart: IProduct[] 
    setSnackSuccessOpen: (arg: boolean) => void, 
    setSnackFailedOpen: (arg: boolean) => void
    handleClose: () => void
}

const payload: PaymentType = {products: [ {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 95, //cent
    quantity: 2,
}], currency: 'usd'}

const StripeCheckoutForm = ({ cart, handleClose, setSnackSuccessOpen, setSnackFailedOpen }: IPropsStripeCheckoutForm) => {
    const stripe = useStripe()
    const [createPayment, {isSuccess, ...requestData}] = useCreatePaymentMutation(undefined)

    const handleSubmit = async (event: any) => {
        try {
            event.preventDefault();
    
            await createPayment(payload)
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
        }
    }

    useEffect(()=>{
        if(isSuccess) {
            window.location.href = requestData.data.url;
        }
    },[isSuccess, requestData.data])

    return (
        <form onSubmit={handleSubmit}>
            <Button type="submit"
                sx={{
                    marginTop: '20px',
                    width: '100%',
                    backgroundColor: '#F07F7F',
                    color: 'white',
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                disabled={!stripe}
                >Pay</Button>
        </form>

    )
}

export default StripeCheckoutForm
