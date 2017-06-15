<template>
  <div class="row">
    <h3>My Interests</h3>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <carousel :perPage=1>
        <slide>
          <img src="../assets/computer_science.jpg" alt="Computer Science" width="100%">
        </slide>
        <slide>
          <img src="../assets/tomato-red-pepper-soup-sl.jpg" alt="Tomato Soup" width="100%">
        </slide>
        <slide>
          <img src="../assets/apple_cookie.jpg" alt="Apple Cookies" width="100%">
        </slide>
        <slide>
          <img src="../assets/garlic.jpg" alt="Garlic" width="100%">
        </slide>
      </carousel>
    </div>
    <div class="col-md-4"></div>
  </div>

</template>
<style>
.noindent { margin: 0; padding: 0; }


</style>
<script>

    export default{

    }


</script>
