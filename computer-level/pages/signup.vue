<template>
        <div class="signin-section">
            <div class="form">
                <div class="">
                  <v-icon size="40" @click="$router.push('/')">mdi-close</v-icon>
                    <div class="img"><img src="../assets/logo/computer1.png"></div>
                    <div class="headline">
                        <p>Сайна уу</p>
                    </div>
                    <div class="text">
                    <v-text-field
                    label="Email"
                    type="email"
                    dense
                    outlined
                    color="#2292B3"></v-text-field>
                    <v-text-field
                    label="Password"
                    :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="show ? 'text' : 'password'"
                    hint="At least 8 characters"
                    @click:append="show = !show"
                    dense
                    outlined
                    color="#2292B3"></v-text-field>
                    <v-text-field
                    label="Confirm Password"
                    :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="show ? 'text' : 'password'"
                    hint="нууц үгээ давтан шүү"
                    @click:append="show = !show"
                    dense
                    outlined
                    color="#2292B3"></v-text-field>
                    </div>
                  </div>
                    <div class="signin-btn">
                        <v-btn class="signup-btn-item" color="#2292B3">Бүртгүүлэх</v-btn>
                    </div>
                    <div class="message"><p>Бүртгүүлснээр level-ийн <a class="message1" href="#">Үйлчилгээний нөхцөл</a>, <a class="message1" href="#">Нууцлалын бодлого</a>, <a class="message1" href="#">Оюуны өмчийн бодлогыг</a> зөвшөөрч байгаа болно.</p></div>
                    <div class="subline center"> Бүртгэлтэй юу? &nbsp;<a class="signup" href="/signin">Нэвтрэх</a></div>
              </div>
            <div class="image">     
            </div>
        </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        password: 'Password',
        
      }
    },
  }
</script>

<style lang="scss" scoped>
    .form {
        padding: 40px;
    }
    .signup {
        color: #2292B3;
    }
    a {
        text-decoration: none;
        color: #2292B3;
        font-weight: 700;
    }
    .message {
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .message p {
        width: 300px;
        color: black;
        align-items: center;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
    }
    .message1 {
        font-size: 13px;
        font-weight: 500;
    }
    .center {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .headline p {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 20px;
        color: black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .subline {
        color: black;
    }
    .signin-btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .signup-btn-item {
        width: 50%;
        color: white;
        text-transform: capitalize;
    }
    .image {
        background-position: center;
        background-size: cover;
        background-image: url("../assets/signup/signup.png");
        display: flex;
        flex-direction: column;
        justify-content: flex-end;       
    }
    .signin-section{
      background-color: white;
    }
    img {
        width: 204px;
        height: 52px;
    }
    .img {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    } 
    .v-text-field{
      width: 300px;
    }
    .v-btn {
      width: 300px;
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    i {
      cursor: pointer;
    }
  @media only screen and (min-width:961px){
    .signin-section{
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 5px;
      overflow: hidden;

    }
    .image{
      padding-bottom: 60px;
    }
    .form{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
    @media only screen and (min-width: 601px) and (max-width:960px) {
      .signin-section{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .image {
        display: none;
      }
    }
    @media only screen and (max-width: 600px) {
      .signin-section{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .image{
        display: none;
      }
    }
</style>