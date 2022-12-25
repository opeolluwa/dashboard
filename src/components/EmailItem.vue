<template>
  <div class="email__item">
    <input type="checkbox" name="select" class="" />

    <div class="email__content">
      <div class="title">
        {{ title }}
      </div>
      <span class="content" @click="$emit('preview-email')">
        {{ content }}
      </span>
    </div>
    <div class="email__controls">
      <span @click="$emit('star-email')">
        <Icon
          icon="mdi:star"
          :class="[isStarred ? 'starred__email' : '', 'star']"
          v-if="isStarred"
        />
        <Icon icon="mdi:star-outline" class="email" v-else />
      </span>
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
      default: "Example title",
    },
    content: {
      type: String,
      required: true,
      default: "This is an example truncated email content...",
    },
    isStarred: {
      type: Boolean,
      // required: true,
      default: false,
    },
  },
  components: { Icon },
  mounted() {
    /*  (function () {

      // Create variable for setTimeout
      var delay;

      // Set number of milliseconds for longPress
      var longPress = 1300;

      var emailItems = document.getElementsByClassName('email__item');
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

<style scoped>
div.email__item {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: white;
  margin: 0.75rem 0;
  padding: 20px;
  border-radius: 7.5px;
  box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  position: relative;
  cursor: pointer;
}

.email__item div.email__content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}

div.email__item input {
  margin-right: 0px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* display: none; */
}

div.email__item div.title {
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

div.email__item span.content {
  text-align: left;
  width: 400px;
  color: var(--secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

div.email__item div.title::first-letter {
  text-transform: capitalize;
  cursor: pointer;
}

div.email__item svg {
  align-self: flex-end;
  cursor: pointer;
  color: var(--secondary);
}

div.email__item svg.delete:hover {
  color: var(--default-red);
}

div.email__item svg.star-email:hover {
  color: var(--default-yellow);
}

.starred__email {
  color: var(--default-yellow) !important;
}

/* div.email__controls {
  display: grid;
  grid-template-columns: repeat(3, 25px);
  column-gap: 5px;
  position: absolute;
  right: 20px;
} */

@media screen and (max-width: 768px) {
  div.email__item input {
    margin-right: 15px;
    /* width: 1rem; * */
  }

  div.email__item {
    column-gap: 5px;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
  }

  .email__item div.email__content {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 7.5px;

    row-gap: 2px;
  }

  div.email__item div.title {
    font-size: 13.5px;
    width: 170px;
    border: none;
    padding: 0;
    margin: 0;
  }

  div.email__item span.content {
    width: 200px;
    font-size: 12.5px;
  }

  div.email__item div.title::first-letter {
    text-transform: capitalize;
    cursor: pointer;
  }

  div.email__item div.email__controls {
    position: static;
    right: 0;
    column-gap: 2px;
    font-size: 20px;
  }

  div.email__item svg.more-options,
  div.email__item svg.delete {
    display: none;
  }
}
</style>
