---
sidebar: false
prev: false
next: false
layoutClass: nav-layout
---


<script setup>
import {data} from '../.vitepress/theme/data/sites.data.ts'
import NavLinks from '../.vitepress/theme/components/NavLinks.vue'
</script>



<style src="/.vitepress/theme/styles/nav.css"> </style>
<VIcon slut="github"></VIcon>

<NavLinks v-for="{title, items} in data" :title="title" :items="items" />


