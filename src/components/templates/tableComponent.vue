<template>
  <div>
    <v-data-table
      v-if="items.length <= 0"
      :items-per-page="5"
      item-key="name"
      class="elevation-1 table-header"
      loading
      :headers="headersNotfound"
      :items="itemNotfound"
      loading-text="Loading... Please wait"
      hide-default-footer
    >
      <template v-slot:top="{ pagination, options, updateOptions }">
        <v-data-footer
          :pagination="pagination"
          :options="options"
          @update:options="updateOptions"
          items-per-page-text="$vuetify.dataTable.itemsPerPageText"
        /> </template
    ></v-data-table>
    <v-data-table
      dense
      v-else
      :items-per-page="5"
      :headers="headers"
      :items="items"
      class="elevation-1 table-header hoverable_row"
      :height="auto"
      :search="this.search"
      hide-default-footer
      @click:row="handleRowClick"
    >
      <template v-slot:top="{ pagination, options, updateOptions }">
        <v-data-footer
          :pagination="pagination"
          :options="options"
          @update:options="updateOptions"
          items-per-page-text="$vuetify.dataTable.itemsPerPageText"
        />
        <v-dialog v-model="dialog" max-width="750px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Selected Item Information </span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <div v-for="(header, idx) in headers" :key="idx">
                    <v-col cols="auto" sm="auto" md="auto">
                      <v-text-field
                        color="black"
                        v-if="checkIsEmpty(curItem[header.value])"
                        v-model="emptyItem"
                        :label="header.text"
                        :readonly="true"
                      ></v-text-field>
                      <v-text-field
                        color="black"
                        v-else
                        v-model="curItem[header.value]"
                        :label="header.text"
                        :readonly="true"
                      ></v-text-field>
                    </v-col>
                  </div>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->
              <v-btn color="blue darken-1" text @click="close"> OK </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template
        v-for="header in headers"
        v-slot:[`item.${header.value}`]="{ item }"
      >
        <template v-if="isBoolean(item[header.value])">
          <div class="checkbox_container" v-bind:key="item[header.value]">
            <v-checkbox
              v-bind:key="item[header.value]"
              v-model="item[header.value]"
              :true-value="true"
              :false-value="false"
              light
              disabled
              color="black"
            ></v-checkbox>
          </div>
        </template>
        <template v-else>
          {{ item[header.value] }}
        </template>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: [
    "tableItems",
    "tableHeaders",
    "isRequest",
    "isAsset",
    "parent",
    "search",
  ],
  data() {
    return {
      headersNotfound: [{ text: "", value: "nf" }],
      itemNotfound: [{ nf: "Data not found!" }],
      curItem: {},
      dialog: false,
      emptyItem: " ",
    };
  },
  computed: {
    items() {
      return this.tableItems;
    },
    headers() {
      return this.tableHeaders;
    },
  },
  mounted() {},
  methods: {
    checkIsEmpty(value) {
      if (typeof value === "string") {
        if (value.length == 0) return true;
        return false;
      }
      if (typeof value === "boolean") {
        return false;
      }
      return false;
    },
    close() {
      this.dialog = false;
    },
    handleRowClick(item) {
      if (this.parent === "equipment-id") {
        this.$emit("selectedEquipmentId", item);
      } else if (this.parent === "equipment-serial") {
        this.$emit("selectedEquipmentSerial", item);
      } else {
        this.curItem = item;
        this.dialog = true;
      }
    },
    isBoolean(value) {
      return typeof value === "boolean";
    },
  },
};
</script>

<style>
.text-start.sortable {
  border: 1px solid black;
  border-bottom: 1px solid black;
  background-color: #c1e4f7;
  height: 50px !important;
}

.text-start {
  height: 48px;
}

.text-start .checkbox_container {
  margin-left: 28%;
}

.v-data-table--dense > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table--dense > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table--dense > .v-data-table__wrapper > table > tfoot > tr > td {
  height: 48px !important;
}

.table td {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.min-width {
  min-width: 500px;
}

.min-width2 {
  min-width: 250px;
}

.v-data-table {
  overflow-x: auto;
  overflow-y: auto;
}

tr:nth-child(even) {
  background-color: #edf9ff;
  white-space: nowrap;
}

tr:nth-child(odd) {
  white-space: nowrap;
}

table,
th,
td {
  border: 1px solid #e2e2e2;
  border-collapse: collapse;
}

th {
  border-bottom: 2px solid black;
}

td {
  text-align: center;
}

.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: thin solid black !important;
}
</style>
