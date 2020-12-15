import Headings from '../components/Headings.vue'
import "tailwindcss/tailwind.css"

export default {
  title: 'Javascript/Asynchronus',
}

export const contentLoading = () => ({
  components: { Headings },
  template: '<div>Test<headings></headings></div>'
})
