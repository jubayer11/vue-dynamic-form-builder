<template>
  <div class="dfdemo__container">

    <header class="dfdemo__header">
      <h1>Vue Dynamic Form Builder</h1>
      <p class="dfdemo__subtitle">
        Build dynamic, schema-driven forms with customizable layout, validation, and styling — with full developer control.<br>
        <small>Designed and developed by <a href="https://jubayerahmed.com/" target="_blank" class="dfdemo__author">Jubayer Ahmed</a></small>
      </p>
    </header>

    <main class="dfdemo__main">

      <nav class="dfdemo__toc">
        <ul>
          <li><a href="#section-1">1. Basic Prefilled Form</a></li>
          <li><a href="#section-2">2. Row/Column Form Layout</a></li>
          <li><a href="#section-3">3. Manual Submit & Actions</a></li>
          <li><a href="#section-4">4. Custom Field Styling</a></li>
          <li><a href="#section-5">5. Popup Form (Modal Dialog)</a></li>
          <li><a href="#section-6">6. Date and Time Picker Types</a></li>
          <li><a href="#section-docs">📚 Documentation</a></li>
        </ul>
      </nav>
      <!-- Demo Sections -->
      <section id="section-1" class="dfdemo__section">
        <h2 class="dfdemo__section-title">1. Basic Prefilled Form (with Validation)</h2>
        <p class="dfdemo__section-desc">
          Shows required fields, different field types, and prefilled data. Try submitting to see validation and backend error handling.
        </p>
        <DemoPrefilledForm />
      </section>

      <section id="section-2" class="dfdemo__section">
        <h2 class="dfdemo__section-title">2. Row/Column Form Layout</h2>
        <p class="dfdemo__section-desc">
          Fields arranged in a responsive two-column layout using utility classes.
        </p>
        <DemoRowForm />
      </section>

      <section id="section-3" class="dfdemo__section">
        <h2 class="dfdemo__section-title">3. Manual Submit & Custom Actions</h2>
        <p class="dfdemo__section-desc">
          The submit button and submission logic are handled outside the form component.
        </p>
        <DemoManualSubmitForm />
      </section>

      <section id="section-4" class="dfdemo__section">
        <h2 class="dfdemo__section-title">4. Custom Field Styling</h2>
        <p class="dfdemo__section-desc">
          Demonstrates custom background, label colors, field alignments, and dropdown style overrides.
        </p>
        <DemoCustomStyleForm />
      </section>

      <section id="section-5" class="dfdemo__section">
        <h2 class="dfdemo__section-title">5. Popup Form (Modal Dialog)</h2>
        <p class="dfdemo__section-desc">
          Opens a fully functional form inside a responsive modal popup. Try submitting or cancelling.
        </p>
        <DemoPopupForm />
      </section>

      <section id="section-6" class="dfdemo__section">
        <h2 class="dfdemo__section-title">6. Date and Time Picker Types</h2>
        <p class="dfdemo__section-desc">
          Explore every picker mode: <b>Date, Date+Time, Month, Time, Year, Week</b>.<br>
          Useful for real-world testing and UI flexibility.
        </p>
        <DemoDateForm />
      </section>

      <!-- 📚 Documentation Section -->
      <section id="section-docs" class="dfdemo__section">
          <h2 class="dfdemo__section-title">📚 Documentation</h2>
          <p class="dfdemo__section-desc">
            This section gives you a brief overview of the system’s capabilities.<br>
            For full details, see the README in the GitHub repository.
          </p>
        <Documentation/>
      </section>
    </main>

    <footer class="dfdemo__footer">
      <div class="footer-promo">
        📊 Also explore my
        <a href="https://github.com/jubayer11/vue-dynamic-table-builder" target="_blank" rel="noopener">
          Vue Dynamic Table Builder
        </a>
        — Create flexible, feature-rich tables with pagination, responsive columns, and deep style control.
      </div>

      <div class="dfdemo__branding">
        <a class="dfdemo__author" href="https://jubayerahmed.com/" target="_blank"> <strong>Jubayer Ahmed</strong> </a>
        <span>•</span>
        <small>Dynamic Systems, Clean Code</small><br />
        <small>Vue Dynamic Form Builder v1.0.10</small>
        <small>© 2025 All Rights Reserved</small><br />
        <small>See full documentation in <a href="https://github.com/jubayer11/vue-dynamic-form-builder" target="_blank">README.md</a></small>
      </div>
    </footer>

  </div>
</template>

<script setup>
/**
 * @file App.vue
 * @summary Demo + Minimal Documentation for Vue Dynamic Form Builder
 * @author Jubayer
 */

import DemoPrefilledForm from "@demo//components/demo/DemoPrefilledForm.vue";
import DemoRowForm from "@demo/components/demo/DemoRowForm.vue";
import DemoManualSubmitForm from "@demo/components/demo/DemoManualSubmitForm.vue";
import DemoCustomStyleForm from "@demo/components/demo/DemoCustomStyleForm.vue";
import DemoPopupForm from "@demo/components/demo/DemoPopupForm.vue";
import DemoDateForm from "@demo/components/demo/DemoDateForm.vue";
import Documentation from "@demo/components/demo/Documentation.vue";
</script>

<style>
html {
  scroll-behavior: smooth;
}
html, body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
<style scoped>
/* ====== Layout Styles ====== */
.dfdemo__container {
  max-width: 850px;
  margin: 0 auto;
  padding: 2.5em 1em;
  background: #f7fafc;
  border-radius: 18px;
  box-shadow: 0 6px 30px rgba(30,40,110,0.07);
  min-height: 100vh;
}

/* ====== Header ====== */
.dfdemo__header {
  text-align: center;
  margin-bottom: 2.5em;
}
.dfdemo__header h1 {
  font-size: 2.4em;
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 0.5em;
  letter-spacing: -0.01em;
}
.dfdemo__subtitle {
  font-size: 1.2em;
  color: #4b5563;
}
.dfdemo__subtitle small {
  display: block;
  font-size: 0.95em;
  margin-top: 0.5em;
  color: #64748b;
}
.dfdemo__author {
  color: #2563eb;
  text-decoration: none;
}
.dfdemo__author:hover {
  text-decoration: underline;
}

/* ====== Table of Contents (Demo & Docs) ====== */
.dfdemo__toc {
  background: #f0f4f8;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 1.2em;
  margin-bottom: 2.5em;
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
  font-size: 1.1em;
  font-weight: 500;
  transition: color 0.2s, text-decoration 0.2s;
}
.dfdemo__toc a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* ====== Sections ====== */
.dfdemo__main {
  display: flex;
  flex-direction: column;
  gap: 3em;
}
.dfdemo__section {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(30,30,60,0.09);
  padding: 1.8em 1.2em 2.2em 1.2em;
}
.dfdemo__section-title {
  font-size: 1.5em;
  color: #334155;
  margin-bottom: 0.3em;
  font-weight: 600;
}
.dfdemo__section-desc {
  color: #6b7280;
  font-size: 1.05em;
  margin-bottom: 1.2em;
  line-height: 1.6em;
}

/* ====== Footer Branding ====== */
.dfdemo__footer {
  margin-top: 4em;
  padding-top: 2em;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}
.dfdemo__branding {
  color: #64748b;
  font-size: 0.95em;
  animation: fadeIn 1s ease-out;
}
.dfdemo__branding strong {
  color: #2563eb;
  font-weight: 600;
}
.dfdemo__branding span {
  margin: 0 0.4em;
  color: #9ca3af;
}
.dfdemo__branding small {
  display: block;
  margin-top: 0.3em;
  font-size: 0.85em;
}

.footer-promo {
  margin: 1rem auto;
  max-width: 600px;
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.5;
}
.footer-promo a {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}
.footer-promo a:hover {
  text-decoration: underline;
}
/* ====== Animations ====== */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ====== Responsive ====== */
@media (max-width: 640px) {
  .dfdemo__container { padding: 1em 0.6em; }
  .dfdemo__section { padding: 1em 0.4em 1.4em 0.4em; }
  .dfdemo__header h1 { font-size: 1.7em; }
  .dfdemo__section-title { font-size: 1.2em; }
  .dfdemo__subtitle { font-size: 1em; }
}
</style>
