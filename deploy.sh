echo "Which version to bump? [major | minor | patch] https://docs.npmjs.com/cli/v7/commands/npm-version"
read versionName

echo "\nnpm version $versionName"
npm version $versionName

echo "\n==== Building ===="
yarn build

# Github usually ignores files and folders that start with "_". This file makes it not do that.
echo "\n==== Ensuring github configurations ===="
touch build/.nojekyll
echo "lopy.suaveware.dev" > build/CNAME

echo "\n==== Deploying with gh-pages ===="
gh-pages -d build
