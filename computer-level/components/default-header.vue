<template>
  <header class="header">
        <div class="hcontainer">
            <nav class="nav">
                <ul class="nav-bar">
                    <li class="nav-item">
                        <div class="responsive-menu" app>
                            <v-icon @click.stop="drawer = !drawer" class="d-flex d-sm-none">mdi-menu</v-icon>
                        <v-navigation-drawer app
                            v-model="drawer"
                            absolute
                            :permanent="false"
                            temporary
                            right
                            class="d-flex flex-row-reverse"
                            >
                            <v-list
                                nav
                                dense
                            >
                                <v-list-item-group
                                v-model="group"
                                color="#25BC3D"
                                active-class="deep-purple--text text--accent-4"                                
                                >
                                <v-list-item>
                                    <v-list-item-title><a class="link" href="/products"><div class="slider"><span>Бүтээгдэхүүн</span></div></a></v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a class="link" href="/how-it-works"><div class="slider"><span>Хэрхэн ажилладаг</span></div></a></v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a class="link" href="/service"><div class="slider"><span>Үйлчилгээ</span></div></a></v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a class="link" href="#"><div class="slider"><span>Мэдлэгийн сан</span></div></a></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title><a class="link nav-item-extra" href="/mystore"><div class="link-item"><span class=""><v-icon>mdi-home</v-icon>Миний дэлгүүр</span></div></a></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title><a class="link nav-item-extra" href="#"><div class="link-item"><span class=""><v-icon large color="#25BC3D" class="pr-4">mdi-account-circle</v-icon>Profile</span></div></a></v-list-item-title>
                                </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            </v-navigation-drawer>
                        </div></li>
                    <li class="nav-item"><a class="link nav-item-extra" href="#"><div class="link-item d-none d-sm-flex"><span class=""><v-icon large color="#25BC3D" class="pr-4">mdi-account-circle</v-icon></span></div></a></li>
                    <li class="nav-item"><a class="link nav-item-extra" href="/mystore"><div class="link-item d-none d-sm-flex"><span class=""><v-icon>mdi-home</v-icon>Миний дэлгүүр</span></div></a></li>
                    <li class="nav-item"><a class="link" href="#"><div class="link-item d-none d-lg-flex d-xl-none"><span>Мэдлэгийн сан</span></div></a></li>
                    <!-- <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Блог</span></div></a></li> -->
                    <li class="nav-item"><a class="link" href="/service"><div class="link-item d-none d-sm-flex"><span>Үйлчилгээ</span></div></a></li>
                    <li class="nav-item"><a class="link" href="/how-it-works"><div class="link-item d-none d-lg-flex d-xl-none"><span>Хэрхэн ажилладаг</span></div></a></li>
                    <li class="nav-item"><a class="link" href="/products"><div class="link-item d-none d-sm-flex"><span>Бүтээгдэхүүн</span></div></a></li>
                    <li class="logo"><a class="link" href="/"><div class="link-item"><img src="~/assets/logo/printon.png" alt="printon-logo"></div></a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style scoped>
    .btn-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.btn-item .signin {
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 16px;
    color: black;
}
.btn-item .signup {
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 16px;
    color: white;
}
.nav-item .link .nav-item-extra .link-item{
    padding-left: 3px;
}
.link {
    text-decoration: none;
}
.nav .link {
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 16px;
    color: black;
    transition: color 0.5s ease;
    height: 100%;
}
.nav .link:hover {
    color: #25BC3D;
}
.nav-item {
    height: 80px !important;
    float: left;
}
.link-item {
    height: 100%;
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.header {
    height: 80px;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
}
.hcontainer {
    margin: auto;
}
.logo {
    height: 80px;
}
img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 204px;
}
.nav .nav-bar {
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.nav .nav-bar .nav-item {
    float: right;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>