<template>
    <div>
        <Header/>

        <div class="container">

          <div class="title"><h2>Level.mn-ийн үнэлгээ юу вэ?</h2></div>

        <v-container class="">
          <v-row
            class="mb-6"
          >
            <v-col>
              <v-card
                tile
                class="mx-auto"
                max-width="300"
                height="280"
                >
              <img class="product"
                src="~/assets/landing-page/canva.png"
              >
              <v-card-title>Подволк</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                tile
                class="mx-auto"
                max-width="300"
                height="280"
                >
              <img class="product"
                src="~/assets/landing-page/canva.png"
              >
              <v-card-title>Малгайтай цамц</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                tile
                class="mx-auto"
                max-width="300"
                height="280"
                >
              <img class="product"
                src="~/assets/landing-page/canva.png"
              >
              <v-card-title>Аяга</v-card-title>
              </v-card>
            </v-col>            
          </v-row>
          <v-row>
            <v-col>
              <v-card
                tile
                class="mx-auto"
                max-width="300"
                height="280"
                >
              <img class="product"
                src="~/assets/landing-page/canva.png"
              >
              <v-card-title>Малгай</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                tile
                class="mx-auto"
                max-width="300"
                height="280"
                >
              <img class="product"
                src="~/assets/landing-page/canva.png"
              >
              <v-card-title>Утасны кейс</v-card-title>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                tile
                class="mx-auto"
                max-width="300"
                height="280"
                >
              <img class="product"
                src="~/assets/landing-page/canva.png"
              >
              <v-card-title>Утасны кейс</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        </div>
        <Footer/>
    </div>
</template>

<script>
import  Header  from "~/components/header.vue";
import  Footer  from "~/components/footer.vue";
export default {
  components :{
    Header,
    Footer
  }
}
</script>

<style>
.product {
  width: 300px;
  height: 200px;
  background-color: #F7F7F7;
}
.header + .container{
  margin-top: 80px;
}
.header + .container{
  margin-top: 100px;
}
</style>