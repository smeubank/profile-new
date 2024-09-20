import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { defineNuxtPlugin } from '#app'

// Import specific icons
import { faHouse, faUser, faFileAlt, faStream, faEnvelope, faCloud, faUserTie, faDatabase, faComments, faFlag, faIdCard, faCar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library to ensure they are available
library.add(fas, fab, faHouse, faUser, faFileAlt, faStream, faEnvelope, faCloud, faUserTie, faDatabase, faComments, faFlag, faIdCard, faCar, faChevronDown, faLinkedin, faGithub, faInstagram, faFacebook, faTwitter);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
