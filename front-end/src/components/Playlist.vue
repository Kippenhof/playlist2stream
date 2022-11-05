<template>
    
    <ul>
        <!--test in Funktion umwandeln und diese zum prüfen des Playing States nutzen -->
        <li v-for="video in playlist" :key="video.title"> {{ video.title }} <button @click="setPlayingStatus(video.id, playlist)"> YES </button> {{ video.playing }} </li>
    </ul>
</template>
<script>

    export default {
        name:'VuePlaylist',
        data () {
        return {
          playlist: [
            {id: 1, title: 'Me at the Zoo', playing: false},
            {id: 2, title: 'Gerhardt Warmduscher', playing: true},
            {id: 3, title: 'Joachim Gönnideck', playing: false}
          ]
        }
    },
        methods: {
        setPlayingStatus(playing, playlist) {
            playlist.forEach((video) => {
                if (video.id !== playing) {
                    video.playing = false;
                    console.log("Video not Playing is set For ", video.title, "with ID ", video.id);
                } else {
                    video.playing = true;
                    console.log("Video Playing is set For ", video.title, "with ID ", video.id);
                }

            })

            console.log(playlist, "   ", playing);
            // Implement Update Player Function V Here or in Player Module
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
