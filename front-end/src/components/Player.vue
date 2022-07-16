<template>
    <div class="plyr__video-embed" id="player">
        <iframe
            src="https://www.youtube.com/embed/{{ playingVideo }}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allowfullscreen
            allowtransparency
            allow="autoplay"
        ></iframe>
    </div>
</template>
<script>

    export default {
        name:'Plyr',
        data () {

    },
        methods: {
        setPlaying() {
// Collect Current Video From Playlist module            

        }
    }

    }




</script>
<style>
 h1 {
     margin-top: 1%;
 }
 ul {
    list-style-type: none;
    text-align: left;
}
</style>
