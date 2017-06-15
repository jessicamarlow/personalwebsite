# production build
cd ../jessicamarlow.github.io
git rm -rf .
git clean -fxd

# copy folder over
cp -rf ../personalwebsite/dist/* .
cp ../personalwebsite/CNAME .
cp ../personalwebsite/favicon.ico .

git add .
git commit -m "Added commit"

git push -f

cd ../personalwebsite
