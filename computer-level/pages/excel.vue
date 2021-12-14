<template>
  <div class="container-app">

        <div class="container-quiz">
          <div class="header-quiz">
            <h1>Microsoft Excel</h1>
          </div>
          <div class="step-progress" :style="{'width':progress + '%'}"></div>
          <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">
              
              <div class="box-question">
                <h2>Асуулт {{b}}/{{questions.length}}</h2>
                <p>{{question.question}}</p>
              </div>
              <div class="box-propositions">
                <ul>
                  <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''"><img :src="proposition.props" /><div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div><div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div></li>
                  
                </ul>
              </div>
              
              
          </div>
          <div class="box-score" v-if="score_show">
              
              
              <h2>Таны түвшин</h2>
              <h2>{{score}}/{{questions.length}}</h2>
              <div class="btn-restart">
                  <button @click="restartQuiz">Дахиж шалгалт өгөх <i class="fas fa-sync-alt"></i></button>
              </div>
          </div>
          <div class="footer-quiz">
                <div v-if="progress < 100" class="box-button">
                    <button  @click="skipQuestion()" :style="next ? 'background-color: #22437A' : ''">Алгасах</button>
                    <button  @click="nextQuestion()" :style="!next ? 'background-color: #22437A' : ''">Дараа</button>
                </div>  
                  
                  
                  
          </div>
          
          
            
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      questions:[
       {
          question:"Microsoft Excel программ дээр сонгосон cell-үүдийг хэрхэн нэгтгэх вэ?",
          propositions:[
            {props: require("~/assets/exam/p2.png"),},
            {props: require("~/assets/exam/p3.png"),correct:true},
            {props: require("~/assets/exam/p4.png"),},
            {props: require("~/assets/exam/p5.png"),}    
            
          ]
          
        },
        {
          question:"Microsoft Excel программ дээр аливаа cell-үүдэд оруулсан format-ийг ямар товчийг даран хуулах боломжтой вэ?",
          propositions:[
            {props: require("~/assets/exam/p2.png"),correct:true},
            {props: require("~/assets/exam/p3.png"),},
            {props: require("~/assets/exam/p4.png"),},
            {props: require("~/assets/exam/p5.png"),}    
            
          ]
          
        },
         {
          question:"Microsoft Excel программ дээр баганад байгаа өгөгдлөөр нь хэрхэн эрэмблэх вэ?",
          propositions:[
            {props: require("~/assets/exam/p2.png"),},
            {props: require("~/assets/exam/p3.png"),},
            {props: require("~/assets/exam/p4.png"),correct:true},
            {props: require("~/assets/exam/p5.png"),}    
            
          ]
          
        },    
       
        {
          question:"Шинэ мөр эхлүүлэхийн тулд ямар товчон дээр дарах хэрэгтэй вэ?",
          propositions:[
            {props: require("~/assets/exam/k1.png"),},
            {props: require("~/assets/exam/k2.png"),},
            {props: require("~/assets/exam/k3.png"),correct:true},
            {props: require("~/assets/exam/k4.png"),}    
            
          ]
          
        }
      ],
      a:0,
      b:1,
      next:true,
      score_show:false,
      quiz:true,
      score:0,
      correct:false,
      progress:0,
      
    }
  },
  name: 'App',
  components: {
    //HelloWorld
  },
  computed:{
      
  },
  methods:{
    
    selectResponse(e){
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status){
        if (status.correct) {
          return 'correct'
        }else{
          return 'incorrect' 
        }
    },
    nextQuestion(){
      if (this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;    
      }
      else{
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
        
      }
      
    },
    skipQuestion(){
      if (!this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
        
        
      }else{
        this.a++;
        this.b++;
        
      }
      
    },
    
    restartQuiz(){
      
      Object.assign(this.$data, this.$options.data()); // reset data in vue
       
    },
    
  }
}
</script>

<style scoped>
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    letter-spacing: 2px;
}

img {
  width: 400px;
  height: 200px;
}

.container-app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    background-color: white;
    text-align: center;
    flex-flow: column;
    border: 1px solid #2292B3;
    border-radius: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #2292B3;
    justify-content: center;
    align-items: center;
    background-color: #2292B3;
    border-radius: 10px 10px 0px 0px;
    color: white;
    font-family: 'Roboto';
}

.container-quiz .box {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.box-question {
    margin-top: 20px;
}

.box-question p {
    margin-top: 20px;
}

.box-propositions {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: center;
}

.box {
  overflow: scroll;
}

ul {
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

li {
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

li:hover {
    /*transform: scale(1.1);*/
    background-color: #2292B3;
}

li>div {
    float: right;
    margin-top: 7px;
    margin-right: 7px;
    color: white;
}

.check {
    color: rgb(74, 219, 74);
}

.close {
    color: rgb(240, 117, 100);
}

.footer-quiz {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #2292B3;
    background-color: #2292B3;
    border-radius: 0px 0px 10px 10px;
}

.box-button {
    display: flex;
    width: 100%;
}

.footer-quiz .box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
    background-color: #646464f5;
}

li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
}

li.incorrect {
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
}

.box-score {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2 {
    margin-top: 40px;
}

i {
    display: none;
    color: white;
}

.step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: #22437A;
    transition: 0.5s;
}

.btn-restart {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}

.btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    background-color: #22437A;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.next {
    background-color: #22437A;
}

@media screen and (max-width: 900px) {
    .container-quiz {
        width: 60%;
    }
}

@media screen and (max-width: 720px) {
    .container-quiz {
        width: 80%;
    }
    .footer-quiz .box-button button {
        width: 100px;
    }
}
</style>