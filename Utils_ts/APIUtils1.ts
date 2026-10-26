import { APIRequestContext } from '@playwright/test';

interface LoginPayload {
  userEmail: string;
  userPassword: string;
}

export class APIUtils1 {

  apiContext: any;
  loginPayload: String;
  constructor(apiContext: any, loginPayload: string) {
    this.apiContext = apiContext;
    this.loginPayload = loginPayload;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
      {

        data: this.loginPayload

      })
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);
    return token;

  }

  async createOrder(orderPayload: {
    orders: {
      country: string;
      productOrderedId: string;
    }[];
  }): Promise<{ token: string; orderId: string }> {

    const response: { token: string; orderId: string } = {
      token: '',
      orderId: ''
    };

    response.token = await this.getToken();

    const orderResponse = await this.apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/order/create-order',
      {
        data: orderPayload,
        headers: {
          Authorization: response.token,
          'Content-Type': 'application/json'
        }
      }
    );

    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);

    response.orderId = orderResponseJson.orders[0];

    return response;
  }
}