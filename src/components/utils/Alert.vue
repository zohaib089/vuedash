<template>
    <v-snackbar
      v-model="snackbar"
      top
      right
     class="mt-5 mr-5"
     :color="Color"
      
      
    >
     <v-icon>
        {{Icon}}
     </v-icon>

      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
         x-small
         dark
         dense
          fab
          v-bind="attrs"
          style="position:absolute;top:-20px;right:-20px;"
          @click="snackbar = false"
        >
         <v-icon color="error">mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
export default {
    props:['Text','Color','Icon'],
    data:()=>({
      snackbar:false,
      text: '',
      vertical: true,
      color:"",
    }),

    
}
</script>