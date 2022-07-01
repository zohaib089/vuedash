<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  
    <v-footer
      dark
      padless
      height="50px"
    >
      <v-card
        flat
        tile
        width="100%"
       
        class="indigo lighten-1 white--text text-center footerNav"
      >
       
  
      
  
        <v-card-text  class="white--text">
          <v-row>
            <v-col md="4" lg="4" sm="12"></v-col>
            <v-col md="8" lg="8" sm="12">
  <v-btn
                v-for="(icon, index) in icons"
                :key="index"
                class="mx-4"
                icon
              >
                <v-tooltip v-show="mini" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      class="white--text"
                      size="24px"
                    >
                      {{ icon.icon }}
                    </v-icon>
                  </template>
                  <span>{{ icon.text }}</span>
                </v-tooltip>
              </v-btn> {{ new Date().getFullYear() }} — <strong>CAMBER</strong>
            </v-col>
          </v-row>
        
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    padless: true,
    icons: [
      {
        icon: "mdi-whatsapp",
        color: "#34B7F1",
        text: "WhatsApp",
      },
      {
        icon: "mdi-gmail",
        color: "#4285F4",
        text: "Gmail",
      },
      {
        icon: "mdi-facebook",
        color: "#4267B2",
        text: "Facebook",
      },
      {
        icon: "mdi-twitter",
        color: "#1DA1F2",
        text: "Twitter",
      },
      {
        icon: "mdi-youtube",
        color: "#c4302b",
        text: "Youtube",
      },
      {
        icon: "mdi-discord",
        color: "#7289d9",
        text: "Discord",
      },
      {
        icon: "mdi-reddit",
        color: "#FF4500",
        text: "Reddit",
      },
      {
        icon: "mdi-linkedin",
        color: "#0072b1",
        text: "Linkedin",
      },
    ],
  }),
};
</script>

<style>
.footerNav {
  background: url("@/assets/nav1.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  opacity: 0.95;
}
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.mdi-whatsapp {
  color: #fff;
  background: linear-gradient(#25d366, #25d366) 14% 84%/16% 16% no-repeat,
    radial-gradient(#25d366 58%, transparent 0);
}

.mdi-facebook {
  background-color: #3b5998;
}
.mdi-twitter {
  background-color: #00acee;
}

.mdi-youtube {
  background-color: red;
}

.mdi-discord {
  background-color: #7289d9;
}
.mdi-reddit {
  background-color: #ff5700;
}
.mdi-linkedin {
  background-color: #0072b1;
}
</style>
