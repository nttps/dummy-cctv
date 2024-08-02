<template>
    <div>
        <video ref="videoElement" class="video-js vjs-default-skin" controls preload="auto" crossorigin="anonymous" :data-setup="{}">
            <source :src="src" :type="type" />
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that
                <a
                    href="http://videojs.com/html5-video-support/"
                    target="_blank"
                    >supports HTML5 video</a
                >
            </p>
        </video>
        <canvas ref="canvasElement" style="display: none"></canvas>
    </div>
</template>

<script setup>
import videojs from "video.js";
import "video.js/dist/video-js.css"; // videoJs Quality levels **
//import 'video.js/dist/lang/th.js'

const emit = defineEmits(["captureImage"]);
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  }
});
const videoElement = ref();

onMounted(() => {
    initPlayer();
});
const initPlayer = () => {
    const player = videojs(
        videoElement.value,
        {
            controls: true,
            autoplay: true,
            preload: "auto",
            fluid: true,
            liveui: true,
            html5: {
                vhs: {
                    overrideNative: true,
                },
                nativeAudioTracks: false,
                nativeVideoTracks: false,
            },
        },
        () => {
            player.log("onPlayerReady", player);
        }
    );

    watch(() => props.src, (newSrc) => {
        player.src({ src: newSrc });
    });
};
const canvasElement = ref(null);
const capturedImage = ref(null);

const captureImage = () => {
    const canvas = canvasElement.value;
    const video = videoElement.value;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    capturedImage.value = canvas.toDataURL("image/png");

    emit("captured", capturedImage);
};

defineExpose({
    captureImage,
});
</script>

<style lang="scss" scoped>
.main-preview-player {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.video-js,
.playlist-container {
    position: relative;
    width: 100%;
    min-height: 500px;
    height: 0;
}

.video-js {
    flex: 3 1 70%;
}

.playlist-container {
    flex: 1 1 30%;
}

.vjs-playlist {
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.vjs-progress-control {
    display: none;
}
</style>
