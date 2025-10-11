# 本の貸し出し管理アプリ（フロントエンド）

## 概要
大学のチーム開発で制作した「本の貸し出し管理アプリ」のフロントエンド部分です。  
サークルユーザーが書籍を貸出・返却できることを目的とし、ReactとTypeScriptを用いて開発しました。  
バックエンドは他メンバーが担当し、APIを通じてデータを取得・更新しています。

##  チーム構成
- 4人チーム（フロント3名、バック1名）  
- 開発期間：2025年4月〜9月  
- 担当：フロントエンド実装（データの取得 / 貸出ページ）

## 使用技術
- React（Vite）
- TypeScript
- Axios（API通信）
- firebase(デプロイ)
- Supabase(データベース管理)
- デザインツール：Figma（UI設計ベース）

## 自分の担当部分  
- firebase Hostingを用いたデプロイ作業を担当し、実際にWeb上で動作する形に公開
- Axiosを用いたAPI通信機能（書籍データの取得・更新）  
- useEffect / useStateを活用した状態管理    
- GitHubのPull Requestを用いた開発フローを経験し、コードレビューを実施

## 工夫した点・学び
- API通信のエラー処理やレスポンス確認をコンソール出力で検証し、通信の安定性を確保。 
- チーム開発を通して、GitHub運用を学びました。

# クローン
git clone https://github.com/nepp-tumsat/NePP_LibraryManager_Front.git

# ディレクトリ移動
cd NePP_LibraryManager_Front

# パッケージインストール
npm install

# 開発環境起動
npm run dev


# 最後に
本プロジェクトでは、チーム開発とAPI連携の実装を通じて、フロントエンドエンジニアとしての基礎技術とチーム開発力を身につけました。