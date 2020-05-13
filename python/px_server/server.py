import urllib.request
import zipfile
import os, stat, errno, subprocess, socket, platform
import threading
from pathlib import Path
import logging

class Server:

    px_home_dir = os.path.join(Path.home(), '.px')

    windows_px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px-windows.zip'

    mac_px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px-mac.zip'

    linux_px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px-linux.zip'

    px_server_package_path = os.path.join(px_home_dir, 'px-server')

    port = None

    thread = None

    os_name = platform.system()

    def __init__(self):
        self.setup()
        self.start()

    def setup(self):
        self.download_and_extract_px_server_package()


    def download_and_extract_px_server_package(self, os_name=None, version=None, px_server_package_path=None):
        if os_name is None:
            os_name = self.os_name

        if px_server_package_path is None:
            px_server_package_path = self.px_server_package_path

        px_server_executable_file_path = os.path.join(px_server_package_path, 'px')
        grpc_file_path = os.path.join(px_server_package_path, 'grpc_node.node')
        px_server_package_download_url = self.get_px_server_package_download_url(os_name=os_name, version=version)

        if not os.path.exists(px_server_executable_file_path) or not os.path.exists(grpc_file_path):
            try:
                os.remove(grpc_file_path)
            except OSError as e:
                if e.errno != errno.ENOENT:
                    raise

            try:
                os.remove(px_server_executable_file_path)
            except OSError as e:
                if e.errno != errno.ENOENT:
                    raise

            logging.info('Downloading px server package...')
            file_name, header = urllib.request.urlretrieve(px_server_package_download_url)

            logging.info('Extracting px server package from {} to {}'.format(file_name, px_server_package_path))
            with zipfile.ZipFile(file_name, 'r') as zip_ref:
                zip_ref.extractall(px_server_package_path)

            try:
                logging.info('Deleting px server package...')
                os.remove(file_name)
            except OSError:
                pass

            os.chmod(grpc_file_path, 0o755)
            os.chmod(px_server_executable_file_path, 0o755)

    def get_px_server_package_download_url(self, os_name=None, version=None):
        if os_name is None:
            os_name = self.os_name

        if os_name == 'Windows':
            return self.windows_px_server_package_download_url
        elif os_name == 'Linux':
            return self.linux_px_server_package_download_url
        elif os_name == 'Darwin':
            return self.mac_px_server_package_download_url
        else:
            raise Exception('Unsupported OS: {}'.format(os_name))

    def stop(self):
        logging.info('Stopping px server...')

    def start(self):
        logging.info('Starting px server...')
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(("",0))
        self.port = s.getsockname()[1]
        px_server_executable_file_path = os.path.join(self.px_server_package_path, 'px')
        self.thread = threading.Thread(target=subprocess.call, args=[[px_server_executable_file_path, str(self.port)]], daemon=True)
        self.thread.start()
