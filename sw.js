const myfiles = "myfiles"
const files = [
    '/pwaios/',
    '/pwaios/index.html',
    '/pwaios/img/dish.png',
    '/pwaios/css/materialize.min.css',
    '/pwaios/css/styles.css',
    '/pwaios/js/app.js',
    '/pwaios/js/ui.js',
    '/pwaios/js/materialize.min.js',
    '/pwaios/pages/about.html',
    '/pwaios/pages/contact.html'
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
