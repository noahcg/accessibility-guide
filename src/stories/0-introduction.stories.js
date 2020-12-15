import "@tailwindcss/postcss7-compat/base.css"
import "tailwindcss/tailwind.css"

export default {
  title: 'Welcome/Introduction',
}

export const purpose = () => ({
  template: `<div class="container mx-auto p-9">
    <h1 class="font-bold mb-6 text-5xl">Introduction</h1>
    <p class="mb-4 text-xl w-full md:w-3/4">The purpose of this document is to provide designers and developers with a deeper understanding of how to write accessible code. This site is completely extendable is inteded to be a living document.</p>
    <p class="text-xl w-full md:w-3/4">Where ever possible I will try to provide the specific WCAG 2.1 success criteria and rating level as it relates to each element.</p>
  </div>`
})
