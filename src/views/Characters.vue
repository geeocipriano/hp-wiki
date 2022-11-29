<template>
  <v-container>
    <v-row>
      <v-col v-for="(char, i) in characters.data" :key="i" :value="char"  cols="lg-4 sm-12">
        <v-card height="500px">
          <v-img :src="char.image" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%"
            cover v-if="char.image !== img">
            <v-card-title class="text-white" v-text="char.name" v-if="char.image !== img"></v-card-title>
          </v-img>
          <v-img class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%" cover
            v-if="char.image === img"
            src="https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2020/04/legiao_oLs4Yl6E_Mnf.jpg.webp">
            <v-card-title class="text-white" v-text="char.name" v-if="char.image === img"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';
export default {
  name: "Characters",
  data: () => ({
    img: "",
    characters: [],
  }),
  methods: {
    async Getchars() {
      const charResponse = await axios.get('https://hp-api.herokuapp.com/api/characters')
      this.characters = charResponse;
      // console.log(this.characters.data)
    }

  },
  mounted() {
    this.Getchars();
  }
}
</script>