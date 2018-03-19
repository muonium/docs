###
@api 		{post} 		/bug			Send a bug report
@apiName 	PostBug
@apiGroup 	Bug

@apiParam 								{String} os 		Operating system.
@apiParam 								{String} browser 	Browser.
@apiParam 								{String} [version] 	Browser version.
@apiParam 								{String} message 	Message.

@apiSuccess (Success 200 - sent) 		{String} token		Current token.
@apiSuccess (Success 200 - sent) 		{String} message	"sent". Bug report sent.

@apiSuccess (Success 200 - wait) 		{String} token		Current token.
@apiSuccess (Success 200 - wait)		{String} message	"wait". Mail was not sent because a mail has been already sent recently.

@apiError 	(Error 400 - messageLength) {String} token		Current token.
@apiError 	(Error 400 - messageLength)	{String} message	"messageLength". Message must be at least 50 characters.
###
