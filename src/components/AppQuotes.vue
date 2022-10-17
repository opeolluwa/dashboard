<script lang="ts">
import quoteData from "./quote-data";
import { defineComponent } from "vue";
export default defineComponent({
  name: "QuotesComponent",
  data: () => ({
    // quoteData
  }),
  props: {
    //time in seconds to change quote
    duration: {
      type: Number,
      default: 15,
    },
  },
  computed: {
    timeOut() {
      return this.duration * 60 * 1000;
    },
  },
  mounted() {
    const duration = this.timeOut;
    // function Quotes(selector: string, duration: number = 15000) {
    //reference the parent element and create two child elements to hold the quote and author
    const parentElement = document?.querySelector("[data-quotes-container]");
    const quoteContainer = document?.createElement("div");
    const quoterContainer = document?.createElement("small");

    //generate the quote and append them to the elements
    const quoteIndex = Math.round((quoteData.length - 1) * Math.random());
    quoteContainer.innerHTML = quoteData[Number(quoteIndex)].quote;
    quoterContainer.innerHTML = quoteData[Number(quoteIndex)].quoter;

    //append the elements to the parent element
    parentElement?.appendChild(quoteContainer);
    parentElement?.appendChild(quoterContainer);

    //append styling the the children elements
    quoteContainer.classList.add("quote");
    quoterContainer.classList.add("quoter");

    function run() {
      //generate the quote and append them to the elements
      const quoteIndex = Math.round((quoteData.length - 1) * Math.random());
      quoteContainer.innerHTML = quoteData[Number(quoteIndex)].quote;
      quoterContainer.innerHTML = quoteData[Number(quoteIndex)].quoter;

      //append the elements to the parent element
      parentElement?.appendChild(quoteContainer);
      parentElement?.appendChild(quoterContainer);

      //animate node
      parentElement?.animate(
        [
          //keyframes
          { filter: "blur(5px)" },
          { opacity: 0 },
          { filter: "blur(0)" },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 1000,
          delay: 100,
          easing: "cubic-bezier(.55, .085, .68, .53)",
          fill: "both",
        }
      );
    }
    //animate node
    window.setInterval(run, duration);
  },
});
</script>

<template>
  <div data-quotes-container></div>
</template>

<style>
@import url("@/assets/quotes.css");
</style>
