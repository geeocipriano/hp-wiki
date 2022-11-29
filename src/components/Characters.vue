<template>
    <v-container>
        <v-row>
          <v-col
            v-for="(char, i) in characters.data"
            :key="i"
            :value="char"
            cols="4"
          >
          <v-card height="500px" > 
            <v-img
              :src="char.image"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100%"
              cover
              v-if="char.image !== img"
            >
            <v-card-title class="text-white" v-text="char.name" v-if="char.image !== img"></v-card-title>
            </v-img>
            <v-img
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100%"
              cover
              v-if="char.image === img"
              src="https://1000logos.net/wp-content/uploads/2021/04/Hogwarts-Logo.png"
            >
            <v-card-title class="text-white" v-text="char.name" v-if="char.image === img"></v-card-title>
            </v-img>
          </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
export default{
    name: "Characters",
    data: () => ({
      img : "",  
      selectedItem: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
      characters : [],
    }),
    methods: {
        async Getchars(){
            const charResponse = await axios.get('https://hp-api.herokuapp.com/api/characters')
            // const charResponse = await axios.get('https://api.potterdb.com/v1/characters')
            this.characters = charResponse;
            // let teste = this.characters.filter(c => c.image !== "");
            // console.log(teste)
            console.log(this.characters.data)
        },
        async filter(){
            let arr = [];

            // this.characters.forEach((value, index) => {
            //     arr.push(value);
            //     console.log(value);
            //     console.log(index);
            // });

            arr.push(this.characters.data[0])
            console.log(arr)
        }
        
    },
    mounted () {
    this.Getchars();
    this.filter();
  }
}
</script>