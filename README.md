# running databes
you can run the databse by buliding a docker container or simply change ./backend/dbconfig.js file to match your own prefrences.

using docker and azure data studio:

1-biuld and run docker container:

  follow this tutorial: https://www.youtube.com/watch?v=9c7Ti2OcLZg 
  
  and use this command when needed:
  
  command: docker run -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=Mahya09354600908' -p 1433:1433 --name sql_edge -d mcr.microsoft.com/azure-sql-edge

   
2- make connection using azure data studio(more information in backend/dbconfig.js)

# running backend
cd backend

npm start

# running frontend
cd frontend

npm run dev