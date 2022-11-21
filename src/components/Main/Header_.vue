<template>
  <header id="header">
    <Search_ />
    <ul class="icons">
      <li><a href="#" class="icon brands fa-twitter name_locations"><span class="label">Twitter</span></a></li>
      <li><a href="#" class="icon brands fa-facebook-f name_locations"><span class="label">Facebook</span></a></li>
      <li><a href="#" class="icon brands fa-snapchat-ghost name_locations"><span class="label">Snapchat</span></a>
      </li>
      <li><a href="#" class="icon brands fa-instagram name_locations"><span class="label">Instagram</span></a></li>
      <li><a href="#" class="icon brands fa-medium-m name_locations"><span class="label">Medium</span></a></li>
    </ul>
  </header>
</template>

<script>
import Search_ from '../Sidebar/Search_.vue';

export default {
  name: "Header_",
  props: {
    msg: String
  },
  components: { Search_ }
}
</script>
