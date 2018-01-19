
cd ~/new-pdfs/di-pdfs

git stash && git pull origin master # if this is first time deploy then use git clone

docker stop ssc-pdf && docker rm ssc-pdf \

    docker build -t ssc-pdf . && \

    docker run -it -d --restart unless-stopped --name ssc-pdf-app ssc-pdf







