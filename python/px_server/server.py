import urllib.request
import zipfile
import os, stat, errno, subprocess, socket, platform
import logging
from pathlib import Path
import time

px_home_dir = os.path.join(Path.home(), '.px')

windows_px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px-windows.zip'

mac_px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px-mac.zip'

linux_px_server_package_download_url = 'https://datquach.s3.amazonaws.com/px-linux.zip'

default_px_server_package_path = os.path.join(px_home_dir, 'px-server')

default_os_name = platform.system()

def download_and_extract_px_server_package(os_name=None, version=None, px_server_package_path=None):
    if os_name is None:
        os_name = default_os_name

    if version is None:
        version = ''

    px_server_package_download_url = get_px_server_package_download_url(os_name=os_name, version=version)

    if px_server_package_path is None:
        px_server_package_path = default_px_server_package_path

    px_server_package_path = os.path.join(px_server_package_path, '{}{}'.format(os_name, version))
    px_server_executable_file_path = os.path.join(px_server_package_path, 'px')
    grpc_file_path = os.path.join(px_server_package_path, 'grpc_node.node')

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

    return px_server_executable_file_path

def get_px_server_package_download_url(os_name=None, version=None):
    if os_name is None:
        os_name = default_os_name

    if os_name == 'Windows':
        return windows_px_server_package_download_url
    elif os_name == 'Linux':
        return linux_px_server_package_download_url
    elif os_name == 'Darwin':
        return mac_px_server_package_download_url
    else:
        raise Exception('Unsupported OS: {}'.format(os_name))

class Server:

    port = None

    process = None

    px_server_executable_file_path = None

    def __init__(self):
        self.setup()
        self.start()

    def __del__(self):
        if self.process is not None:
            self.process.terminate()

    def setup(self):
        self.px_server_executable_file_path = download_and_extract_px_server_package()

    def start(self):
        logging.info('Starting px server...')

        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(("",0))
        self.port = s.getsockname()[1]
        self.process = subprocess.Popen([self.px_server_executable_file_path, str(self.port)])
        time.sleep(1)

        logging.info('Server process id {}'.format(self.process.pid))