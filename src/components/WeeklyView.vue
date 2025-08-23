<template>
  <div>
    <div class="flex gap-3 mt-2">
          <p class="text-3xl font-bold italic">Week</p>
          <p class="text-3xl italic font-light">25-29</p>
        </div>
    <div class="flex flex-col lg:flex-row gap-2 mt-1">
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2 ">
          <p class="text-2xl font-bold italic">Monday</p>
          <p class="text-2xl italic font-light">25</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Tuesday</p>
          <p class="text-2xl italic font-light">26</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Wednesday</p>
          <p class="text-2xl italic font-light">27</p>
        </div>
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Thursday</p>
          <p class="text-2xl italic font-light">28</p>
        </div>
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <div class="flex gap-3 mt-2">
          <p class="text-2xl font-bold italic">Friday</p>
          <p class="text-2xl italic font-light">29</p>
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
import WeeklyCard from '@/components/WeeklyCard.vue';
</script>
