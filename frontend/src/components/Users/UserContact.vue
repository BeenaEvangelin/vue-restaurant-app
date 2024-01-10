<template>
  <div>
    <UserNav />
    <h1>Contact Us</h1>
    <p>
      We consider all the drivers of change gives you the components you need to
      change to create a truly happens.
    </p>
    <div class="contact">
      <div>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
      </div>
      <label>Subject</label>
      <input type="text" placeholder="Write a Subject" />
      <label>Message</label>
      <textarea />
    </div>
  </div>
</template>
<script>
import UserNav from "./UserNav.vue";
export default {
  name: "UserContact",
  components: {
    UserNav,
  },
};
</script>
<style scoped>
.contact {
  height: 70vh;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
