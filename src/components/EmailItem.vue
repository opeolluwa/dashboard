<template>
  <div class="email-item">
    <input type="checkbox" name="select" class="" />

    <div class="email-content">
      <div class="title">
        {{ title }}
      </div>
      <span class="content">
        {{ content }}
      </span>
    </div>
    <div class="email-controls">
      <Icon icon="mdi:star-outline" class="star-email" />
      <Icon icon="mdi:trash-can-outline" class="delete" />
      <Icon icon="mdi:dots-vertical" class="more-options" />
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Alert",
    },
    content: {
      type: String,
      required: true,
      default: "This is an example truncated email content...",
    },
  },
  components: { Icon },
  mounted() {
    /*  (function () {

      // Create variable for setTimeout
      var delay;

      // Set number of milliseconds for longPress
      var longPress = 1300;

      var emailItems = document.getElementsByClassName('email-item');
      var listItem;

      for (const item of emailItems) {

        item.addEventListener('mousedown', function (e) {
          // var _this = this;
          delay = setTimeout(check, longPress);

          function check() {
            _this.classList.add('is-selected');
          }

        }, true);

        listItem.addEventListener('mouseup', function (e) {
          // On mouse up, we know it is no longer a longPress
          clearTimeout(delay);
        });

        listItem.addEventListener('mouseout', function (e) {
          clearTimeout(delay);
        });

      }

    }()); */
  },
};
</script>

<style>
div.email-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: white;
  margin: 0.75rem 0;
  padding: 20px;
  border-radius: 7.5px;
  box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
}

.email-item div.email-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

div.email-item input {
  margin-right: 20px;
  cursor: pointer;
}

div.email-item div.title {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  margin: 0 25px;
  font-size: 18px;
  font-weight: 600;
  border-right: 1.5px solid var(--border-color);
  padding-right: 12px;
  text-align: left;
}

div.email-item span.content {
  text-align: left;
  width: 400px;
  color: var(--secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

div.email-item div.title::first-letter {
  text-transform: capitalize;
  cursor: pointer;
}

div.email-item svg {
  align-self: flex-end;
  cursor: pointer;
  color: var(--secondary);
}

div.email-item svg.delete:hover {
  color: var(--default-red);
}

div.email-item svg.star-email:hover {
  color: var(--default-yellow);
}

div.email-controls {
  display: grid;
  grid-template-columns: repeat(3, 25px);
  column-gap: 5px;
}

@media screen and (max-width: 768px) {
 /*  div.email-item input {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
      color: currentColor;
      width: 2.15em;
      height: 1.15em;
      border: 0.15em solid currentColor;
      border-radius: 0.15em;
      transform: translateY(-0.075em);
      /* width: 1rem; *
  } */

  div.email-item {
    column-gap: 5px;
    align-items: center;
  }

  .email-item div.email-content {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 7.5px;
    font-family: mulish;
    row-gap: 2px;
  }

  div.email-item div.title {
    font-size: 13.5px;
    width: 170px;
    border: none;
    padding: 0;
    margin: 0;
  }

  div.email-item span.content {
    width: 200px;
    font-size: 12.5px;
  }

  div.email-item div.title::first-letter {
    text-transform: capitalize;
    cursor: pointer;
  }

  div.email-item div.email-controls {
    column-gap: 2px;
    font-size: 20px;
  }

  div.email-item svg.more-options,
  div.email-item svg.delete {
    display: none;
  }
}
</style>
