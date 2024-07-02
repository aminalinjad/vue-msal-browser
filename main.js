import { PublicClientApplication } from '@azure/msal-browser';
const vue2MsalBrowser = {
  install(Vue, option) {

    class extraMsal extends PublicClientApplication {
      constructor(opt) {
        super(opt);
      }
      isAuth() {
        let accounts = this.getAllAccounts()
        return !!accounts.length;
      }
    }

    const msalInstance = new extraMsal(option);

    Vue.prototype.$msal = msalInstance
  }
}
export default vue2MsalBrowser;
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(vue2MsalBrowser)
// }
