<template>
  <div class="container">
    <div class="left">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
    <div class="right">
      <pre>
          <code>
    &lt;h1&gt;Heading 1&lt;/h1&gt;
    &lt;h2&gt;Heading 2&lt;/h2&gt;
    &lt;h3&gt;Heading 3&lt;/h3&gt;
    &lt;h4&gt;Heading 4&lt;/h4&gt;
    &lt;h5&gt;Heading 5&lt;/h5&gt;
    &lt;h6&gt;Heading 6&lt;/h6&gt;
            </code>
        </pre>
    </div>
    <div class="content">
      <h2>WCAG Criteria</h2>
      <ul>
        <li>
          <a href="https://www.w3.org/TR/WCAG21/#headings-and-labels"
            >2.4.6 Headings and Labels (Level AA)</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headings",
};
</script>

<style scoped>
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
}
</style>
