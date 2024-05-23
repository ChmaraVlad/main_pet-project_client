import { baseApi } from "../baseApi";

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}
export interface PaymentType {
	products: Product[];
	currency: string;
};

export const stripeApi = baseApi.injectEndpoints({
  endpoints: builder => ({
      createPayment: builder.mutation<any, PaymentType>({
        query: (payment: PaymentType) => ({
          url: '/stripe/checkout-session',
          method: 'POST',
          body: { ...payment }
        })
      }),
  })
})

export const {
    useCreatePaymentMutation,
} = stripeApi
