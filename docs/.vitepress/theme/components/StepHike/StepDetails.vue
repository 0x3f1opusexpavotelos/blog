<!-- StepDetails.vue -->
<template>
    <div :class="['step-details', fullWidth ? 'step-details-full' : '']">
      <h3 class="step-details-title">{{ title }}</h3>
      <slot></slot>
    </div>
  </template>

  <script>
  export default {
    name: 'StepDetails',
    props: {
      title: {
        type: String,
        default: ''
      },
      fullWidth: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>

  <style>
  .step-details {
    margin-left: 3rem;
  }

  .step-details-title {
    margin-top: 0;
    color: #2d3748;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    .step-details {
      grid-column: span 5 / span 5;
      margin-left: 0;
    }

    .step-details-full {
      grid-column: span 12 / span 12;
    }
  }
  </style>
