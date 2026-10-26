export class APIUtils {

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
      let token: any;
      const loginResponseJson = await loginResponse.json();
      token = loginResponseJson.token;
      console.log(token);
      return token;

   }
   async createorder(orderPayload: string) {
      const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
         {
            data: orderPayload,
            headers: {

               'Authorization': this.getToken(),
               'Content-Type': 'application/json'
            },
         })
      let orderId: any;
      const orderResponseJson = await orderResponse.json();
      console.log(orderResponseJson);
      orderId = orderResponseJson.orders[0];
      return orderId;
   }
}
