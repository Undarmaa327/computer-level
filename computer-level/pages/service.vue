<template>
  <div>
      <Header/>

    <v-container class="container">
        <v-row no-gutters>
                <div class="title-div">
                <p class="mt-10 ml-10">Үйлчилгээний 3 төрлөөс өөрт тохирох нөхцөлөө сонгоорой</p>
                </div>
        </v-row>
    </v-container>
        <v-container
        class="my-10"
        >
        <div class="service-title mb-5"><span class="pricing">Level.mn нэгдэх</span></div>
        <v-row
            no-gutters
            class="mx-5"
            >
            <v-col>
            <v-card
                class="pa-2 mx-auto mb-3"
                width="360"
                outlined
                color="#F7F7F7"
            >
            <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-5">
                <span class="Title">SINGLE</span>
            </v-list-item-title>
            <v-list-item-subtitle class="mb-5"><span class="subtitle">Lorem ipsum dolor sit amet</span></v-list-item-subtitle>
            <div class="mb-5"><span class="text" >MNT / сар</span></div>
            
            <v-btn
            depressed
            color="#2292B3"
            >
            <span class="btn">Эхлүүлэх</span>
            </v-btn>
        </v-list-item-content>
        </v-list-item>
            </v-card>
            </v-col>
            <v-col>
            <v-card
                class="pa-2 mx-auto mb-3"
                width="360"
                outlined
                color="#F7F7F7"
            >
            <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-5">
                <span class="Title">NETWORK</span>
            </v-list-item-title>
            <v-list-item-subtitle class="mb-5"><span class="subtitle">Lorem ipsum dolor sit amet</span></v-list-item-subtitle>
            <div class="mb-5"><span class="text" >MNT / сар</span></div>
            
            <v-btn
            depressed
            color="#2292B3"
            >
            <span class="btn">Эхлүүлэх</span>
            </v-btn>
        </v-list-item-content>
        </v-list-item>
            </v-card>
            </v-col>
            <v-col>
            <v-card
                class="pa-2 mx-auto mb-3"
                width="360"
                outlined
                color="#F7F7F7"
            >
            <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-5">
                <span class="Title">ENTERPRISE</span>
            </v-list-item-title>
            <v-list-item-subtitle class="mb-5"><span class="subtitle">Lorem ipsum dolor sit amet</span></v-list-item-subtitle>
            <div class="mb-5"><span class="text" >MNT / сар</span></div>
            
            <v-btn
            depressed
            color="#2292B3"
            >
            <span class="btn">Эхлүүлэх</span>
            </v-btn>
        </v-list-item-content>
        </v-list-item>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
    
            <v-container
            class="my-10"
            >
            <div class="service-title mb-5 mt-n5"><span class="price-feature">Багц болгоны гол онцлог</span></div>
            <v-row
                no-gutters
                class="mx-5"
                >
                <p class="sub">Зөвлөгөө, сургалт</p> <br>
                Ажилтнууд нь Northstar-ыг хэрэгжүүлэх шилдэг туршлага, Level-ийг эхлүүлэх, Level-ыг одоогийн боловсролын хөтөлбөрт нэгтгэх, Level-ыг алсаас ашиглах, Дижитал навигацийн хөтөлбөр хэрэгжүүлэх, ажилтнууд эсвэл сайн дурын ажилтнуудыг дижитал навигатор болгон сургах зэрэг чиглэлээр томоохон ур чадвар, туршлагатай. Сургалт бүрийг танай байгууллагын хэрэгцээнд тохируулан хийдэг бөгөөд Level-ын ажилтнуудтай зөвлөлдсөний үндсэн дээр танд тусгайлан зориулсан танилцуулга хийх болно.
            </v-row>
            </v-container>

            <v-container
            class="my-10"
            >
            <div class="d-flex flex-row mb-5 ml-4 mt-n8"><span class="pricing">Түгээмэл асуултууд</span></div>
            <v-row
                no-gutters
                class="mx-5"
                >
                <v-col>
                    <div class="mt-3"><span class="question">Lorem ipsum</span></div>
                    <div class="mt-3"><span class="answer">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span></div>
                </v-col>
                <v-col>
                    <div class="mt-3"><span class="question">Lorem ipsum</span></div>
                    <div class="mt-3"><span class="answer">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span></div>
                </v-col>
            </v-row>
            <v-row
                no-gutters
                class="mx-5 mt-2"
                >
                <v-col>
                    <div class="mt-3"><span class="question">Lorem ipsum</span></div>
                    <div class="mt-3"><span class="answer">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span></div>
                </v-col>
                <v-col>
                    <div class="mt-3"><span class="question">Lorem ipsum</span></div>
                    <div class="mt-3"><span class="answer">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span></div>
                </v-col>
            </v-row>
            <v-row
                no-gutters
                class="mx-5"
                >
                <v-col>
                    <div class="mt-3"><span class="question">Lorem ipsum</span></div>
                    <div class="mt-3"><span class="answer">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span></div>
                </v-col>
                <v-col>
                    
                </v-col>
            </v-row>
            </v-container>

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

<style scoped>
.header + .container {
    margin-top: 100px;
}
.question{
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 700;
}

li{
    list-style: none;
}
.feature-text{
    color: black;
}
.price-feature{
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 600;
}
.pricing{
    font-family: 'Roboto';
    font-size: 30px;
    font-weight: 500;
}
.service-title{
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.cover {
    width: 450px;
    height: 350px;
}
.title-div p{
    font-weight: 700;
    font-size: 40px;
    font-family: 'Roboto';
    color: black;
    line-height: 1.2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.Title{
    font-family: 'Roboto';
    font-size: 30px;
    font-weight: 700;
}
.text{
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 600;
}
.sub {
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 400;
}
.subtitle{
    font-family: 'Roboto';
    color: black;
}
.detail{
    font-family: 'Roboto';
    color: black;
}
.btn{
    font-family: 'Roboto';
    color: white;
}
.v-card{
    border-color: black;
}
</style>