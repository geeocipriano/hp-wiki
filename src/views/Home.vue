<template>
  <v-container fluid>
    <v-card class="mx-auto">

      <v-card-text class="py-0" style="margin-bottom: 30px">
        <v-row align="center" no-gutters style="display: flex; justify-content: center; align-items: center;">
          <v-col class="text-h3" sm12 md12>
            <v-container >
              Harry Potter Database

            </v-container>

          </v-col>

          <v-col cols="6" class="text-right">
            <v-icon color="#FFBF81" icon="mdi-wizard-hat" size="88"></v-icon>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions style="display: flex; justify-content: center;">
        <v-btn  href="https://next.vuetifyjs.com/en/components/cards/" target="_blank" prepend-icon="mdi-github">
          Project Repository
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

</template>
<script>
export default {
  data: () => ({
    labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
    expand: false,
    time: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
    ],
  }),
}
</script>