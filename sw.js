const myfiles = "myfiles"
const files = [
    '/',
    '/index.html',
    '/img/dish.png',
    '/css/materialize.min.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/pages/about.html',
    '/pages/contact.html'
]


self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(myfiles).then(c => {
            c.addAll(files)
        })
    )
})


self.addEventListener('fetch',evt => {
    evt.respondWith(
        caches.match(evt.request).then(c => {
            return c || fetch(evt.request)
        })
    )
})