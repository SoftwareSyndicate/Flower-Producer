import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAgxDkwNB0TSm83GbB6FGKpIsxs0WRQzxI",
  authDomain: "flower-c6ff3.firebaseapp.com",
  databaseURL: 'https://flower-c6ff3.firebaseio.com/',
  storageBucket: "gs://flower-c6ff3.appspot.com/"
}
const version = '/v0'

Firebase.initializeApp(config)

const api = Firebase.database().ref(version)


// FETCH
api.fetch = function (child){
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise((resolve, reject) => {
      api.child(child).once('value', snapshot => {
        const val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        resolve(val)
      }, reject)
    })
  }
}

api.fetchIdsByType = function(type) {
  return api.cachedIds && api.cachedIds[type]
    ? Promise.resolve(api.cachedIds[type])
    : fetch(`${type}stories`)
}

api.fetchItem = function(id) {
  return fetch(`item/${id}`)
}

api.fetchItems = function(ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

api.fetchUser = function(id) {
  return fetch(`user/${id}`)
}

// ADD
api.add = function(type, data){
  return new Promise((resolve, reject) => {
    let key = api.child(type).push().key;

    let now = new Date();
    data.created_at = now;
    data.updated_at = now;

    var updates = {};
    updates[`${type}/${key}`] = data;
    api.update(updates).then(results => {
      console.log(results);
      resolve(results);
    }, error => {
      reject(error);
    })
  })
}


// WATCH
api.watchList = function(type, cb) {
  let first = true
  const ref = api.child(`${type}stories`)
  const handler = snapshot => {
    if (first) {
      first = false
    } else {
      cb(snapshot.val())
    }
  }
  ref.on('value', handler)
  return () => {
    ref.off('value', handler)
  }
}

export default api
