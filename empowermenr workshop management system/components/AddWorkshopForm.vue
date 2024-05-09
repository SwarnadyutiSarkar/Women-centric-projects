<!-- components/AddWorkshopForm.vue -->
<template>
  <div>
    <h1>Add Workshop</h1>
    <form @submit.prevent="addWorkshop">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="workshop.name" required><br><br>
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="workshop.date" required><br><br>
      <button type="submit">Add Workshop</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workshop: {
        name: '',
        date: ''
      }
    };
  },
  methods: {
    addWorkshop() {
      this.$emit('addWorkshop', this.workshop);
      this.workshop = { name: '', date: '' };
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
