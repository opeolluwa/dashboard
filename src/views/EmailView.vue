<script lang="ts">
import EmailItem from "../components/EmailItem.vue";
import Fab from "../components/Fab.vue";
export default {
  name: "EmailView",
  components: { EmailItem, Fab },
};
</script>

<template>
  <EmailItem title="Re: charles@example.com"
    content="past compound cast solution observe word typical major thy smoke tone recently sport appropriate wherever feed discovery universe fall probably due dead me learn" />
  <EmailItem title="Invitation for interview"
    content="spell position ocean serve natural fly enter becoming worker heavy want divide fog lamp shells pilot white sold successful blind choice willing start alone" />
  <EmailItem title="Promotion"
    content="behind palace shelter raw sea means mathematics ball policeman value alphabet party fly machinery draw bit exercise church ants tune oldest wrote load direct" />

  <!--add new email fab-->
  <Fab />
</template>

<style scoped>

</style>
