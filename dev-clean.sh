if [ -f "dev-server.pid" ]; 
    then 
        echo "Server Found. Stopping Server." ; 
        pkill -F dev-server.pid;
        echo "Server Stopped." ; 
        rm dev-server.pid ; 
        echo "PID File removed" ; 
    else 
        echo "No PID found" ; 
fi