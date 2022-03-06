<template>
  <header>
    <h1>Welcome to Wen-Lin's Blog!</h1>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 35px;
  position: relative;
}
h1::before {
  content: '';
  display: block;
  position: absolute;
  width: 50%;
  height: 110%;
  background-color: #086e7d;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  bottom: -2px;
  transform: rotateZ(1.8deg);
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

nav a {
  color: #6c8b8f;
  text-decoration: none;
  margin-left: 20px;
}
nav a.router-link-active {
  color: #1a5f7a;
  font-weight: bold;
}
</style>
