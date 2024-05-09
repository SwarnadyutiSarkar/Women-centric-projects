<!-- components/WorkshopsList.vue -->
<template>
  <div>
    <h1>Workshops List</h1>
    <ul>
      <li v-for="workshop in workshops" :key="workshop.id">
        {{ workshop.name }} - {{ workshop.date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    workshops: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
