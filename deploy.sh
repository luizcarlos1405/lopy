# Exits if any command fails
set -e

echo "\n==== Building ===="
npm run build

# Github usually ignores files and folders that start with "_". This file makes it not do that.
echo "\n\n==== Ensuring github configurations ===="
touch build/.nojekyll
echo "Added .nojekyll file to make github serve files that start with _"
echo "lopy.suaveware.dev" > build/CNAME
echo "Added CNAME file with the url to point github pages to"

echo "\n\nWhich version to bump? [major | minor | patch] https://docs.npmjs.com/cli/v7/commands/npm-version"
read versionName

echo "\n\nnpm version $versionName"
npm version $versionName

echo "\n\n==== Deploying with gh-pages ===="
gh-pages -d build --dotfiles
