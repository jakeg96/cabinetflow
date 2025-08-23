<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Week',
    url: '#',
    icon: Home,
  },
  {
    title: 'Month',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Maintenance',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'My Jobs',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <!-- <SidebarGroupLabel class="text-sm font-bold">Menu</SidebarGroupLabel> -->
        <SidebarGroupContent>
          <SidebarMenu class="mt-4">
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild class="text-lg italic">
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
