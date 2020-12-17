import Headings from '../components/Headings.vue'

export default {
  title: 'Semantics/Headings',
}

export const otherThing = () => ({
  components: { Headings },
  template: `<div class="container mx-auto p-9">
    <h1 class="font-bold mb-9 text-3xl">Headings</h1>
    <headings></headings>
  </div>`
})
