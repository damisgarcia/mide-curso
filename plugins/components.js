import Vue from 'vue'
import Components from '@/components'

// Configure Manifest
import manifest from '@/manifest.json'

Vue.prototype.$manifest = manifest
Vue.prototype.$eventHub = new Vue()

Vue.use(Components)
