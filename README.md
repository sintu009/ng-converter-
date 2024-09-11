# Prevent Clickjacking
Header always append X-Frame-Options SAMEORIGIN
# CSP header
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://code.highcharts.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com https://meet.jit.si https://maps.googleapis.com https://cdn.datatables.net 'unsafe-eval'; style-src 'self' https://maxcdn.bootstrapcdn.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com https://meet.jit.si https://maps.googleapis.com https://cdn.datatables.net https://fonts.googleapis.com http://netdna.bootstrapcdn.com 'unsafe-inline'; img-src 'self' https://maps.gstatic.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com https://imprintsemiservice.astiinfotech.com https://meet.jit.si https://maps.googleapis.com https://cdn.datatables.net https://imprintsemiservice.astiinfotech.com https://imprintservices.astiinfotech.com http://10.10.10.95:8081 data: https://tile.openstreetmap.org data: https://code.highcharts.com; connect-src 'self' https://maps.googleapis.com https://imprintsemiservice.astiinfotech.com https://imprintservices.astiinfotech.com http://10.10.10.95:8081 http://10.10.10.130; font-src 'self' https://maxcdn.bootstrapcdn.com https://fonts.googleapis.com https://fonts.gstatic.com http://netdna.bootstrapcdn.com https://cdn.jsdelivr.net data:; frame-src 'self' https://meet.jit.si; frame-ancestors 'self'; media-src 'self' https://imprinttest.astiinfotech.com https://imprint.astiinfotech.com; object-src 'none'; manifest-src 'self'; form-action 'self' https://imprintsemiservice.astiinfotech.com https://imprint.astiinfotech.com http://10.10.10.95:8081; base-uri 'self';"
# Enable HTTP Strict Transport Security (HSTS)
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
# Remove or hide Last-Modified headers for static files
<FilesMatch "\.(js|css|html|pdf)$">
    Header unset Last-Modified
    Header unset Date
</FilesMatch>
cdnjs.cloudflare.comcdnjs.cloudflare.com
cdnjs.cloudflare.com
cdnjs.cloudflare.com is an ultra-fast, reliable, globally available content delivery network for open-source libraries.
jsDelivrjsDelivr
jsDelivr - A free, fast, and reliable CDN for JS and Open Source
Optimized for JS and ESM delivery from npm and GitHub. Works with all web formats. Serving more than 150 billion requests per month.
unpkg.com
UNPKG
The CDN for everything on npm
meet.jit.simeet.jit.si
Jitsi Meet
Join a WebRTC video conference powered by the Jitsi Videobridge
