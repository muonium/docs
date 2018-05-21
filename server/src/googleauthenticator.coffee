###
@api 		{post} 		/generateQRcode		Get QR code
@apiName 	GetQRCodeGoogleAuthenticator
@apiGroup 	GoogleAuthenticator

@apiParam   {String}    username 		Username.

@apiSuccess (Success 200) 			{Object} data
@apiSuccess (Success 200) 			{String} data.QRcode	QR code image in base 64.
@apiSuccess (Success 200) 			{String} data.secretKey	Secret key to register key in Google Authenticator.
@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "QRcode": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAABmJLR0QA/wD/AP+gvaeTAAAE/ElEQVR4nO3dzXLcNhCF0SiV939lZ5Eda8Twpz+QUp2ztGdIyL6FakJN4OvPnz9/wbS/nx4Av5NgkRAsEoJFQrBICBaJfz7+6dfX15rb7y92bIax+fCdvz11o/0P79sf1eB379zoju/+rcxYJASLhGCRECwSn4v3jcHfJ94pKrvvnvoBT5XJg88fd6z/HzRjkRAsEoJFQrBIHCreN+4sH9+58n5t2y1Mn1qXP3WpO5YN49qNzFgkBIuEYJEQLBJXivenDJbndxpj7gzjzvPHz2LGIiFYJASLhGCR+EnF+2Ar+lOl/WBz/eDvAwpmLBKCRUKwSAgWiSvF+9vqxP8MvpJ66kbL3qodtOBGZiwSgkVCsEgIFolDxftT7RzLCuF3ltgbg237C5ixSAgWCcEiIVgkvl61jN7tvjLYEb8xeKlTXvJI8R0zFgnBIiFYJASLxOfi/SVbGA4upu/ftyvAn2qqeXxbGzMWCcEiIVgkBIvEfNvMUzXmvsFNYAYL/1N/221Vv+/aM4QZi4RgkRAsEoJF4nPx3u2C8s7u8u511jsGN6MffEg6+G9lxiIhWCQEi4RgkfhcvJ8qZpdt8zI4qjsf3resBb7b137z4WvPAWYsEoJFQrBICBaJQy+sds0ty2r57g3VwWeXwfakwd9/XBuGGYuEYJEQLBKCRWKgeB+sIu9cefC7d7ykEeiUopfJjEVCsEgIFgnBInGobeaUwWr9TjvHnR6bbsv4/Q8PjqpbW9fzzpMEi4RgkRAsEod2mxk8Hqir5QeH8ZJOmGXHMBXvB5ixSAgWCcEiIVgkrrTNDDZQP3V20qlh/Ii+oKeaiKy8s5RgkRAsEoJFIi/ez41mVc/Jvu7545R3PgZZeedJgkVCsEgIFokrJ6z+zxUfOtFp2WGtP+I12sc3vzRjkRAsEoJFQrBIHOp539etvA/qNjrvNsEffGgYvJGVd54kWCQEi4RgkTi08r7xkkaRO1feWLYuf+pSyxQtN2YsEoJFQrBICBaJgZX3ja4jvlvFHnxoWLbry8uPnTJjkRAsEoJFQrBIfC7el+0NeepGT70Z263an9LtZ1l04puxSAgWCcEiIVgkDh3S9M6dFPc9Nchlu112B2mNMGORECwSgkVCsEgcapt56mzPO8NYdhrUqZ932ZlNp668MfI/aMYiIVgkBIuEYJEYeGH1znef2lfy1JWfOu9p/8r7ul9pHGTGIiFYJASLhGCROLTy3lXrd3re9290asxPLYjfeZnglPWNQGYsEoJFQrBICBaJ1Yc0De5FM7iovdEt8Q/e6CWv0X7HjEVCsEgIFgnBInGleP/1pX13PGnXxj7IVpG8l2CRECwSgkXic/H+lMFSt+s9H7RsO5313zVjkRAsEoJFQrBIHNoqsnPqsKTBA566Pv1lq/bdd/cvdZAZi4RgkRAsEoJFYuCF1VMG9y5f1mz+s7Z5WXyj75ixSAgWCcEiIVgkDhXvG93Ln6d0PSePH0964VLdjezzzosIFgnBIiFYJK4U78s81UXT1ePv3H2+eKvWjEVCsEgIFgnBIvHq4n3fndXzwQ3lH9+U8ch91w/SjEVCsEgIFgnBInGleF/WCdMd1jo4jI1lR1Ytq9a1zfAigkVCsEgIFolD+7x3un1dXtKYPzjmZV00TljlvQSLhGCRECwS79rnnV/DjEVCsEgIFgnBIiFYJASLhGCR+BeW576+sRiekwAAAABJRU5ErkJggg==",
        "secretKey": "ACBC66AAF554ABDAAAAA3AADCA5A6A5B"
    },
    "message": null,
    "token": null
}
###