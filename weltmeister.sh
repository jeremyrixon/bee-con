BEECON_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo bee-con dir is $BEECON_DIR
( sleep 1; open http://localhost:8080/weltmeister.html ) &
php -S localhost:8080 -t "$BEECON_DIR/src/main/webapp"
