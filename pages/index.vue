<template>
  <Main v-if="this.isLoaded"/>
  <Login v-else/>
</template>

<script>
export default {
  computed: {
    isLoaded() {
      return !!(process.client && localStorage.getItem("token"));
    }
  }
}
</script>
