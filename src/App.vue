<template>
  <SidebarProvider :default-open="false">
    <AppSidebar />
    <main class="flex-1 flex-col mx-4">
      <header class="flex justify-between items-center py-3 sticky top-0 border-b bg-background">
        <div class="flex gap-1 justify-center items-center">
          <SidebarTrigger class="mr-1" />
          <Icon icon="heroicons:cube-transparent" class="size-7 hidden md:block " />
          <p class="font-bold italic">CabinetFlow</p>
        </div>
        <div class="flex gap-2">
          <Button class="hover:"
            ><Icon icon="material-symbols:add-2" class="size-4" />Add Job</Button
          >
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">
                <Icon
                  icon="material-symbols:light-mode"
                  class="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Icon
                  icon="material-symbols:dark-mode"
                  class="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="mode = 'light'"> Light </DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'auto'"> System </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div class="mt-4">
        <WeeklyView />
      </div>
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import AppSidebar from './components/AppSidebar.vue'
import WeeklyView from './components/WeeklyView.vue'
// import { onMounted } from 'vue'
// import { supabase } from '../utils/supabase'

const mode = useColorMode()
</script>
