<template>
  <div class="home">
    <Orange />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Orange from '@/components/Orange.vue'; // @ is an alias to /src

@Component({
  components: {
    Orange,
  },
})
export default class Home extends Vue {}
</script>
