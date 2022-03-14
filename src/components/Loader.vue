<template>
  <div class="pulse-dot-container" :style="transform">  
    <div class="pulse-dot pulse-dot-1" :style="{background: props.dotColor}"></div>
    <div class="pulse-dot pulse-dot-2" :style="{background: props.dotColor}"></div> 
    <div class="pulse-dot pulse-dot-3" :style="{background: props.dotColor}"></div>
    <div class="pulse-dot pulse-dot-4" :style="{background: props.dotColor}"></div>
  </div>
</template>

<script setup>
  import { defineProps, computed} from 'vue';
  const props = defineProps({
    dotColor: {
      type: String,
      default: 'red'
    },
    scale: {
      type: Number,
      default: 1
    }
  })

 const transform = computed(() => {
    return `transform: scale(${ props.scale })`
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pulse-dot-container {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.pulse-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  
  opacity: 0;
}

.pulse-dot-1 {
    animation: pulsedot 2.0s linear 0s infinite;
}
 .pulse-dot-2 {
    animation: pulsedot 2.0s linear .5s infinite ;
}
.pulse-dot-3 {
    animation: pulsedot 2.0s linear 1.0s infinite;
} 
.pulse-dot-4 {
    animation: pulsedot 2.0s linear 1.5s infinite;
} 

@keyframes pulsedot {
  0% {
    opacity: 0;
    transform: scale(.8) translateX(-20px);
  }
  
  50% {
    opacity: 1;
    transform: scale(1) translateX(15px);
  }
  
  100% {
    opacity: 0;
    transform: scale(.8)  translateX(50px);
  }
}
</style>
