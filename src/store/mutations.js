import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.UPDATE_BREADCRUMBS] (state, { breadcrumbs }) {
    updateBreadcrumbs(state, breadcrumbs);
  },
}


function updateBreadcrumbs(state, breadcrumbs) {
  set(state.breadcrumbs, breadcrumbs)
}

