<template>
  <div class="flex flex-col w-full border rounded-sm p-3">
    <div class="flex justify-between">
      <p class="text-zinc-400 text-sm">Hibbard</p>
      <p class="text-sm font-bold">26/8/25</p>
    </div>
    <p>134 Marathon Dr, Tamworth</p>
    <div class="flex gap-1 mt-2">
      <div class="flex flex-col justify-center items-center w-1/5">
        <p class=" text-xs italic text-green-600">READY</p>
        <Icon icon="material-symbols:check-circle" class="size-5 text-green-600" />
      </div>
      <div class="flex flex-col justify-center items-center w-1/5">
        <p class=" text-xs italic text-green-600">CUT</p>
        <Icon icon="material-symbols:check-circle" class="size-5 text-green-600" />
      </div>
      <div class="flex flex-col justify-center items-center w-1/5">
        <p class=" text-xs italic text-zinc-400">EDGED</p>
        <Icon icon="material-symbols:circle-outline" class="size-5 text-zinc-300" />
      </div>
      <div class="flex flex-col justify-center items-center w-1/5">
        <p class=" text-xs italic text-zinc-400">BUILT</p>
        <Icon icon="material-symbols:circle-outline" class="size-5 text-zinc-300" />
      </div>
      <div class="flex flex-col justify-center items-center w-1/5">
        <p class=" text-xs italic text-zinc-400">DONE</p>
        <Icon icon="material-symbols:circle-outline" class="size-5 text-zinc-300" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
