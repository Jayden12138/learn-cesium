<template>
	<div id="cesium_container"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import ViewerManager from '@/utils/viewerManager';
import { getFakeData } from '@/api/fakeapi';

const initMap = () => {
	const viewer = ViewerManager.initialize('cesium_container');

	viewer.scene.debugShowFramesPerSecond = true; // 帧率显示
};

onMounted(() => {
	initMap();

	// TODO: 删除fake数据
	getFakeData();
});
</script>

<style scoped>
#cesium_container {
	background: gray;
	height: 100vh;
	width: 100%;
}
</style>
