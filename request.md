## 
export AWS_PROFILE=vnfmsqkek3

##
serverless deploy --aws-profile vnfmsqkek3 --region ap-northeast-2


## 1. sale에서 요청

$ curl --location --request POST 'https://hjuayfac44.execute-api.ap-northeast-2.amazonaws.com/send' --header 'Content-Type: application/json' --data-raw '{   "MessageGroupId": "stock-empty-group",    "subject": "부산도너츠 재고 부족",  "message": "재고 부족",    "MessageAttributeProductId": "CP-502101",    "MessageAttributeFactoryId": "FF-500293"}'

##
sotck 채우기
curl --location --request POST 'https://t6e59okx0a.execute-api.ap-northeast-2.amazonaws.com/send' \
--header 'Content-Type: application/json' \
--data-raw '{
    "MessageGroupId": "stock-empty-group",
    "subject": "도넛-스테이츠 제품 입고",
    "message": "제품 입고",
    "MessageAttributeProductId": "CP-502101",
    "MessageAttributeProductCnt": "10",
    "MessageAttributeFactoryId": "FF-500293"
}'