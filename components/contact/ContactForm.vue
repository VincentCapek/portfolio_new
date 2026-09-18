<template>
  <div id="tl-contact-form" class="tl-form mt-4 mt-md-0">
    <form class="contact-form" @submit.prevent="onSubmit">
      <div class="form-floating mb-3">
        <p>
          <span class="form-control-wrap">
            <input v-model.trim="form.name" class="form-control" aria-required="true" placeholder="Name" type="text"
              name="your-name" autocomplete="name" required minlength="3" maxlength="255" />
          </span>
        </p>
      </div>

      <div class="form-floating mb-3">
        <p>
          <span class="form-control-wrap">
            <input v-model.trim="form.email" class="form-control" aria-required="true" placeholder="Email Address"
              type="email" name="your-email" autocomplete="email" required />
          </span>
        </p>
      </div>

      <div class="form-floating mb-3">
        <p>
          <span class="form-control-wrap">
            <input v-model.trim="form.phone" class="form-control" aria-required="false" placeholder="Phone Number"
              type="tel" name="your-phone" autocomplete="tel" />
          </span>
        </p>
      </div>

      <div class="form-floating mb-3">
        <p>
          <span class="form-control-wrap">
            <input v-model.trim="form.company" class="form-control" aria-invalid="false"
              placeholder="Company / Organization (optional)" type="text" name="company" autocomplete="organization" />
          </span>
        </p>
      </div>

      <div class="form-group mb-3">
        <p>
          <label class="form-label">This is about:</label>
          <br />
          <span class="form-control-wrap">
            <span class="wpcf7-form-control wpcf7-radio">
              <span class="wpcf7-list-item first">
                <label>
                  <input v-model="form.reason" type="radio" name="reason" value="Job opportunity" />
                  <span class="wpcf7-list-item-label">Job opportunity</span>
                </label>
              </span>

              <span class="wpcf7-list-item">
                <label>
                  <input v-model="form.reason" type="radio" name="reason" value="Freelance / Contract mission" />
                  <span class="wpcf7-list-item-label">Freelance / Contract mission</span>
                </label>
              </span>

              <span class="wpcf7-list-item last">
                <label>
                  <input v-model="form.reason" type="radio" name="reason" value="Other" />
                  <span class="wpcf7-list-item-label">Other</span>
                </label>
              </span>
            </span>
          </span>
        </p>
      </div>

      <div class="form-floating mb-3">
        <p>
          <span class="form-control-wrap">
            <textarea v-model.trim="form.message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea"
              aria-invalid="false" placeholder="Message" name="message" required minlength="10" />
          </span>
        </p>
      </div>

      <div>
        <p>
          <input class="form-submit" type="submit" :value="loading ? 'Sending…' : 'Submit Message'"
            :disabled="loading" />
        </p>

        <p v-if="success" class="mt-2" style="opacity: 0.9">✅ Message sent. I'll get back to you soon.</p>
        <p v-else-if="errorMsg" class="mt-2" style="opacity: 0.9">❌ {{ errorMsg }}</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  reason: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const errorMsg = ref<string | null>(null)

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.reason = ''
  form.message = ''
}

async function onSubmit() {
  loading.value = true
  success.value = false
  errorMsg.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })

    success.value = true
    resetForm()
  } catch (err: any) {
    errorMsg.value =
      err?.data?.message ||
      err?.statusMessage ||
      'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
