
const requestModule = require('request')


var arrValues = new Array();

const consumer = async (event) => {

  for (const record of event.Records) { // # FILL_ME_IN
    arrValues.push(JSON.parse(record.body))
}

  if (arrValues[0].Message.substr(0, 5) === "재고 부족"){
    requestModule.post({
        headers: {'content-type': 'application/json'},
        url: 'http://factory.p3.api.codestates-devops.be:8080/api/manufactures',
        body: {
            "MessageGroupId": "stock-arrival-group",
            "MessageAttributeProductId": "CP-502101",
            "MessageAttributeProductCnt": 10,
            "MessageAttributeFactoryId": "FF-500293",
            "MessageAttributeRequester": "choi-jaehyeok-test",
            "CallbackUrl": "https://eaqqn83e0l.execute-api.ap-northeast-2.amazonaws.com"
          },
        json: true 
    })
  }
}
module.exports = {
    consumer,
  };