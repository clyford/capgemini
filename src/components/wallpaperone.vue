<template>
    <div>
        <img src="@/assets/images/MAQUETTE_CAPG.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'wallpaperone',
  props: {
    msg: String
  }
}
</script>

<style>
div img{
    height: 100%;
    width: 100%;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    }
</style>
