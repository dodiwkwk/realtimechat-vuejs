<template>
  <form @submit.prevent="addMessage">
    <div class="input-field">
      <label for="message">Type your message</label>
      <input id="message" type="text" class="validate" name="message" v-model="message">
    </div>
    <small v-if="feedback" class="red-text">{{ feedback }}</small>
  </form>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Message',
  props: ['name'],
  data () {
    return {
      message: null,
      feedback: null
    }
  },
  methods: {
    addMessage () {
      if (this.message) {
        db.collection('messages').add({
          content: this.message,
          name: this.name,
          time: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.message = null
        this.feedback = null
      } else {
        this.feedback = 'Type your message for started chatting'
      }
    }
  }
}
</script>
