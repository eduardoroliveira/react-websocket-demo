#!/usr/bin/env python
import asyncio
import json
import time

from websockets.server import serve


async def read_animals(websocket):
    content = {}
    while True:
        read_content = open(r"./data.json", "r").read()
        if read_content != content:
            content = read_content
            print(" will send data")
            await websocket.send(json.dumps(content))
        else:
            print("skipping sending data")
        await asyncio.sleep(10)


async def main():
    async with serve(read_animals, "localhost", 4646):
        print(" Starting server at localhost:4646")
        await asyncio.Future()  # run forever


if __name__ == "__main__":

    asyncio.run(main())
