<template>
    <div class="email-item">
        <input type="checkbox" name="select" id=""> <span class="title">
            {{title}}
        </span>
        <IconStar />
    </div>
</template>

<script lang="ts">
import IconStar from "./icons/IconStar.vue";
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "Alert",
        },
    },
    components: { IconStar }
};
</script>

<style>
div.email-item {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: white;
    margin-top: 10%;
    padding: 20px;
    border-radius: 7.5px;
    box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    -webkit-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
    -moz-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
}

div.email-item input {
    margin-right: 20px;
}
div.email-item span.title {
    /* flex: 1; */
    display: inline-block;
    margin:0 25px;
}

svg {
    position: relative;
    right: 0;
    float: right;
}
</style>