//http://www.codewars.com/kata/can-you-keep-a-secret
function createSecretHolder(secret) {

    return {
        Secret: secret,
        getSecret: function() {
            return this.Secret;
        },
        setSecret: function(secret) {
            this.Secret = secret;
        }
    }
}