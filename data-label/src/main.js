import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/tailwind.css'

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fas,far,fab);

// createApp(App)
//     .use(router)
//     .component('font-awesome-icon', FontAwesomeIcon)
//     .mount('#app')

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();


createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
