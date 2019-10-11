<template>
  <div>
    <q-dialog v-model="player">
      <q-card>
        <Aplayer
          autoplay
          :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: mp3Url,
    pic: mp3Img
  }"
        />
      </q-card>
    </q-dialog>
    <q-img :src="bannerImg" style="width: 100%">
      <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">{{ description }}</div>
    </q-img>
    <q-list v-if="tracks.length > 0" bordered separator>
      <q-item v-for="(item, index) in tracks" :key="index" v-ripple @click.native="run(index)">
        <q-item-section avatar>
          <q-avatar>
            <img :src="item.al.picUrl" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ item.al.name }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import { mapState } from 'vuex'

export default {
  components: {
    Aplayer
  },
  computed: {
    ...mapState(['detailListId']),
    description () {
      return (
        this.playlist && this.playlist.playlist && this.playlist.playlist.name
      )
    },
    bannerImg () {
      return (
        this.playlist &&
        this.playlist.playlist &&
        this.playlist.playlist.coverImgUrl
      )
    },
    tracks () {
      return (
        this.playlist && this.playlist.playlist && this.playlist.playlist.tracks
      )
    }
  },
  data () {
    return {
      playlist: null,
      toolbar: true,
      player: false,
      mp3Url: '',
      mp3Img: ''
    }
  },
  methods: {
    async getData () {
      this.playlist = await this.$axios.getGoodMusicDetail(this.detailListId)
    },
    async run (e) {
      let temp = await this.$axios.getSongUrl(this.playlist.privileges[e].id)
      console.log(temp)
      this.mp3Url = temp.data[0].url
      this.mp3Img = this.playlist.playlist.tracks[e].al.picUrl
      this.player = true
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
</style>
