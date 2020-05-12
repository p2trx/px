import urllib.request
import zipfile
import os, stat, errno, subprocess, socket
import threading
from pathlib import Path

class Server:

    px_home_dir = os.path.join(Path.home(), '.px')

    px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px.zip'

    unzip_px_server_package_path = os.path.join(px_home_dir, 'px-server')

    px_file_path = os.path.join(unzip_px_server_package_path, 'px')

    grpc_file_path = os.path.join(unzip_px_server_package_path, 'grpc_node.node')

    port = None

    thread = None

    def __init__(self):
        self.setup()
        self.start()

    def setup(self):
        px_server_package_download_url = self.px_server_package_download_url
        unzip_px_server_package_path = self.unzip_px_server_package_path
        px_file_path = self.px_file_path
        grpc_file_path = self.grpc_file_path

        if not os.path.exists(px_file_path) or not os.path.exists(grpc_file_path):
            try:
                os.remove(os.path.join(unzip_px_server_package_path, 'grpc_node.node'))
            except OSError as e:
                if e.errno != errno.ENOENT:
                    raise

            try:
                os.remove(os.path.join(unzip_px_server_package_path, 'px'))
            except OSError as e:
                if e.errno != errno.ENOENT:
                    raise

            print('Downloading px server package...')
            file_name, header = urllib.request.urlretrieve(px_server_package_download_url)

            print('Extracting px server package...')
            with zipfile.ZipFile(file_name, 'r') as zip_ref:
                zip_ref.extractall(unzip_px_server_package_path)

            try:
                print('Deleting px server package...')
                os.remove(file_name)
            except OSError:
                pass

            os.chmod(os.path.join(unzip_px_server_package_path, 'grpc_node.node'), 0o755)
            os.chmod(os.path.join(unzip_px_server_package_path, 'px'), 0o755)

    def stop(self):
        print('Stopping px server...')

    def start(self):
        print('Starting px server...')
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(("",0))
        self.port = s.getsockname()[1]
        self.thread = threading.Thread(target=subprocess.call, args=[[self.px_file_path, str(self.port)]], daemon=True)
        self.thread.start()
