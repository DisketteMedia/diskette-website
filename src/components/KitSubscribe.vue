<script setup lang="ts">
import { ref } from 'vue'

interface KitSubscription {
  id: number
  state: string
  subscribable_id: number
  subscribable_type: string
  subscriber: {
    id: number
    first_name: string | null
    email_address: string
    state: string
    fields: Record<string, string>
  }
}

interface KitApiResponse {
  subscription: KitSubscription
}

interface KitApiError {
  error?: string
  message?: string
}

const emit = defineEmits<{
  success: [subscription: KitSubscription]
  error: [error: Error]
}>()

const email = ref<string>('')
const firstName = ref<string>('')
const isLoading = ref<boolean>(false)
const message = ref<string>('')
const isError = ref<boolean>(false)

const apiKey = import.meta.env.VITE_KIT
const formId = import.meta.env.VITE_KIT_FORMID

async function subscribe(): Promise<void> {
  if (!email.value) return
  isLoading.value = true
  message.value = ''
  isError.value = false

  try {
    const body: Record<string, string> = {
      api_key: apiKey,
      email: email.value
    }

    if (firstName.value.trim()) {
      body.first_name = firstName.value.trim()
    }

    const response = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(body)
        }
    )

    const data: KitApiResponse | KitApiError = await response.json()

    if (response.ok && 'subscription' in data) {
      message.value = 'Thanks for subscribing! Please check your email for a confirmation.'
      isError.value = false
      email.value = ''
      firstName.value = ''
      emit('success', data.subscription)
    } else {
      const errorData = data as KitApiError
      throw new Error(errorData.error || errorData.message || 'Failed to subscribe')
    }
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Something went wrong')
    message.value = error.message
    isError.value = true
    emit('error', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="subscribe" class=" flex flex-col gap-3">
      <fieldset class="fieldset">
        <label class="label">First Name</label>
        <input v-model="firstName" :disabled="isLoading" class="input validator w-full" placeholder="James"/>
      </fieldset>
      <fieldset class="fieldset">
        <label class="label">Email</label>
        <input v-model="email" :disabled="isLoading" class="input validator w-full" type="email" required placeholder="internjames@diskette.tv"/>
      </fieldset>

      <button class="btn btn-primary" type="submit" :disabled="isLoading">
        <span v-if="isLoading">Subscribing...</span>
        <span v-else>Subscribe</span>
      </button>
    <p v-if="message">{{ message }}</p>
  </form>
</template>

<style scoped>

</style>