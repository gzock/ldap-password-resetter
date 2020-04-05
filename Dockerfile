# For OpenShift
from nginxinc/nginx-unprivileged:latest

COPY dist/ldap-password-resetter/ /usr/share/nginx/html/
CMD nginx -g 'daemon off;'
