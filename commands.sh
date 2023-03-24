# !/bin/bash

COMMAND=$1
ARGS=${@:2:$#}

# Run bash terminal
bash () {
    docker-compose run --rm $1 sh
}

# Build project images
build () {
    docker-compose build
}

options () {
    echo -e "\n"

    echo -e "Please choose one of the next options:"
    echo -e "COMMAND \t DESCRIPTION"
    echo -e "bash    \t run docker service container into terminal"
    echo -e "build   \t build docker-compose images"

    echo -e "\n"

    echo -e "This are the args by each command:"
    echo -e "COMMAND \t ARGUMENTS"
    echo -e "bash    \t <service> docker service name that you want to run"
    echo -e "build"

}

main () {
    if [[ "$COMMAND" == "bash" ]]; then
        bash $ARGS
    elif [[ "$COMMAND" == "build" ]]; then
        build
    else
        options
    fi
}

main