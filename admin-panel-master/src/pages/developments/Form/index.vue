<template>
  <form class="w-full max-w-lg" id="appx" @submit="checkForm" method="post">
  <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          judul
        </label>
        <input
          v-model="judul"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-red-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
          id="grid-first-name"
          type="text"
          placeholder="judul"
        />
        <p class="text-red-500 text-xs italic">{{ judulERROR }}</p>
      </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          ARTIKEL
        </label>
        <input
          v-model="artikel"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-red-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
          id="grid-first-name"
          type="text"
          placeholder="Artikel"
        />
        <p class="text-red-500 text-xs italic">{{ artikelERROR }}</p>
      </div>
      </div>
      
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          Author
        </label>
        <input
          v-model="author"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-red-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
          id="grid-first-name"
          type="text"
          placeholder="Author"
        />
        <p class="text-red-500 text-xs italic">{{ authorERROR }}</p>
      </div>
      </div>
    
    <!-- <div > -->
    <button
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
    >
      Submit
    </button>
    <!-- </div> -->
  </form>
</template>
<script>
import axios from "axios";

export default {
  el: "#appx",
  data() {
    return {
      author: "",
      judul: "",
      artikel:"",
      judulERROR: "",
      artikelERROR: "",
      authorERROR:"",
    };
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if (this.judulERROR === "" || this.artikelERROR === "" || this.authorERROR === "") {
        this.nameerr = "kode transaksi is required.";
      } else {
        const datapost = {
          author: this.author,
      judul:this.judul,
      artikel:this.artikel,
        };
        if (this.$route.params.id) {
          axios
          .put(`http://127.0.0.1:5000/artikel/`+ this.$route.params.id, datapost)
          .then((response) => {
            this.$swal(response.data);
          });
        }else{
        axios
          .post(`http://127.0.0.1:5000/artikel`, datapost)
          .then((response) => {
            this.$swal(response.data);
          })
      }}
    },
  },
  created() {
      
  },
};
</script>

