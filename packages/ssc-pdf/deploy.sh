
cd ~/new-pdfs/di-pdfs

git stash && git pull origin master # if this is first time deploy then use git clone

cd packages/ssc-pdf

docker stop ssc-pdf-app && docker rm ssc-pdf-app \

    docker build -t ssc-pdf . && \

    docker run -p 7777:7777 -it -d --restart unless-stopped --name ssc-pdf-app ssc-pdf







