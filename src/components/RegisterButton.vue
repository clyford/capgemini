<template>
    <router-link tag="button" class="inscription" to="/inscrire">S'inscrire</router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.inscription {
    background: blue;
    width: 159px;
    height: 55px;
    border-radius: 8px;
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
}
</style>
