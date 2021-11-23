<template>
    <div>
        <Header/>

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