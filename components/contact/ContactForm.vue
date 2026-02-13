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

      <div class="form-group mb-3">
        <p>
          <label class="form-label">I'm interested in:</label>
          <br />
          <span class="form-control-wrap">
            <span class="wpcf7-form-control wpcf7-radio">
              <span class="wpcf7-list-item first">
                <label>
                  <input v-model="form.interest" type="radio" name="interest" value="Website / Landing page" />
                  <span class="wpcf7-list-item-label">Website / Landing page</span>
                </label>
              </span>

              <span class="wpcf7-list-item">
                <label>
                  <input v-model="form.interest" type="radio" name="interest" value="Web app / SaaS" />
                  <span class="wpcf7-list-item-label">Web app / SaaS</span>
                </label>
              </span>

              <span class="wpcf7-list-item">
                <label>
                  <input v-model="form.interest" type="radio" name="interest" value="API / Backend" />
                  <span class="wpcf7-list-item-label">API / Backend</span>
                </label>
              </span>

              <span class="wpcf7-list-item last">
                <label>
                  <input v-model="form.interest" type="radio" name="interest" value="Maintenance / Improvements" />
                  <span class="wpcf7-list-item-label">Maintenance / Improvements</span>
                </label>
              </span>
            </span>
          </span>
        </p>
      </div>

      <div class="form-group mb-3">
        <p>
          <label class="form-label">My budget is:</label>
          <br />
          <span class="form-control-wrap" data-name="budget">
            <span class="wpcf7-form-control wpcf7-radio">
              <span class="wpcf7-list-item first">
                <label>
                  <input v-model="form.budget" type="radio" name="budget" value="< 2k" />
                  <span class="wpcf7-list-item-label">&lt; 2k</span>
                </label>
              </span>

              <span class="wpcf7-list-item">
                <label>
                  <input v-model="form.budget" type="radio" name="budget" value="2-5k" />
                  <span class="wpcf7-list-item-label">2-5k</span>
                </label>
              </span>

              <span class="wpcf7-list-item">
                <label>
                  <input v-model="form.budget" type="radio" name="budget" value="5-10k" />
                  <span class="wpcf7-list-item-label">5-10k</span>
                </label>
              </span>

              <span class="wpcf7-list-item">
                <label>
                  <input v-model="form.budget" type="radio" name="budget" value="10-15k" />
                  <span class="wpcf7-list-item-label">10-15k</span>
                </label>
              </span>

              <span class="wpcf7-list-item last">
                <label>
                  <input v-model="form.budget" type="radio" name="budget" value="> 20k" />
                  <span class="wpcf7-list-item-label">&gt; 20k</span>
                </label>
              </span>
            </span>
          </span>
        </p>
      </div>

      <div class="form-floating mb-3">
        <p>
          <span class="form-control-wrap">
            <input v-model.trim="form.timeline" class="form-control" aria-invalid="false"
              placeholder="What is your timeline?" type="text" name="timeline" autocomplete="off" />
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
  interest: '',
  budget: '',
  timeline: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const errorMsg = ref<string | null>(null)

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.interest = ''
  form.budget = ''
  form.timeline = ''
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
