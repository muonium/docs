define({ "api": [
  {
    "type": "post",
    "url": "/bug",
    "title": "Send a bug report",
    "name": "PostBug",
    "group": "Bug",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os",
            "description": "<p>Operating system.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "browser",
            "description": "<p>Browser.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>Browser version.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - sent": [
          {
            "group": "Success 200 - sent",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200 - sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;sent&quot;. Bug report sent.</p>"
          }
        ],
        "Success 200 - wait": [
          {
            "group": "Success 200 - wait",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200 - wait",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;wait&quot;. Mail was not sent because a mail has been already sent recently.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - messageLength": [
          {
            "group": "Error 400 - messageLength",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - messageLength",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;messageLength&quot;. Message must be at least 50 characters.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/bug.coffee",
    "groupTitle": "Bug"
  },
  {
    "type": "get",
    "url": "/dl/:file",
    "title": "Get file infos",
    "name": "GetDl",
    "group": "Dl",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.uid",
            "description": "<p>Owner ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.login",
            "description": "<p>Owner login.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.size",
            "description": "<p>File size (in B).</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.folder_id",
            "description": "<p>Folder ID (0: root).</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.fid",
            "description": "<p>File ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.last_modification",
            "description": "<p>Last modification (timestamp).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.dk",
            "description": "<p>DK.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"uid\": 1,\n        \"login\": \"muonium\",\n        \"name\": \"image.jpg\",\n        \"size\": 7182501,\n        \"folder_id\": 10,\n        \"fid\": 9,\n        \"last_modification\": 1517246641,\n        \"dk\": \"ii0NdmwLXNXESMX5gqhUaXIhxYYS9OyZ5hoBBnXBTqZJJt8mNlHTvWG1E51Ua8b6:uITDWS7MpbCAJmgnzkNJOL==:gZKicsNMWPIAarNfcClvMQ==:H/pybbnUp9WQt13E22y1TQ==\"\n    },\n    \"message\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400 - notShared": [
          {
            "group": "Error 400 - notShared",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - notShared",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;notShared&quot;. This file is not shared.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/dl.coffee",
    "groupTitle": "Dl"
  },
  {
    "type": "post",
    "url": "/dl/chunk",
    "title": "Get a chunk",
    "name": "PostDlChunk",
    "group": "Dl",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>Sharer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "line",
            "description": "<p>Line/Chunk number (0: first).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"uid\": 1,\n\"filename\": \"image.jpg\",\n\"folder_id\": 10,\n\"line\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Chunk content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - notExists": [
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;notExists&quot;. This file does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/dl.coffee",
    "groupTitle": "Dl"
  },
  {
    "type": "post",
    "url": "/dl/nbChunks",
    "title": "Get number of chunks",
    "name": "PostDlNbChunks",
    "group": "Dl",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>Sharer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data",
            "description": "<p>Number of chunks.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - notExists": [
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;notExists&quot;. This file does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/dl.coffee",
    "groupTitle": "Dl"
  },
  {
    "type": "post",
    "url": "/files/chunk",
    "title": "Get a chunk",
    "name": "PostFilesChunk",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "line",
            "description": "<p>Line/Chunk number (0: first).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"filename\": \"image.jpg\",\n\"folder_id\": 10,\n\"line\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Chunk content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - notExists": [
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;notExists&quot;. This file does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/files.coffee",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/files/nbChunks",
    "title": "Get number of chunks",
    "name": "PostFilesNbChunks",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data",
            "description": "<p>Number of chunks.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - notExists": [
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;notExists&quot;. This file does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/files.coffee",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/files/read",
    "title": "Get a chunk (alias)",
    "name": "PostFilesRead",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "line",
            "description": "<p>Line/Chunk number (0: first).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Chunk content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - notExists": [
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - notExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;notExists&quot;. This file does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/files.coffee",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/files/rename",
    "title": "Rename a file",
    "name": "PostFilesRename",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old",
            "description": "<p>Old file name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new",
            "description": "<p>New file name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - exists": [
          {
            "group": "Error 400 - exists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - exists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;exists&quot;. The new filename is already taken or the old file doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/files.coffee",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/files/status",
    "title": "Get file status",
    "name": "PostFilesStatus",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "filesize",
            "description": "<p>Filesize.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"filename\": \"not_completed.mp4\",\n\"folder_id\": 0,\n\"filesize\": 512824\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.status",
            "description": "<p>0: not exists, 1: not completed, 2: completed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": true,
            "field": "data.line",
            "description": "<p>If file is not completed, last line number (0: first).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"status\": 1,\n        \"line\": 0\n    },\n    \"message\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400 - quota": [
          {
            "group": "Error 400 - quota",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - quota",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;quota&quot;. You need more storage to perform this action.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/files.coffee",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/files/write",
    "title": "Write a chunk",
    "name": "PostFilesWrite",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data to write.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/files.coffee",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/folders/add",
    "title": "Add a folder",
    "name": "PostFoldersAdd",
    "group": "Folders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Folder name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID where folder will be created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"name\": \"myfolder\",\n\"folder_id\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Folder ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 201,\n    \"status\": \"success\",\n    \"data\": 11,\n    \"message\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400 - exists": [
          {
            "group": "Error 400 - exists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - exists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;exists&quot;. This folder already exists.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/folders.coffee",
    "groupTitle": "Folders"
  },
  {
    "type": "post",
    "url": "/folders/open",
    "title": "Open a folder",
    "name": "PostFoldersOpen",
    "group": "Folders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "trash",
            "description": "<p>1: View in trash.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>Folder path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>Title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.stored",
            "description": "<p>Global data stored (in B).</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.quota",
            "description": "<p>Global user storage (in B).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.files",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.files.id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.files.is_shared",
            "description": "<p>File shared?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.files.name",
            "description": "<p>File name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.files.folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.files.path",
            "description": "<p>Path.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.files.is_completed",
            "description": "<p>File completed?</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.files.size",
            "description": "<p>File size.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.files.lastmod",
            "description": "<p>Last modification (timestamp).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.files.url",
            "description": "<p>Encoded ID for a file in order to share download link (for a webclient, you will have to put absolute URL to download route before it)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.folders",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.folders.id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.folders.name",
            "description": "<p>Folder name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.folders.size",
            "description": "<p>Folder size.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.folders.path",
            "description": "<p>Path.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.folders.parent",
            "description": "<p>Parent folder ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.folders.nb_elements",
            "description": "<p>Number of elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"path\": \"\",\n        \"title\": \"Home\",\n        \"stored\": 1868896678,\n        \"quota\": 2000000000,\n        \"folders\": [\n            {\n                \"id\": 1,\n                \"name\": \"mui\",\n                \"size\": 14445384,\n                \"path\": \"\",\n                \"parent\": 0,\n                \"nb_elements\": 10\n            },\n            {\n                \"id\": 10,\n                \"name\": \"myfolder\",\n                \"size\": 1685600766,\n                \"path\": \"\",\n                \"parent\": 0,\n                \"nb_elements\": 12\n            }\n        ],\n        \"files\": [\n            {\n                \"id\": 9,\n                \"is_shared\": true,\n                \"name\": \"image.jpg\",\n                \"folder_id\": 0,\n                \"path\": \"\",\n                \"is_completed\": true,\n                \"size\": 7811581,\n                \"lastmod\": 1519824137,\n                \"url\": \"OQ\"\n            },\n            {\n                \"id\": 14,\n                \"is_shared\": false,\n                \"name\": \"image2.jpg\",\n                \"folder_id\": 0,\n                \"path\": \"\",\n                \"is_completed\": true,\n                \"size\": 9209782,\n                \"lastmod\": 1517567397,\n                \"url\": \"MTQ\"\n            },\n            {\n                \"id\": 15,\n                \"is_shared\": true,\n                \"name\": \"video.mp4\",\n                \"folder_id\": 0,\n                \"path\": \"\",\n                \"is_completed\": true,\n                \"size\": 7182501,\n                \"lastmod\": 1517246641,\n                \"url\": \"MTU\"\n            }\n        ]\n    },\n    \"message\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/folders.coffee",
    "groupTitle": "Folders"
  },
  {
    "type": "post",
    "url": "/folders/rename",
    "title": "Rename folder",
    "name": "PostFoldersRename",
    "group": "Folders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old",
            "description": "<p>Old folder name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new",
            "description": "<p>New folder name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Parent folder ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - exists": [
          {
            "group": "Error 400 - exists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - exists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;exists&quot;. This folder already exists.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/folders.coffee",
    "groupTitle": "Folders"
  },
  {
    "type": "get",
    "url": "/home/languages",
    "title": "Get available languages",
    "name": "GetHomeLanguages",
    "group": "Home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>An object containing languages (key: code, value: language name)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"en\": \"English\",\n        \"de\": \"Deutsch\",\n        \"es\": \"Español\",\n        \"fr\": \"Français\",\n        \"it\": \"Italiano\",\n        \"pl\": \"Polskie\",\n        \"ru\": \"Русский\",\n        \"zh-cn\": \"简体中文\"\n    },\n    \"message\": null,\n    \"token\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/home.coffee",
    "groupTitle": "Home"
  },
  {
    "type": "get",
    "url": "/lostpass/key/:uid/:key",
    "title": "Verifying with uid/key in URL",
    "name": "GetLostpassKey",
    "group": "Lostpass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Lostpass key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;ok&quot;. The key is correct.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - differentKey": [
          {
            "group": "Error 400 - differentKey",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;differentKey&quot;. Lostpass key is different than key sent.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/lostpass.coffee",
    "groupTitle": "Lostpass"
  },
  {
    "type": "post",
    "url": "/lostpass",
    "title": "Change password",
    "name": "PostLostpass",
    "group": "Lostpass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Lostpass key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password already hashed with mui_hash.js. You have to check length and if password confirm match in client side.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - updated": [
          {
            "group": "Success 200 - updated",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;updated&quot;. Password was updated successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - differentKey": [
          {
            "group": "Error 400 - differentKey",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;differentKey&quot;. Lostpass key is different than key sent.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/lostpass.coffee",
    "groupTitle": "Lostpass"
  },
  {
    "type": "post",
    "url": "/lostpass/key",
    "title": "Verifying with uid/key",
    "name": "PostLostpassKey",
    "group": "Lostpass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Lostpass key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;ok&quot;. The key is correct.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - differentKey": [
          {
            "group": "Error 400 - differentKey",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;differentKey&quot;. Lostpass key is different than key sent.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/lostpass.coffee",
    "groupTitle": "Lostpass"
  },
  {
    "type": "post",
    "url": "/lostpass/mail",
    "title": "Send a lost pass mail",
    "name": "PostLostpassMail",
    "group": "Lostpass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "uid",
            "description": "<p>User id, if not specified, you must send username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Login or email, if not specified, you must send uid.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - sent": [
          {
            "group": "Success 200 - sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;sent&quot;. Mail sent successfully.</p>"
          },
          {
            "group": "Success 200 - sent",
            "type": "Int",
            "optional": false,
            "field": "data",
            "description": "<p>UID.</p>"
          }
        ],
        "Success 200 - wait": [
          {
            "group": "Success 200 - wait",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;wait&quot;. Mail was not sent because a mail has been already sent recently.</p>"
          },
          {
            "group": "Success 200 - wait",
            "type": "Int",
            "optional": false,
            "field": "data",
            "description": "<p>UID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - unknownUser": [
          {
            "group": "Error 400 - unknownUser",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;unknownUser&quot;. This user does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/lostpass.coffee",
    "groupTitle": "Lostpass"
  },
  {
    "type": "post",
    "url": "/mv",
    "title": "Move file(s)/folder(s) (or a copy of them) to a folder",
    "name": "PostMv",
    "group": "Mv",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "copy",
            "description": "<p>0: cut, 1: copy</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "files",
            "description": "<p>Array of files ID from old_folder to move (they must not be in the trash).</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "folders",
            "description": "<p>Array of folders ID from old_folder to move (they must not be in the trash).</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "old_folder_id",
            "description": "<p>Move from this folder ID (default: 0).</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Move to this folder ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"copy\": 1,\n\"files\": [1, 4, 8],\n\"folders\": [10],\n\"old_folder_id\": 1,\n\"folder_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;ok&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.warning",
            "description": "<p>Can contains some warnings. &quot;badFilename&quot;: unable to find at least one file, &quot;badFoldername&quot;: unable to find at least one folder, &quot;move&quot;: unable to move at least one file/folder, &quot;copy&quot;: unable to copy at least one file/folder, &quot;isAChild&quot;: unable to move to dest folder because it is a child of cut folder.</p>"
          }
        ],
        "Error 400 - quota": [
          {
            "group": "Error 400 - quota",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - quota",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;quota&quot;. You need more storage to perform this action.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/mv.coffee",
    "groupTitle": "Mv"
  },
  {
    "type": "post",
    "url": "/rm",
    "title": "Remove file(s)/folder(s)",
    "name": "PostRm",
    "group": "Rm",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "files",
            "description": "<p>Array of objects related to files containing:</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "files.id",
            "description": "<p>File ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "files.folder_id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "folders",
            "description": "<p>Array of objects related to folders containing:</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folders.id",
            "description": "<p>Folder ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "folders.parent",
            "description": "<p>Parent folder ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"files\": [\n{\"id\": 10, \"folder_id\": 0},\n{\"id\": 11, \"folder_id\": 1}\n],\n\"folders\": [\n{\"id\": 25, \"parent\": 0},\n{\"id\": 12, \"parent\": 1}\n]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/rm.coffee",
    "groupTitle": "Rm"
  },
  {
    "type": "delete",
    "url": "/session",
    "title": "Delete the session",
    "name": "DeleteSession",
    "group": "Session",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;removeToken&quot;. Token has to be removed from client.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/session.coffee",
    "groupTitle": "Session"
  },
  {
    "type": "delete",
    "url": "/session/all",
    "title": "Delete all sessions",
    "name": "DeleteSessionAll",
    "group": "Session",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;removeToken&quot;. Token has to be removed from client.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/session.coffee",
    "groupTitle": "Session"
  },
  {
    "type": "delete",
    "url": "/session/jti/:jti",
    "title": "Delete the session with jti",
    "description": "<p>Jti is a base64 string, in order to pass it in the url, base64url standard must be respected (- instead + and _ instead /)</p>",
    "name": "DeleteSessionJti",
    "group": "Session",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>&quot;removeToken&quot;. Token has to be removed from client.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/session.coffee",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/session",
    "title": "Get UID and list of sessions from token",
    "name": "GetSession",
    "group": "Session",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.tokens",
            "description": "<p>List of sessions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokens.jti",
            "description": "<p>Token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.tokens.iat",
            "description": "<p>Issued at.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.tokens.current",
            "description": "<p>Current session?</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/session.coffee",
    "groupTitle": "Session"
  },
  {
    "type": "post",
    "url": "/session",
    "title": "API Authentication",
    "name": "PostSession",
    "group": "Session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username (or email).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password already hashed with mui_hash.js.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - Ok": [
          {
            "group": "Success 200 - Ok",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated token</p>"
          },
          {
            "group": "Success 200 - Ok",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200 - Ok",
            "type": "String",
            "optional": false,
            "field": "data.cek",
            "description": "<p>CEK.</p>"
          },
          {
            "group": "Success 200 - Ok",
            "type": "Int",
            "optional": false,
            "field": "data.uid",
            "description": "<p>UID.</p>"
          }
        ],
        "Success 200 - doubleAuth": [
          {
            "group": "Success 200 - doubleAuth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;doubleAuth&quot;. 2-factor authentication is enabled, credentials are valid but you need to send them again with code sent by mail.</p>"
          },
          {
            "group": "Success 200 - doubleAuth",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200 - doubleAuth",
            "type": "String",
            "optional": false,
            "field": "data.cek",
            "description": "<p>CEK.</p>"
          },
          {
            "group": "Success 200 - doubleAuth",
            "type": "Int",
            "optional": false,
            "field": "data.uid",
            "description": "<p>UID.</p>"
          }
        ],
        "Success 200 - wait": [
          {
            "group": "Success 200 - wait",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;wait&quot;. 2-factor authentication is enabled, credentials are valid but you need to send them again with code sent by mail. Mail was not sent because a mail has been already sent recently.</p>"
          },
          {
            "group": "Success 200 - wait",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200 - wait",
            "type": "String",
            "optional": false,
            "field": "data.cek",
            "description": "<p>CEK.</p>"
          },
          {
            "group": "Success 200 - wait",
            "type": "Int",
            "optional": false,
            "field": "data.uid",
            "description": "<p>UID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401 - validate": [
          {
            "group": "Error 401 - validate",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;validate&quot;. Account is not validated but credentials are valid.</p>"
          },
          {
            "group": "Error 401 - validate",
            "type": "Int",
            "optional": false,
            "field": "data",
            "description": "<p>UID.</p>"
          }
        ],
        "Error 401 - badUser": [
          {
            "group": "Error 401 - badUser",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;badUser&quot;. User does not exist.</p>"
          }
        ],
        "Error 401 - badPass": [
          {
            "group": "Error 401 - badPass",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;badPass&quot;. User exists but incorrect password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/session.coffee",
    "groupTitle": "Session"
  },
  {
    "type": "post",
    "url": "/session/authcode",
    "title": "2-factor API Authentication",
    "name": "PostSessionAuthCode",
    "group": "Session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password already hashed with mui_hash.js.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent by mail.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - Ok": [
          {
            "group": "Success 200 - Ok",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated token</p>"
          },
          {
            "group": "Success 200 - Ok",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200 - Ok",
            "type": "String",
            "optional": false,
            "field": "data.cek",
            "description": "<p>CEK.</p>"
          },
          {
            "group": "Success 200 - Ok",
            "type": "Int",
            "optional": false,
            "field": "data.uid",
            "description": "<p>UID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401 - validate": [
          {
            "group": "Error 401 - validate",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;validate&quot;. Account is not validated but credentials are valid.</p>"
          },
          {
            "group": "Error 401 - validate",
            "type": "Int",
            "optional": false,
            "field": "data",
            "description": "<p>UID.</p>"
          }
        ],
        "Error 401 - badCode": [
          {
            "group": "Error 401 - badCode",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;badCode&quot;. User exists but incorrect code.</p>"
          }
        ],
        "Error 401 - badPass": [
          {
            "group": "Error 401 - badPass",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;badPass&quot;. User exists but incorrect password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/session.coffee",
    "groupTitle": "Session"
  },
  {
    "type": "delete",
    "url": "/share/id/:id",
    "title": "Unshare a file",
    "name": "DeleteShare",
    "group": "Share",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/share.coffee",
    "groupTitle": "Share"
  },
  {
    "type": "post",
    "url": "/share",
    "title": "Share a file",
    "name": "PostShare",
    "group": "Share",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>File ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dk",
            "description": "<p>DK.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Sharing link.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/share.coffee",
    "groupTitle": "Share"
  },
  {
    "type": "post",
    "url": "/trash/from",
    "title": "Restore file(s)/folder(s) from trash",
    "name": "PostTrashFrom",
    "group": "Trash",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "files",
            "description": "<p>Array of file ID to move.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "folders",
            "description": "<p>Array of folder ID to move.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;moved&quot;.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/trash.coffee",
    "groupTitle": "Trash"
  },
  {
    "type": "post",
    "url": "/trash/to",
    "title": "Move file(s)/folder(s) to trash",
    "name": "PostTrashTo",
    "group": "Trash",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "files",
            "description": "<p>Array of file ID to move.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "folders",
            "description": "<p>Array of folder ID to move.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;moved&quot;.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/trash.coffee",
    "groupTitle": "Trash"
  },
  {
    "type": "get",
    "url": "/upgrade/canSubscribe",
    "title": "Can the user subscribe to a new offer?",
    "name": "GetCanSubscribe",
    "group": "Upgrade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.can_subscribe",
            "description": "<p>true or false.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/upgrade.coffee",
    "groupTitle": "Upgrade"
  },
  {
    "type": "get",
    "url": "/upgrade/cancel",
    "title": "Cancel the current offer",
    "name": "GetCancel",
    "group": "Upgrade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.canceled",
            "description": "<p>true or false.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/upgrade.coffee",
    "groupTitle": "Upgrade"
  },
  {
    "type": "get",
    "url": "/upgrade/hasSubscriptionActive",
    "title": "Does the user have an active offer?",
    "name": "GetHasSubscriptionActive",
    "group": "Upgrade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.subscribed",
            "description": "<p>true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": true,
            "field": "data.id_upgrade",
            "description": "<p>Upgrade ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/upgrade.coffee",
    "groupTitle": "Upgrade"
  },
  {
    "type": "get",
    "url": "/upgrade/hasSubscriptionEnded",
    "title": "Does the current offer has ended?",
    "name": "GetHasSubscriptionEnded",
    "group": "Upgrade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.expired",
            "description": "<p>true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": true,
            "field": "data.days_left",
            "description": "<p>Days left.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "data.expires_soon",
            "description": "<p>Expiration in less than 1 week?</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/upgrade.coffee",
    "groupTitle": "Upgrade"
  },
  {
    "type": "get",
    "url": "/upgrade/history",
    "title": "Get upgrade history",
    "name": "GetHistory",
    "group": "Upgrade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of objects containing:</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.txn_id",
            "description": "<p>Transaction id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.size",
            "description": "<p>Amount of storage obtained with this offer in B.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.price",
            "description": "<p>Price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.currency",
            "description": "<p>Currency (ISO 4217).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.currency_symbol",
            "description": "<p>Currency (symbol).</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.start",
            "description": "<p>Timestamp which corresponds to subscription date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.end",
            "description": "<p>Timestamp which corresponds to upgrade expiration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.removed",
            "description": "<p>0: no, 1: yes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"txn_id\": \"XDGHGTFHHBTH\",\n            \"size\": \"10000000000\",\n            \"price\": 4,\n            \"currency\": \"EUR\",\n            \"start\": 0,\n            \"end\": 1525104943,\n            \"removed\": 0,\n            \"currency_symbol\": \"€\"\n        },\n        {\n            \"txn_id\": \"XDGHGTFHHBTT\",\n            \"size\": \"10000000000\",\n            \"price\": 4,\n            \"currency\": \"EUR\",\n            \"start\": 0,\n            \"end\": 1525104943,\n            \"removed\": 0,\n            \"currency_symbol\": \"€\"\n        }\n    ],\n    \"message\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/upgrade.coffee",
    "groupTitle": "Upgrade"
  },
  {
    "type": "get",
    "url": "/upgrade/plans",
    "title": "Get available plans/offers",
    "name": "GetPlans",
    "group": "Upgrade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.endpoint",
            "description": "<p>Endpoint. You have to create a form for each offer which targets this endpoint.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.plans",
            "description": "<p>Array of objects containing:</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.plans.size",
            "description": "<p>Amount of storage for this offer in B.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.plans.price",
            "description": "<p>Price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.plans.currency",
            "description": "<p>Currency (ISO 4217).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.plans.currency_symbol",
            "description": "<p>Currency (symbol).</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.plans.duration",
            "description": "<p>Duration in months.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.plans.product_id",
            "description": "<p>Product ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.plans.fields",
            "description": "<p>An object containing data which have to be sent within the form (as hidden input with key as name and value as value). You will have to add manually an hidden input for success (success_url) and cancel URL (cancel_url) (as it may change according to client used)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"data\": {\n\"endpoint\": \"https://www.coinpayments.net/index.php\",\n\"plans\": [\n{\n\"size\": \"10000000000\",\n\"price\": 4,\n\"currency\": \"eur\",\n\"duration\": 6,\n\"product_id\": \"PGVG4FRY3EDKG\",\n\"fields\": {\n\"cmd\": \"_pay_simple\",\n\"merchant\": \"2df67e134da679931d3cd7baa62496d0\",\n\"item_name\": \"10 GB - 4 EUR - 6 months\",\n\"item_number\": \"PGVG4FRY3EDKG\",\n\"currency\": \"eur\",\n\"amountf\": 4,\n\"ipn_url\": \"https://localhost/server/ipn\",\n\"custom\": null,\n\"want_shipping\": \"0\"\n}\n}\n]\n},\n\"message\": null,\n\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/upgrade.coffee",
    "groupTitle": "Upgrade"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Delete user (definitively)",
    "name": "DeleteUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;removeToken&quot;. Token has to be removed from client.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get user infos",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.login",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.registration_date",
            "description": "<p>Registration date (timestamp).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.double_auth",
            "description": "<p>2-factor authentication enabled?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"id\": 1,\n        \"login\": \"muonium\",\n        \"email\": \"muonium@muonium.ee\",\n        \"registration_date\": 1517233312,\n        \"double_auth\": true\n    },\n    \"message\": null,\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changeAuth",
    "title": "Enable/disable 2-factor authentication",
    "name": "PostChangeAuth",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "doubleAuth",
            "description": "<p>If true, enable 2-factor authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Updated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changeCek",
    "title": "Change CEK",
    "name": "PostChangeCek",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cek",
            "description": "<p>CEK.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;removeToken&quot;. Token has to be removed from client.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changeLogin",
    "title": "Change username",
    "name": "PostChangeLogin",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Username has been updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - loginExists": [
          {
            "group": "Error 400 - loginExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - loginExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;loginExists&quot;. Login already exists.</p>"
          }
        ],
        "Error 400 - loginFormat": [
          {
            "group": "Error 400 - loginFormat",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - loginFormat",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;loginFormat&quot;. Username format is incorrect (between 2 and 20 alphanumeric characters, -_. allowed).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changeMail",
    "title": "Change email",
    "name": "PostChangeMail",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email address.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Email has been updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - mailExists": [
          {
            "group": "Error 400 - mailExists",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - mailExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;mailExists&quot;. Email already exists.</p>"
          }
        ],
        "Error 400 - mailFormat": [
          {
            "group": "Error 400 - mailFormat",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - mailFormat",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;mailFormat&quot;. Email format is incorrect.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changePassword",
    "title": "Change password",
    "name": "PostChangePassword",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token (Authorization: Bearer).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_pwd",
            "description": "<p>Old password already hashed with mui_hash.js.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_pwd",
            "description": "<p>New password already hashed with mui_hash.js. You have to check length and if password confirm match in client side.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;removeToken&quot;. Token has to be removed from client.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - badOldPass": [
          {
            "group": "Error 400 - badOldPass",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current token.</p>"
          },
          {
            "group": "Error 400 - badOldPass",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;badOldPass&quot;. Old password does not match.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new account",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password already hashed with mui_hash.js. You have to check length and if password confirm match in client side.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cek",
            "description": "<p>CEK.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "doubleAuth",
            "description": "<p>If true, enable 2-factor authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;created&quot;.</p>"
          },
          {
            "group": "Created 201",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>UID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - loginExists": [
          {
            "group": "Error 400 - loginExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;loginExists&quot;. Login already exists.</p>"
          }
        ],
        "Error 400 - mailExists": [
          {
            "group": "Error 400 - mailExists",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;mailExists&quot;. Email already exists.</p>"
          }
        ],
        "Error 400 - loginFormat": [
          {
            "group": "Error 400 - loginFormat",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;loginFormat&quot;. Username format is incorrect (between 2 and 20 alphanumeric characters, -_. allowed).</p>"
          }
        ],
        "Error 400 - mailFormat": [
          {
            "group": "Error 400 - mailFormat",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;mailFormat&quot;. Email format is incorrect.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user.coffee",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/validate/key/:uid/:key",
    "title": "Validation with uid/key in URL",
    "name": "GetValidateKey",
    "group": "Validate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Validation key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - validated": [
          {
            "group": "Success 200 - validated",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;validated&quot;. Account is now validated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - differentKey": [
          {
            "group": "Error 400 - differentKey",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;differentKey&quot;. Validation key is different than key sent.</p>"
          }
        ],
        "Error 400 - alreadyValidated": [
          {
            "group": "Error 400 - alreadyValidated",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;alreadyValidated&quot;. This account is already validated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/validate.coffee",
    "groupTitle": "Validate"
  },
  {
    "type": "post",
    "url": "/validate/key",
    "title": "Validation with uid/key",
    "name": "PostValidateKey",
    "group": "Validate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Validation key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - validated": [
          {
            "group": "Success 200 - validated",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;validated&quot;. Account is now validated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - differentKey": [
          {
            "group": "Error 400 - differentKey",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;differentKey&quot;. Validation key is different than key sent.</p>"
          }
        ],
        "Error 400 - alreadyValidated": [
          {
            "group": "Error 400 - alreadyValidated",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;alreadyValidated&quot;. This account is already validated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/validate.coffee",
    "groupTitle": "Validate"
  },
  {
    "type": "post",
    "url": "/validate/mail",
    "title": "Send a validation mail",
    "name": "PostValidateMail",
    "group": "Validate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "uid",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200 - sent": [
          {
            "group": "Success 200 - sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;sent&quot;. Mail sent successfully.</p>"
          }
        ],
        "Success 200 - wait": [
          {
            "group": "Success 200 - wait",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;wait&quot;. Mail was not sent because a mail has been already sent recently.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400 - alreadyValidated": [
          {
            "group": "Error 400 - alreadyValidated",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;alreadyValidated&quot;. This account is already validated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/validate.coffee",
    "groupTitle": "Validate"
  }
] });
