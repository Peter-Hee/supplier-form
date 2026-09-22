// ============================================================
// 运行时配置（部署后直接改这个文件即可生效，无需重新构建）
// ============================================================
window.APP_CONFIG = {
  // supabase.com 项目设置（Project Settings -> API）：
  SUPABASE_URL: "https://euifqlxkdwqnkgpllzhx.supabase.co",        // 例如 "https://xxxxxxxx.supabase.co"
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1aWZxbHhrZHdxbmtncGxsemh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5ODQ0MzgsImV4cCI6MjEwNTU2MDQzOH0.7MJLiKyq-os_AZHzmc4DmzHDF2CGuP-6u2wjdfEgV48",   // 例如 "eyJhbGciOi...."（anon public key）

  // Slack Incoming Webhook（提交通知发往 #供应商准入通知）
  SLACK_WEBHOOK_URL:
    "https://hooks.slack.com/services/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",
};
