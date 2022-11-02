<template>
  <!--
    *   Custom modal 
    *  example use case
    
    * -- add  @click="showModal = true" to any element to show modal, 
    * this will listen to click events on the modal---
    *
    * <button @click="showModal = true">show modal</button>
    
    * --- build the modal content in the template slots ---
    * <Modal v-show="showModal" @close-modal="showModal = false">
    *    --- icon slot to hold icons/ illustration if any
    *    <template #icon>
    *        <img src="path-to-icon.ext" />
    *    </template>

    *    --- content slot to hold the modal content
    *    <template #content>
    *        some content here
    *    </template>
    *</Modal>
    -->
  <div class="modal__overlay">
    <!-- TODO: fixme <div class="modal-overlay" @click="$emit('close-modal')"> -->

    <div class="modal">
      <div class="close mobile" @click="$emit('close-modal')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="var(--default-red)"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
          />
        </svg>
      </div>
      <!-- the modal icons placeholder-->
      <div class="check">
        <slot name="icon"></slot>
      </div>
      <h6>{{ title }}</h6>
      <!--the modal content goes here-->
      <slot name="content"></slot>
    </div>
    <div class="close desktop" @click="$emit('close-modal')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="var(--default-red)"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Alert",
    },
  },
};
</script>

<style scoped>
.modal__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1500;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal {
  text-align: center;
  background-color: white;
  height: auto;
  width: 500px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 60px 0;
  border-radius: 20px;
  overflow-y: scroll;
  border: 1px solid var(--border-color);
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
  background-color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 30px;
  align-items: center;
  padding: 5px;
}

.close.mobile {
  display: none;
}

.close-img {
  width: 25px;
}

.check img {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  /* width: 150px; */
  width: 35%;
  height: 40px;
  color: white;
  font-size: 14px;
}

/* .modal input,
.modal button {
    width: unset!important;
} */

@media screen and (max-width: 768px) {
  .modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .modal {
    width: 87%;
    height: auto;
    padding: 25px 10px 45px;
    min-height: 200px;
    /* max-height: 500px; */
    margin-top: 25%;
    border-radius: 10px;
    position: relative;
  }

  .close.mobile {
    margin: 0;
    position: absolute;
    top: 5px;
    right: 5px;
    display: block;
  }

  .close.mobile svg {
    width: 24px;
    height: 24px;
    /* margin: 5px; */
  }

  .close.desktop {
    display: none;
  }
}
</style>
