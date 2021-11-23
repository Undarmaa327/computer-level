<template>
    <div>
        <Header/>
            <div class="image">
        <img src="~/assets/landing-page/canva.png">
        <div class="centered">
            <span class="titles">Сур мэд бататга</span> <br>
            <span class="subsubtitle">Level.mn нь таны компьютерийн ур чадварыг шалгаж, ур чадвараа хөгжүүлж, гэрчилгээ авч мэдлэгээ бататгах боломжтой.</span>
        </div>
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
.header + .container{
  margin-top: 80px;
}
.header + .container{
  margin-top: 100px;
}
</style>