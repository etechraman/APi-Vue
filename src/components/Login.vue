<template>
  <div id="login">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Login Page
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <LoginForm />
        </div>
        <div class="column"></div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from "./../components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
