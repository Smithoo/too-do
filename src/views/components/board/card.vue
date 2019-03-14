<template>
    <div class="card">
        <h6 class="card-title">
            <ellipsis-text>{{ card.title }}</ellipsis-text>
        </h6>
        <div v-if="card.desc" class="card-desc">
            <ellipsis-text>{{ card.desc }}</ellipsis-text>
        </div>
        <div v-if="this.card.url" class="card-url">
            <a target="_blank" rel="noopener noreferrer" :href="refinedUrl">
                <button type="button">
                    <i class="material-icons md-12">link</i>
                </button>
                <div class="card-url-text">
                    <ellipsis-text>{{ card.url }}</ellipsis-text>
                </div>
            </a>
        </div>
        <div v-if="this.card.tags && this.card.tags.length" class="card-tags">
            <tag
                v-for="tag in card.tags"
                :key="tag.label"
                :color="tag.color">
                {{ tag.label }}
            </tag>
        </div>
    </div>
</template>

<script>
import { urlUtil } from '@/utils';
import EllipsisText from '@/views/common/ellipsis-text.vue';
import Tag from '@/views/common/tag.vue';

export default {
    components: {
        EllipsisText,
        Tag,
    },
    props: ['card'],
    computed: {
        refinedUrl() {
            return urlUtil.refineUrl(this.card.url);
        },
    },
};
</script>

<style scoped>
.card {
    padding: 15px 12px;
    position: relative;
    box-shadow: 2px 2px 3px #dfdfdf;
    background-color: #fff;
    margin-bottom: 8px;
}
.card.on {
    border: 1px solid #3070ff;
}
.card-title {
    font-size: 14px;
    color: #333333;
    line-height: 1.5;
}
.card-desc {
    font-size: 13px;
    color: #888888;
    margin-top: 10px;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    max-height: 45px;      /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
}
.card-url {
    position: relative;
    margin-top: 8px;
}
.card-url a {
    color: #6d6d6d;
    font-size: 12px;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    max-height: 24px;      /* fallback */
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
}
.card-url:hover a {
    text-decoration: underline;
}
.card-url button {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #dddddd;
}
.card-url .card-url-text {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 26px;
    box-sizing: border-box;
    width: 100%;
}
.card-url .card-url-text span {
    position: relative;
    top: 1px;
}
.card-url:hover button {
    background-color: #7d7d7d;
    border: 1px solid #7d7d7d;
}
.card-url i {
    position: relative;
    top: 2px;
}
.card-url:hover i {
    color: #ffffff;
}
.card-tags {
    margin-top: 10px;
}
.card-context-btn {
    position: absolute;
    top: 12px;
    right: 15px;
    z-index: 30;
}
.card-context-menu {
    z-index: 50;
}
</style>
