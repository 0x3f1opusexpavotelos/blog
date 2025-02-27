<!-- StepCode.vue -->
<template>
    <div class="step-code" className="col-span-7 not-prose">
      <slot></slot>
    </div>
  </template>

  <script>
  export default {
    name: 'StepCode'
  }
  </script>

  <style>
  .step-code {
    grid-column: span 7 / span 7;
  }

  /* 重置可能来自markdown处理器的样式 */
  .step-code pre {
    margin: 0;
  }
  </style>
