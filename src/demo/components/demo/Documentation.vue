<template>
  <div>
    <ul class="dfdemo__toc">
      <li><a href="#doc-field-types">Field Types Overview</a></li>
      <li><a href="#doc-validation">Validation System</a></li>
      <li><a href="#doc-styling">Custom Styling</a></li>
      <li><a href="#doc-submit">Manual vs Auto Submit</a></li>
      <li><a href="#doc-backend-errors">Backend Error Injection</a></li>
    </ul>
    <!-- 📌 Field Types Overview -->
    <div id="doc-field-types">
      <h3 class="dfdemo__section-title">Field Types Overview</h3>
      <p class="dfdemo__section-desc">
        The form system supports all major input types:
        <br />
        <strong>Text, Email, Number, Password, Textarea, Select, Radio, Multi-Select, Date/Time pickers.</strong>
        <br />
        Define your fields using the `FieldType` class and control everything via schema.
      </p>
    </div>

    <!-- 📌 Validation System -->
    <div id="doc-validation">
      <h3 class="dfdemo__section-title">Validation System</h3>
      <p class="dfdemo__section-desc">
        Add validations like <code>required()</code>, <code>minLength()</code>, <code>sameAs()</code>, or custom functions.
        <br />
        Use <code>ValidationSetup</code> to attach rules directly in your field schema. Everything is Vuelidate-powered — no setup needed.
      </p>
    </div>

    <!-- 📌 Custom Styling -->
    <div id="doc-styling">
      <h3 class="dfdemo__section-title">Custom Styling</h3>
      <p class="dfdemo__section-desc">
        Override field classes globally or per field. Control label color, input padding, border style, dropdown appearance and more.
        <br />
        Use <code>updateStyle()</code> on your field or on the form-wide schema.
      </p>
    </div>

    <!-- 📌 Manual vs Auto Submit -->
    <div id="doc-submit">
      <h3 class="dfdemo__section-title">Manual vs Auto Submit</h3>
      <p class="dfdemo__section-desc">
        Use <code>data.updateSubmitButton(true/false)</code> to toggle internal submit button.
        <br />
        Handle form submission manually using <code>ref</code> and call <code>.handleSubmit()</code> when needed.
      </p>
    </div>

    <!-- 📌 Backend Error Injection -->
    <div id="doc-backend-errors">
      <h3 class="dfdemo__section-title">Backend Error Injection</h3>
      <p class="dfdemo__section-desc">
        Show server-side validation errors by calling <code>data.setErrors({...})</code>.
        <br />
        Match your error keys to each field’s <code>forType</code> to display inline messages instantly.
      </p>
    </div>
    <!-- 📌 End of Documentation -->
    <p class="dfdemo__section-desc" style="margin-top: 2em; font-style: italic;">
      More detailed documentation coming soon.<br />
      For now, refer to the
      <a href="https://github.com/jubayer11/vue-dynamic-form-builder" target="_blank" class="dfdemo__author">
        GitHub README
      </a>
      for complete setup and examples.
    </p>

  </div>

</template>
<style scoped>
/* ====== Documentation Section ====== */
.dfdemo__toc {
  background: #f0f4f8;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 1.2em;
  margin: 2em 0 2.5em 0;
  box-shadow: 0 2px 8px rgba(30,30,60,0.06);
}
.dfdemo__toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dfdemo__toc li {
  margin-bottom: 0.7em;
}
.dfdemo__toc a {
  color: #2563eb;
  text-decoration: none;
  font-size: 1.05em;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}
.dfdemo__toc a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.dfdemo__section-title {
  font-size: 1.45em;
  color: #334155;
  margin-top: 1.8em;
  margin-bottom: 0.3em;
  font-weight: 600;
}

.dfdemo__section-desc {
  color: #6b7280;
  font-size: 1.05em;
  margin-bottom: 1.5em;
  line-height: 1.65;
}

.dfdemo__section-desc code {
  background: #f3f4f6;
  padding: 0.1em 0.4em;
  border-radius: 6px;
  font-size: 0.95em;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  color: #374151;
}

.dfdemo__section-desc strong {
  color: #111827;
  font-weight: 600;
}

@media (max-width: 640px) {
  .dfdemo__section-title {
    font-size: 1.2em;
  }
  .dfdemo__section-desc {
    font-size: 1em;
  }
  .dfdemo__toc a {
    font-size: 1em;
  }
}
</style>

