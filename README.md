# Slack-Quotes

This is very simple AWS Lambda function for sending random quote to slack channel

1. edit quotes.js and 
  - change the slack_path to reflect your channel's incoming webhook (this comes from Slack Webhook Integration)
  - add quotes (I added 3 dummy quotes)
  - optionally change the emoji

2. simply load the js function to AWS Lambda and add Scheduled Even Source 

