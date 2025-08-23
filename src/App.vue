<template>
  <header class="flex justify-between py-4 mx-4 fixed top-2 left-0 right-0 z-10 border-b-2 bg-white">
    <div class="flex gap-1 justify-center items-center">
      <Icon icon="radix-icons:hamburger-menu" class="size-6 text-zinc-800 mr-3"/>
      <Icon icon="heroicons:cube-transparent" class="size-8 text-zinc-800"/>
      <p class="text-2xl font-bold italic">CabinetFlow</p>
    </div>
    <Button class="hidden sm:visible"><Icon icon="material-symbols:add-2" class="size-4 text-white"/>Add Job</Button>
  </header>
  <div class="mx-4 mt-24">
    <WeeklyView/>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from '@/components/ui/button'

import WeeklyView from "./components/WeeklyView.vue";
// import { onMounted } from 'vue'
// import { supabase } from '../utils/supabase'
</script>
