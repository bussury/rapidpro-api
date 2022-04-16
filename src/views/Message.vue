<template>
  <main>
    <div
      class="px-4 py-6 mt-10  sm:px-0 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <div class="sm:text-center lg:text-left">
   
   
        
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'
  useHead({
      title: 'Vite:about ',
      meta: [
      {
        name: 'description',
        content: 'vite about system',
      }]
    })

  const createApi = (url) => {
      return new Proxy({}, {
        get(target, key) {
          return async function(id = "") {
            const response = await fetch(`${url}/${key}/${id}`)
            if (response.ok) {
              return response.json();
            }
            return Promise.resolve({ error: "Malformed Request" })
          }
        }
      })
 }
 let api =  createApi('http://localhost:8000/api/v2/',{
   headers: {
    'User-Agent': 'xyz',
    'Authorization': `Token 5ccd6fb0ff0a032166f45db35009ebf90aca16fd`
  },
  mode: 'no-cors',
 })

 console.log(api.messages())
</script>
