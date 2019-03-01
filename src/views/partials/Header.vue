<template>
    <header id="header_main">
        <Logo />
        <NavMain />
        <Button/>
        <Burger />
    </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
import NavMain from "@/components/NavMain.vue";
import Button from "@/components/RegisterButton.vue";
import Burger from "@/components/Burger.vue";

export default {
  components: {
    Logo,
    NavMain,
    Button,
    Burger
  }
}
</script>

<style lang="scss" scoped>
#header_main {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 138px;
  margin-bottom: 48px;
}
</style>
