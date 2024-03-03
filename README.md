# How to setup

1. clone repository
2. run `npm i` to install the dependencies to `node_modules` folder
3. edit `src\config\constants\index.ts` and change your database configuration (you can also change a database type, but don't forget to install postgres database drivers. I've used postgresql of version 16.2)
4. run `npm run build` to generate the dist folder
5. `npm start` to run the process (the file will be fetched from path: `NEM12_Files\NEM12_Test_1_Million_Records.csv` by default and they can be configured in `pathInfo` constant of `src\config\constants\index.ts` file)
6. To run tests use `npm run test`
7. done! (A test video recording has been added in `test_recording` folder for reference)
