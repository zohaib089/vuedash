<template>
  <v-container fluid>
    <vue-marquee
      style="height: 35px; margin-bottom: 2px"
      :showProgress="false"
      :duration="52011"
    >
      <vue-marquee-slide v-for="item in marquee" :key="item">
        <v-chip
          style="
            background-color:  #82B1FF;
          "
          class="pa-2 white--text"
        >
          <span class="mb-1" style="padding: 5px 10px"
            >{{ item.text }} : {{ item.quantity }}
            <v-icon
              :class="[
                item.icon === 'mdi-arrow-up' ? 'green--text' : 'red--text',
              ]"
            >
              {{ item.icon }}</v-icon
            >
          </span></v-chip
        >
      </vue-marquee-slide>
    </vue-marquee>
    <v-row class="mt-1" >
      <v-col md="4" lg="4" sm="12">
        <v-card class="mx-auto" color="primary" dark elevation="24">
          <v-card-title>
            <span style="border:1px solid #039BE5;border-radius: 20px;padding  : 0.2em;" class="text-h4 font-weight-bold">Sales</span>
            <v-spacer></v-spacer>
            <v-icon class="mr-1 blue--text" style="fontsize: 32px">
              mdi-chart-areaspline
            </v-icon>
          </v-card-title>
          <v-card-text
            align="center"
            justify="center"
            class="text-h5 font-weight-bold"
          >
            2098 $
          </v-card-text>
          <v-card-actions>
            <v-row align="center" class="pa-2" justify="end">
              <v-icon class="mr-1 green--text"> mdi-arrow-up </v-icon>
              <span class="subheading">20%</span>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4" lg="4" sm="12">
        <v-card class="mx-auto" color="warning" dark elevation="24">
          <v-card-title>
            <span style="border:1px solid #EF6C00;border-radius: 20px;padding  : 0.2em;" class="text-h4 font-weight-bold">Orders</span>
            <v-spacer></v-spacer>
            <v-icon class="mr-1 yellow--text" style="fontsize: 32px">
              mdi-cart-arrow-up
            </v-icon>
          </v-card-title>
          <v-card-text
            align="center"
            justify="center"
            class="text-h5 font-weight-bold"
          >
            1211
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="end" class="pa-2">
              <v-icon class="mr-1 red--text"> mdi-arrow-down </v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4" lg="4" sm="12">
        <v-card class="mx-auto" color="#43A047" dark elevation="24">
          <v-card-title>
            <span style="border:1px solid #66BB6A;border-radius: 20px;padding  : 0.2em;" class="text-h4 font-weight-bold">Profits</span>
            <v-spacer></v-spacer>
            <v-icon class="mr-1 green--text" style="fontsize: 32px">
              mdi-cash
            </v-icon>
          </v-card-title>
          <v-card-text
            align="center"
            justify="center"
            class="text-h5 font-weight-bold"
          >
            1500 $
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="end" class="pa-2">
              <v-icon class="mr-1 green--text"> mdi-arrow-up </v-icon>
              <span class="subheading">45%</span>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="5" lg="5" sm="12">
        <v-card>
          <v-toolbar class="cardBack" color="#40C4FF" dark>
            <v-toolbar-title class="text-h5 font-weight-bold"
              >Sales</v-toolbar-title
            >
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <LineChartVue />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="7" lg="7" sm="12">
        <v-card class="mx-auto">
          <v-toolbar class="cardBack" color="#40C4FF" dark>
            <v-toolbar-title class="text-h5 font-weight-bold"
              >Newest Orders</v-toolbar-title
            >
            <v-spacer></v-spacer>

            <v-text-field
            outlined
            dense
            solo
            light
            background-color="white"
              v-model="search"
              color="white"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            :items-per-page="itemPerPage"
            :footer-props="{
              'items-per-page-options': RowsPerPage,
            }"
          >
           <template v-slot:[`item.status`]="{ item }">
              <v-chip small :color="getColor(item.status)" fab elevation="12">
               {{item.status}}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LineChartVue from "./LineChart.vue";

export default {
  components: {
    LineChartVue,
  },
  data: () => ({
    RowsPerPage: [5, 7, 10, 15],
    itemPerPage: 7,
    search: "",
    headers: [
      {
        text: "Order id",
        align: "start",
        sortable: false,
        value: "order_id",
      },
      { text: "Order", value: "products", sortable: false},
      { text: "Price", value: "price", sortable: false},
      { text: "Order date", value: "order_date",sortable: false},
      { text: "Delivery date", value: "delivery_date",sortable: false},
      { text: "Status", value: "status" , sortable: false},
      { text: "Order by", value: "order_by",sortable: false },
      { text: "City", value: "city" , sortable: false},
    ],
    desserts: [
      {
        order_id: "1",
        products: ['Ps4 Sdd','polo t-shirt'],
        price:'50 $',
        order_date: '24/06/2022',
        delivery_date: '25/06/2022',
        status: 'Delivered',
        order_by: 'john-doe',
        city: "Tornooto"
      },
      {
        order_id: "2",
        products: ['Denim Jeans'],
        price:'90 $',
        order_date: '24/03/2022',
        delivery_date: '28/04/2022',
        status: 'Rejected',
        order_by: 'Alie',
        city: "Vancouver"
      },
      {
        order_id: "3",
        products: ['Tootbrush Electic'],
        price:'120 $',
        order_date: '25/06/2022',
        delivery_date: '26/06/2022',
        status: 'Delivering',
        order_by: 'Jims',
        city: "Alberta"
      },
      {
         order_id: "4",
        products: ['Ps4 Sdd','polo t-shirt'],
        price:'220 $',
        order_date: '24/06/2022',
        delivery_date: '25/06/2022',
        status: 'Pending',
        order_by: 'john-doe',
        city: "Tornooto"
      },
      {
        order_id: "5",
        products: ['Iphone 12 Pro max'],
        order_date: '24/06/2022',
        price: "1000 $",
        delivery_date: '25/06/2022',
        status: 'Delivered',
        order_by: 'zaibi',
        city: "Winnepeg"
      },
       {
        order_id: "6",
        products: ['Macbook Pro M2'],
        price: "2200 $",
        order_date: '24/06/2022',
        delivery_date: '25/06/2022',
        status: 'Delivered', 
        order_by: 'Kyle',
        city: "New BC"
      },
      {
        order_id: "7",
        products: ['Go Pro 9'],
        price: "400 $",
        order_date: '26/06/2022',
        delivery_date: '27/06/2022',
        status: 'Delivering', 
        order_by: 'Adams',
        city: "Calgary"
      },
      
    ],
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
        title: "Trevor Hansen",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt",
      },
    ],
    marquee: [
      {
        text: "order",
        quantity: 78,
        icon: "mdi-arrow-up",
      },
      {
        text: "profits",
        quantity: 1200,
        icon: "mdi-arrow-down",
      },
      {
        text: "Sales",
        quantity: 1200,
        icon: "mdi-arrow-up",
      },
      {
        text: "Customers",
        quantity: 30,
        icon: "mdi-arrow-down",
      },
      {
        text: "Hotels",
        quantity: 45,
        icon: "mdi-arrow-up",
      },
      {
        text: "order",
        quantity: 78,
        icon: "mdi-arrow-up",
      },
      {
        text: "profits",
        quantity: 1200,
        icon: "mdi-arrow-down",
      },
      {
        text: "Sales",
        quantity: 1200,
        icon: "mdi-arrow-up",
      },
      {
        text: "Customers",
        quantity: 30,
        icon: "mdi-arrow-down",
      },
      {
        text: "Hotels",
        quantity: 45,
        icon: "mdi-arrow-up",
      },
      {
        text: "Customers",
        quantity: 30,
        icon: "mdi-arrow-down",
      },
      {
        text: "Hotels",
        quantity: 45,
        icon: "mdi-arrow-up",
      },
    ],
  }),
  methods:{
    getColor(item){
      switch (item) {
        case 'Delivered':
          return 'success';
        case 'Delivering':
          return 'warning';
         case 'Rejected':
          return 'error';  
         case 'Pending':
          return 'yellow';
      
        default:
          break;
      }
    }
  }
};
</script>

<style>
.cardBack {
  background-image: linear-gradient(
    to left bottom,
    #573c4b,
    #654e69,
    #6a638a,
    #647caa,
    #5096c5,
    #31a9d1,
    #00bcd5,
    #00cdd1,
    #39dac2,
    #6ae4ad,
    #9aec96,
    #caf182
  );
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  opacity: 0.95;
}
</style>