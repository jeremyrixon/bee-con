BEECON_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo bee-con dir is $BEECON_DIR
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
echo JAVA_HOME=$JAVA_HOME
export PATH=$BEECON_DIR/apache-maven-3.3.9/bin:$PATH
echo mvn is $BEECON_DIR/apache-maven-3.3.9/bin/mvn
cd $BEECON_DIR
mvn appengine:update
