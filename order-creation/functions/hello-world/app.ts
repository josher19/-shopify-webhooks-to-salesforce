import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

function getSalesforceData(event: APIGatewayProxyEvent) {
    // const salesforce = require('node-salesforce');
    // TODO: Do something with the event
    const salesforceData = Object.assign({
        "email": "jon.sample@example.com",
        "firstName": "Jon",
        "lastName": "Sample",
        "publicId": "e7ng48d",
        "guid": "e0a0d70d-1234-8888-bb7b-db925e7da417",
        "stripe_customerId": "cus_XXXXXXXXXXXXXX",
        "shippingStreet": "123 Main St",
        "shippingCity": "Portland",
        "shippingState": "OR",
        "shippingCountry": "US",
        "shippingPostalCode": "97214",
        "doNotDeliverPerks": false,
        "doNotDeliver": false,
        "nationalId": null,
        "phoneNumber": null,
        "langSourceContact": "eng",
        "paymentMethod": "Stripe",
        "timestamp": "2024-01-10",
        "total": 58.99,
        "donationComments": null,
        "videoId": null,
        "transactionId": "ch_ZZX1cR4ig8703iAj0eMZZZZZ",
        "purchaseLines": [
            {
                "productId": "01t1C000005jrhkQAA",
                "quantity": 1,
                "total": 50
            },
            {
                "productId": "01t1C000005jrhlQAA",
                "quantity": 1,
                "total": 8.99
            }
        ]
    }, { event });

    return salesforceData;
}

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Event: ', typeof event, event);
    if (typeof event.body === 'string' && event.body[0] === '{') {
        event.body = JSON.parse(event.body)
        console.log('body', event.body);
    }
    const salesforce = getSalesforceData(event);

    return {
        statusCode: 200,
        body: JSON.stringify({ salesforce }),
    };
};
