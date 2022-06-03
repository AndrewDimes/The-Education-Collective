# The Education Collective

## Before you can contribute ensure you have the following installed

### Git
- For Windows: https://gitforwindows.org/
- For Mac: https://sourceforge.net/projects/git-osx-installer/files/git-2.23.0-intel-universal-mavericks.dmg/download?use_mirror=autoselect

### Node.js
- https://nodejs.org/en/download/

## Fork and Clone the Repo
- Fork the repo to your own account.
- Open git bash or terminal or whatever you use and move into the location you wish to place the files
- Clone the repo: ```git clone < link to your repo>```
- Move into the newly created repo/project folder: ```cd The-Education-Collective```
- Now add the link to original repo ```git remote add upstream https://github.com/AndrewDimes/The-Education-Collective.git```
- Ensure that you have two remotes named origin & upstream: ``` git remote -v```
- Install the Node modules: ```npm i```

## Make your feature branch
- We want Main branch to always be the same across all of our systems so always make sure you work off a seperate branch.
- To create a new branch make sure you are inside The-Education-Collective folder then ```git checkout -b yourbranchname```
- This branch is your own so main branch does not get affected. User your name for branch name ex. AndrewDimes.

## Create .gitignore and .env file
- In the main folder of the project create a file called ```.gitignore``` and ```.env``` file
- In the ```.gitignore``` file write ```.env```
- Message me for the enviorment variables you need to put inside the .env file otherwise you will not be able to run locally.

## To push your changes 
- Ensure you are on your branch and not main. ```git status``` will tell you.
- ```git add .```
- ```git commit -m"Write what you did here"```
- ```git push origin yourbranchname```

## To pull new changes
- Ensure you are on Main branch. If you are on your feature branch push up any changes then ```git checkout main```
- On Main branch ```git pull upsteam main```
- To merge the new files with your feature branch ```git checkout <your branch name>``` then ```git merge main```
- if you would like to create a new feature branch from the updated Main branch ```git checkout -b <your new branch name>```

## To make a pull request(Add your changes to main branch)
- Go here - https://github.com/AndrewDimes/The-Education-Collective/pulls
- Click New pull request
- Click Create pull request

## To run the website locally
- In The-Education-Collective folder type ```npm start```
- Navigate to http://localhost:3000/ in your browser.
