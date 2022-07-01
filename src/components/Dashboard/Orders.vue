<template>
  <v-container fluid>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar class="cardBack" dark color="#40C4FF">
         
          <v-toolbar-title class="text-h5 font-weight-bold">Order</v-toolbar-title>
          <v-spacer></v-spacer>
          
            <v-btn @click="SaveProduct"  large dark color="success"> Save </v-btn>
        
          <v-spacer></v-spacer>
           <v-btn fab small light @click="dialog = false">
            <v-icon color="error">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="selected_product.product_name" placeholder="Product Name" label="Product name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                 <v-select
                 v-model="selected_product.category"
                  :items="['Shirt', 'Jeans', 'Jacket', 'Shoes','Sweater','Pent']"
                  label="Category*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                v-model="selected_product.created_at"
                  label="Create Date"
                  placeholder="Create Date"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
               <v-select
               v-model="selected_product.producer"
                  :items="['Self', 'Outsider']"
                  label="Producer*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="6">
               <v-autocomplete
               v-model="selected_product.size"
                :items="['M','42','L','34','40']"
                  label="Size*"
                  required
               ></v-autocomplete>
              </v-col>
               <v-col cols="12" sm="6" md="6">
                <v-text-field
                v-model="selected_product.color"
                  label="Color"
                  placeholder="Color"
                  required
                ></v-text-field>
              </v-col>
               <v-col cols="12" sm="6" md="6">
                <v-text-field
                v-model="selected_product.price"
                  label="Price"
                  placeholder="Price"
                  min="0"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-row class="mt-1">
      <v-col md="12" lg="12" sm="12">
        <v-card class="mx-auto tableclass">
          <v-toolbar class="cardBack" color="#40C4FF" dark>
            <v-toolbar-title class="text-h5 font-weight-bold"
              >Orders</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn
              @click="openDialog"
              small
              fab
              elevation="12"
              color="primary"
              dense
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
             <v-btn
              @click="openDialog"
              small
              fab
              elevation="12"
              color="ml-1 primary"
              dense
            >
              <v-icon>mdi-file-pdf-box</v-icon>
            </v-btn>
              <v-btn
              @click="openDialog"
              small
              fab
              elevation="12"
              color="ml-1 primary"
              dense
            >
              <v-icon>mdi-file-excel</v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-text-field
              elevation="12"
              solo
              dense
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              placeholder="Search..."
              light
              background-color="white"
              hide-details
            ></v-text-field>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="products"
            :search="search"
            :items-per-page="itemPerPage"
            :footer-props="{
              'items-per-page-options': RowsPerPage,
            }"
          >
            <template v-slot:[`item.edit`]="{ item }">
              <v-btn small color="success" fab elevation="12">
                <v-icon @click="editItem(item)"> mdi-pencil </v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.delete`]="{ item }">
              <v-btn small color="error" fab elevation="12">
                <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <!-- <v-col md="4" lg="4" sm="12">
        <v-card>
          <v-toolbar class="cardBack" color="#40C4FF" dark>
            <v-toolbar-title class="text-h5 font-weight-bold"
              >Orders Stats</v-toolbar-title
            >
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <LineChartVue />
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
import LineChartVue from "./LineChart.vue";
class Product {
  constructor(arg = undefined) {
    if (arg != undefined) {
      const fields = this.setControls();
      fields.forEach((c) => {
        this[c.name] = arg[c.name] != undefined ? arg[c.name] : c.default_value;
      });
    } else {
      const fields = this.setControls();
      fields.forEach((c) => {
        this[c.name] = c.default_value;
      });
    }
  }

  // Method to reset fields
  reset() {
    const fields = this.setControls();
    fields.forEach((c) => {
      this[c.name] = c.default_value;
    });
  }

  setControls() {
    const fields = [
      { name: "product_id", default_value: -1 },
      { name: "product_name", default_value: "" },
      { name: "category", default_value: "" },
      { name: "created_at", default_value: "" },
      { name: "producer", default_value: "" },
      { name: "size", default_value: "" },
      { name: "color", default_value: "" },
      { name: "price", default_value: "" },
    ];
    return fields;
  }
}
export default {
  components: {
    LineChartVue,
  },
  data: () => ({
    RowsPerPage: [5, 7, 10, 15],
    itemPerPage: 7,
    search: "",
    dialog: false,
    selected_product:new Product(),
    headers: [
      {
        text: "",
        sortable: false,
        align: "start",
        value: "edit",
      },
      {
        text: "Product ID",
        filterable: false,
        value: "product_id",
        sortable: false,
      },
      { text: "Product Name", value: "product_name", sortable: false,},
      { text: "Category", value: "category", sortable: false,},
      { text: "Produced Date", value: "created_at", sortable: false, },
      { text: "Producer", value: "producer", sortable: false,},
      { text: "Sizes", value: "size", sortable: false, },
      { text: "Color", value: "color", sortable: false, },
      { text: "Price", value: "price", sortable: false, },

      {
        text: "",
        sortable: false,
        value: "delete",
      },
    ],
    products: [
      {
        product_id:1,
        product_name: 'Polo T-shirt',
        category: 'Shirt',
        created_at: '26/06/2022',
        producer:'Self',
        size: "M",
        color: "green",
        price:120,
      },
      {
        product_id:2,
        product_name: 'Calvin Klien Jeans',
        category: 'Jeans',
        created_at: '21/06/2022',
        producer:'Self',
        size: "42",
        color: "Navy blue",
        price:150,
      },
      {
       product_id:3,
        product_name: 'Emporio Leather Jacket',
        category: 'Jacket',
        created_at: '15/06/2022',
        producer:'Outsider',
        size: "L",
        color: "Black",
        price:799,
      },
      {
       product_id:4,
        product_name: 'Adidas Sneakers',
        category: "Shoes",
        created_at: '11/06/2022',
        producer:'Outsider',
        size: "42",
        color: "White",
        price:99,
      },
      {
        product_id:5,
        product_name: 'HM Sweater',
        category: 'Sweater',
        created_at: '21/06/2022',
        producer:'Self',
        size: "L",
        color: "Navy blue",
        price:50,
      },
      {
       product_id:6,
        product_name: 'Skectcher',
        category: 'Shoes',
        created_at: '21/06/2022',
        producer:'Outsider',
        size: "42",
        color: "Navy blue",
        price:89,
      },
      {
        product_id:7,
        product_name: 'Sweat Pent',
        category: 'Pent',
        created_at: '21/06/2022',
        producer:'Self',
        size: "34",
        color: "Navy blue",
        price:90,
      },
      {
       product_id:8,
        product_name: 'Calvin Klien Shoes',
        category: 'Shoes',
        created_at: '05/01/2022',
        producer:'Outsider',
        size: "40",
        color: "offwhite",
        price:50,
      },
     
    ],
  
  
  }),
  methods: {
    openDialog() {
      this.dialog = true;
      this.selected_product = new Product();
    },
    SaveProduct(){
          this.products.push(this.selected_product);
          this.dialog = false;
    },
    editItem(item){
      this.selected_product = new Product(item);
      this.dialog = true;
    },
    deleteItem(item){
      let i = this.products.indexOf(item);
      this.products.splice(i,1);
    }

  },
};
</script>

<style scoped>
</style>