#!/usr/bin/env python3
"""Local server for Quartz wiki — supports clean URLs (no .html extension needed)."""
import http.server
import socketserver
import os

PORT = 8888
DIRECTORY = os.path.join(os.path.dirname(__file__), "public")


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Strip query string for path resolution
        path = self.path.split("?")[0].split("#")[0]
        full = os.path.join(DIRECTORY, path.lstrip("/"))

        # Try exact path, then .html, then /index.html for directories
        if not os.path.exists(full):
            if os.path.exists(full + ".html"):
                self.path = path + ".html"
            elif os.path.exists(os.path.join(full, "index.html")):
                self.path = path + "/index.html"
            else:
                # Fall back to 404.html if it exists
                if os.path.exists(os.path.join(DIRECTORY, "404.html")):
                    self.path = "/404.html"

        super().do_GET()

    def log_message(self, format, *args):
        pass  # Suppress request logs


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
        print(f"Wiki running at http://localhost:{PORT}")
        httpd.serve_forever()
