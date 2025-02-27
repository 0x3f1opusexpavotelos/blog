<!-- StepHike.vue -->
<template>
    <div class="step-hike">
      <slot></slot>
    </div>
  </template>

  <script>
  export default {
    name: 'StepHike',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    provide() {
      return {
        stepHike: this
      }
    }
  }
  </script>

  <style>
  .step-hike {
    padding: 2rem 0;
  }
  </style>
