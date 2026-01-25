# Observability

This project exposes Prometheus metrics at `/metrics` and structured JSON request logs via Zap.

## Metrics

Exported series:

- `cyber_lms_http_requests_total` (counter; labels: method, route, status)
- `cyber_lms_http_request_duration_seconds` (histogram; labels: method, route, status)

## Grafana Dashboard (Basic)

Import `docs/observability_dashboard.json` into Grafana to visualize request volume and latency.
