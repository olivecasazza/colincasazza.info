<script lang="ts">
import { vxm } from '@app/store';
import { Options, Vue } from 'vue-class-component';
import { useRouter } from 'vue-router';
import { required, email, minLength } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

@Options({
  components: {},
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        min: minLength(6),
      },
    },
  },
})
export default class Login extends Vue {
  form = {
    email: '',
    password: '',
  };

  router = useRouter();
  v$ = useVuelidate();

  async login() {
    const { displayName } = await vxm.user.logIn({
      email: this.form.email,
      password: this.form.password,
    });
    await this.router.push({
      name: 'user',
      params: { displayName: displayName },
    });
  }
}
</script>

<template>
  <form class="app-view-port w-fit h-fit" @submit.prevent="onSubmit">
    <!-- Email -->
    <div class="app-view-port" :class="{ error: v$.form.email.$errors.length }">
      <label class="form-label app-view-port" for="">Email</label>
      <input
        class="form-input"
        placeholder="Enter your username"
        type="email"
        v-model="v$.form.email.$model"
      />
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <!-- error message -->
      <div
        class="input-errors app-view-port"
        v-for="(error, index) of v$.form.email.$errors"
        :key="index"
      >
        <div class="error-msg">{{ error.$message.toLowerCase() }}</div>
      </div>
    </div>

    <!-- password -->
    <div
      class="app-view-port"
      :class="{ error: v$.form.password.$errors.length }"
    >
      <label class="form-label m-1" for="">Password</label>
      <input
        class="form-input"
        placeholder="Enter your password"
        type="password"
        v-model="v$.form.password.$model"
      />
      <div class="pre-icon os-icon os-icon-fingerprint"></div>
      <!-- error message -->
      <div
        class="input-errors"
        v-for="(error, index) of v$.form.password.$errors"
        :key="index"
      >
        <div class="error-msg">{{ error.$message.toLowerCase() }}</div>
      </div>
    </div>

    <!-- Submit Button -->
    <button class="app-view-port text-white hover:link" :disabled="v$.form.$invalid">
      Login
    </button>
  </form>
</template>

<style lang="postcss">
.error-msg {
  @apply text-secondary-400;
}
.form-label {
  @apply text-white p-1;
}
.form-input {
  @apply text-black;
}
</style>

<!-- <template>
  <div class="w-screen h-screen app-view-port text-white">
    <div class="w-1/3 h-1/3">
      <div class="p-2 text-lg text-highlight-400">login</div>
      <div class="flex flex-row app-view-port p-1">
        <div class="app-view-port w-24">email</div>
        <input
          v-model="email"
          required
          type="email"
          placeholder="email"
          class="border-r-0 text-black"
        />
      </div>
      <div class="flex flex-row app-view-port p-1">
        <div class="app-view-port w-24">password</div>
        <input
          v-model="password"
          required
          type="password"
          placeholder="password"
          class="border-r-0 text-black"
        />
      </div>
      <div class="flex flex-row app-view-port p-1">
        <button
          class="app-view-port w-24 hover:link text-primary-400 text-left"
          @click="login()"
        >
          login
        </button>
        <button
          class="app-view-port w-24 hover:link text-secondary-400 text-left"
          @click="login()"
        >
          sign up
        </button>
      </div>
    </div>
  </div>
</template> -->
