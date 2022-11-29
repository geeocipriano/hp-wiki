<template>
    <v-container fluid>
            <v-table theme="dark">
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(spell, i) in spells.data" :key="i">
                        <td>{{ spell.name }}</td>
                        <td>{{ spell.description }}</td>
                    </tr>
                </tbody>
            </v-table>
    </v-container>

</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            spells : []
        }
    },
    methods: {
    async getSpells() {
      const spellsResponse = await axios.get('https://hp-api.herokuapp.com/api/spells')
      this.spells = spellsResponse;
    }
  },
  mounted() {
    this.getSpells();
  }
}
</script>