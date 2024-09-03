<template>
    <div class="map_container">
        <div id="cesium_container"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { Terrain, Viewer, Ion } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

onMounted(() => {
    Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN

    new Viewer('cesium_container', {
        terrain: Terrain.fromWorldTerrain()
    })
})
</script>

<style scoped>
#cesium_container {
    background: gray;
    height: 100vh;
    width: 100%;
}
</style>
