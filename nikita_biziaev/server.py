# server.py
from http.server import BaseHTTPRequestHandler, HTTPServer
from datetime import datetime
# это мои тексты

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        timestamp = datetime.now().strftime('%d.%m.%Y %H:%M:%S')
        body = f'''<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Привет от Python</title>
  </head>
  <body>
    <h1>Добро пожаловать!</h1>
    <p>Эту страницу сгенерировал сервер на Python.</p>
    <p>Время на сервере: {timestamp}</p>
  </body>
</html>
'''

        self.send_response(200)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.end_headers()
        self.wfile.write(body.encode())


server = HTTPServer(('localhost', 8000), Handler)
print('Listening on localhost:8000')
server.serve_forever()

# run with `python server.py`
