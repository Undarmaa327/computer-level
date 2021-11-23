<template>
    <div>
        <Header/>
            <v-container>
                <v-row justify="start" class="mt-5"><h1>Бидэнтэй холбогдоорой</h1></v-row>
                <v-row justify="start" class="mt-5 mb-10"><span class="subtitle">Level.mn-ийн талаар асуух асуултаа бидэнд мэдэгдээрэй.</span></v-row>
                <v-text-field
                    label="Your name"
                    dense
                    outlined
                    rounded
                    color="#2292B3"></v-text-field>
                    <v-text-field
                    label="Your Email Address"
                    dense
                    outlined
                    rounded
                    color="#2292B3"></v-text-field>
                    <v-text-field
                    label="Organization Name"
                    dense
                    outlined
                    rounded
                    color="#2292B3"></v-text-field>
                    <v-textarea
                    filled
                    name="input-7-4"
                    label="Question"
                    color="#2292B3"
                    ></v-textarea>
                    <v-btn color="#2292B3">Илгээх</v-btn>
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

<style>
.subtitle {
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 15px;
    color: black;
}
.header + .container{
  margin-top: 80px;
}
.header + .container{
  margin-top: 100px;
}
</style>