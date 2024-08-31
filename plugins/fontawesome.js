import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faUser, faFileAlt, faEnvelope, faStream } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { defineNuxtPlugin } from '#app'

library.add(faHouse, faUser, faFileAlt, faEnvelope, faStream, faLinkedin, faGithub, faInstagram, faFacebook, faTwitter)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
