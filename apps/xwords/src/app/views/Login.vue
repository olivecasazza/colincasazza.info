<script lang="ts">
import { vxm } from '@app/store';
import useVuelidate, { ErrorObject, Validation } from '@vuelidate/core';
import { email, helpers, minLength, required } from '@vuelidate/validators';
import { ValidationError } from 'schema-utils';
import { Options, Vue } from 'vue-class-component';
import { useRouter } from 'vue-router';

interface ValidationState {
  $dirty: false; // validations will only run when $dirty is true
  $touch: () => void; // call to turn the $dirty state to true
  $reset: () => void; // call to turn the $dirty state to false
  $errors: {
    $message: string;
    $params: unknown;
    $pending: boolean;
    $invalid: boolean;
  }[]; // contains all the current errors { $message, $params, $pending, $invalid }
  $error: false; // true if validations have not passed
  $invalid: false; // as above for compatibility reasons
  // there are some other properties here, read the docs for more info
}

@Options({
  validations: {
    form: {
      email: {
        required: helpers.withMessage('email is required', required),
        email: helpers.withMessage('invalid email address', email),
      },
      password: {
        required: helpers.withMessage('password is required', required),
        min: helpers.withMessage(
          'password must be > 8 characters',
          minLength(8)
        ),
      },
    },
  },
})
export default class Login extends Vue {
  router = useRouter();
  isLoading = false;
  form = {
    email: '',
    password: '',
    apiFailing: false,
  };
  v$: Validation = useVuelidate() as unknown as Validation;

  get firstError() {
    const errors = (this.v$ as unknown as ValidationState).$errors;
    if (errors.length > 0)
      return (errors[0]['$message'] as string).toLowerCase();
    return '';
  }

  async logIn() {
    this.isLoading = true;
    this.form.apiFailing = false;
    try {
      const { displayName } = await vxm.user.logIn({
        email: this.form.email,
        password: this.form.password,
      });
      await this.router.push({
        name: 'user',
        params: { displayName },
      });
    } catch (error) {
      const customValidationError: ErrorObject = {
        $message:
          'Error encountered while logging in with email and password. please check credentials and try again.',
        $propertyPath: '',
        $property: '',
        $validator: '',
        $params: {},
        $pending: false,
        $response: undefined,
        $uid: '',
      };
      this.v$.$errors.push(customValidationError);
    }
    this.isLoading = false;
  }

  async goToSignUp() {
    await this.router.push('signup');
  }
}
</script>

<template>
  <form class="app-view-port w-fit h-fit text-white" @submit.prevent="onSubmit">
    <div class="app-view-port">login</div>
    <!-- Email -->
    <div class="app-view-port">
      <label class="form-label" for="">email</label>
      <input v-model="v$.form.email.$model" class="form-input" type="email" />
    </div>
    <!-- password -->
    <div class="app-view-port">
      <label class="form-label" for="">password</label>
      <input
        v-model="v$.form.password.$model"
        class="form-input"
        type="password"
      />
    </div>
    <!-- errors -->
    <div v-if="firstError" class="input-errors app-view-port">
      <div class="error-msg">
        {{ firstError }}
      </div>
    </div>
    <button
      class="app-view-port text-white hover:link"
      :disabled="v$.form.$invalid"
      @click="logIn()"
    >
      login
    </button>
    <button class="app-view-port text-white hover:link" @click="goToSignUp()">
      sign up
    </button>
    <div v-if="isLoading" class="app-view-port">
      <div class="loading-bar"></div>
    </div>
  </form>
</template>

<style lang="postcss">
.error-msg {
  @apply text-secondary-400;
}
.form-label {
  @apply text-white p-0;
}
.form-input {
  @apply text-black w-full;
}
</style>
