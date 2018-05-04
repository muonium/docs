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

@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": [
        {
            "txn_id": "XDGHGTFHHBTH",
            "size": "10000000000",
            "price": 4,
            "currency": "EUR",
            "start": 0,
            "end": 1525104943,
            "removed": 0,
            "currency_symbol": "€"
        },
        {
            "txn_id": "XDGHGTFHHBTT",
            "size": "10000000000",
            "price": 4,
            "currency": "EUR",
            "start": 0,
            "end": 1525104943,
            "removed": 0,
            "currency_symbol": "€"
        }
    ],
    "message": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}
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
@apiSuccess (Success 200) 				{Object} 	data.plans.fields					An object containing data which have to be sent within the form (as hidden input with key as name and value as value).

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
					"ipn_url": "https://localhost/server/ipn",
					"success_url": "http://localhost/#/upgrade/?success=ok",
					"cancel_url": "",
					"custom": null,
					"want_shipping": "0"
				}
			}
		]
	},
	"message": null,
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}
###

###
@api 		{get} 		/upgrade/canSubscribe 			Can the user subscribe to a new offer?
@apiName 	GetCanSubscribe
@apiGroup 	Upgrade

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Boolean}	data.can_subscribe		true or false.
###

###
@api 		{get} 		/upgrade/hasSubscriptionActive 	Does the user have an active offer?
@apiName 	GetHasSubscriptionActive
@apiGroup 	Upgrade

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token				Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Boolean}	data.subscribed		true or false.
@apiSuccess (Success 200) 				{Int}	    [data.id_upgrade]	Upgrade ID.
###

###
@api 		{get} 		/upgrade/cancel 	Cancel the current offer
@apiName 	GetCancel
@apiGroup 	Upgrade

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token				Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Boolean}	data.canceled		true or false.
###

###
@api 		{get} 		/upgrade/hasSubscriptionEnded 	Does the current offer has ended?
@apiName 	GetHasSubscriptionEnded
@apiGroup 	Upgrade

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token				Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Boolean}	data.expired		true or false.
@apiSuccess (Success 200) 				{Int}	    [data.days_left]	Days left.
@apiSuccess (Success 200) 				{Boolean}	[data.expires_soon]	Expiration in less than 1 week?
###
