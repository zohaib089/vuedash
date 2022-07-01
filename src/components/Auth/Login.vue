<template>
  <v-container class="bg" content-class="bg" fluid pa-0>
 
    <v-row
      class="bg"
      content-class="bg"
      align="center"
      justify="center"
      style="height: 100vh"
      dense
    >
      <v-col
        cols="12"
        lg="12"
        md="12"
        class="fill-height  d-flex flex-column align-center"
        
      >
        <v-card
          style="width: 450px;margin-top: 8rem; opacity: 0.9;"
          
          class="blue-grey cardbg rounded-xl"
          content-class="rounded-card"
        >
          <v-card-title class="blue-grey cardbg elevation-0 pa-6 mb-3" tile>
            <v-img
              height="70"
              contain
              width="50px"
              src="../../assets/icons8-dashboard-64.png"
            ></v-img>
          </v-card-title>
          <v-card-subtitle class="mt-3">
            <h2 class="white--text text--bold">Login In To your Account</h2>
            <hr class="mt-4 mb-4" />
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
              placeholder="Username"
              dense
              v-model="username"
              outlined
              solo
            ></v-text-field>
            <v-text-field
              dense
              outlined
              solo
              placeholder="Password"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
             
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="login" block depressed color="primary"> Sign In </v-btn>
          </v-card-actions>
          <p class="text-sm mt-4 ml-2 green--text">
            Dont have account?
            <span
            @click="navigateToRegister"
            style="cursor: pointer;"
              aria-label="Sign up here"
              class="white--text text-decoration-underline"
            >
              Sign up here</span
            >
          </p>
        </v-card>
      </v-col>
    </v-row>
    <AlertVue ref="alert" :Color="color" :Icon="icon"/>
  </v-container>
</template>

<script>
import AlertVue from '../utils/Alert.vue';
AlertVue
export default {
  components:{
AlertVue
  },
  data() {
    return {
      show1: false,
      password: null,
      username: null,
      color:"",
      icon:"",
    };
  },
  methods:{
    login(){
      if (this.password == "") {
        this.$refs.alert.snackbar=true;
        this.$refs.alert.text = "Password is empty"
        this.color = "warning"
        this.icon = "mdi-alert"
      }
       if (this.username == "") {
        this.$refs.alert.snackbar=true;
        this.$refs.alert.text = "username is empty"
        this.color = "warning"
        this.icon = "mdi-alert"

      }
      console.log(this.$refs.alert);
      this.$router.push('/dash');
    },
    navigateToRegister(){
      this.$router.push('/register');
     }
  },
  mounted(){
   console.log('first', this.$refs.alert)
  }

};
</script>

<style>
.bg {
  background-image: url("@/assets/platforms.webp");
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  width: 100%;
  height: 94vh;
}
.cardbg{
  background: url('../../assets/nav1.jpg');
}
</style>