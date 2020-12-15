import "tailwindcss/tailwind.css"

export default {
  title: 'Welcome/Introduction',
}

export const purpose = () => ({
  template: `<div class="container mx-auto p-6">
    <h1 class="font-bold mb-6 text-3xl">Introduction</h1>
    <p>The purpose of this document is to provide documentation with examples for maintaining compliance with the WCAG 2.1</p>
  </div>`
})
