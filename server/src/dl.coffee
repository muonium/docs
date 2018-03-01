###
@api 		{get} 		/dl/:file 		Get file infos
@apiName 	GetDl
@apiGroup 	Dl

@apiHeader 								{String} 	[token] 				Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Int} 	 	data.uid				Owner ID.
@apiSuccess (Success 200) 				{String} 	data.login				Owner login.
@apiSuccess (Success 200) 				{String} 	data.name				File name.
@apiSuccess (Success 200) 				{Int} 		data.size				File size (in B).
@apiSuccess (Success 200) 				{Int} 		data.folder_id			Folder ID (0: root).
@apiSuccess (Success 200) 				{Int} 		data.fid				File ID.
@apiSuccess (Success 200) 				{Int} 		data.last_modification	Last modification (timestamp).
@apiSuccess (Success 200) 				{String} 	data.dk					DK.

@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "uid": 1,
        "login": "muonium",
        "name": "image.jpg",
        "size": 7182501,
        "folder_id": 10,
        "fid": 9,
        "last_modification": 1517246641,
        "dk": "ii0NdmwLXNXESMX5gqhUaXIhxYYS9OyZ5hoBBnXBTqZJJt8mNlHTvWG1E51Ua8b6:uITDWS7MpbCAJmgnzkNJOL==:gZKicsNMWPIAarNfcClvMQ==:H/pybbnUp9WQt13E22y1TQ=="
    },
    "message": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}

@apiError 	(Error 400 - notShared) 	{String} 	token					Current token.
@apiError 	(Error 400 - notShared)		{String} 	message					"notShared". This file is not shared.
###

###
@api 		{post} 		/dl/chunk 		Get a chunk
@apiName 	PostDlChunk
@apiGroup 	Dl

@apiHeader 								{String} 	[token] 				Token (Authorization: Bearer).

@apiParam 								{Int}    	uid 					Sharer ID.
@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.
@apiParam 								{Int}    	line					Line/Chunk number (0: first).

@apiParamExample {json} Request-Example:
{
	"uid": 1,
	"filename": "image.jpg",
	"folder_id": 10,
	"line": 0
}

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	data					Chunk content.

@apiError 	(Error 400 - notExists) 	{String} 	token					Current token.
@apiError 	(Error 400 - notExists)		{String} 	message					"notExists". This file does not exist.
###

###
@api 		{post} 		/dl/nbChunks 	Get number of chunks
@apiName 	PostDlNbChunks
@apiGroup 	Dl

@apiHeader 								{String} 	[token] 				Token (Authorization: Bearer).

@apiParam 								{Int}    	uid 					Sharer ID.
@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Int} 		data					Number of chunks.

@apiError 	(Error 400 - notExists) 	{String} 	token					Current token.
@apiError 	(Error 400 - notExists)		{String} 	message					"notExists". This file does not exist.
###
