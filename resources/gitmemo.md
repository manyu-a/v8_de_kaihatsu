## githubの使い方まとめ


0. git clone https://github.com/manyu-a/v8_de_kaihatsu/  
ここから繰り返し
1. git checkout main
1. git pull
1. git checkout -b feature/個人の名前
1. git add . 
1. git commit -m "編集内容"
1. git push origin feature/個人の名前  
ここまでを何度か繰り返す
1. Pull Requestを出す  
mainが更新されたら
git pull origin main --rebase  
git pull origin main  
を各自行う
1. 1に戻る  


[参考](https://qiita.com/siida36/items/880d92559af9bd245c34)  


[marge](https://style.biglobe.co.jp/entry/2022/03/22/090000)
```
feature/Bブランチにいます。
> git branch
  develop
* feature/B

developブランチの最新コミットをローカルに取得します。
> git fetch

最新のdevelopの内容をfeature/Bブランチに取り込み、
> git merge origin/develop

origin/feature/Bブランチに反映します。
> git push
```

[pull](https://qiita.com/hinatades/items/d47dec72a87c5fed50f7)
```
git pull origin remotebranch:local
```