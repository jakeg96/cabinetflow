<template>
<div>
  <p class="text-3xl font-bold italic">Weekly View</p>
  <div class="flex flex-col lg:flex-row gap-3 mt-1">
    <div class="flex flex-col gap-2 w-full">
      <div class="flex gap-2 mt-2">
        <p class="text-2xl italic">25</p>
        <p class="text-2xl font-bold italic">Monday</p>
      </div>
      <JobCard/>
      <JobCard/>
      <JobCard/>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex gap-2 mt-2">
        <p class="text-2xl italic">26</p>
        <p class="text-2xl font-bold italic">Tuesday</p>
      </div>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex gap-2 mt-2">
        <p class="text-2xl italic">27</p>
        <p class="text-2xl font-bold italic">Wednesday</p>
      </div>
      <JobCard/>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex gap-2 mt-2">
        <p class="text-2xl italic">28</p>
        <p class="text-2xl font-bold italic">Thursday</p>
      </div>
      <JobCard/>
      <JobCard/>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex gap-2 mt-2">
        <p class="text-2xl italic">29</p>
        <p class="text-2xl font-bold italic">Friday</p>
      </div>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import JobCard from '@/components/JobCard.vue';
</script>
