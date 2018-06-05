###
@api 		  {post} 		/GoogleAuthenticator/generate		Get QR code, secrey key, and backup codes
@apiName 	PostGoogleAuthenticatorGenerate
@apiGroup GoogleAuthenticator

@apiSuccess (Success 200)   {String} 	 token               Current token.
@apiSuccess (Success 200)   {Object}     data
@apiSuccess (Success 200) 	{String}     data.QRcode         QR code image in base 64.
@apiSuccess (Success 200) 	{String}     data.secretKey	     Secret key to register key in Google Authenticator.
@apiSuccess (Success 200) 	{String[]}   data.backupCodes    10 backup codes.
@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "QRcode": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAABmJLR0QA/wD/AP+gvaeTAAAFbUlEQVR4nO3dwY6lNhRF0a4o///LnUEmSC1H5tnb8KK1hiUwVPeRyzKXy8/v379/wW5/PX0D/D8JFgnBIiFYJASLhGCRECwSgkVCsEgIFgnBIiFYJASLhGCRECwSgkVCsEj8/dlpPz8/e+/j169fo1rW0bVmal+v516Pnxnz7rm7xrl77t17u+uzGmMzFgnBIiFYJD5cY12tvOdzd02w652iu2udXfdTrIFGTv6//MmMRUKwSAgWiQ1rrKu7ezx3x7m7rzNz7sx17455d49qZNce1a7/l3lmLBKCRUKwSGxeY9VG64CV9cHKmq9+/jizLnwnMxYJwSIhWCS+YI1VP9e7O+bd/bNdY6787ueZsUgIFgnBIrF5jVX8vV95xjdzTFF3NeNkLdr5dZgZi4RgkRAsEhvWWHUd9919o+LZ3N39qpX3AVd+PrqH88xYJASLhGCR+Hnnk6ai38Gu+5m57uiY0Zgr67Z3MmORECwSgkXiwzVW0Z+pXovs2qO6e62rlT2nldr8Gd4r5AsIFgnBIhHWYxX7OkUPguK9wl21U9cx636ke2vqzVgkBIuEYJEI97FW/t7v2tMaqeuuZo6/evMzzc+YsUgIFgnBInFojTVz7sy1RoqarfqZ48n6rZFuLWvGIiFYJASLxIfPCovv8a1ca8auc+/+/O7vW+yl3X3+uM6MRUKwSAgWiQ37WFcn36Er6sRPHl/0Zdi1xl1fb5mxSAgWCcEisbl3Q/0Nvjfvge3qR/XU+5V7mbFICBYJwSLx4bPCXb0JVmqh7tr1DZyn9s92nTsz5pV6LF5EsEgIFolD+1j1e4Iz9zBzPzNj7tpLu3s/xT7W3XuYZ8YiIVgkBIvEhn2smTrrkbd9N6Z+3rdy3V3fCJoZc3TMPDMWCcEiIVgkNrxXOFI875uxaz+mqP3a9cxxV08y7xXyZQSLhGCReKDm/erN/bFG97CrT32xhiv6aNjH4kUEi4RgkXhRPdbIU/0gijr30bVmxjlTR/XntayxeBHBIiFYJMI11lO9Q4u1yMmasLexxuJFBIuEYJHYvMaaumTcE2vm3Kf2nO4qxj/TK8uMRUKwSAgWic3fKyzOLdYrTz03rL/zWNTDfcaMRUKwSAgWiQ37WCs15ru+GzNz/IyTterF/YyOmbkf+1h8AcEiIVgkHvhe4d3ji3cPV8492eP07jGj40e8V8iXESwSgkUirMeq1w1F//TRuSf7o9a1+WeYsUgIFgnBIrG5z/vJ/ky7aqpW+nbO2NWffWUNd7Lvw7/MWCQEi4Rgkdj8rHDFyX2soua96NE149leoyNmLBKCRUKwSBx6r7Co3yq+1XOynmxXXdc769/NWCQEi4Rgkdi8xjrZJ31FUSu2cq1izGf/zc1YJASLhGCR+LAea0bR83NkV336yv3U30Ncudau2q95ZiwSgkVCsEhsXmPV/UiL9cfdNcro3BnF3tjdn+uPxRcTLBKCReKBb+nMqL97s3JMrdj3Ol8Lb8YiIVgkBIvEht4Nu1z/lp9cZ8zcT91rvu4fNrqWfSy+jGCRECwSD3yvcGack/XaJ/e0iueD9Xud9rF4EcEiIVgkNtdjveH9wZPvDO7qfToyM85TzzT/mxmLhGCRECwS4XuFu5x8J+7untbourt63+96D2Bk5v4/Y8YiIVgkBIvEF6yxrlZ6E8yMszJmPc5I0XN1nRmLhGCRECwSD/dumBmn6FHe7d98dj8r4+yq99cfiy8gWCQEi8SGNVa9N3P3Od2u617N1F3V31J8ql/8Z8xYJASLhGCReGl/LL6dGYuEYJEQLBKCRUKwSAgWCcEiIVgkBIuEYJEQLBKCRUKwSAgWCcEiIVgkBIvEPwF5xm/sFKlrAAAAAElFTkSuQmCC",
        "secretKey": "GY4GIN3FGM3TQZTFGFRWKZLGMMZWMNRR",
        "backupCodes": [
            "8LgtxIgOvt",
            "LrLmeryfCq",
            "ytqt1RBbEM",
            "CEF4rsN4yI",
            "fBU0K3Zrwe",
            "KAgvEydHGW",
            "4ajP5KvOWM",
            "IZS8WXC7CO",
            "mBJ8QUK1gU",
            "E4nUSomNqx"
        ]
    },
    "message": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}
###

###
@api 		  {get} 		/GoogleAuthenticator/backupCodes		Get backup codes
@apiName 	GetGoogleAuthenticatorBackupCodes
@apiGroup GoogleAuthenticator

@apiParam   {String}    code 		Code generated by Google Authenticator to access backup codes.

@apiSuccess (Success 200)   {String} 	 token               Current token.
@apiSuccess (Success 200)   {Object}     data
@apiSuccess (Success 200) 	{String[]}   data.backupCodes    Backup codes.
@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "backupCodes": [
            "8LgtxIgOvt",
            "LrLmeryfCq",
            "ytqt1RBbEM",
            "CEF4rsN4yI",
            "fBU0K3Zrwe",
            "KAgvEydHGW",
            "4ajP5KvOWM",
            "IZS8WXC7CO",
            "mBJ8QUK1gU",
            "E4nUSomNqx"
        ]
    },
    "message": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}

@apiError 	(Error 403 - badCode) 	{String} 	token					Current token.
@apiError 	(Error 403 - badCode)		{String} 	message				"badCode".

@apiError 	(Error 401 - notDoubleAuthGA) 	{String} 	token					Current token.
@apiError 	(Error 401 - notDoubleAuthGA)		{String} 	message				"notDoubleAuthGA".
###

###
@api 		  {post} 		/GoogleAuthenticator/regenerateBackupCodes		Regenrate and get backup codes
@apiName 	PostGoogleAuthenticatorRegenerateBackupCodes
@apiGroup GoogleAuthenticator

@apiParam   {String}    code 		Code generated by Google Authenticator to regenerate backup codes.

@apiSuccess (Success 200)   {String} 	 token               Current token.
@apiSuccess (Success 200)   {Object}     data
@apiSuccess (Success 200) 	{String[]}   data.backupCodes    Backup codes.
@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "backupCodes": [
            "8LgtxIgOvt",
            "LrLmeryfCq",
            "ytqt1RBbEM",
            "CEF4rsN4yI",
            "fBU0K3Zrwe",
            "KAgvEydHGW",
            "4ajP5KvOWM",
            "IZS8WXC7CO",
            "mBJ8QUK1gU",
            "E4nUSomNqx"
        ]
    },
    "message": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}

@apiError 	(Error 403 - badCode) 	{String} 	token					Current token.
@apiError 	(Error 403 - badCode)		{String} 	message				"badCode".

@apiError 	(Error 401 - notDoubleAuthGA) 	{String} 	token					Current token.
@apiError 	(Error 401 - notDoubleAuthGA)		{String} 	message				"notDoubleAuthGA".
###
