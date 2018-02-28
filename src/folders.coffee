###
@api 		{post} 		/folders/add 		Add a folder
@apiName 	PostFoldersAdd
@apiGroup 	Folders

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	name 					Folder name.
@apiParam 								{Int} 		folder_id 				Folder ID where folder will be created.

@apiSuccess (Success 201) 				{String} 	token					Current token.
@apiSuccess (Success 201) 				{String} 	data					Folder ID.

@apiError 	(Error 400 - exists) 		{String} 	token					Current token.
@apiError 	(Error 400 - exists)		{String} 	message					"exists". This folder already exists.
###

###
@api 		{post} 		/folders/rename 	Rename folder
@apiName 	PostFoldersRename
@apiGroup 	Folders

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{String} 	old 					Old folder name.
@apiParam 								{String} 	new 					New folder name.
@apiParam								{Int} 		folder_id				Parent folder ID.

@apiSuccess (Success 200) 				{String} 	token					Current token.

@apiError 	(Error 400 - exists) 		{String} 	token					Current token.
@apiError 	(Error 400 - exists)		{String} 	message					"exists". This folder already exists.
###

###
@api 		{post} 		/folders/open 		Open a folder
@apiName 	PostFoldersOpen
@apiGroup 	Folders

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Int} 		folder_id				Folder ID.
@apiParam 								{Int} 		[trash]					1: View in trash.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{String} 	data.path				Folder path.
@apiSuccess (Success 200) 				{String} 	data.title				Title.
@apiSuccess (Success 200) 				{Int} 		data.stored				Global data stored (in B).
@apiSuccess (Success 200) 				{Int} 		data.quota				Global user storage (in B).
@apiSuccess (Success 200) 				{Object} 	data.files
@apiSuccess (Success 200) 				{Int} 		data.files.id			ID.
@apiSuccess (Success 200) 				{Boolean} 	data.files.is_shared	File shared?
@apiSuccess (Success 200) 				{String} 	data.files.name			File name.
@apiSuccess (Success 200) 				{Int} 		data.files.folder_id	Folder ID.
@apiSuccess (Success 200) 				{String} 	data.files.path			Path.
@apiSuccess (Success 200) 				{Boolean} 	data.files.is_completed	File completed?
@apiSuccess (Success 200) 				{Int} 		data.files.size			File size.
@apiSuccess (Success 200) 				{Int} 		data.files.lastmod		Last modification (timestamp).
@apiSuccess (Success 200) 				{String} 	data.files.url			Sharing link.
@apiSuccess (Success 200) 				{Object} 	data.folders
@apiSuccess (Success 200) 				{Int} 		data.folders.id			Folder ID.
@apiSuccess (Success 200) 				{String} 	data.folders.name		Folder name.
@apiSuccess (Success 200) 				{Int} 		data.folders.size		Folder size.
@apiSuccess (Success 200) 				{String} 	data.folders.path		Path.
@apiSuccess (Success 200) 				{Int} 		data.folders.parent		Parent folder ID.
@apiSuccess (Success 200) 				{Int} 		data.folders.nb_elements Number of elements.
###
