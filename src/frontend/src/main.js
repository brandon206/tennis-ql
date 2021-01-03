import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

Vue.use(VueApollo);
const apolloClient = new ApolloClient({
  uri: 'http://127.0.0.1:8080/graphql'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  render: h => h(App),
  router,
  apolloProvider,
}).$mount('#app')
