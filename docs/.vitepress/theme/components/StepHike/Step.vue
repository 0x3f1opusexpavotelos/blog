<!-- Step.vue -->
<template>
    <div class="step-container">
      <div class="step-line">
        <div class="step-line-inner"></div>
      </div>
      <div class="step-number-container">
        <div class="step-number">{{ step }}</div>
      </div>
      <div class="step-content">
        <slot></slot>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'Step',
    props: {
      step: {
        type: [Number, String],
        required: true
      },
      title: {
        type: String,
        default: ''
      }
    },
    inject: ['stepHike']
  }
  </script>

  <style>
  .step-container {
    position: relative;
    padding-bottom: 2rem;
  }

  .step-container:last-child .step-line-inner {
    background-color: transparent;
  }

  .step-line {
    position: absolute;
    width: 1px;
    left: 11px;
    padding-top: 0.25rem;
    height: 100%;
  }

  .step-line-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0.25rem 0;
    background-color: #e2e8f0; /* 边框控制颜色 */
  }

  .step-number-container {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .step-number {
    border: 1px solid #e2e8f0;
    background-color: #f7fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
    color: #2d3748;
    font-weight: normal;
    font-family: monospace;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .step-content {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 3rem;
  }

  @media (min-width: 1024px) {
    .step-content {
      grid-template-columns: repeat(12, 1fr);
      gap: 2.5rem;
      margin-left: 0;
    }
  }
  </style>
