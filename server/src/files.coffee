###
@api 		{post} 		/files/write 	Write a chunk
@apiName 	PostFilesWrite
@apiGroup 	Files

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.
@apiParam 								{String}    data					Data to write.

@apiSuccess (Success 201) 				{String} 	token					Current token.
###

###
@api 		{post} 		/files/chunk 	Get a chunk
@apiName 	PostFilesChunk
@apiGroup 	Files

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.
@apiParam 								{Int}    	line					Line/Chunk number (0: first).

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	data					Chunk content.

@apiError 	(Error 400 - notExists) 	{String} 	token					Current token.
@apiError 	(Error 400 - notExists)		{String} 	message					"notExists". This file does not exist.
###

###
@api 		{post} 		/files/read 	Get a chunk (alias)
@apiName 	PostFilesRead
@apiGroup 	Files

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.
@apiParam 								{Int}    	line					Line/Chunk number (0: first).

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	data					Chunk content.

@apiError 	(Error 400 - notExists) 	{String} 	token					Current token.
@apiError 	(Error 400 - notExists)		{String} 	message					"notExists". This file does not exist.
###

###
@api 		{post} 		/files/nbChunks 	Get number of chunks
@apiName 	PostFilesNbChunks
@apiGroup 	Files

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Int} 		data					Number of chunks.

@apiError 	(Error 400 - notExists) 	{String} 	token					Current token.
@apiError 	(Error 400 - notExists)		{String} 	message					"notExists". This file does not exist.
###

###
@api 		{post} 		/files/status 		Get file status
@apiName 	PostFilesStatus
@apiGroup 	Files

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	filename 				File name.
@apiParam 								{Int}    	folder_id				Folder ID.
@apiParam 								{Int}    	filesize				Filesize.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Int} 	 	data.status				0: not exists, 1: not completed, 2: completed.
@apiSuccess (Success 200) 				{Int} 		[data.line]				If file is not completed, last line number (0: first).

@apiError 	(Error 400 - quota) 		{String} 	token					Current token.
@apiError 	(Error 400 - quota)			{String} 	message					"quota". You need more storage to perform this action.
###

###
@api 		{post} 		/files/rename 		Rename a file
@apiName 	PostFilesRename
@apiGroup 	Files

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	old 					Old file name.
@apiParam 								{String}    new						New file name.
@apiParam 								{Int}    	folder_id				Folder ID.

@apiSuccess (Success 200) 				{String} 	token					Current token.

@apiError 	(Error 400 - exists) 		{String} 	token					Current token.
@apiError 	(Error 400 - exists)		{String} 	message					"exists". The new filename is already taken or the old file doesn't exist.
###
