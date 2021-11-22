<template>
  <div>
    <Header/>

     <v-container class="container">
       <v-row justify="center" class="mt-16"><img src="~/assets/landing-page/build.png" alt="printon-logo"></v-row>
            <v-row justify="center" class="mt-5"><h1>Хэрхэн ажилладаг вэ?</h1></v-row>
            <div class="youtube">
              <iframe width="420" height="240" src="https://www.youtube.com/embed/zOjov-2OZ0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <v-row justify="center" class="mt-10"><p style="text-align: center;"><span style="color: black;">Level.mn нь өдөр тутмын амьдрал, ажил эрхлэлт, дээд боловсрол зэрэгт компьютер, интернет ашиглахад шаардагдах үндсэн ур чадварыг тодорхойлно.</span></p></v-row>
            <v-row justify="center" class="mt-16"><v-btn color="#25BC3D" x-large width="200" href="/products"><span style="color:white; font-fmily: 'Roboto'">Эхлэх</span></v-btn></v-row>
            <v-row justify="center" style="margin-top: 150px"><h2>Бидний санал болгох 5 үйлчилгээ</h2></v-row>
            <v-row
                no-gutters
                style="margin-top: 100px"
                class="mx-16"
                >
                <v-col>
                    <div class="gifdiv"></div>
                </v-col>
                <v-col>
                    <div class="desc">
                        <div class="innerdesc">
                            <div class="mb-10"><h1>Сонгох</h1></div>
                            <div class="mt-16"><p><span class="text">Манайд байгаа нийт 300 гаруй бүтээгдэхүүнээс хүссэн бүтээгдэхүүнээ сонгох боломжтой. Өөрт тохирох, өөрт таалагдсан, өөрийн нэрийн бүтээгдэхүүнд хамгийн ойр чанартай бүтээгдэхүүнээс сонголтоо хийгээрэй.</span></p></div>
                        </div>
                    </div>
                </v-col>
                </v-row>
                <v-row
                no-gutters
                style="margin-top: 100px"
                class="mx-16"
                >
                <v-col>
                    <div class="desc">
                        <div class="innerdesc-right">
                            <div class="mb-10"><h1>Бренд үүсгэх</h1></div>
                            <div class="mt-16"><p><span class="text">Та хүссэн бараагаа хүссэнээр өөрчилж загвараа гаргах боломжтой юм. Та үүсгэсэн бүтээгдэхүүнээ урьдчилаад харах боломжтой бөгөөд бид танд хамгийн чанартай, шинэлэг бүтээгдэхүүн санал болгож таны брендийг бий болгоход туслах болно.</span></p></div>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="gifdiv"></div>
                </v-col>
                </v-row>
                <v-row
                no-gutters
                style="margin-top: 100px"
                class="mx-16"
                >
                <v-col>
                    <div class="gifdiv"></div>
                </v-col>
                <v-col>
                    <div class="desc">
                        <div class="innerdesc">
                            <div class="mb-10"><h1>Миний дэлгүүр</h1></div>
                            <div class="mt-16"><p><span class="text">Миний дэлгүүр хэсэгт таны үүсгэсэн бүтээгдэхүүн таныг устгах хүртэл хадгалагдах болно. Тоо ширхэг өөрчлөх, өнгө солих, загвараа шинээр хийх боломж танд өгөх болно.</span></p></div>
                        </div>
                    </div>
                </v-col>
                </v-row>
                <v-row
                no-gutters
                style="margin-top: 100px"
                class="mx-16"
                >
                <v-col>
                    <div class="desc">
                        <div class="innerdesc-right">
                            <div class="mb-10"><h1>Хүргэлт</h1></div>
                            <div class="mt-16"><p><span class="text">Таны захиалсан бараа бүтээгдэхүүнийг маш болгоомжтой таны гар дээр түргэн шуурхай 100% сэтгэл ханамжтай хүргэж өгөх болно.</span></p></div>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="gifdiv"></div>
                </v-col>
                </v-row>
        </v-container>
  </div>
</template>


<script>
import  Header  from "~/components/header.vue";
export default {
  components :{
    Header
  }
}
</script>

<style scoped>
 .header + .container{
  margin-top: 80px;
}

.youtube {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.header + .container{
  margin-top: 100px;
}
.gif {
    height: 350px;
    width: 350px;
}
.gifdiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.innerdesc-right{
    padding: 0  30px 20px 20px;
}
.innerdesc {
    padding: 20px  30px 20px 0;
}
.text {
    font-size: 18px;
}
</style>