# WebSocket demo

This is a simple demo having a REACT UI and two alternatively servers, one using NodeJS and another one in Python.

## Starting the NodeJS WebSocket server

```bash
cd server
npm install
npm start
```

## Starting the Python WebSocket server (python 3)

**NOTE** Run only one server each time

```bash
cd server_python
pip i -r requirements.txt
python main.py
```

## Starting the React UI

```bash
cd ui
npm install
npm run dev
```

## Testing it

1. Open the browser at http://localhost:5173
1. Notice the list of animals
1. Open the data.json file in the server project that you're running, remove one animal, wait some seconds and see it is updated in the screen.

**NOTE** to see the websocket working in the browser, open the devtools, go to network and filter by WS type...
