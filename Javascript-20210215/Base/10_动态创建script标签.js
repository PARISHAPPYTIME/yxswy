const url =
    'https://webapi.amap.com/maps?v=2.0&key=d19566f2266f48d9a3b0359a6b49a324&callback=amapcallback&plugin=AMap.DistrictSearch,AMap.DistrictLayer,AMap.Geolocation,AMap.Polygon'
const jsapi = document.createElement('script')
jsapi.charset = 'utf-8'
jsapi.src = url
document.head.appendChild(jsapi)
