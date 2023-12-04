# ai1shot
Github ActionsからAzureOpenAIのAPIをカジュアルにワンショット利用するActionです


以下のようにワークフローから呼び出すことで chat/completionsのワンショットリクエストを簡易的に使えます。

```
    steps:
      # Ai1Shotのアクションを実行する
      - name: RunAi1Shot
        id: run_ai1shot
        uses: gutio/ai1shot@v1.0.0
        with:
          # (必須) Azure OpenAIのエンドポイントURL
          endpoint: ${{ vars.ENDPOINT_URL }}
          # (必須) Azure OpenAIのAPIキー
          key: ${{ secrets.API_KEY }}
          # (必須) 利用するモデル。あるいは独自のdeployment_id
          model: "gpt-4"
          # (必須) ワンショットリクエストする際のAI定義するシステムメッセージ
          system_message: "あなたはコードレビュワーです。つぎのタイトルのPullRequestに対してLGTMに一言添えるいいメッセージを考えてください。"
          # (必須) ワンショットリクエストする際に問いかけるユーザーメッセージ
          user_message: "Ai1Shotの初期実装完了"
```
