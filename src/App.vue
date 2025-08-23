<template>
  <div class="mx-3 md:mx-5">
    <header class="flex justify-between p-4 mx-3 md:mx-5 fixed top-0 left-0 right-0 z-10 border-b bg-white">
      <div class="flex gap-1 justify-center items-center">
        <Icon icon="radix-icons:hamburger-menu" class="size-6 text-zinc-800 mr-3"/>
        <Icon icon="heroicons:cube-transparent" class="size-8 text-zinc-800"/>
        <p class="text-2xl font-bold italic">CabinetFlow</p>
      </div>
      <Button class="hidden sm:visible"><Icon icon="material-symbols:add-2" class="size-4 text-white"/>Add Job</Button>
    </header>
    <div class="mx-2 md:mx-4 mt-20">
      <WeeklyView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from '@/components/ui/button'

import WeeklyView from "./components/WeeklyView.vue";
// import { onMounted } from 'vue'
// import { supabase } from '../utils/supabase'
</script>
