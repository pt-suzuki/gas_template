# gas_template

## 概要

google apps script のapi用テンプレート
webpack+claspでビルドし、google apps scriptにデプロイする。

## 前提

``` shell

#node_modulesをインストール
npm run install

#claspをグローバルでインストールしておく
npm install -g clasp

# .clasp.sample.jsonをコピー
cp .clasp.sample.json　.clasp.json

# コピーした.clasp.jsonを編集
vim .clasp.json

```

``` json

#.clasp.json

#プロジェクトからscriptIdをコピーして入力する

{"scriptId":"ここに入力","rootDir":"./dist"}

```

## ビルド

``` shell

#ビルド
npm run build

```

## テスト

``` shell

# eslint
npm run lint

# eslint fix
npm run lint:fix

# jest
npm run lint:fix


```

## デプロイ

``` shell

# テスト、ビルド、デプロイを一括実行
npm run deploy

```

## GithubAction

### .clasprc.jsonからコピーして入力する

- CLASPRC_ACCESS_TOKEN
- CLASPRC_CLIENT_ID
- CLASPRC_CLIENT_SECRET
- CLASPRC_EXPIRY_DATE
- CLASPRC_ID_TOKEN
- CLASPRC_REFRESH_TOKEN

### スプレッドシートのscriptIdをコピーして入力する

- CLASP_SCRIPT_ID
