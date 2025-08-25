<template>
  <div>
    <!-- Trigger Button -->
    <button
      @click="isOpen = true"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
    >
      <Plus class="h-4 w-4" />
      New Job
    </button>

    <!-- Dialog -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 pt-16 sm:pt-4">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/80"
        @click="closeDialog"
      />

      <!-- Dialog Content -->
      <div class="relative z-50 w-full max-w-[calc(100vw-16px)] sm:max-w-lg bg-background border shadow-lg rounded-lg max-h-[90vh] overflow-hidden">
        <!-- Header -->
        <div class="p-4 sm:p-6 pb-4">
          <h2 class="text-lg font-semibold">Add New Job</h2>
          <p class="text-sm text-muted-foreground mt-1">
            Fill in the details below to create a new job entry.
          </p>
        </div>

        <!-- Form Content -->
        <div class="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4 overflow-y-auto">
          <!-- Job Name -->
          <div class="space-y-2">
            <label class="text-sm font-medium flex items-center gap-2">
              <FileText class="h-4 w-4 text-foreground" />
              Job Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.job_name"
              type="text"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              :class="{ 'border-red-500': !isJobNameValid && hasValidated }"
              placeholder="Enter job name"
            />
          </div>

          <!-- State -->
          <div class="space-y-2">
            <label class="text-sm font-medium flex items-center gap-2">
              <MapPin class="h-4 w-4 text-foreground" />
              State
            </label>
            <select
              v-model="form.qldnsw"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="QLD">Queensland</option>
              <option value="NSW">New South Wales</option>
            </select>
          </div>

          <!-- Install Date -->
          <div class="space-y-2">
            <label class="text-sm font-medium flex items-center gap-2">
              <Calendar class="h-4 w-4 text-foreground" />
              Install Date
            </label>
            <Popover v-model:open="isDatePickerOpen">
              <PopoverTrigger as-child>
                <button
                  class="flex h-10 w-full justify-start rounded-md border border-input bg-background px-3 py-2 text-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  :class="!selectedDate && 'text-muted-foreground'"
                >
                  <CalendarIcon class="mr-2 h-4 w-4" />
                  {{ selectedDate ? df.format(selectedDate.toDate(getLocalTimeZone())) : 'Pick a date' }}
                </button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <CalendarComponent
                  v-model="selectedDate"
                  @update:model-value="handleDateSelect"
                />
              </PopoverContent>
            </Popover>
          </div>

          <!-- Draftsman -->
          <div class="space-y-2">
            <label class="text-sm font-medium flex items-center gap-2">
              <User class="h-4 w-4 text-foreground" />
              Draftsman <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.draftsman"
              type="text"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              :class="{ 'border-red-500': !isDraftsmanValid && hasValidated }"
              placeholder="Enter draftsman name"
            />
          </div>

          <!-- Options -->
          <div class="space-y-3">
            <!-- Stone by Accent -->
            <div class="flex items-center space-x-2">
              <Switch
                id="stone_by_accent"
                v-model:checked="form.stone_by_accent"
              />
              <label for="stone_by_accent" class="text-sm font-medium flex items-center gap-2">
                <Package class="h-4 w-4 text-foreground" />
                Stone by Accent
              </label>
            </div>

            <!-- 2Pac -->
            <div class="flex items-center space-x-2">
              <Switch
                id="two_pac"
                v-model:checked="form.two_pac"
              />
              <label for="two_pac" class="text-sm font-medium flex items-center gap-2">
                <Palette class="h-4 w-4 text-foreground" />
                2Pac
              </label>
            </div>
          </div>

          <!-- Notes -->
          <div class="space-y-2">
            <label class="text-sm font-medium">Notes</label>
            <textarea
              v-model="form.notes"
              rows="3"
              class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              placeholder="Add any additional notes..."
            />
          </div>

          <!-- Actions -->
          <div class="flex flex-col-reverse sm:flex-row gap-2 pt-4 border-t">
            <button
              type="button"
              @click="closeDialog"
              class="flex-1 sm:flex-none inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="handleSubmit"
              :disabled="isSubmitting || !isFormValid"
              class="flex-1 sm:flex-none inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              :class="isFormValid ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-gray-300 text-gray-500'"
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
import { Plus, Calendar, FileText, User, MapPin, Palette, Package, Calendar as CalendarIcon } from 'lucide-vue-next'
import { format } from 'date-fns'
import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date'
import { supabase } from '@/utils/supabase'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Switch } from '@/components/ui/switch'

// Types
interface JobForm {
  job_name: string
  qldnsw: 'QLD' | 'NSW'
  install_date: string
  draftsman: string
  stone_by_accent: boolean
  two_pac: boolean
  notes: string
}

// State
const isOpen = ref(false)
const isSubmitting = ref(false)
const hasValidated = ref(false)
const selectedDate = ref<DateValue | undefined>()
const isDatePickerOpen = ref(false)

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const form = reactive<JobForm>({
  job_name: '',
  qldnsw: 'QLD',
  install_date: '',
  draftsman: '',
  stone_by_accent: true,
  two_pac: false,
  notes: ''
})

// Computed
const isJobNameValid = computed(() => form.job_name.trim() !== '')
const isDraftsmanValid = computed(() => form.draftsman.trim() !== '')
const isFormValid = computed(() => isJobNameValid.value && isDraftsmanValid.value)

// Methods
const resetForm = () => {
  form.job_name = ''
  form.qldnsw = 'QLD'
  form.install_date = ''
  form.draftsman = ''
  form.stone_by_accent = true
  form.two_pac = false
  form.notes = ''
  selectedDate.value = undefined
  hasValidated.value = false
}

const closeDialog = () => {
  isOpen.value = false
  resetForm()
}

const handleDateSelect = (date: DateValue | undefined) => {
  selectedDate.value = date
  if (date) {
    // Convert DateValue to ISO string for the form
    const jsDate = date.toDate(getLocalTimeZone())
    form.install_date = format(jsDate, 'yyyy-MM-dd')
  } else {
    form.install_date = ''
  }
  isDatePickerOpen.value = false
}

const handleSubmit = async () => {
  hasValidated.value = true

  if (!isFormValid.value) {
    return
  }

  isSubmitting.value = true

  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([{
        job_name: form.job_name,
        qldnsw: form.qldnsw,
        install_date: form.install_date || null,
        draftsman: form.draftsman,
        stone_by_accent: form.stone_by_accent,
        two_pac: form.two_pac,
        notes: form.notes
      }])

    if (error) throw error

    console.log('Job added successfully:', data)
    closeDialog()

    // Optional: emit event for parent component
    // emit('jobAdded', data)

  } catch (error) {
    console.error('Error adding job:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Optional: Define emits
// const emit = defineEmits<{
//   jobAdded: [job: any]
// }>()
</script>
