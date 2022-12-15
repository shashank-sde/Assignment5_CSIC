# Assignment5_CSIC
This is the source code repository for the application REST API created as part of Assignment 5 in Internet Computing Course. 

1) clone this repository into your local system.

2) open terminal

3) cd into the directory where you have cloned your code.

4) run the command 'docker build -t nodeapplication .' here the "nodeapplication" is just the name of the docker image. you can give any name instead of it.

5) run the command 'docker run -it -p 9000:3000 nodeapplication' here you can give the name which you have in step2 in place of "nodeapplication".

6) now open your browser and go to the 'localhost:9000' to view the application.

7) now you can see that you cannot enter any other commands untill this server or container is stopped. so to run the app in background run the command : 'docker run -d -p 9000:3000 nodeapplication'. after running this command you will be able to now enter other commands in the terminal as well.

8) now since the terminal is free and you do not know whether your container is running, you can use the command 'docker ps' and the terminal will show you the currently running containers and you can still access the application from localhost.

--This application uses a JSON file as a database for the API and fetches and displays data as we use different end points.
