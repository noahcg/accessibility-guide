import "tailwindcss/tailwind.css"
import Headings from '../components/Headings.vue'

export default {
  title: 'Semantics/ARIA',
}

export const label = () => ({
  components: { Headings },
  template: '<headings></headings>'
})

export const labelledby = () => ({
    components: { Headings },
    template: '<headings></headings>'
  })
