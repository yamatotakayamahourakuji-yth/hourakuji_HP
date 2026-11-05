# 法楽寺公式ホームページ用｜デジタルアーカイブ発光カード

Notionの法楽寺ホームページに埋め込むための独立したGitHub Pagesサイトです。既存の「omikuji」リポジトリとデジタルアーカイブ本体は変更しません。

## 仕様（2026-11-05 確定）

- 発光：背景を黒 → 金色のグロー → 黒へ、**3秒周期**で連続変化（最大発光は1.5秒時点）
- 対応：PC・スマートフォン。カード全体をクリック・タップ可能
- リンク先：<https://yamatotakayamahourakuji-yth.github.io/horakuji-digital-archive/>
- 外部ライブラリ不要。`index.html` と `style.css` の静的ページ
- OSの「動きを減らす」設定が有効な場合はアニメーションを停止

## 公式アカウントへの公開手順

1. GitHubで公式アカウント `yamatotakayamahourakuji-yth` を選択する。
2. **New repository** で、新規の公開リポジトリ `hourakuji_HP` を作成する（**Public** を選択）。既存の `omikuji` には作成しない。
3. ダウンロードしたZIPを展開し、GitHubの空のリポジトリの **uploading an existing file** をクリックする。展開先フォルダの **`index.html`、`style.css`、`README.md` の3ファイルを選択**してアップロードする。フォルダ丸ごとを階層としてアップロードしないこと（`index.html` はリポジトリの最上位へ）。画面下の **Commit changes** をクリックする。
4. リポジトリの **Settings → Pages → Build and deployment** で **Deploy from a branch** を選択し、`main` / `(root)` を指定して **Save**。
5. 公開後、次のURLを開いて表示を確認する：
   <https://yamatotakayamahourakuji-yth.github.io/hourakuji_HP/>
   （公開・反映まで少し時間がかかる場合があります。現時点で公開済みという意味ではありません。）
6. Notionの法楽寺ホームページで、既存のデジタルアーカイブ案内の代わりに **`/embed`（埋め込み）** ブロックを追加し、上記URLを貼り付ける。ブロックの高さを、スマホで本文やボタンが切れないよう約320～400pxを目安に調整する。公開状態でPC・スマホの表示・タップ動作を確認する。
7. Notion側の埋め込みに制限があり正常表示されない場合は、同じURLをNotionの**リンク**として配置する方法に切り替える。埋め込みが常に成功するとは限りません。

## 管理上の重要事項

- 金色の速度を調整するときは `style.css` の2箇所の `animation: ... 3s` を変更する。
- リンク先を変更するときは `index.html` の `href` だけを変更する。
- Notionのホームページ本体をGitHubへ移管する構成ではない。このリポジトリは、**Notion内に表示する案内用の独立ページ**を管理する。
- 新規リポジトリの作成・ファイルのコミット・GitHub Pagesの設定・Notionへの埋め込みは別途必要。
