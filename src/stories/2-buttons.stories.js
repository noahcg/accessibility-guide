import MyButton from '../components/MyButton.vue'
import MyLink from '../components/Links.vue'
import "tailwindcss/tailwind.css"

export default {
  title: 'Semantics/Links and Buttons',
}

export const overview = () => ({
  template: `<div class="container mx-auto p-9">
  <h1 class="font-bold mb-9 text-3xl">Links and Buttons</h1>
  <p class="mb-9">Description</p>
</div>`
})

export const buttons = () => ({
  components: { MyButton },
  template: `<div class="container mx-auto p-9">
  <h1 class="font-bold mb-9 text-3xl">Buttons</h1>
  <p class="mb-9">Description</p>
  <my-button>Hello Button</my-button>
</div>`
})

export const links = () => ({
  components: { MyLink },
  template: `<div class="container mx-auto p-9">
  <h1 class="font-bold mb-9 text-3xl">Links</h1>
  <p class="mb-9">Description</p>
  <my-link href="https://www.google.com">Anchor Tag</my-link>
</div>`
})
