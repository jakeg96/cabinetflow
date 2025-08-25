<template>
  <div>
    <div class="flex gap-3 mt-2">
      <p class="text-3xl font-bold">Week</p>
      <p class="text-3xl font-light">25-29</p>
    </div>
    <div class="flex flex-col lg:flex-row gap-2 mt-1">
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold">Monday</p>
          <p class="text-2xl font-light">25</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold">Tuesday</p>
          <p class="text-2xl font-light">26</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold">Wednesday</p>
          <p class="text-2xl font-light">27</p>
        </div>
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold">Thursday</p>
          <p class="text-2xl font-light">28</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold">Friday</p>
          <p class="text-2xl font-light">29</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue'
// import { ref } from 'vue'
// import { supabase } from '../utils/supabase'

import WeeklyCard from '@/components/WeeklyCard.vue'

// interface Job {
//   id: number
//   title: string
// }

// const jobs = ref<Job[]>([])

// async function getJobs() {
//   const { data } = await supabase.from('jobs').select()
//   jobs.value = data
// }

// onMounted(() => {
//   getJobs()
// })
</script>
