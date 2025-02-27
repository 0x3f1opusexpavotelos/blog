---
title: Env Api
date: 2025-02-13
ogpImage: /ogp-image/increasing-vites-potential-with-the-environment-api.png
---

<script setup lang="ts">
import { defineClientComponent, useData } from 'vitepress'

const { isDark } = useData()
const LineChart = defineClientComponent(() => {
  return import('../.vitepress/theme/components/charts/LineChart.vue')
})
</script>




## JS env api <i class="nf nf-cod-chip"></i>

<figure>
<LineChart :height="300" :data="{
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Node.js',
        backgroundColor: '#417e38',
        borderColor: '#417e38',
        data: [80.1, 71.5, 70.9, 74.3],
      },
      {
        label: 'Deno',
        backgroundColor: '#70ffaf',
        borderColor: '#70ffaf',
        data: [5.2, 5.6, 8.5, 11.9],
      },
      {
        label: 'Bun',
        backgroundColor: '#e8c98c',
        borderColor: '#e8c98c',
        data: [,,3.2, 17.4],
      },
      {
        label: 'Vercel Edge Runtime',
        backgroundColor: isDark ? '#ffffff' : '#000000',
        borderColor: isDark ? '#ffffff' : '#000000',
        data: [,,10.4, 15.8],
      },
      {
        label: 'Cloudflare Workers',
        backgroundColor: '#f63',
        borderColor: '#f63',
        data: [,,7.5, 10.6],
      },
    ],
  }" :options="{
    scales: {
      y: {
        title: {
          display: true,
          text: 'Usage (%)',
        },
        min: 0,
      },
    },
  }" />
</figure>


<EmbedXPost id="1893107724688265640"  >
Toji                                          Satoru
</EmbedXPost>

