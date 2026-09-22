// ============================================================
// 运行时配置（改这里即可，无需重新构建）
// 说明：Slack 通知已改为由 Supabase 数据库触发器在服务端发送，
//       前端不再需要 webhook URL（留空即可，避免泄露被自动吊销）。
// ============================================================
window.APP_CONFIG = {
  SUPABASE_URL: "https://euifqlxkdwqnkgpllzhx.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1aWZxbHhrZHdxbmtncGxsemh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5ODQ0MzgsImV4cCI6MjEwNTU2MDQzOH0.7MJLiKyq-os_AZHzmc4DmzHDF2CGuP-6u2wjdfEgV48",
  SLACK_WEBHOOK_URL: "",
};
