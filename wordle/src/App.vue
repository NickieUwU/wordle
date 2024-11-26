<template>
  <v-app>
    <Header />
    <v-main>
      <GameBoard :word="getWord"/>
    </v-main>
  </v-app>
</template>

<script>
  import loadWord from '@/plugins/wordle';

   export default {
      data() {
          return {
              getWord: '',
          };
      },
      async mounted() {
          this.getWord = await loadWord(); 
      },
  };
</script>
