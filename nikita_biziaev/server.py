# server.py
from http.server import BaseHTTPRequestHandler, HTTPServer
from datetime import datetime


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        timestamp = datetime.now().isoformat()
        body = 'Hello World from Python! \n' + timestamp + '\n'

        self.send_response(200)
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(body.encode())


server = HTTPServer(('localhost', 8000), Handler)
print('Listening on localhost:8000')
server.serve_forever()

# run with `python server.py`
