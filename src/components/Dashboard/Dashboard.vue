<template>
<div  style="width: 100%;" class="mainbg" elevation="24">
     <Alert ref="alert" :Color="color" :Icon="icon"/>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app clipped
      style="height:100%"
      color="#40C4FF"
      class="navBackgorund"
      
    >
      <v-list-item dark class="px-2">
        <v-list-item-avatar>
          <v-img src="../../assets/icons8-dashboard-64.png" style="objectContain:cover"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="text-h5 text-center font-weight-bold grey--text">CAMBER</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dark dense>
         
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          exact
          active-class="bg-active"
        >
        <v-tooltip v-show="mini" bottom>
      <template v-slot:activator="{ on, attrs }">
          <v-list-item-icon  v-bind="attrs"
          v-on="on">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
      </template>
      <span >{{item.title}}</span>
        </v-tooltip>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>
  

    <router-view/>
  </div>
</template>

<script>
import Alert from '../utils/Alert.vue'
  export default {
    data() {
        return {
          model: 1,
            drawer: false,
            items: [
                { title: "Dashboard", icon: "mdi-view-dashboard",to:"/dash" },
                { title: "Products", icon: "mdi-package-variant",to:"/dash/products" },
                { title: "Orders", icon: "mdi-cart",to:"/dash/orders" },
                { title: "Sales", icon: "mdi-cash-register",to:"/dash/sales" },
                { title: "Magazines", icon: "mdi-store",to:"/dash/magazine" },
                { title: "Transactions", icon: "mdi-cash",to:"/dash/transactions" },
                { title: "Customers", icon: "mdi-account-group-outline",to:"/dash/customers" },
                { title: "Employees", icon: "mdi-account-outline",to:"/dash/employees" },
                { title: "Outlets", icon: "mdi-storefront",to:"/dash/outlets" },
                { title: "Stats", icon: "mdi-chart-box-outline",to:"/dash/stats" },
            ],
           mini: true,
            icon:"",
            color:""
        };
    },
    mounted(){
        this.$refs.alert.snackbar=true;
        this.$refs.alert.text = "Welcome to CAMBER"
        this.icon = "mdi-check"
        this.color = "success"
    },
    components: { Alert }
}
</script>


<style>
.navBackgorund{
  background: url('@/assets/nav2.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.bg-active {
  background-color: black;
  color : white !important;
}

</style>