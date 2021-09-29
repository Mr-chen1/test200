<template>
    <ul>
        <router-link to="/films/nowplaying" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'clyactive' : ''">
            <span>正在热映</span>
          </li>
        </router-link>
        <router-link to="/films/comingsoon" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'clyactive' : ''">
            <span>即将上市</span>
          </li>
        </router-link>
    </ul>
</template>

<style scoped>
    ul{
        display: flex;
        height: 2.7rem;
        line-height: 2.7rem;
    }
    ul li{
        flex: 1;
        text-align: center;
    }
    .clyactive{
        color: red;
        border-bottom: solid 1px red;
    }
    .sticky{
        position: sticky; /*粘性定位*/
        top: -1px;
        background-color: white;
        z-index: 100;
    }
</style>