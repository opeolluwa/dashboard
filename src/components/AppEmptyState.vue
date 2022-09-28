<template>
    <div class="empty-state">
        <img src="@/assets/img/illustration/empty-state.svg" alt="empty state">
        <div>
            <h1>Oops!</h1>
            <p v-html="message"></p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "AppEmptyState",
    props: {
        message: {
            type: String,
            default: "No data found! <br/> will be displayed once you add them",
        },
    }
}
</script>


<style>
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    row-gap: 20px;
    text-align: center;
}

.empty-state img {
    width: 30%;
}

h1 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--default-red);
    line-height: 36px;
    margin-bottom: 10px;
}

.p {
    font-size: 24px;
    line-height: 26px;
    font-family: 'mulish', sans-serif;
}

/**--------------mobile screen navigation---------- */
@media screen and (max-width: 768px) {
    .empty-state img {
        width: 80%;
    }
}
</style>