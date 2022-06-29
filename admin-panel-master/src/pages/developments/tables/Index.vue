<template>
  <div class="table w-full p-2">
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-50 border-b">
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              No
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              judul
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              author
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              artikel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item">
          <td
            :class="'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ index + 1 }}
          </td>
          <td
            :class="
                 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.judul }}
          </td>
          <td
            :class="
                 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.author }}
          </td>
          <td
            :class="
                 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.artikel }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    delet(e) {
      axios.delete(`http://127.0.0.1:5000/pembayaran/` + e).then((response) => {
        this.$swal(response.data);
        axios.get(`http://127.0.0.1:5000/pembayaran`).then((response) => {
          this.items = response.data;
        });
      });
    },
  },
  created() {
    axios.get(`http://127.0.0.1:5000/pembayaran`).then((response) => {
      this.items = response.data;
    });
  },
    print() {
    const prtHtml = document.getElementById('print').innerHTML;

// Get all stylesheets HTML
let stylesHtml = '';
for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
  stylesHtml += node.outerHTML;
}

// Open the print window
const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
WinPrint.close();
    },
};
</script>