<template>
  <main>
    <div class="px-4 py-6   sm:px-0 ">
      <div class="sm:text-center lg:text-left">
        <div class="flex justify-center">
          <ul class="bg-white border border-gray-200 w-2/3 text-gray-900">
            <li v-for="(message, index) in messages" :key="index" class="px-6 py-2 border-b border-gray-200 w-full flex justify-between">
            <div class="text-sm px-6 text-center">
              {{message['urn']}}
            </div>
             <div class="text-center">
               {{message.text}}
             </div>
             <span class="text-center" >
              <img  :src="'api/' + message.media" v-if="message.media">
             </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'
useHead({
  title: 'Vite:message ',
  meta: [
    {
      name: 'description',
      content: 'vite message system',
    }]
})

const response = await fetch("/api/messages.json?folder=inbox", {
 headers: {
    Authorization: `Token 5ccd6fb0ff0a032166f45db35009ebf90aca16fd`
  },
  credentials: `include`,
}).then(response => response.json())

const messages = []
const results = await response.results
for (let i = 0; i < results.length ; i++){
  messages[i] = results[i]
  messages[i].urn = results[i]['urn'].replace('whatsapp:','') || results[i]['urn'].replace('tel:','')
  messages[i].media = !results[i]['media'] ? null : results[i]['media'].replace(/^(.+?):/,'')
}

</script>
