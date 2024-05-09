<template>
  <div id="app">
    <WorkshopsList :workshops="workshops" />
    <AddWorkshopForm @addWorkshop="addWorkshop" />
  </div>
</template>

<script>
import WorkshopsList from './components/WorkshopsList.vue';
import AddWorkshopForm from './components/AddWorkshopForm.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    WorkshopsList,
    AddWorkshopForm
  },
  data() {
    return {
      workshops: []
    };
  },
  methods: {
    async addWorkshop(workshop) {
      try {
        await axios.post('/workshops', workshop);
        this.workshops.push(workshop);
      } catch (error) {
        console.error('Error adding workshop:', error);
      }
    },
    async fetchWorkshops() {
      try {
        const response = await axios.get('/workshops');
        this.workshops = response.data;
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    }
  },
  created() {
    this.fetchWorkshops();
  }
};
</script>

<style>
/* Add your styles here */
</style>
