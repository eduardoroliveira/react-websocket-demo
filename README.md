# WebSocket demo

Basically a websocket allows the backend system to push data to the frontend (web UI) and it is a really useful to prevent the UI to have to keep pulling the backend to see if something has changed...

This project is a simple demo having a REACT UI and two alternative servers, one using NodeJS and another one in Python to show that feature.

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
1. Open the devtools, go to network, filter by WS type and observe that the data is pushed from the backend to the browser only when there is some change (by executing the next step).
1. Execute the command `change-data.[sh|cmd] [1|2|3]` in the server project that you're running, to change the data to 1, 2 or 3 animals.
