<script setup lang="ts">
import { data as posts } from "../data/posts.data";

</script>

<template>
    <ul>
        <li v-for="{ title, url, date, excerpt } of posts" :key="url">
            <article>
                <time :datetime="date.dateString" class="date"
                    >{{ date.string }}
                </time>
                <h2 class="title">
                    <a :href="url"> {{ title }}</a>
                </h2>
                <div v-if="excerpt" v-html="excerpt"></div>
            </article>
        </li>
    </ul>
</template>

<style scoped>
li::before {
    content: none !important;
}

.date {
    font-size: 14px;
}

.title {
    border: none;
    margin-block-start: 0;
    margin-block-end: 0;
}
</style>
