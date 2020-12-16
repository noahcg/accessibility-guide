import MyButton from '../components/MyButton.vue'
import Wink from '../components/Wink.vue'
import Wcag from '../components/Wcag.vue'
import "tailwindcss/tailwind.css"
import "../assets/css/styles.css"

export default {
  title: 'Semantics/Interactive Elements',
}

export const linksAndButtons = () => ({
  components: { MyButton, Wink, Wcag },
  template: `
  <div class="container mx-auto p-9">
    <h1 class="font-bold mb-6 text-5xl">Links and Buttons</h1>
    <p class="mb-4 text-lg w-full">Links and buttons are NOT interchangeable. The following are rules we should all try to follow:</p>
    <ul class="mb-12 list-disc pl-5">
      <li>Links and buttons SHOULD be designated semantically according to their functions.</li>
      <li>Links MUST be semantically designated as such.</li>
      <li>Links MUST be visually distinguishable from surrounding text.</li>
      <li>All focusable elements MUST have a visual focus indicator when in focus.</li>
    </ul>
    <div class="mb-8">
      <h2 class="font-bold mb-4 text-lg">Links</h2>
      <div class="criteria-container mb-4 p-3">
        <ul class="mb-4 list-disc pl-5">
          <li>A link  needs to have discernable link text</li>
        </ul>
        <pre><code>&lt;a href='#'>This is discernable link text&lt;/a></code></pre>
        <ul class="mb-4 list-disc pl-5">
          <li>For links that wrap around images, you need to use an ARIA attribute to create the discernable link text.</li>
        </ul>
        <pre><code>&lt;a href='#' aria-label="discernable text">&lt;img src="..." alt="" />&lt;/a></code></pre>
        <wcag href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context">2.4.4 Link Purpose (In Context) (Level A)</wcag>
        <hr class="block mx-auto mt-8 h-0.5 bg-black" />
      </div>
      <div class="criteria-container mb-4 p-3">
        <ul class="mb-4 list-disc pl-5">
          <li>Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.</li>
        </ul>
        <pre><p><wink href="#" styles="inline-block hover:underline text-blue-600">Sample Link with Hover</wink> | <wink href="#" styles="inline-block hover:underline ring-2 ring-blue-600 text-blue-600">Sample Link with Focus</wink></p></pre>
        <wcag href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible (Level AA)</wcag>
        <hr class="block mx-auto mt-8 h-0.5 bg-black" />
      </div>
    </div>
    <div>
      <h2 class="font-bold mb-4 text-lg">Buttons</h2>
      <div class="criteria-container mb-4 p-3">
        <p class="mb-4">Buttons are for creating interactions and are typically triggered with Javascript. A few things to note about buttons:</p>
        <ul class="mb-4 list-disc pl-5">
          <li>A button  needs to have discernable text</li>
          <li>A button inside a form has an implicit type="submit" (no need to add it).</li>
          <li>Other buttons should have a type="button" to avoid automagically submitting a form.</li>
          <li>A button receive keyboard focus by default (no need to add tabindex)</li>
          <li>A button respond with a click event to the Space key or Enter key</li>
          <li>A button can be disabled with the disabled attribute</li>
          <li>A button are communicated as buttons to screen readers (no need to add role="button")</li>
          <li>A button accept :focus, :hover, :active, :disabled styles</li>
        </ul>
        <pre><code>&lt;button type="button">This is discernable text&lt;/button>
&lt;button type="button">Show Messages &lt;img src="..." />&lt;/button>
&lt;button type="button">&lt;img src="..." alt="Show Messages" />&lt;/button></code></pre>
      </div>
    </div>
  </div>`
})
