<template>
  <div class="footer">
    <div class="inner-footer">
      <div class="footer-column">
      <v-container>
          <v-row>
              <v-col>
                <h3>Website</h3>
                  <ul class="footer-bar">
                    <li class="footer-item"><a class="footer-link" href="/#"><div class="footer-link-item"><span>Бидний тухай</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="/#"><div class="footer-link-item"><span>Онцлог</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="/#"><div class="footer-link-item"><span>Үйлчилгээ</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Холбоо барих</span></div></a></li>
                </ul>
              </v-col>
              <v-col>
                <h3>Үйлчилгээ</h3>
                  <ul class="footer-bar">
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Төлбөр</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Үнэ цэнэ</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Цамц</span></div></a></li>
                </ul>
              </v-col>
              <v-col>
                <h3>Холбоо барих</h3>
                  <ul class="footer-bar">
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Бидний тухай</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Холбоо барих</span></div></a></li>
                    <li class="footer-item"><a class="footer-link" href="#"><div class="footer-link-item"><span>Бүртгэл</span></div></a></li>
                </ul>
              </v-col>
          </v-row>
      </v-container>
        </div>
        <div class="footer-end mb-5">
            <p class="copy">&copy; 2021 Level, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.copy {
    padding-top: 5px;
    padding-left: 5px;
    font-size: 12px;
    color: #999797;
}
.footer-end {
    width: 100%;
    height: 30px;
    border-top: 1px solid#999797;
}
h3 {
    margin-left: 20px;
    color: #FCC250;
}
.footer-item .footer-link {
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 15px;
    color: white;
    line-height: 2;
    transition: color 0.5s ease;
    height: 100%;
}
.footer-item .footer-link:hover {
    cursor: pointer;
}
.footer-link {
    text-decoration: none;
}
.footer-bar {
    list-style: none;
    width: 100%;
    height: 100%;
}
.footer-column {
    margin-top: 30px;
}
.inner-footer {
    width: 1000px;
}
.footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #272C32;
}
</style>