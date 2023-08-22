## Q1--NPM
It is world's largest software registry or library. It has many packages open source developers from entire world use NPM to share and borrow package.
We can install any package from the NPM and we can also add or upload our software code or package to NPM.
whenever we do npm init in our project a project.json is file generated in our project it contains some basic information about project.
Package.json-- Package.json is a configuration file that every peoject has which ever using NPM packages.
We can install any package from npm by command npm install <package-name> after this command a node_modules and package.lock.json and that package in dependencies in package.json
node_modules-- it is a folder that contains code and all dependencines for our installed package.

## Q2--what is npx
It is CLI tool of NPM to run the npm packages.
When NPX was not there for running any package of NPM steps was-
1--Install the package(npm install package-name)
2-Add that package name in script feild of package.json file Or we need to type local path of the package on CLI
3-Than we need to type npm run <package-name>

With NPX we can run any npm package just by running single command 
   npx your-package-name
It can also run the package without installing that .So it is best for the scenerio we want to use a npm only once .So we need dont't need install those package and make our node modules heavy unnecerialy.

## Q3-- Difference between dependencies and devDepencies
Dependencies-- This is the dependencies that can be used in development as well as in production.
DevDependencies--This is the dependencies that are required in development phase only these can't be used in production.


## Q4-- Difference between package.json and package.lock.json
    Package.json and package.lock.json both has information about installed package.
    Package.json--This file mainley contains info about our project ex--name,description,version,author.
    package.lock.json--It has all the depencies information more deeply than package.json file.As it contains integrity key to verify exact version and it contains the version of all the sub-dependencies of our installed package.

## Q5-- Why should I not modify package.lock.json
As package.lock.json file contains deep information about installed packages by this it makes sure that all the environment would have same version of dependencies and resolves the issues compatibility and unexpected behaviour.So if we change this we can face verions realted and compatibility issues.

## Q6-- node_modules-
This folder generated whenever we install any npm package . It is folder that contains the code for that  installed package and code for the sub depdencies of that package.We should not push this folder to git as it can be regenrated npm install  if we have package.json and package.lock.json .

## Q7--  Browserlist 
browserlist is feild in package.json package.json file inwhich you can specify on which browser your app will run. 
ex-{"browserlist":"last 2 chrome version"}
It shows that app will definitely run on last 2 version of chrome on other browsers it may run or may not run perfectly.

## Q8--what is parcel
There is a huge difference between the builds that we use during development and we push to production server.Production builds are optimized, compressed files are bundled, no debugging support and all. This all optimization are done by Bundlers like Parcel,webpack,Vite

## Q9--.parcel-cache
whenever we build our project with parcel two folders are created dist and .parcel-cache. dist folder contains all compressed file. .parcel-cache contains  all the cache data the parcel stores for improving performnce of react app so that when ever we change any file than all the project don't be needed to rebuilt onlt the changed files will be built again.
The UI that we see in browser after build comes from the dist & parcel-cache folder only not from our code files.

## Q10--.gitignore
It is file in which we can give the file names that we don't want push on github with our other files in folder.

## Q11--Tree Shaking
It is also called dead code elimination because while building a app for production parcel scans all the files and imports and eliminates all the functions and code that are not called or used anywhere.

## Q12--HOT Module Replacement
Whenever parcel builds our code it creates a dist folder with compressed file conactenated with a hash code after that whenever we chnage our code parcel identifies in which file we made changes and compiles only those files UI is refreshed on browser only for those files instead of refreshing the entire page in browser. Parcel uses File watching algorithm written in c++ to identify the changes files.One of major advantage of HMR is state persistant as only our one module in brower is getting refreshed instead of entire page our states in page remains persisted.

## Q13 --
`1- Diagnostics-` 
                    If we made any error in code parcel gives us beatutiful and detailed explanation of that error in browser in terminal and browser both. It can indicates a exact loacation of error with a highlighted syntax and also suggest the solution for that error.

` 2- Code splitting -`
 when multiple file uses same modules than parcel creates a seprate bundles for those modules so that these commomly used bundles can be loaded paralley with our appliaction code and it also cached seprately.

` 3- Diffrential Bundling- `
Parcel can build different bundles for diffrenet versions of browser as older versions of browsers doesn't support the ES6 syntax parcel can build the bundles for those browsers after traspiling the ES6 into javascript . These bundles dependes on the browserlist given in package.json file.



