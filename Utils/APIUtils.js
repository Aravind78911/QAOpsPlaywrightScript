class APIUtils {

   constructor(apiContext) {
      this.apiContext = apiContext;
      this.loginPayload = this.loginPayload;

   }

   async getToken() {
      const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
         {
            data: this.loginPayload
         })
      const loginResponseJson = await loginResponse.json();
      token = loginResponseJson.token;
      console.log(token);
      return token;

   }
   async createorder(orderPayload) {
      const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
         {
            data: orderPayload,
            headers: {

               'Authorization': this.getToken(),
               'Content-Type': 'application/json'
            },
         })
      const orderResponseJson = await orderResponse.json();
      console.log(orderResponseJson);
      orderId = orderResponseJson.orders[0];
      return orderId;
   }
}
module.exports = { APIUtils };