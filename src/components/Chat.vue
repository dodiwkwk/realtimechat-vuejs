<template>
  <div class="container">
    <h4 class="teal-text">Chat Room</h4>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.time }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <Message :name="name"></Message>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    Message
  },
  data () {
    return {
      messages: []
    }
  },
  created () {
    let ref = db.collection('messages').orderBy('time')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added'){
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            time: moment(doc.data().time).startOf(doc.data().time).fromNow()  
          })
        }
      })
    })
  }
}
</script>

<style>
  .time {
    display: block;
    font-size: 0.8em;
  }
  .messages {
    max-height: 300px;
    overflow: auto;
  }
  .messages::-webkit-scrollbar {
    width: 3px;
  }
  .messages::-webkit-scrollbar-track {
    background: #ddd;
  }
  .messages::-webkit-scrollbar-thumb {
    background: #aaa;
  }
</style>
