<template>
  <q-page class="flex flex-center">
    <q-ajax-bar ref="bar" position="bottom" color="primary" size="10px" skip-hijack />
    <q-list v-if="musicList.length > 0" bordered separator>
      <q-item v-for="(item, index) in musicList" :key="index" v-ripple @click.native="toDetail(item.id)">
        <q-item-section avatar>
          <q-avatar>
            <img :src="item.coverImgUrl" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ item.copywriter }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      bar2: false,
      username: '',
      password: '',
      musicList: []
    }
  },
  methods: {
    ...mapMutations(['changeDetailListId']),
    async signIn () {
      // let a = await this.$axios.login(this.username, this.password)
      // alert(a.profile.nickname)
      const bar = this.$refs.bar
      bar.start()
      let a = await this.$axios.getGoodMusic()
      if (this.$refs.bar) {
        this.$refs.bar.stop()
      }
      this.musicList.push(...a.playlists)
      console.log(this.musicList)
    },
    async toDetail (e) {
      this.changeDetailListId(e)
      this.$router.push('/detail')
    }
  },
  mounted () {
    this.signIn()
  }
}
</script>
