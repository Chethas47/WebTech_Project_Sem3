here goes the instructions
1. set google env variable 
    in set_env_variable file thr is 
    set GOOGLE_APPLICATION_CREDENTIALS=path_of_safeconnect-chatbot-28e38de1089b.json_file
    this shd be run before running backend 
    if  not set it will throw error saying google thing is not found
the additional dependencies that are to be added is dialogflow,dialogflow-fulfillment,and actions-on-google
2.  cd chatbot 
    nodemon index.js
3. in new terminal
    cd chatbot
    cd client 
    npm run start
