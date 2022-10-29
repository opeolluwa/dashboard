<template>
    <nav>
        <ol class="breadcrumb">
            <li v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb__item">
                <button class="btn btn-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
                    {{ crumb }}
                </button>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
export default {
    name: "AppBreadCurmb",
    props: {
        crumbs: {
            type: Array,
            required: true,
        },
    },
    methods: {
        isLast(index: number) {
            return index === this.crumbs.length - 1;
        },
        selected(crumb: unknown) {
            this.$emit('selected', crumb);
        },
    },
};
</script>
 
<style scoped>
.breadcrumb {
    font-size: 13px;
    display: flex;
    /* gap: 5px; */
    display: none;
}

.breadcrumb .breadcrumb__item::after {
    content: "/";
    margin-right: 5px;
}
</style>