import Wcag from '../components/Wcag.vue'
import "../assets/css/styles.css"

export default {
  title: 'Semantics/Forms',
}

export const inputFieldsAndLabels = () => ({
  components: { Wcag },
  template: `
  <div class="container mx-auto p-9">
    <h1 class="font-bold mb-6 text-5xl">Forms</h1>
    <p class="mb-4 text-lg w-full">Form information goes here. The following are rules we should all try to follow:</p>
    <ul class="mb-12 list-disc pl-5">
      <li>Something</li>
    </ul>
    <div class="mb-8">
      <h2 class="font-bold mb-4 text-lg">Input Fields and Labels</h2>
      <div class="criteria-container mb-4 p-3">
        <ul class="mb-4 list-disc pl-5">
          <li>Input fields need to have labels, even if the label is visually hidden</li>
          <li>Labels can to be associated with their corresponding fields with a "for" attribute</li>
        </ul>
        <pre><code>&lt;label for="name">Name:&lt;/label>&lt;input id="name" type="text" />

<label for="name">Name:</label><input class="p-1" id="name" type="text" />
</code></pre>
        <ul class="mb-4 list-disc pl-5">
          <li>Labels can be visually hidden as long as they are still associated to their corresponding input field for assistive technology support.</li>
        </ul>
        <pre><code>&lt;label class="visuallyhidden" for="name">Name:&lt;/label>&lt;input id="name" type="text" />

<label class="invisible" for="name">Name:</label><input class="p-1 px-3" id="name" type="text" placeholder="Name" /></code></pre>
        <ul class="mb-4 list-disc pl-5">
          <li>Labels can be applied directly to the input field using an ARIA attribute</li>
        </ul>
        <pre><code>&lt;input id="name" type="text" aria-label="Name" placeholder="Name" />

<input class="p-1 px-3" id="name" type="text" aria-label="Name" placeholder="Name" /></code></pre>
        <wcag href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.2.2 Labels or Instructions (Level A)</wcag>
        <hr class="block mx-auto mt-8 h-0.5 bg-black" />
      </div>
    </div>
  </div>`
})
