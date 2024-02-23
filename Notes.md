## Setting up NX for Lambdas

### Install prerequisites

Install [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html#install-sam-cli-instructions)

`npm install -g esbuild`

### Install

```
cd order-creation

npm install --legacy-peer-deps
```

---

### Run SAM to invoke Lambdas

```bash
sam build

sam validate

sam invoke local
```

The invoke might be slow the first time it runs as it will download an AWS image to run locally.

#### Serving Lambda endpoints (via local API Gateway)

To keep the endpoint running (default: port 3000), you can execute:

`npm run serve-functions &`

---

## Testing

After serving functions:

```powershell
cd order-creation

.\test\test-order.ps1
```

on in MacOS or Linux using bash:

```bash
cd order-creation

./test/test-order.sh
```

### Jest Test (TODO)

`npm test`
