const url = new URL('https://www.beingthink.com/login?name=pjw')
console.log(url.hostname)
console.log(url.pathname)
console.log(url.searchParams)
const val = url.searchParams // Map
console.log(val.get('name'))