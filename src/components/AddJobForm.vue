<template>
  <div>
    <!-- Trigger Button -->
    <button
      @click="isOpen = true"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
    >
      <Plus class="h-4 w-4" />
      New Job
    </button>

    <!-- Dialog Overlay -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 pt-16 sm:pt-4">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/80"
        @click="isOpen = false"
      />

      <!-- Dialog Content -->
      <div class="relative z-50 w-full max-w-lg bg-background border shadow-lg duration-200 rounded-lg max-h-[90vh] overflow-y-auto">
        <div class="p-6 pb-4">
          <div class="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 class="text-lg font-semibold leading-none tracking-tight">Add New Job</h2>
            <p class="text-sm text-muted-foreground">
              Fill in the details below to create a new job entry.
            </p>
          </div>
        </div>

        <div class="px-6 pb-6 space-y-4">
          <!-- Job Name -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
              <FileText class="h-4 w-4 text-foreground" />
              Job Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.job_name"
              type="text"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              :class="{ 'border-red-500': formData.job_name.trim() === '' && isSubmitting }"
              placeholder="Enter job name"
            />
          </div>

          <!-- State -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
              <MapPin class="h-4 w-4 text-foreground" />
              State
            </label>
            <select
              v-model="formData.qldnsw"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="QLD">Queensland</option>
              <option value="NSW">New South Wales</option>
            </select>
          </div>

          <!-- Install Date -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
              <Calendar class="h-4 w-4 text-foreground" />
              Install Date
            </label>
            <input
              v-model="formData.install_date"
              type="date"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <!-- Draftsman -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
              <User class="h-4 w-4 text-foreground" />
              Draftsman <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.draftsman"
              type="text"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              :class="{ 'border-red-500': formData.draftsman.trim() === '' && isSubmitting }"
              placeholder="Enter draftsman name"
            />
          </div>

          <!-- Switches -->
          <div class="space-y-3">
            <!-- Stone by Accent -->
            <div class="flex items-center space-x-2">
              <button
                type="button"
                @click="formData.stone_by_accent = !formData.stone_by_accent"
                :class="[
                  'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
                  formData.stone_by_accent ? 'bg-primary' : 'bg-input'
                ]"
              >
                <span
                  :class="[
                    'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
                    formData.stone_by_accent ? 'translate-x-5' : 'translate-x-0'
                  ]"
                />
              </button>
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                <Package class="h-4 w-4 text-foreground" />
                Stone by Accent
              </label>
            </div>

            <!-- 2Pac -->
            <div class="flex items-center space-x-2">
              <button
                type="button"
                @click="formData.two_pac = !formData.two_pac"
                :class="[
                  'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
                  formData.two_pac ? 'bg-primary' : 'bg-input'
                ]"
              >
                <span
                  :class="[
                    'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
                    formData.two_pac ? 'translate-x-5' : 'translate-x-0'
                  ]"
                />
              </button>
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                <Palette class="h-4 w-4 text-foreground" />
                2Pac
              </label>
            </div>
          </div>

          <!-- Notes -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Notes
            </label>
            <textarea
              v-model="formData.notes"
              rows="3"
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Add any additional notes..."
            />
          </div>

          <!-- Form Actions -->
          <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 pt-4 border-t">
            <button
              type="button"
              @click="isOpen = false"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="handleSubmit"
              :disabled="isSubmitting || !isFormValid"
              :class="[
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2',
                isFormValid ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              {{ isSubmitting ? 'Adding...' : 'New Job' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { Plus, Calendar, FileText, User, MapPin, Palette, Package } from 'lucide-vue-next'

import { supabase } from '@/utils/supabase'


// Types
interface JobFormData {
  job_name: string
  qldnsw: 'QLD' | 'NSW'
  install_date: string
  draftsman: string
  stone_by_accent: boolean
  two_pac: boolean
  notes: string
}

// Reactive state
const isOpen = ref(false)
const isSubmitting = ref(false)

const formData = reactive<JobFormData>({
  job_name: '',
  qldnsw: 'QLD',
  install_date: '',
  draftsman: '',
  stone_by_accent: true, // Default to true as requested
  two_pac: false,
  notes: ''
})

// Computed
const isFormValid = computed(() => {
  return formData.job_name.trim() !== '' &&
         formData.draftsman.trim() !== ''
})

// Methods
const resetForm = () => {
  formData.job_name = ''
  formData.qldnsw = 'QLD'
  formData.install_date = ''
  formData.draftsman = ''
  formData.stone_by_accent = true // Reset to true default
  formData.two_pac = false
  formData.notes = ''
}

const handleSubmit = async () => {
  // Prevent empty form submission
  if (!isFormValid.value) {
    console.error('Please fill in required fields')
    return
  }

  isSubmitting.value = true

  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([{
        job_name: formData.job_name,
        qldnsw: formData.qldnsw,
        install_date: formData.install_date || null,
        draftsman: formData.draftsman,
        stone_by_accent: formData.stone_by_accent,
        two_pac: formData.two_pac,
        notes: formData.notes
      }])

    if (error) throw error

    // Reset form and close dialog
    resetForm()
    isOpen.value = false

    console.log('Job added successfully:', data)
    // You might want to emit an event here to refresh the parent's job list
    // emit('jobAdded', data)

  } catch (error) {
    console.error('Error adding job:', error)
  } finally {
    isSubmitting.value = false
  }
}


// Optional: Define emits if you want to communicate with parent
// const emit = defineEmits<{
//   jobAdded: [job: any]
// }>()
</script>
