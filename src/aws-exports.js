/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
// WARNING: IGNORE the above warning if we are not using Amplify to manage our project, which we are not. So it is cool to edit this.

const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": "https://drwmyyk4brbpxkxfd44oldg72a.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "Auth": {
        "region": "us-east-2",
        "userPoolId": "us-east-2_pi4J7wKJT",
        "userPoolWebClientId": "uj19r9is8j8062v8sbvn4oat2",
        "mandatorySignIn": false,
        "clientMetadata": {
            "myCustomKey": "myCustomValue"
        },
        "oauth": {
            "domain": "pv-degradation-pool-dev.auth.us-east-2.amazoncognito.com",
            "scope": [
                "phone",
                "email",
                "profile",
                "openid",
                "aws.cognito.signin.user.admin"
            ],
            "redirectSignIn": "http://localhost:8080/",
            "redirectSignOut": "http://localhost:8080/",
            "responseType": "code"
        }
    }
};


export default awsmobile;
