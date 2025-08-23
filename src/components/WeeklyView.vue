<template>
  <div>
    <p class="text-3xl font-bold italic">Weekly View</p>
    <div class="flex flex-col lg:flex-row gap-3 mt-1">
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Monday</p>
          <p class="text-2xl italic font-light">25</p>
        </div>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Tuesday</p>
          <p class="text-2xl italic font-light">26</p>
        </div>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Wednesday</p>
          <p class="text-2xl italic font-light">27</p>
        </div>
        <JobCard />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Thursday</p>
          <p class="text-2xl italic font-light">28</p>
        </div>
        <JobCard />
        <JobCard />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Friday</p>
          <p class="text-2xl italic font-light">29</p>
        </div>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
</script>
