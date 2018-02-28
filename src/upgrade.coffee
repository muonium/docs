###
@api 		{get} 		/upgrade/history 			Get upgrade history
@apiName 	GetHistory
@apiGroup 	Upgrade

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Object[]} 	data					Array of objects containing:
@apiSuccess (Success 200) 				{String}	data.txn_id				Transaction id.
@apiSuccess (Success 200) 				{Int} 		data.size				Amount of storage obtained with this offer in B.
@apiSuccess (Success 200) 				{Float} 	data.price				Price.
@apiSuccess (Success 200) 				{String} 	data.currency			Currency (ISO 4217).
@apiSuccess (Success 200) 				{String} 	data.currency_symbol	Currency (symbol).
@apiSuccess (Success 200) 				{Int} 	 	data.start				Timestamp which corresponds to subscription date.
@apiSuccess (Success 200) 				{Int} 	 	data.end				Timestamp which corresponds to upgrade expiration.
@apiSuccess (Success 200) 				{Int} 	 	data.removed			0: no, 1: yes.
###

###
@api 		{get} 		/upgrade/plans 			Get available plans/offers
@apiName 	GetPlans
@apiGroup 	Upgrade

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token						Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{String}	data.endpoint				Endpoint. You have to create a form for each offer which targets this endpoint.
@apiSuccess (Success 200) 				{Object[]} 	data.plans					Array of objects containing:
@apiSuccess (Success 200) 				{Int} 		data.plans.size				Amount of storage for this offer in B.
@apiSuccess (Success 200) 				{Float} 	data.plans.price			Price.
@apiSuccess (Success 200) 				{String} 	data.plans.currency			Currency (ISO 4217).
@apiSuccess (Success 200) 				{String} 	data.plans.currency_symbol	Currency (symbol).
@apiSuccess (Success 200) 				{Int} 		data.plans.duration			Duration in months.
@apiSuccess (Success 200) 				{String} 	data.plans.product_id		Product ID.
@apiSuccess (Success 200) 				{Object} 	data.fields					An object containing data which have to be sent within the form (as hidden input with key as name and value as value).

@apiSuccessExample {json} Success-Response:
{
	"code": 200,
	"status": "success",
	"data": {
		"endpoint": "https://www.coinpayments.net/index.php",
		"plans": [
			{
				"size": "10000000000",
				"price": 4,
				"currency": "eur",
				"duration": 6,
				"product_id": "PGVG4FRY3EDKG",
				"fields": {
					"cmd": "_pay_simple",
					"merchant": "2df67e134da679931d3cd7baa62496d0",
					"item_name": "10 GB - 4 EUR - 6 months",
					"item_number": "PGVG4FRY3EDKG",
					"currency": "eur",
					"amountf": 4,
					"ipn_url": "https://mui.cloud/core/IPN",
					"success_url": "http://localhost/server/upgrade/?success=ok",
					"cancel_url": "",
					"custom": null,
					"want_shipping": "0"
				}
			}
		]
	},
	"message": null,
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE1MTg3Njk4NjUsImp0aSI6InB0SFhYbm1QS1lcL0plaUNQUTRncjZyY1lcL0ROMU55R2hLOVNkK3REZTF0UT0iLCJpc3MiOiJsb2NhbGhvc3QiLCJuYmYiOjE1MTg3Njk4NjUsImV4cCI6MTUxODc3MTA2NSwiZGF0YSI6eyJ1aWQiOjd9fQ.obS-Ow3jFFPT0sfUupt8l6ndD-l6VY58Ex0wtRreCoT-FyQUBWedtDQI_vGDsxfg"
}
###
