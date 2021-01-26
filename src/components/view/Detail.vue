<template>
  <h1>{{ url }}</h1>
</template>

<script>
import { onBeforeMount } from 'vue';
export default {
  name: "Detail",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup(){
    //   onBeforeMount(() => {
    //       if(url == coches1){
    //           get(http/coches/1)
    //       }else if(url == motos1){
    //           get(http/motos/1)
    //       }
    //   })
  }
};
</script>
