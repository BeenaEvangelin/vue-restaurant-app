<template>
  <div>
    <UserNav />

    <MoreAbout />
  </div>
</template>
<script>
import MoreAbout from "./HomeComponents/MoreAbout.vue";
import UserNav from "./UserNav.vue";

export default {
  name: "UserAbout",
  components: {
    UserNav,
    MoreAbout,
  },
};
</script>
