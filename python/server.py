import urllib.request
import zipfile
import os, stat, errno, subprocess, socket

class Server:

    port = None

    def __init__(self):
        px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px.zip'
        px_server_package_path = '/Users/quiducle/Documents/Projects/px/python/px-server.zip'
        unzip_px_server_package_path = '/Users/quiducle/Documents/Projects/px/python/px-server'
        px_file_path = os.path.join(unzip_px_server_package_path, 'px')
        grpc_file_path = os.path.join(unzip_px_server_package_path, 'grpc_node.node')

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
            urllib.request.urlretrieve(px_server_package_download_url, px_server_package_path)

            print('Extracting px server package...')
            with zipfile.ZipFile(px_server_package_path, 'r') as zip_ref:
                zip_ref.extractall(unzip_px_server_package_path)

            try:
                print('Deleting px server package...')
                os.remove(px_server_package_path)
            except OSError:
                pass

            os.chmod(os.path.join(unzip_px_server_package_path, 'grpc_node.node'), 0o755)
            os.chmod(os.path.join(unzip_px_server_package_path, 'px'), 0o755)

        print('Starting px server...')
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(("",0))
        self.port = str(s.getsockname()[1])
        subprocess.call([px_file_path, self.port])
