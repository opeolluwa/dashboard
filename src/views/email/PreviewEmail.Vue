<template>
    <div class="email__item">
        <div class="email__item__left">
            <div class="email__item__left__checkbox">
                <input type="checkbox" />
            </div>
            <div class="email__item__left__star">
                <icon :icon="isStarred ? 'mdi:star' : 'mdi:star-outline'" />
            </div>
        </div>
        <div class="email__item__right">
            <div class="email__item__right__title">
                <h3>{{ title }}</h3>
            </div>
            <div class="email__item__right__content">
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>