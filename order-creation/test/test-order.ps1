cat .\test\fixtures\order-creation.json | jq -c | %{ curl -s -XPOST http://127.0.0.1:3000/order/create --json $_ } | jq .salesforce
