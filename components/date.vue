<template>
    <v-menu
      v-model="dateMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="dateValue"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :label="dateLabel"
          prepend-icon="fa-calendar"
          readonly
          v-model="dateValue"
          v-on="on"
          clearable
        ></v-text-field>
      </template>
      <v-date-picker
        locale="en-in"
        v-model="dateValue"
        no-title
        @input="dateMenu = false"
      >
        <v-spacer></v-spacer>
        <v-btn 
          text 
          color="primary" 
          @click="dateMenu = false"
          >Cancel</v-btn>
        <v-btn 
          text 
          color="primary" 
          @click="$refs.dialog.save(dateValue)"
          >OK</v-btn> 
     
      </v-date-picker>
    </v-menu>
  </template>
  <script>
    export default {
      props: ['dateLabel','dateModel'],
      data() {
        return {
          dateMenu: false,
          dateValue: this.dateModel,
        };
      },
      watch: {
        dateValue(){
          $nuxt.$emit('update',this.dateValue);
        }
      },
    };
  </script>