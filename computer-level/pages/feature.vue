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
                src="~/assets/feature/step1.png"
              >
              <p class="desc">Онлайнаар та өөрийн түвшингөө тогтооно</p>
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
                src="~/assets/feature/step2.png"
              >
              <p class="desc">Өөрийн эзэмшсэн болон сайжруулах шаардлагатай хэсгүүдийн тайланг гаргаж өгнө</p>
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
                src="~/assets/feature/step4.png"
              >
              <p class="desc">Бүх хэрэглэгчид маань гэрчилгээ авах боломжтой</p>
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
                src="~/assets/feature/step5.png"
              >
              <p class="desc">Хэрэглэгчид мэдээж түвшингөө ахиулах боломжтой</p>
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
                src="~/assets/feature/step3.png"
              >
              <p class="desc"><a href="exam">Шалгалт өгөх</a></p>
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
.desc {
  padding-left: 5px;
}
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