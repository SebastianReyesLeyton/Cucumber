xvfb-run --server-num=99 \
         --listen-tcp \
         --server-args="-screen 0 1360x1020x24 -fbdir /var/tmp -dpi 96 -listen tcp -noreset -ac +extension RANDR" \
         /usr/bin/fluxbox -display :99.0