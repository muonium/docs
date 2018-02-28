###
@api 		{post} 		/rm 			Remove file(s)/folder(s)
@apiName 	PostRm
@apiGroup 	Rm

@apiHeader 								{String} token 						Token (Authorization: Bearer).

@apiParam 								{Object[]} 	[files]					Array of objects related to files containing:
@apiParam 								{Int} 		files.id				File ID.
@apiParam 								{Int} 		files.folder_id			Folder ID.
@apiParam 								{Object[]}  [folders]				Array of objects related to folders containing:
@apiParam 								{Int} 		folders.id				Folder ID.
@apiParam 								{Int} 		folders.parent			Parent folder ID.

@apiParamExample {json} Request-Example:
{
	"files": [
		{"id": 10, "folder_id": 0},
		{"id": 11, "folder_id": 1}
	],
	"folders": [
		{"id": 25, "parent": 0},
		{"id": 12, "parent": 1}
	]
}

@apiSuccess (Success 200) 				{String} 	token					Current token.
###
