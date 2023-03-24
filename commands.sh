# !/bin/bash

COMMAND=$1
ARGS=${@:2:$#}

# Run bash terminal
bash () {
    docker-compose run --rm $1 sh
}

main () {
    if [[ "$COMMAND" == "bash" ]]; then
        bash $ARGS
    fi
}

main