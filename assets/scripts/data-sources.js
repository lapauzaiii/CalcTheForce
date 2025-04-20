// assets/scripts/data-sources.js

const creditMultipliers = {
  "Batch": 2000,
  "Streaming": 5000,
  "Federation": 70,
  "Real-time Events": 70000
};

const connectorIngestionOptions = {
  "Salesforce CRM": ["Batch"],
  "Salesforce Marketing Cloud": ["Batch"],
  "Snowflake": ["Batch"],
  "AWS S3": ["Batch"],
  "MuleSoft": ["Batch"],
  "Google Analytics": ["Batch"],
  "Adobe Experience Platform": ["Batch"],
  "Web/Mobile SDK": ["Real-time Events"],
  "Streaming Platform (Kafka, etc.)": ["Streaming"],
  "Custom / Ingestion API": ["Batch", "Streaming", "Federation"]
};