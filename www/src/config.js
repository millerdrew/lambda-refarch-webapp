// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2br2l3ks4k0drurjq48uu6omp1",     // CognitoClientID
  "api_base_url": "https://xypyeegi96.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-drewstodo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2029vk3yo5ren.amplifyapp.com"                                      // AmplifyURL
};

export default config;
