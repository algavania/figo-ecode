<template>
  <div class="accentMediumBlue footer d-flex flex-column py-5">
    <v-container grid-list-xs class="footer-container">
      <div>
        <v-row>
          <v-col cols="12" sm="5" md="5" lg="5" class>
            <div class="caption grey--text">Alamat</div>
            <div class="white--text">
              Jalan Sukun Raya 9, Besito, Gebog, Kudus, Jawa Tengah 59333
            </div>
          </v-col>
          <div class="mx-5 px-5"></div>
          <v-col cols="12" sm="5" md="5" lg="5">
            <div class="float-right footer-contact">
              <div class="caption grey--text">Contact Person</div>
              <div class="white--text">CS PPDB: 089503077886 (chat only)</div>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="text-center mt-5 pt-5">
        <p class="white--text ma-0">©2022 SMK Raden Umar Said. All Right Reserved.</p>
        <p class="white--text ma-0">Developed by TECHNOLP</p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-container {
  width: 800px;
}

@media screen and (max-width: 950px) {
  .footer-container {
    width: 90%;
  }
}

@media screen  and (max-width: 600px){
  .footer-contact {
    float: none!important;
  }
}
</style>