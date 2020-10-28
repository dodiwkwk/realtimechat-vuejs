<template>
    <div class="container">
        <div class="card">
          <div class="card-content valign-wrapper">
            <h4 class="teal-text">Chat App</h4>
            <small>Insert your name for started message</small>
              <div class="row mt-4">
                <form @submit.prevent="enterChat">
                    <div class="input-field col s10">
                      <i class="material-icons prefix">account_circle</i>
                      <input id="icon_prefix" type="text" class="validate" v-model="name" autocomplete="off">
                      <label for="icon_prefix">Your Name</label>
                    </div>
                    <div class="input-field col s2 mt-2">
                      <button class="btn-floating teal"><i class="material-icons">send</i></button>
                    </div>
                </form>
              </div>
              <small v-if="feedback" class="red-text">{{ feedback }}</small>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } })
        this.feedback = null
      } else {
        this.feedback = 'The name is required, please insert your name!'
      }
    }
  }
}
</script>

<style>
  .valign-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mt-4 {
    margin-top: 40px;
  }
  .mt-2 {
    margin-top: 25px;
  }
  .card {
    width: 600px;
    margin: 0 auto;
  }
</style>
